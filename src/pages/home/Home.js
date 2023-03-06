import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/navbar/Navbar'
import { getMyInfo } from '../../redux/slices/appConfigSlice'

export default function Home() {

  const dispatch = useDispatch()
    useEffect(()=> {
      dispatch(getMyInfo())
    }, [])

  return (
    <div>
        <Navbar/>
        <div className="outlet" style={{marginTop: '60px'}}>
          <Outlet/>
        </div>
    </div>
  )
}
