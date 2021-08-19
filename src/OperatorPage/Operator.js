import axios from 'axios'
import React, { Component } from 'react'
import Operator1 from './Components/Operator1'

export class Operator extends Component {
    state = {
        daily : null
    }

    getData = async() => {
        const res = await axios.get('http://localhost:5000/daily');
        this.setState({daily: res.data});

    }
    
    componentDidMount = () => {
        this.getData();      

    }

    render() {
        const {daily} = this.state;
      
        if(daily!==null)
        return (
            <div>
               <Operator1 daily={daily}></Operator1>
            </div>
        )

        return(<></>)
    }
}

export default Operator
