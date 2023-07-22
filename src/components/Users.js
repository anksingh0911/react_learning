import React from "react";

class Users extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count: 0,
      count1:1,
    }
  }

  async componentDidMount(){
    const data = await fetch("")
  }


  render(){
    const {title} = this.props;
    const {count, count1} = this.state;

    return(
      <div>
        <h1>{title}</h1>
        <p>Count: {count}</p>
        <button
          onClick={()=>this.setState({
            count:this.state.count+1,
            count1:this.state.count1+1
          })}
        >
          Count Increase
        </button>
        <button
          onClick={()=>this.setState({
            count:0,
            count1:1
          })}
        >
          Count Reset
        </button>
        <p>Count1: {count1}</p>
      </div>
    )
  }
};
export default Users;
