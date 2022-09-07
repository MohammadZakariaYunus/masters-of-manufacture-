import React from 'react';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import Feature from '../Feature/Feature';
import NotFound from '../NotFound/NotFound';
import Reviews from '../Reviews/Reviews';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Summary></Summary> */}
            <Services></Services>
            <Reviews></Reviews>
            <Feature></Feature>
            <FAQ></FAQ>
            <Contact></Contact>
            {/* <NotFound></NotFound> */}

        </div>
    );
};

export default Home;