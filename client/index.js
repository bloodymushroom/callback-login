import React, {Component} from 'react';

export default class Index extends Component {
  constructor(){
    super();

    this.state = {
      count: 2000
    }

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }

  componentWillMount(){
    setInterval(this.increment, 1000);
  }

  render() {
    return (
      <div>
        Hello World! Did this update? 
        <div>
          Count: {this.state.count}
        </div>
      </div>
    )
  }
}