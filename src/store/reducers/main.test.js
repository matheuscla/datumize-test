import reducer from './main'
import * as types from '../constants/actionTypes'

describe('main reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        projects: [],
        in_the_project: false
      }
    )
  })

  it('should handle ADD_TO_PROJECT', () => {
    let initialState = {
      projects: []
    }
    
    expect(
      reducer(initialState, {
        type: types.ADD_TO_PROJECT,
        payload: {name: 'John Doe', role: 'Admin', project: 'Trip to space'}
      })
    ).toEqual({
      projects: [{name: 'John Doe', role: 'Admin', project: 'Trip to space'}]
    })
  })

  it('should handler USER_ALREADY_IN_THIS_PROJECT', () => {
    expect(
      reducer([], {
        type: types.USER_ALREADY_IN_THIS_PROJECT,
        payload: true
      })
    ).toEqual(
      {
        in_the_project: true
      }
    )
  })
})
