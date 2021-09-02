import React from 'react'
import Addresses from './Addresses'
import UserItem from './UserItem'


const Users = ({users, changeStateOfAddress, showAddresses}) => {

    const handleAddressStateChange = () => {
        changeStateOfAddress()
    }

    if(showAddresses) {
        return (
        <div>
            <button onClick={handleAddressStateChange}>Show Addresses</button>
            {users.map(user => (
            <UserItem
            key={user.id} 
            user={user}
            showAddresses={showAddresses}
            />
            ))}
        </div>
        )
    }

    return (
        <div>
            <button onClick={handleAddressStateChange}>Show Addresses</button>
            {users.map(user => (
            <UserItem
            key={user.id} 
            user={user}
            />
            ))}
        </div>
    )
}

export default Users;