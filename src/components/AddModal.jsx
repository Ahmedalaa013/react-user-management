import { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { createUser, fetchUsers } from "../actions";

const AddModal = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const closeRef = useRef();
  useEffect(() => {
    props.fetchUsers();
  }, [props.createdUserdata]);
  return (
    <div
      className="modal fade"
      id="addModal"
      tabIndex="-1"
      aria-labelledby="addModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div
            className="modal-header no-border "
            style={{ backgroundColor: "#050e2d" }}
          >
            <h4 className="text-white">Add New User</h4>
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
                  onChange={(event) => {
                    setlastName(event.target.value);
                  }}
                  value={lastName}
                />
              </div>
              <div className="col-md-12">
                <label
                  htmlFor="validationCustom03"
                  className="form-label fw-bold text-dark"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom03"
                  required
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                  value={email}
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
                    if (firstName && lastName && email) {
                      props.createUser(firstName, lastName, email);
                      closeRef.current.click();
                      setfirstName("");
                      setlastName("");
                      setemail("");
                    }
                  }}
                >
                  Add User
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
  return { createdUserdata: state.createdUser, userDeleted: state.deletedUser };
};
export default connect(mapStateToProps, {
  createUser,
  fetchUsers,
})(AddModal);
