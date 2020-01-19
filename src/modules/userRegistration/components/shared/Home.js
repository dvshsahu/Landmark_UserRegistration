import React, { Fragment } from 'react';
import RegistrationForm from '../RegistationForm';
import Footer from './Footer';

const Home = () => {
    return (
        <Fragment>
            <RegistrationForm></RegistrationForm>
            {/* footer section */}
            <Footer></Footer>
        </Fragment>
    )
}

export default Home;