import React from 'react';
// import { NavLink } from 'react-router-dom';
import './ListingItem.css';

function ListingItem() {
    return (
        <div className="listing-item">
            <img className="listing-img" src="https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='picgit ' />
            <div className="listing-details">
                <div className="listing-categories">
                    <span className="listing-category">Buy</span>
                    <span className="listing-category">Sell</span>
                </div>
                <span className="listing-title">Awesome property</span>
                <hr />
                <span className="listing-time">2 days ago</span>
            </div>
            <p className="listing-description">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
        </div>
    )
}

export default ListingItem



// Student Name: Ademola Jegede,
// Student ID: 2122998,
// course: Web Technologies