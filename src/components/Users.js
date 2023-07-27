import React from "react";
import { UserContext } from "../utils/UserContext";
import ShimmerUI from "./Shimmer";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      count: 0,
      count1: 1,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users");
    const json = await data.json();
    this.setState((this.state.users = json));
    if (json?.length) localStorage.setItem("Users", JSON.stringify(json));
  }

  render() {
    const { title } = this.props;
    const { count, count1 } = this.state;
    const { users } = this.state;

    if (users?.length === 0) return <ShimmerUI />;
    return (

      <div className="lg:container mx-auto p-4">
        <UserContext.Consumer>
          {({loggedInUser}) => <h1 className="text-semibold text-black text-lg">{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h1 className="text-semibold text-black text-lg">{title}</h1>
        <p className="text-md text-gray-500">Count: {count}</p>
        <p className="text-md text-gray-500">Count1: {count1}</p>
        <button
          className="bg-gray-500 text-white mr-3 p-2 rounded-md shadow-lg"
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            })
          }
        >
          Count Increase
        </button>
        <button
          className="bg-gray-500 text-white p-2 rounded-md shadow-lg"
          onClick={() =>
            this.setState({
              count: 0,
              count1: 1,
            })
          }
        >
          Count Reset
        </button>

        {users?.length > 0 && (
          <>
            <h2 className="d-block text-3xl font-bold text-center">Our Teams</h2>
            <div className="container mx-auto flex flex-wrap p-4">
              {users.map((usr) => (
                <div key={usr?.id} className="w-2/12 p-2 m-3 shadow-lg rounded-md">
                  <img className="w-[100%] rounded-lg" src={usr?.avatar_url} />
                  <p className="text-md font-semibold my-2 uppercase text-center">{usr?.login}</p>
                </div>
              ))}
            </div>
          </>

        )}
      </div>
    );
  }
}
export default Users;
