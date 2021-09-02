import React, {Fragment} from 'react';


const UserItem = ({user, showAddresses}) => {

    if(showAddresses) {
        return (
            <Fragment>
                <h1>{user.name}</h1>
                <p>{user.username}</p>
                <p>{user.email}</p>
                <h1>Address</h1>
                <p>{user.address.street}</p>
                <p>{user.address.city}</p>
            </Fragment>
        )
    }

    return (
        <Fragment>
        <h1>{user.name}</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
        </Fragment>
    )
}

export default UserItem;