import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import { addToProject, userAlreadyInThisProject } from './store/actions/main';
import { connect } from 'react-redux';
import ProjectsList from './components/ProjectsList/ProjectsList';
import ProjectForm from './components/ProjectForm/ProjectForm';
import styled from 'styled-components';


const Error = styled.p`
  color: #D32F2F;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 24px;
  }
`

const List = styled.div`
  width: 60%;
  border: 1px solid #000;

  @media (max-width: 768px) {
    width: 100%;
  }
`

class App extends Component {
  state = {
    user: '',
    role: '',
    project: '',
    error: '',
    valid: false
  }

  addForm = (e) => {
    e.preventDefault();
    if (this.props.projects.length > 0) {
      const currentUser = this.props.projects.filter(project => {
        return project.user === this.state.user
      })

      const currentUserProjects = _.map(currentUser, 'project')
      this.props.userAlreadyInThisProject(currentUserProjects, this.state.project)
      setTimeout(() => {
        !this.props.in_the_project ?
        this.handleUserInThisProjectHandler() : this.setState({error: `Sorry! User ${this.state.user} already in ${this.state.project} project`})
      }, 300)

    } else {
      this.props.addToProject({user: this.state.user, role: this.state.role, project: this.state.project})
      this.setState({user: '', role: '', project: '', error: '', valid: false})
    }
  }

  handleUserInThisProjectHandler = () => {
    this.props.addToProject({user: this.state.user, role: this.state.role, project: this.state.project})
    this.setState({user: '', role: '', project: '', error: '', valid: false})
  }

  onInputChangeHandler = (key, e) => {
    const value = e.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: value
      }
    }, () => {
      this.setState({valid: (this.state.user && this.state.role && this.state.project) ? true : false})
    })
  }

  render() {
    const renderError = this.state.error ? (<Error>{this.state.error}</Error>) : null

    return (
      <Container>
        <Box>
          <div>
            <ProjectForm onChangeInput={this.onInputChangeHandler} form={this.state} submitForm={this.addForm} valid={this.state.valid} />
            {renderError}
          </div>
          <List>
            <ProjectsList projects={this.props.projects}/>
          </List>
        </Box>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToProject: (project) => dispatch(addToProject(project)),
    userAlreadyInThisProject: (user, project) => dispatch(userAlreadyInThisProject(user, project))
  }
}

const mapStateToProps = state => {
  return {
    projects: state.main.projects,
    in_the_project: state.main.in_the_project
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);;
