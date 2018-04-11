import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

import { medBlue, lightestBlueBorder, appGrayLightest } from '../../../../../styling/theme/variables'

const FunnelStage = styled.div`
  {
    height: 49px;
    color: ${appGrayLightest};
    font-size: 91%;
    font-weight: 500;
    background-color: #FFFFFF;
    border: 5px solid ${lightestBlueBorder} !important;
    margin-right: 24px;
    padding-top: 3px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    overflow: visible;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 89px;
    position: relative;
    border-radius: 11px;
    &:hover {
      background: ${medBlue};
      color: #FFFFFF;
      &:after {
        background: ${medBlue};
      }
    }
    p {
      &:first-child {
        margin-bottom: -3px;
      }
    }
    p {
      &:last-child {
        margin-bottom: 1px;
      }
    }
    &:last-child {
      p {
        padding-top: 9px;
        text-align: center;
        margin-bottom: 17px;
      }
    }
  }
  .funnel-number {
    color: ${appGrayLightest}
  }
  .icons-n-numbers {
    position: relative;
    top: -4px;
    & i {
      top: -2px;
      position: relative;
    }
  }

  &.funnel-stage {
    &:before {
      white-space: none;
      text-overflow: none;
      left: 100%;
      top: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(194, 225, 245, 0);
      border-left-color: #c2e1f5;
      border-width: 15px;
      margin-top: -15px;
    }
    &:after {
      white-space: none;
      text-overflow: none;
      top: 50%;
      left: 78px;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(136, 183, 213, 0);
      border-left-color: #FFFFFF;
      border-width: 9px;
      margin-top: -9px;
    }
  }
`

const FunnelStages = () => (
  <div>
    <FunnelStage
      className="funnel-stage"
    >
      <p>Resume</p>
      <p>Review</p>
      <div
        className="icons-n-numbers"
      >
        <Icon
          size="large"
          name="users"
          className="funnel-number"
        />12,300
      </div>
    </FunnelStage>
    <FunnelStage
      className="funnel-stage"
    >
      <p>Subbed to</p>
      <p>Recruiter</p>
      <div
        className="icons-n-numbers"
      >
        <Icon
          size="large"
          name="users"
          className="funnel-number"
        />12,300
      </div>
    </FunnelStage>
    <FunnelStage
      className="funnel-stage"
    >
      <p>Hiring </p>
      <p>Team Screens</p>
      <div
        className="icons-n-numbers"
      >
        <Icon
          size="large"
          name="users"
          className="funnel-number"
        />12,300
      </div>
    </FunnelStage>
    <FunnelStage
      className="funnel-stage"
    >
      <p>Onsite</p>
      <p>Interviews</p>
      <div
        className="icons-n-numbers"
      >
        <Icon
          size="large"
          name="users"
          className="funnel-number"
        />12,300
      </div>
    </FunnelStage>
    <FunnelStage
      className="funnel-stage"
    >
      <p>Offers</p>
      <p>Extended</p>
      <div
        className="icons-n-numbers"
      >
        <Icon
          size="large"
          name="users"
          className="funnel-number"
        />12,300
      </div>
    </FunnelStage>
    <FunnelStage
      className="funnel-stage"
    >
      <p>Offers</p>
      <p>Accepted</p>
      <div
        className="icons-n-numbers"
      >
        <Icon
          size="large"
          name="users"
          className="funnel-number"
        />12,300
      </div>
    </FunnelStage>
    <FunnelStage
      className="funnel-stage"
    >
      <p>Hired</p>
      <div
        className="icons-n-numbers"
      >
        <Icon
          size="large"
          name="users"
          className="funnel-number"
        />12,300
      </div>
    </FunnelStage>
  </div>
)

export default FunnelStages

