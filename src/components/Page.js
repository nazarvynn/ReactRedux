import React, { Component, PropTypes } from 'react'

class Page extends Component {
    onClickYearBtn(event) {
        let year = +event.target.innerText;
        this.props.setYear(year);
    }
    render() {
        const { year, photos } = this.props;

        return <div className="ib page">
            <p>
                <button className="btn" onClick={::this.onClickYearBtn}>2016</button>
                <button className="btn" onClick={::this.onClickYearBtn}>2015</button>
                <button className="btn" onClick={::this.onClickYearBtn}>2014</button>
            </p>
            <h3>{year} year</h3>
            <p>You have {photos.length} photos</p>
        </div>;
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
};

export default Page;