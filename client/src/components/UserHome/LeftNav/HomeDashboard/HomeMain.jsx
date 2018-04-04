import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

const MainGrid = styled(Grid) `
  && {
    width: 84%;
    margin-left: 185px;
    margin-top: -355px;
  }
`

const HomeMain = () => (
  <MainGrid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Segment.Group>
          <Segment>My Funnel</Segment>
          <Segment.Group>
            <Segment>Nested Top</Segment>
            <Segment>Nested Middle</Segment>
            <Segment>Nested Bottom</Segment>
          </Segment.Group>
          <Segment.Group horizontal>
            <Segment>Top</Segment>
            <Segment>Middle</Segment>
            <Segment>Bottom</Segment>
          </Segment.Group>
          <Segment>Bottom</Segment>
        </Segment.Group>
      </Grid.Column>
      <Grid.Column>
        <Segment>All Sizes</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} only='widescreen'>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column only='computer'>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column only='tablet mobile'>
        <Segment>Tablet and Mobile</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>All Sizes</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>All Sizes</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4} only='computer'>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3} only='tablet'>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
    </Grid.Row>
  </MainGrid>
)

export default HomeMain
