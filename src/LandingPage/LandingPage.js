import React, { Component } from 'react'
import LandingPageFC from './Components/LandingPageFC'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import axios from 'axios'


export class LandingPage extends Component {

    state = {
        symptomes : []
    }

    getData = async () => {
        axios.get('http://localhost:5000/symptomes').then(res => {
            this.setState({symptomes: res.data})
        })
        .catch(err => console.log(err))

    }
    
    componentDidMount = () => {
        this.getData();
    }

    
    render() {
        const {symptomes} = this.state;
        return (
            <>
            <Header></Header>
            <LandingPageFC symptomes= {symptomes}></LandingPageFC>
            <Footer></Footer>
            </>
        )
    }
}

export default LandingPage
