import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILED } from '../constatns/Page'

let photosArr = [];
let cached = false;

function filterYearPhotos(photos, selectedYear) {
    let createdYear,
        yearPhotos = [];

    photos.forEach((photo) => {
        createdYear = new Date(photo.created * 1000).getFullYear();
        if (selectedYear === createdYear) {
            yearPhotos.push(photo);
        }
    });
    yearPhotos.sort((a, b) => b.likes.count - a.likes.count);
    return yearPhotos;
}

function loadPhotos(offset, count, year, dispatch) {
    let requestConfig = {
        extended: 1,
        count: count,
        offset: offset
    };

    VK.Api.call('photos.getAll', requestConfig, (response) => {     //eslint-disable-line no-undef
        try {
            if (offset <= response.response[0] - count) {
                offset += 200;
                photosArr = photosArr.concat(response.response);
                loadPhotos(offset, count, year, dispatch);
            } else {
                let photos = filterYearPhotos(photosArr, year);
                cached = true;
                dispatch({
                    type: GET_PHOTOS_SUCCESS,
                    payload: photos
                });
            }
        } catch (error) {
            dispatch({
                type: GET_PHOTOS_FAILED,
                payload: new Error(error),
                error: true
            });
        }
    });
}

export function getPhotos(year) {
    return (dispatch) => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year
        });

        if (cached) {
            let photos = filterYearPhotos(photosArr, year);
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: photos
            });
        } else {
            loadPhotos(0, 200, year, dispatch)
        }
    }
}