import React from 'react';
import './Team.css';
import pic1 from '../../../images/pic12.jpg';
import pic2 from '../../../images/pic9.jpg';
import pic3 from '../../../images/pic10.jpg';
import pic4 from '../../../images/pic11.jpg';

const Team = () => {
    return (
        <div id="team" className="mb-3">
            <h2 id="services" className="tittle-text my-5">Meet Our<span className="span-color"> Team</span></h2>
            <div className="team-container container">
                <div className="service my-card">
                    <div className="img-wrapper">
                        <img src={pic1} alt="" height="304" className="my-card-img" />
                    </div>
                    <div className="card-body-wrapper">
                        <div className="card-txt">
                            <h4 className="span-color">Lwis Anne</h4>
                            <h5>Chief Executive Officer</h5>
                        </div>
                        <div className="iconbar my-2">
                            <i className="fab fa-facebook-f "></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-google-plus-g"></i>
                        </div>
                    </div>
                </div>
                <div className="service my-card">
                    <div className="img-wrapper">
                        <img src={pic2} alt="" height="304" className="my-card-img" />
                    </div>
                    <div className="card-body-wrapper">
                        <div className="card-txt">
                            <h4 className="span-color">John Doe</h4>
                            <h5>Agency Manager</h5>
                        </div>
                        <div className="iconbar my-2">
                            <i className="fab fa-facebook-f "></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-google-plus-g"></i>
                        </div>
                    </div>
                </div>
                <div className="service my-card">
                    <div className="img-wrapper">
                        <img src={pic3} alt="" height="304" className="my-card-img" />
                    </div>
                    <div className="card-body-wrapper">
                        <div className="card-txt">
                            <h4 className="span-color">Juliana</h4>
                            <h5>Tour Operator</h5>
                        </div>
                        <div className="iconbar my-2">
                            <i className="fab fa-facebook-f "></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-google-plus-g"></i>
                        </div>
                    </div>
                </div>
                <div className="service my-card">
                    <div className="img-wrapper">
                        <img src={pic4} alt="" height="304" className="my-card-img" />
                    </div>
                    <div className="card-body-wrapper">
                        <div className="card-txt">
                            <h4 className="span-color">Percy</h4>
                            <h5>Tour Operator</h5>
                        </div>
                        <div className="iconbar my-2">
                            <i className="fab fa-facebook-f "></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-google-plus-g"></i>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Team;