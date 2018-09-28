import { ADD_TO_PROJECT, USER_ALREADY_IN_THIS_PROJECT } from './../constants/actionTypes';

const initialState = {
  projects: [],
  in_the_project: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_PROJECT:
      return {
        ...state,
        projects: state.projects.concat(action.payload)
      }
    case USER_ALREADY_IN_THIS_PROJECT:
      return {
        ...state,
        in_the_project: action.payload
      }
    default:
      return state
  }
}

export default reducer;
