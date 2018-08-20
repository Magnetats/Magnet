import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import styled from 'styled-components'

import { medBlue } from '../../../../../styling/theme/variables'
import FunnelStageDropDown from './FunnelStages/FunnelStageDropDown'

const MainGrid = styled(Grid)`
  && {
    margin-left: 160px;
    margin-top: -425px;
    width: 84%;
  }
  .ui.segment {
    position: relative;
    top: 18px;
    height: 215px;
  }
`
const HomeMain = () => (
  <MainGrid>
    <Grid.Row columns={1}>
      <Grid.Column>
        <FunnelStageDropDown />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column only="computer">
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column only="tablet mobile">
        <Segment>Tablet and Mobile</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>All Sizes</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>All Sizes</Segment>
      </Grid.Column>
    </Grid.Row>
  </MainGrid>
)

export default HomeMain
