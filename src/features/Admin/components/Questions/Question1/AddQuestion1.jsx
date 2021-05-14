import React from 'react';
import PropTypes from 'prop-types';

import { useHistory, useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import TopicForm1 from '../../Form/TopicForm/TopicForm1';

import QuestionForm1 from '../../Form/QuestionForm/QuestionForm1';
import { addQuestion1 } from 'features/Admin/Slice/QuestionSlice';



AddQuestion1.propTypes = {

};

function AddQuestion1(props) {
    const dispath = useDispatch()
    const history = useHistory()

    const handleAddTopicFormSubmit = async (values) => {
    
        let data = {
            id : idTopic,
            ques : values
        }

        const action = addQuestion1(data)
        const resultAction = await dispath(action)   
        // dispath(action)

    };
    const {
        params: { idTopic },
        url,
    } = useRouteMatch();

   

    return (
        <div>
            <QuestionForm1  onSubmit={handleAddTopicFormSubmit} />
        </div>
    );
}

export default AddQuestion1;




