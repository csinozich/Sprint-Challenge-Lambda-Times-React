import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/

  let selectedTabClass = (props.tab === props.selected)
                       ? 'tab active-tab'
                       : 'tab'
  return (
    <div
      className={selectedTabClass}
      onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </div>
  );
};

/* Replace this dummy click handler function with your selectTabHandler function from props
 you'll need to pass the `tab` in as an argument to this handler. */
// Make sure you include PropTypes on your props.

export default Tab;
