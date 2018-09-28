import React from 'react';
import { users, roles, projects } from './../../mocks';
import styled from 'styled-components';


const Select = styled.select`
  width: 360px;
  height: 48px;
  padding: 12px 16px;
  font-size: 16px;
  line-height: 24px;
  color: #9E9E9E;
  border-radius: 4px;
  border: 1px solid #424242;
  background: #fff;
  margin-bottom: 24px;
  -webkit-appearance: none;
  -webkit-border-radius: 4px;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Submit = styled.button`
  width: 360px;
  height: 48px;
  margin-top: 24px;
  border-radius: 4px;
  border: none;
  background: #5BAB53;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;
  display: block;

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Label = styled.label`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #424242;
  margin-bottom: 8px;
  display: block;
`

const Form = styled.form`
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`

const renderUser = users.map(user => (
  <option key={user.id} value={user.name}>{user.name}</option>
))

const renderRoles = roles.map(role => (
  <option key={role.id} value={role.name}>{role.name}</option>
))

const renderProjects = projects.map(project => (
  <option key={project.id} value={project.name}>{project.name}</option>
))

const projectForm = ({onChangeInput, form, submitForm}) => {
  const { user, role, project, valid } = form;
  return  (
    <Form onSubmit={submitForm}>
      <Label>Users</Label>
      <Select value={user} onChange={val => onChangeInput('user', val)}>
        <option value=''>Choose...</option>
        {renderUser}
      </Select>
      <Label>Roles</Label>
      <Select value={role} onChange={val => onChangeInput('role', val)}>
        <option value=''>Choose...</option>
        {renderRoles}
      </Select>
      <Label>Projects</Label>
      <Select value={project} onChange={val => onChangeInput('project', val)}>
        <option value=''>Choose...</option>
        {renderProjects}
      </Select>
      <Submit disabled={!valid}>Confirm</Submit>
    </Form>
  )
}

export default projectForm;
