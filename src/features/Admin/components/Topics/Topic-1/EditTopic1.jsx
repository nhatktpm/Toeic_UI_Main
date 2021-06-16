import React from 'react';
import PropTypes from 'prop-types';

import { useHistory, useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import TopicForm1 from '../../Form/TopicForm/TopicForm1';
import { editTopic1 } from 'features/Admin/Slice/TopicSlice';
import { useSnackbar } from 'notistack';


EditTopic1.propTypes = {

};

function EditTopic1(props) {
    const { enqueueSnackbar } = useSnackbar()
    const history = useHistory()
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

        let slipType = resultAction.type.split('/')

        if (slipType[2] == 'fulfilled') {
          history.goBack()
          enqueueSnackbar('Edit Topic Successfully', { variant: 'success' })
        } else {
          enqueueSnackbar('Edit Topic Not Successfully', { variant: 'error' })
        }
    
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