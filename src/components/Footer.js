import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="row footer">
        <div className="side-content"></div>
        <div className="main-content">
          <div className="content-header">
          Made with love
          </div>
          <div className="content-body">
            <p>Copyright &copy; ehabdevel.github.io / 2018 - {this.state.date.getFullYear()}</p>
          </div>
        </div>
        <div className="side-content"></div>
      </div>
    );
  }
}

export default Footer