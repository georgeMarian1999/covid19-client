import React, { Component } from 'react'
import LandingPageFC from './Components/LandingPageFC'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export class LandingPage extends Component {
    render() {
        return (
            <>
            <Header></Header>
            <LandingPageFC></LandingPageFC>
            <Footer></Footer>
            </>
        )
    }
}

export default LandingPage
