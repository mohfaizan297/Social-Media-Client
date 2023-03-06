import React from 'react'
import userImg from '../../assets/user.png'
import './Avatar.scss'
export default function Avatar({src}) {
  return (
    <div className='Avatar'>
        <img src={src? src: userImg} alt="User Avatar" />
    </div>
  )
}
