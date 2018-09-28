import * as actions from './main'
import * as types from '../constants/actionTypes'
import _ from 'lodash';

describe('actions', () => {
  it('should create an action to add a user to the project', () => {
    const project = {name: 'John Doe', role: 'Admin', project: 'Trip to space'}
    const expectedAction = {
      type: types.ADD_TO_PROJECT,
      payload: project
    }
    expect(actions.addToProject(project)).toEqual(expectedAction)
  })

  it('should create an action to check if a user is already in a project', () => {
    const userProjects = ['Trip to space', 'Assembly Ikea furniture']
    const projectToCheck = 'Trip to space'

    const expectedAction = {
      type: types.USER_ALREADY_IN_THIS_PROJECT,
      payload: _.includes(userProjects, projectToCheck)
    }
    expect(actions.userAlreadyInThisProject(userProjects, projectToCheck)).toEqual(expectedAction)
  })
})
