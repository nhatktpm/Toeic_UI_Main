import React from 'react';
import PropTypes from 'prop-types';

import { useHistory, useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import TopicForm1 from '../../Form/TopicForm/TopicForm1';
import { addTopic1 } from 'features/Admin/Slice/TopicSlice';
import { useSnackbar } from 'notistack';



AddTopic1.propTypes = {

};

function AddTopic1(props) {

    const { enqueueSnackbar } = useSnackbar()
    const dispath = useDispatch()
    const history = useHistory()

    const handleAddTopicFormSubmit = async (values) => {

        const action = addTopic1(values)
        // const resultAction = await dispath(action)   
        const resultAction = await dispath(action);

        let slipType = resultAction.type.split('/')

        if (slipType[2] == 'fulfilled') {
            history.goBack()
            enqueueSnackbar('Edit Part Successfully', { variant: 'success' })
        } else {
            enqueueSnackbar('Edit Part Not Successfully', { variant: 'error' })
        }

    };
    const {
        params: { idPart },
        url,
    } = useRouteMatch();


    return (
        <div>
            <TopicForm1 onSubmit={handleAddTopicFormSubmit} />
        </div>
    );
}

export default AddTopic1;