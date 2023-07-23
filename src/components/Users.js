import React from "react";
import ShimmerUI from "./Shimmer";

class Users extends React.Component {
  constructor(props){
    super(props);
    this.state={
      users:[]
    }
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    this.setState(this.state.users=json)
    if(json?.length) localStorage.setItem('Users', JSON.stringify(json))
  }


  render(){
    const {title} = this.props;
    const {count, count1} = this.state;
    console.log(this.state.users);
    const {user} = this.state;

    if(user?.length === 0 ) return <ShimmerUI/>
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

        {user?.length > 0 && (
        <>  
        {user.map(usr => (
          <div>
            <img src={usr}/>
          </div>
        ))}
        
        </>
      )}
      </div>
      
    )
  }
};
export default Users;
