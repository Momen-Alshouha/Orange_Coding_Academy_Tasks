import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super();
    console.log(props.name);
    this.state = {
      name: "",
      users: [],
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    return this.setState((this.state.users = users));
  };

  changeHandler = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="User Search" value={this.state.email} onChange={this.changeHandler} />
        { 
      this.state.users.filter((user) => user.name.includes(this.state.name)).map((user) => (
            <h2>
              {user.id} - {user.name}
            </h2>
        ))}

      </div>
    );
  }
}

export default ClassComponent;