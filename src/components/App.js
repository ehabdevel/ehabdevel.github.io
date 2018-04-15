import React from 'react'
import Nav from './Nav'
import Content from './Content'
import Footer from './Footer'
import Router from '../ContextContainer/Router';

class App extends React.Component {
  render() {
    return (
      <Router component={ScrollToTop}>
        <Nav />
        <Content />
        <Footer />
      </Router>
    );
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App