import React, {useEffect, useState} from 'react'
import UserApi from "../../apis/user.api";

const Home = () => {
    const [content, setContent] = useState({message: ""});

    useEffect(() => {
        UserApi.getPublicContent().then(
            (response) => {
                setContent(response.data[0]);
            },
            (error) => {
                const _content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
                setContent(_content);
            }
        );
    }, []);

    return (
        <div className="uk-card uk-card-default uk-card-small uk-card-body">
            <h3 className="uk-card-title">Dashboard</h3>
            <p>  {content.message}
            </p>
        </div>
    );
}

export default Home
