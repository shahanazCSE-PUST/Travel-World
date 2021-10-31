import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <div className="text-white pb-2 pt-5 my-footer">
            <div className="my-grid ps-5">
                <div className="ps-5 text-start grid-item">
                    <h3 className="">Latest News</h3>
                    <div>
                        <li>Latest Travel And Tourism News.</li>
                        <li>Vacation Packages News.</li>
                        <li>Business Travel News.</li>
                        <li>Tour Operator News.</li>

                    </div>
                </div>
                <div className=" text-start ps-5 grid-item">
                    <h3>Categories</h3>
                    <div>
                        <li>Domestic Travel.</li>
                        <li>Foreign Travel.</li>
                        <li>Short Date Tour.</li>
                        <li>Long Date Tour.</li>
                    </div>
                </div>
                <div className="text-start ps-5">
                    <h3>Quick <span>Contact</span></h3>
                    <div>
                        <li> Phone: +1309948555 </li>
                        <li> Email: Worldtravel@gmail.com </li>
                        <li> Wed: www.WorldTravel.com</li>
                        <li> Fax: (123) 123-4567</li>
                    </div>
                </div>
            </div>
            <div className="py-3">
                <h4 className="mb-3">Keep Updated</h4>
                <div className="icon mt-2">
                    <i className="fab fa-facebook-f" ></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-google-plus-g"></i>
                </div>
            </div>
            <p className="text-center">&reg; 2021 All rights reserved</p>
        </div>
    );
};

export default Footer;