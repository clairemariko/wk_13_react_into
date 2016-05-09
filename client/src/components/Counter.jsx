var React = require('react');

//react gives us this method to create classes
var Counter = React.createClass({
  getInitialState: function(){
    return {count: 0}
  },

  incrementCount:function(){
    // console.log('trying to increment')
    this.setState({count: this.state.count + this.props.multiple})
  },

  decrementCount:function(){
    this.setState({count: this.state.count - this.props.multiple})
  },

  multiplyCount:function(){
    this.setState({count: this.state.count *2})
  },

  divideCount:function(){
    this.setState({count: this.state.count /2})
  },

  addTen:function(){
    this.setState({count: this.state.count +10})
  },

  subTen:function(){
    this.setState({count: this.state.count -10})
  },

  setZero:function(){
    this.setState({count: this.state.count =0})
  },

  render: function(){
    // var someText = this.props.title;
    //need to wrap it in a div as it has more that one component. the component role is to display to the UI.
    return (
    <div>
      <h1> {this.props.title} </h1>
      <p> The current count is {this.state.count}</p>
      <p> Increasing in multiples of {this.props.multiple}</p>
      <p><button onClick={this.incrementCount}> increment </button>
      <p> Decreasing in multiple of {this.props.multiple}</p>
      <button onClick={this.decrementCount}> decrement </button></p>

      <p><button onClick={this.multiplyCount}> multiply</button>
      <button onClick={this.divideCount}> divide</button></p>
      <p><button onClick={this.addTen}> add 10</button>
      <button onClick={this.subTen}> sub 10 </button></p>
      <p><button onClick={this.setZero}> C </button></p>
    </div>
    )
  }
});


module.exports = Counter;