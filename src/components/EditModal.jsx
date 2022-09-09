import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { updateUser, fetchUsers } from "../actions";

const EditModal = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const closeRef = useRef();
  useEffect(() => {
    props.fetchUsers();
  }, [props.updatedUserdata]);
  return (
    <div
      className="modal fade"
      id="editModal"
      tabIndex="-1"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div
            className="modal-header no-border "
            style={{ backgroundColor: "#050e2d" }}
          >
            <h4 className="text-white">Edit User</h4>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeRef}
            ></button>
          </div>
          <div
            className="modal-body d-flex justifiy-content-center"
            style={{ backgroundColor: "#f8fafb" }}
          >
            <form className="row g-3 ">
              <div className="col-md-12">
                <label
                  htmlFor="validationCustom01"
                  className="form-label fw-bold text-dark"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  required
                  placeholder="Enter First Name"
                  onChange={(event) => {
                    setfirstName(event.target.value);
                  }}
                  value={firstName}
                />
              </div>
              <div className="col-md-12">
                <label
                  htmlFor="validationCustom02"
                  className="form-label fw-bold text-dark"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  required
                  placeholder="Enter Last Name"
                  onChange={(event) => {
                    setlastName(event.target.value);
                  }}
                  value={lastName}
                />
              </div>
              <div
                className="modal-footer"
                style={{ backgroundColor: "#f8fafb" }}
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={() => {
                    if (firstName && lastName) {
                      props.updateUser(props.editedUserId, firstName, lastName);
                      setfirstName("");
                      setlastName("");
                      closeRef.current.click();
                    }
                  }}
                >
                  Edit User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    updatedUserdata: state.updatedUser,
    editedUserId: state.editUserId,
  };
};
export default connect(mapStateToProps, {
  updateUser,
  fetchUsers,
})(EditModal);
