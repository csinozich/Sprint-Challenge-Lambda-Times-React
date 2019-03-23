- [ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

  PropTypes are used to check data types and assure that the wrong data type can't be passed into any given field. Because JavaScript has dynamic data typing, (e.g. truthiness), you have to confirm exactly the right type of data for the code to work.

- [ ] Describe a life-cycle event in React?

  componentDidMount(), componentWillUnmount(), etc. These types of life-cycle events allow for data to be mounted and unmounted, as well as refreshed and re-rendered, so that data passes appropriately through the server.

- [ ] Explain the details of a Higher Order Component?

  A higher order component is a component that takes in a component as an argument, returning different components based on the argument function. This allows you to create dependencies inside your components.

- [ ] What are three different ways to style components in React? Explain some of the benefits of each.

  Regular CSS - it's what we know!
  Styled Components - allows you to write the CSS inside your JS files
  ReactStrap - Bootstrap with React that allows you to import already styled components for fast and easy coding.
