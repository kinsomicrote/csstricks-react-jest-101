import React from 'react';

const cardWidth = {
    width: '20rem'
}

const Profile = ({user}) => {
    return (
        <React.Fragment>
            <div key={user.username} className="card" style={cardWidth}>
                <p>{user.name}</p>
                <div>
                <img src={user.image} alt={user.name} />
                </div>
                <p>{user.email}</p>
                <hr />
            </div>
        </React.Fragment>
    )
}

export default Profile;