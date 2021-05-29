import counterReducer from '../features/Counter/counterSlice';
import partReducer from '../features/Admin/Slice/PartSlice';
import topicReducer from '../features/Admin/Slice/TopicSlice';
import questionReducer from '../features/Admin/Slice/QuestionSlice';
import trashReducer from '../features/Admin/Slice/TrashSlice';
import exerReducer from '../features/ExerciseUser/ExerciseSlice';

const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  count: counterReducer,  
  part: partReducer,
  topic : topicReducer,
  question: questionReducer,
  trash: trashReducer,
  exer : exerReducer

  
};

const store = configureStore({
  reducer: rootReducer,

});

export default store;
