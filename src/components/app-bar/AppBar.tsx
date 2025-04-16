import React from 'react'
import { AppBarUser } from './AppBarUser'
import { AppBarNotifications } from './AppBarNotifications'
import { getUser } from '@/modules/auth/actions/get-user';

export const AppBar = async () => {
    const user = await getUser();

    return (
        <nav className='appbar'>

            <div className="flex justify-between items-center container">
                <h1>Ariol CRM</h1>
                <div className='flex items-center gap-2'>
                    <AppBarNotifications/>
                    <AppBarUser user={ user }/>
                </div>
            </div>

            

        </nav>
    )
}
