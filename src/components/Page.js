import React, { Component, PropTypes } from 'react'

class Page extends Component {
    onClickYearBtn(event) {
        let year = +event.target.innerText;
        this.props.getPhotos(year);
    }
    render() {
        const { year, photos, loading, error } = this.props;
        const years = [2016, 2015, 2014, 2013, 2012, 2011, 2010];

        return <div className="ib page">
            <p>
                {years.map((year, index)=> <button className='btn' key={index} onClick={::this.onClickYearBtn}>{year}</button>)}
            </p>
            <h3>{year} year [{photos.length}]</h3>
            {error ? <p className='error'>Error: {error}</p> : ''}
            {loading ? <p>loading...</p> : photos.map((photo, index) => <div key={index} className='photo'><p><img src={photo.src} /></p><p>{photo.likes.count} ❤</p></div>)}
        </div>;
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};

export default Page;