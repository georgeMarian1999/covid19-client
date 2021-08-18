import React, {useEffect, useState} from 'react';
import style from './LoginForm.module.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import {CircularProgress} from "@material-ui/core";
const LoginForm = ({loading,onSubmit,handleChange,values}) => {
    const [disabled,setDisabled] = useState(true);

    useEffect(()=>{
        if(values.username !== '' && values.password !== ''){
            setDisabled(false);
        }
        else setDisabled(true);
    },[values])
  return(
      <div className={style.formPage}>
        <form onSubmit={onSubmit} className={style.form}>
            <div className={style.imageWrapper}>
                <img
                    src={'http://localhost:3000/whologo.png'}
                    alt={'who'}
                />
            </div>
            <div className={style.inputWrapper}>
                <div className={style.placeholderIcon}>
                    <AccountCircleIcon/>
                </div>
                <input
                    type={'text'}
                    placeholder={'| Username'}
                    value={values.username}
                    name={'username'}
                    onChange={handleChange}
                />
            </div>
            <div className={style.inputWrapper}>
                <div className={style.placeholderIcon}>
                    <LockIcon/>
                </div>
                <input
                    type={'password'}
                    placeholder={'| Password'}
                    value={values.password}
                    name={'password'}
                    onChange={handleChange}
                />
            </div>
            <div className={style.inputWrapper+' '+style.buttonWrapper}>
                <input
                    className={style.button+' '+style.enabled +' '+(style.disabled && disabled)}
                    disabled={disabled}
                    type={'submit'}
                    value={'LOGIN'}
                />
                {loading && <CircularProgress/>}
            </div>
        </form>
      </div>
  )
}

export default LoginForm;
