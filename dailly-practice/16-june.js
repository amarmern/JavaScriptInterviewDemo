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

ReactDOM.render(<Timer />, document.getElementById('timer-example'));

// function job(state) {
//     return new Promise(function(resolve, reject) {
//     if (state) {
//     resolve('success');
//     } else {
//     reject('error');
//     }
//     });
//     }

//     let promise = job(true);

//     promise.then(function(data) {
//     console.log(data);

//      return job(true);
//     })

//     .then(function(data) {
//     if (data !== 'victory') {
//     throw 'Defeat';
//     }

//      return job(true);
//     })

//     .then(function(data) {
//     console.log(data); //success
//     })

//     .catch(function(error) {
//     console.log(error);

//      return job(false);
//     })

//     .then(function(data) {
//     console.log(data);

//      return job(true);
//     })

//     .catch(function(error) {
//     console.log(error);

//      return 'Error caught';
//     })

//     .then(function(data) {
//     console.log(data);

//      return new Error('test');
//     })

//     .then(function(data) {
//     console.log('Success:', data.message);
//     })

//     .catch(function(data) {
//     console.log('Error:', data.message);
//     });

// function main(x) {
//     return new Promise(resolve => {
//     setTimeout(() => {
//     resolve(x);
//     }, 2000);
//     });
//     }

//     async function add1(x) {
//     const a = await main(20);
//     const b = await main(30);
//     return x + a + b;
//     }

//      add1(10).then(v => {
//     console.log(v); // 60
//     });

//     async function add2(x) {
//     const p_a = main(20);
//     const p_b = main(20);
//     return x + await p_a + await p_b;
//     }
//     add2(10).then(v => {
//     console.log(v); //50
//     });
