import React from 'react';
import PropTypes from 'prop-types';

import { useHistory, useRouteMatch } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import TopicForm1 from '../../Form/TopicForm/TopicForm1';
import { addTopic1 } from 'features/Admin/Slice/TopicSlice';
import QuestionForm1 from '../../Form/QuestionForm/QuestionForm1';
import { editQuestion1 } from 'features/Admin/Slice/QuestionSlice';



EditQuestion1.propTypes = {

};

function EditQuestion1(props) {
    const dispath = useDispatch()
    const history = useHistory()

    const handleAddQuestionFormSubmit = async (values) => {

    console.log(values);
        const action = editQuestion1(values)
        const resultAction = await dispath(action)   
     

    };
    const {
        params: { idQuestion },
        url,
    } = useRouteMatch();

    const editedPart = useSelector(state => {
        const foundPart = state.question.listQuestion.find(x => x._id == idQuestion);
        return foundPart;
    });

    const initialValues = editedPart

    return (
        <div>
            <QuestionForm1 editMode={true} initialValues={initialValues} onSubmit={handleAddQuestionFormSubmit} />
        </div>
    );
}

export default EditQuestion1;
