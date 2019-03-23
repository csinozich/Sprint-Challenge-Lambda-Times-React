import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'
import styled from 'styled-components';

// const TabsWrapper = styled.div`
//   border-bottom: 1px solid lightgrey;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   width: 100%;
//   height: 47px;
//   background-color: #fff;
//
//   @media (min-width: 1280px) {
//     .tabs {
//       width: 1280px;
//     }
// `;
//
// const Topics = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: row;
// `;

const Title = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Tabs = props => {
  return (
    <div class='tabs'>
      <div class='topics'>
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map(tab =>
          <Tab
          selectTabHandler={props.selectTabHandler}
          selectedTab={props.selected}
          tab={tab}
          key={tab}
          />)}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
