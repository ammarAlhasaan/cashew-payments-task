import React, {useEffect, useState} from 'react'
import UserApi from "../../apis/user.api";
import {useSelector} from "react-redux";

const Profile = () => {
    const {user: currentUser} = useSelector((state: any) => state.auth);


    return (
        <div>
            <div className="uk-card uk-card-default uk-card-small uk-card-body">
                <h3 className="uk-card-title">{currentUser.name}</h3>
                <p>
                    <strong>Email:</strong> {currentUser.email}
                </p>
                <p>
                    <strong>ID:</strong> {currentUser.id}
                </p>
            </div>
        </div>

    );
}

export default Profile
