import React, { Component } from 'react';
import styled from 'styled-components';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: [...tabData],
      cards: [...cardData]})
  }

  changeSelected = tab => {
    this.setState({
      selected: tab
    })
  };

  filterCards = () => {
    /* Right now this function only returns the cards on state.
      We're going to make this function more dynamic
      by using it to filter out our cards for when a tab is selcted

      Notice that we're passing this function to our <Cards /> component below.
      This function returns an array of cards, so we can just pass it down as such.

      Your algorithim for the logic here is as follows:
        - if the selected tab is 'all' it should return all
          of the items from cardData.
        - else, it should only return those cards whose 'tab' matched this.state.selected.
    */
    return this.state.selected === 'all'
          ? this.state.cards
          : this.state.cards.filter(card => card.tab === this.state.selected);
  };

  render() {
    return (
      <ContentContainer>
        <Tabs
        tabs={this.state.tabs}
        selectedTab={this.state.selected}
        selectTabHandler={this.changeSelected}/>
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}
