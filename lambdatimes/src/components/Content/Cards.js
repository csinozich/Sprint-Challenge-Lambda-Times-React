import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    .cards-container {
      width: 1200px;
    }
`;

const Cards = props => {
  return (
    <CardContainer>
      {props.cards.map((card, index) => <Card card={card} key={index}/>)}
      {/* Using the cards prop, map over the list creating a
          new Card component for each passing the card as the only prop*/}
    </CardContainer>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      headline: PropTypes.string.isRequired,
      tab: PropTypes.oneOf(['all', 'javascript', 'technology', 'node', 'React.js', 'bootstrap'])
    })
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
