import React from 'react'
import { AppBarUser } from './AppBarUser'
import { AppBarNotifications } from './AppBarNotifications'

export const AppBar = () => {
    return (
        <nav className='appbar'>

            <div className="flex justify-between items-center container">
                <h1>Ariol CRM</h1>
                <div className='flex items-center gap-2'>
                    <AppBarNotifications/>
                    <AppBarUser/>
                </div>
            </div>

            

        </nav>
    )
}
