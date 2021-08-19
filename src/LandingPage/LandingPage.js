import React, { Component } from 'react'
import LandingPageFC from './Components/LandingPageFC'
import axios from 'axios'
import ONLINE_URL from "../Common/ONLINE_URL";


export class LandingPage extends Component {

    state = {
        symptomes : [],
        news: []
    }

    getData = async () => {
        axios.get(ONLINE_URL+'symptomes').then(res => {
            this.setState({symptomes: res.data})
        })
        .catch(err => console.log(err))

        axios.get(ONLINE_URL+'news').then(res => {
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
            
            <LandingPageFC symptomes={symptomes} news={news}/>
           
            </>
        )
    }
}

export default LandingPage
