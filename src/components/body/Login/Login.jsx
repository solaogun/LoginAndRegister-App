import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { dispatchLogin } from '../../../redux/action/authAction'
import axios from 'axios'

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

function Login() {
    const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()

    const { email, password, err, success } = user

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, err: '', success: '' })
    }

    const handleSubmit = async e => {
        try {
            const res = await axios.post('/users/login', { email, password })
            setUser({ ...user, err: '', success: res.data.msg })
            dispatch(dispatchLogin())
            console.log(res.data)
        } catch (err) {
            err.response.data.msg && setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    return (
        <div className='width: 60% margin: 1rem colors.coolGray margin: auto' >
            <h2 className='text-transform: uppercase font-size: 2rem line-height:2rem mt-8 mb-8 text-gray font-bold'
            >Login Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Username" className='mr-4 text-transform: uppercase'>Email</label>
                    <input type="text" placeholder='Enter your email' id='email' value={email} name='email' className='w-1/2 h-12 mt-8 mb-8 border-solid border-2 pr-6 pl-6 outline-none' onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="Password" className='mr-4 text-transform: uppercase'>Password</label>
                    <input type="password" placeholder='Enter your password' id='password' value={password} name='password' className='w-1/2 h-12 border-solid border-2 mt-8 mb-8 pr-6 pl-6 outline-none' onChange={handleChangeInput} />
                </div>
                {/* <div>
                    <button type='submit'>Login</button> */}
                {/* <Link to='/forgot_password'>Forgot Password?</Link> */}
                {/* <button type='submit'>Forgot Password</button>
                </div> */}
                <div className='display: flex items-center justify-between '>

                    <button type='submit' className='w-96 ml-96 pt-8 pb-8 text-transform: uppercase bg-black text-white ml-48'>Login</button>

                    {/* <h5>or</h5> */}

                    <Link to="forgot_password" className='w-96 mr-96 pt-8 pb-8 text-transform: uppercase mr-96'>Forgot your password?</Link>
                </div>
            </form>
            <p className='mt-8 mb-8 text-lg'>New Customer ? <Link to='/register'>Register</Link></p>
        </div>



    )
}

export default Login
