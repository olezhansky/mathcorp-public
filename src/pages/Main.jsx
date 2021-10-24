import React from 'react'
import About from '../containers/About/About';
import Feedback from '../containers/Feedback/Feedback';
import HowJoin from '../containers/HowJoin/HowJoin';
import Price from '../containers/Price/Price';
import Reviews from '../containers/Reviews/Reviews';
import TeachersContainer from '../containers/TeachersContainer/TeachersContainer';
import Why from '../containers/Why/Why';

const Main = () => {
    return (
        <div style={{overflow: 'hidden'}}>
            <About />
            <Why />
            <HowJoin />
            <Price />
            <TeachersContainer/>
            <Reviews />
            <Feedback />
        </div>
    )
}

export default Main
