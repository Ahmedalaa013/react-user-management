import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers, deleteUser, getEditedId } from "../actions";

const UsersList = (props) => {
  useEffect(() => {
    props.fetchUsers();
  }, [props.deletedData]);

  const data = props.users.map((user, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.id}</td>
        <td>
          {" "}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.deleteUser(user.id);
            }}
          >
            Delete
          </button>{" "}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
            onClick={() => {
              props.getEditedId(user.id);
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">ID</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
};
const mapStateToProps = (state) => {
  return { users: state.users, deletedData: state.deletedUser };
};
export default connect(mapStateToProps, {
  fetchUsers,
  deleteUser,
  getEditedId,
})(UsersList);
