import React from 'react';
import { useRouteMatch } from 'react-router';

function Solution(props) {

    const { idTopic } = props
    const match = useRouteMatch();

    console.log(match);
    return (
        <div>
            {idTopic}
        </div>
    );
}

export default Solution;