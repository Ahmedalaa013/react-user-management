import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

const UsersList = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);

  const data = props.users.map((user, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.picture}</td>
      </tr>
    );
  });

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
          <tbody>{data}</tbody>
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { users: state.users };
};
export default connect(mapStateToProps, { fetchUsers })(UsersList);
