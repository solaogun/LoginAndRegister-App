import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const initialState = {
    username: '',
    password: '',
    surname: '',
    otherNames: '',
    phoneNumber: '',
    email: '',
    homeAddress: '',
    dateOfBirth: '',
    err: '',
    success: ''

}

function Register() {
    const [user, setUser] = useState(initialState)

    const { username, password, surname, otherNames, phoneNumber, email, homeAddress, dateOfBirth, err, success } = user

    const handleChangeInput = e => {
        const { name, value } = e.target
        console.log(name, value, "Mr Samwul")
        setUser({ ...user, [name]: value, err: '', success: '' })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post("/users/register", { username, password, surname, otherNames, phoneNumber, email, homeAddress, dateOfBirth })
            setUser({ ...user, err: '', success: res.data.msg })
            console.log(res.data, "live is good")
        } catch (err) {
            err.response.data.msg && setUser({ ...user, err: err, success: '' })
            console.log(err, "react master")
        }
    }
    return (
        <div className='register'>
            <h2 className='text-transform: uppercase font-size: 2rem line-height:2rem mt-8 mb-8 text-gray font-bold'>Create an account</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Username" className='mr-4 text-transform: uppercase'>Username</label>
                    <input type="text" placeholder='Username' id='username' value={username} name='username' className='w-1/2 h-12 mt-8 mb-8 border-solid border-2 pr-6 pl-6 outline-none' onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="Password" className='mr-4 text-transform: uppercase'>Password</label>
                    <input type="password" placeholder='password' id='password' value={password} name='password' className='w-1/2 h-12 mt-8 mb-8 border-solid border-2 pr-6 pl-6 outline-none' onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="Surname" className='mr-4 text-transform: uppercase'>Surname</label>
                    <input type="text" placeholder='surname' id='surname' value={surname} name='surname' className='w-1/2 h-12 mt-8 mb-8 border-solid border-2 pr-6 pl-6 outline-none' onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="Othernames" className='mr-4 text-transform: uppercase'>Other Names</label>
                    <input type="text" placeholder='Other Names' id='otherNames' value={otherNames} name='otherNames' className='w-1/2 h-12 mt-8 mb-8 border-solid border-2 pr-6 pl-6 outline-none' onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="Phone number" className='mr-4 text-transform: uppercase'>Phone Number</label>
                    <input type="number" placeholder='Phone Number' id='phoneNumber' value={phoneNumber} name='phoneNumber' className='w-1/2 h-12 mt-8 mb-8 border-solid border-2 pr-6 pl-6 outline-none' onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="Email Address" className='mr-4 text-transform: uppercase'>Email Address</label>
                    <input type="text" placeholder='Email Address' id='email' value={email} name='email' className='w-1/2 h-12 mt-8 mb-8 border-solid border-2 pr-6 pl-6 outline-none' onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="Home Address" className='mr-4 text-transform: uppercase'>Home Address</label>
                    <input type="text" placeholder='Home Address' id='homeAddress' value={homeAddress} name='homeAddress' className='w-1/2 h-12 mt-8 mb-8 border-solid border-2 pr-6 pl-6 outline-none' onChange={handleChangeInput} />
                </div>
                <div>
                    <label htmlFor="Date of birth" className='mr-4 text-transform: uppercase'>Date of Birth</label>
                    <input type="text" placeholder='Date of Birth' id='DateOfBirth' value={dateOfBirth} name='dateOfBirth' className='w-1/2 h-12 mt-8 mb-8 border-solid border-2 pr-6 pl-6 outline-none' onChange={handleChangeInput} />
                </div >
                <div>
                    <button type='submit' className='w-96 ml-96 pt-8 pb-8 text-transform: uppercase bg-black text-white ml-48'>Register</button>
                </div>
            </form>
            <p>Already have account ? <Link to='/login'>Login</Link></p>
        </div>
    )
}

export default Register
