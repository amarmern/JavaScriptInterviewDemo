'use strict';

const e = React.createElement;

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }
  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

const domContainer = document.querySelector('#timer-example');
ReactDOM.render(e(Timer), domContainer);
