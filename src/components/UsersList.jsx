import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderList = () => {
    return this.props.users.data.map((user, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.picture}</td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props.users.data);
    return (
      <div className="container">
        <div className="row">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Picture url</th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, { fetchUsers })(UsersList);
