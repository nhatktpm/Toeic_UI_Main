import React from 'react';
import { useRouteMatch } from 'react-router';

function ListTopicUser(props) {

    const match = useRouteMatch();
    console.log(match);

    return (
        <div>
            topic user
        </div>
    );
}

export default ListTopicUser;