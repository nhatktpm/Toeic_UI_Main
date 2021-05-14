import React from 'react';
import PropTypes from 'prop-types';

import { useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import TopicForm1 from '../../Form/TopicForm/TopicForm1';
import { editTopic1 } from 'features/Admin/Slice/TopicSlice';


EditTopic1.propTypes = {

};

function EditTopic1(props) {

    const {
        params: { idTopic },
        url,
    } = useRouteMatch();

    const dispath = useDispatch()

    const handleEditPartFormSubmit = async (values) => {
        // const data = {
        //     id: idTopic,
        //     part: values
        // }
        const action = editTopic1(values)
        const resultAction = await dispath(action)
    
    };



    const editedPart = useSelector(state => {
        const foundPart = state.topic.listTopic.find(x => x._id == idTopic);
        return foundPart;
    });

    const initialValues = editedPart

    return (
        <div>
            <TopicForm1 editMode= {true} initialValues={initialValues} onSubmit={handleEditPartFormSubmit} />

        </div>
    );
}

export default EditTopic1;