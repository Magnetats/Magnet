import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

import { medBlue } from '../../../../styling/theme/variables'
import FunnelStageDropDown from './FunnelStages/FunnelStageDropDown.jsx'

const MainGrid = styled(Grid)`
  && {

    margin-left: 185px;
    margin-top: -431px;
  }
  .ui.segment {
    position: relative;
    top: 40px;
    border: none;
  }
`
const HomeMain = () => (
  <MainGrid>
    <Grid.Row columns={1}>
      <Grid.Column>
        <FunnelStageDropDown />
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
