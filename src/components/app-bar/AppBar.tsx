"use client"

import React from 'react'
import { AppBarUser } from './AppBarUser'
import { AppBarNotifications } from './AppBarNotifications'
import { getUser } from '@/modules/auth/actions/get-user';
import { useState } from 'react';
import { User } from '@/modules/auth/interfaces/user.interface';

const AppBar = () => {
    
    const [user, setUser] = useState<User>({} as User);

    const fetchUser = async () => {
        const userData = await getUser();
        setUser(userData);
    }

    React.useEffect(() => {
        fetchUser();
    }, []);

    return (
        <nav className='appbar'>

            <div className="flex justify-between items-center container">
                <h1 className='!font-extrabold italic !text-2xl'>Ariol CRM</h1>
                <div className='flex items-center gap-6'>
                    <AppBarNotifications/>
                    <AppBarUser user={ user }/>
                </div>
            </div>
        </nav>
    )
}

export default AppBar