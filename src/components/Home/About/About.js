import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../images/Aboutt.png';

import './About.css'

const About = () => {
    return (
        <div id="about" className="mb-3 container">
            <h2 id="services" className="tittle-text my-5">About<span className="span-color"> Us</span></h2>
            <div className="">
                <div className=" about-img">
                    <img src={image} alt="" />
                </div>
                <div className=" ">
                    <h3 className="span-color mt-5">Who We Are</h3>
                    <p className="text-start">Welcome to the Travel World, the most experienced and well-equipped tour operator in Bangladesh. When a mind gets tired of the mechanized life, it wants some relief from the bondage of that life. The tired soul seeks something to refresh itself to get started as new. Only the smooth touch of nature can give the soul that freshness it seeks. So, when a man or woman wants to be or needs to get refreshed, he or she changes his/her regular place and looks for something different, something natural on any other part of the earth. We provide that freshness to you, we take you to those places on the earth where your soul wants to go to purify itself. So we are here, to serve your adventurous, nature-loving and beauty-haunting soul ad to take you to the lap of nature and beauty. We are passionate about travel – and we want you to be too. Having many years of combined experience, we have explored many regions of the world, a wide range of destinations in and around Bangladesh and discovered what makes each location unique, authentic and unforgettable. It is all about experience! Memories, friendships and appreciation of the world around us. Anyone can be a tourist, but Royal Tours Bangladesh will show you how to be a true traveler. We provide detailed and up to date travel information, tailor-made itineraries and reliable logistics services including knowledgeable multi-lingual guides, transport & accommodation facilities. Our services and facilities are developed in collaboration with local communities and in harmony with the environment. We welcome travelers from around the world. Our services include package trips to many exciting and attractive destinations all over Bangladesh, logistics support for your individual travel needs as well as experienced guides. Please take a closer look at our services and offers and contact us for any further information. Come with us and discover the hidden beauty of Bangladesh. We look forward to serving you! We are a company that cares for clients!</p>
                    <button className="my-btn">Learn More</button>
                </div>

            </div>
        </div>
    );
};

export default About;