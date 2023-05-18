/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import valid from '../utils/valid'
import { DataContext } from '@/store/GlobalState'
import { postData } from '@/utils/dataFetch'

const register = () => {

  const initialisationState = { name: '', email: '', password: '', confirmPassword: '' }
  const [userData, setUserData] = useState(initialisationState)
  const {name, email, password, confirmPassword} = userData
  const {state, dispatch} = useContext(DataContext)

  const handleChangeinput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errMsg = valid(name, email, password, confirmPassword)
    if(errMsg) return dispatch({ type: 'NOTIFY', payload: {error: errMsg} })
    dispatch ({ type: 'NOTIFY', payload: {loading: true} })
    //Add data to DB
    const res = await postData('auth/register', userData)
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    return dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
  }

  return (
    <div>
    <Head>
      <title>Register Page</title>
    </Head>

    <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name"
        name="name" value={name} onChange={handleChangeinput}/>
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        name="email"  value={email} onChange={handleChangeinput}/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"
        name="password"  value={password} onChange={handleChangeinput}/>
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputPassword2">Confirm Password</label>
        <input type="password" className="form-control" id="exampleInputPassword2"
        name="confirmPassword" value={confirmPassword} onChange={handleChangeinput}/>
      </div>
      
      <button type="submit" className="btn btn-dark w-100">Register</button>

      <p className="my-2">
        Already have an account? <Link href="/signin" legacyBehavior><a style={{color: 'crimson'}}>Login Now</a></Link>
      </p>
    </form>
  </div>
  )
}

export default register