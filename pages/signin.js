/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useContext, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Cookie from 'js-cookie'
import { DataContext } from '@/store/GlobalState'
import { postData } from '@/utils/dataFetch'
import { useRouter } from 'next/router'


const signin = () => {

  const initialisationState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialisationState)
  const { email, password } = userData
  const {state, dispatch} = useContext(DataContext)
  
  const { auth } = state

  const router = useRouter()

  const handleChangeinput = e => {
    const {name, value} = e.target
    setUserData({...userData, [name]:value})
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch ({ type: 'NOTIFY', payload: {loading: true} })
  
    const res = await postData('auth/login', userData)

    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })
    dispatch({ type: 'NOTIFY', payload: {success: res.msg} })

    dispatch({ type: 'AUTH', payload: {
      token: res.access_token,
      user: res.user
    }})

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('firstLogin', true)
  }

  useEffect(() => {
    if(Object.keys(auth).length !== 0) router.push("/")
  }, [auth])

  return (
    <div className='px-3'>
        <Head>
          <title>Sign in Page</title>
        </Head>

        <form className="mx-auto my-4" style={{maxWidth: '500px'}} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="email" value={email} onChange={handleChangeinput} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"
            name="password" value={password} onChange={handleChangeinput}/>
          </div>
          
          <button type="submit" className="btn btn-dark w-100">Login</button>

          <p className="my-2">
            You don't have an account? <Link href="/register" legacyBehavior><a style={{color: 'crimson'}}>Register Now</a></Link>
          </p>
        </form>
      </div>
  )
}

export default signin