import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/slider2.jpg';
import banner2 from '../../../images/slider9.jpg';
import banner3 from '../../../images/beach4.jpg';
import banner4 from '../../../images/slider5.jpg';
import banner5 from '../../../images/about.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 my-height"
                        src={banner4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fs-1">To Travel is to Live!</h3>
                        <p className="fs-4">Better to see something once than hear about it a thousand times</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 my-height"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fs-1">To Travel is to Live!</h3>
                        <p className="fs-4">Better to see something once than hear about it a thousand times</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 my-height"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fs-1">To Travel is to Live!</h3>
                        <p className="fs-4">Better to see something once than hear about it a thousand times</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 my-height"
                        src={banner1}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fs-1">To Travel is to Live!</h3>
                        <p className="fs-4">Better to see something once than hear about it a thousand times</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 my-height"
                        src={banner5}
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fs-1">To Travel is to Live!</h3>
                        <p className="fs-4">Better to see something once than hear about it a thousand times</p>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;