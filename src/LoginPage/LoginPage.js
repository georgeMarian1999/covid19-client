import React from 'react';
import LoginForm from "./Components/LoginForm";
import axios from 'axios';

class LoginPage  extends React.Component {
    state = {
        form:{
            username: '',
            password: ''
        },
        loading : false,
        error : ''
    }
    onSubmit(e) {
        this.setState({
            loading:true
        })
        e.preventDefault();
        const data = {
            "username": this.state.form.username,
            "password": this.state.form.password
        };
        const localURL = 'http://localhost:5000/login';
        const onlineURL = 'https://covid19-info-internship.herokuapp.com/login';
        axios.post(onlineURL,data)
            .then((res)=> {
                this.stopLoading();
                const location = '/'+res.data.type+'board';
                console.log(location);
                window.location.replace(location);
            })
            .catch((error)=> {
                this.stopLoading();
                if(error.response){
                    this.setState({
                        error:error.response.data
                    })
                    alert(error.response.data);
                }

            });
    }
    stopLoading() {
        this.setState({
                loading:false
            })
    }
    handleChange(e) {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        const {form} = this.state;
        const {loading} = this.state;
        return(
            <>
                <LoginForm
                    handleChange={this.handleChange}
                    onSubmit={this.onSubmit}
                    loading={loading}
                    values={form}/>
            </>
        )
    }
}

export default LoginPage;