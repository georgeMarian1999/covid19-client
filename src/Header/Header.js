import React, { Component } from 'react'
import HeaderFC from './Components/HeaderFC'


export default class Header extends Component {
    render() {
        const user = JSON.parse(sessionStorage.getItem('crtUser'));
        return (

            <HeaderFC user={user}></HeaderFC>
        )
    }
}
