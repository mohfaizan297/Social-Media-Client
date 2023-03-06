import React from 'react'
import './Navbar.scss'
import { useNavigate } from 'react-router-dom'
import Avatar from '../avatar/Avatar'
import { AiOutlineLogout } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { axiosClient } from '../../utils/axiosClient'
import { KEY_ACCESS_TOKEN, removeItem } from '../../utils/localStorageManager'

export default function Navbar() {
    const myProfile = useSelector(state => state.appConfigReducer?.myProfile)
    
    async function handleLogoutclicked(){
        try {
            await axiosClient.post('/auth/logout')
            removeItem(KEY_ACCESS_TOKEN)
            navigate('/login')

        } catch (e) {
            console.log(e.message)
        }
    }
    
    const navigate = useNavigate()

  return (
    <div className='Navbar'> 
    
        <div className="container">
            <h2 className="banner hover-link" onClick={()=> navigate('/')}>Social Media</h2>
            <div className="right-side">
                <div className="profile hover-link" onClick={()=> navigate(`/profile/${myProfile?._id}`)}>
                    <Avatar src={myProfile?.avatar?.url}/>
                </div>
                <div className="logout hover-link" onClick={handleLogoutclicked}>
                    <AiOutlineLogout/>
                </div>
            </div>
        </div>
    </div>
  )
}
