import React, { Component } from 'react'
import LandingPageFC from './Components/LandingPageFC'
import axios from 'axios'


export class LandingPage extends Component {

    state = {
        symptomes : [],
        news: []
    }

    getData = async () => {
        axios.get('http://localhost:5000/symptomes').then(res => {
            this.setState({symptomes: res.data})
        })
        .catch(err => console.log(err))

        axios.get('http://localhost:5000/news').then(res => {
            this.setState({news: res.data});
            
        })
        .catch(err => console.log(err))


    }
    
    componentDidMount = () => {
        this.getData();      
    }

    
    render() {
        const {symptomes, news} = this.state;
        return (
            <>
            
            <LandingPageFC symptomes={symptomes} news={news}></LandingPageFC>
           
            </>
        )
    }
}

export default LandingPage
