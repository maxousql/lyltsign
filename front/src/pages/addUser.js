import React, { useEffect } from 'react';
import Navbar from '../components/navBar';

import { usersService } from '../services/usersService';

const AddUser = () => {
    useEffect(() => {
        usersService.getAllUsers()
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    })

    return (
        <div>
            <Navbar />
        </div>
    );
};

export default AddUser;