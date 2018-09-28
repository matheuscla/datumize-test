import React from 'react';
import styled from 'styled-components';

const ProjectsTable = styled.table`
  width: 100%;
  height: auto;
`

const Header = styled.th`
  padding: 0;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 33%;
  border-bottom: 1px solid #000;
`

const Row = styled.tr`
  text-align: center;
`

const Item = styled.td`
  padding: 16px 0;
`

const projectsList = ({projects}) => {
  const projectList = projects.map((newProject, index) => (
    <Row key={index}>
      <Item>{newProject.user}</Item>
      <Item>{newProject.role}</Item>
      <Item>{newProject.project}</Item>
    </Row>
    ))

  return(
    <ProjectsTable>
      <thead>
        <Header>User</Header>
        <Header>Role</Header>
        <Header>Project</Header>
      </thead>
      <tbody>
        {projectList}
      </tbody>
    </ProjectsTable>
  )
}

export default projectsList
