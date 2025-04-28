"use client"

import React from 'react'
import { AppBarUser } from './AppBarUser'
import { AppBarNotifications } from './AppBarNotifications'

const AppBar = () => {
    


    return (
        <nav className='appbar'>

            <div className="appbar__container">
                <h1 className='!font-extrabold italic !text-2xl'>Ariol CRM</h1>
                <div className='flex items-center gap-6'>
                    <AppBarNotifications/>
                    <AppBarUser/>
                </div>
            </div>
        </nav>
    )
}

export default AppBar