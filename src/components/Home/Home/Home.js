import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
// import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Team from '../Team/Team';
// import Header from '../Shared/Header/Header';
// import About from '../About/About';
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Team></Team>
            <About></About>
            {/* <Doctors></Doctors>
            <About></About> */}
        </div>
    );
};

export default Home;