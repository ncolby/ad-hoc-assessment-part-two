import React, {Fragment} from 'react';



const Addresses = ({user}) => {
    return (
        <Fragment>
            <h1>Addresses</h1>
            <p>{user.address.street}</p>
            <p>{user.address.city}</p>
        </Fragment>
        )
}

export default Addresses;