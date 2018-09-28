import { ADD_TO_PROJECT, USER_ALREADY_IN_THIS_PROJECT } from '../constants/actionTypes';
import _ from 'lodash';

export const addToProject = (project) => {
  return {
    type: ADD_TO_PROJECT,
    payload: project
  }
}

export const userAlreadyInThisProject = (userProject, project) => {
  return {
    type: USER_ALREADY_IN_THIS_PROJECT,
    payload: _.includes(userProject, project)
  }
}
