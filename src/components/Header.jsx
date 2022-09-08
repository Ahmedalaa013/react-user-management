const Header = () => {
  return (
    <div className="row my-2">
      <div className="col-10">
        <h2>User Management</h2>
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
        >
          Add New user
        </button>
      </div>
    </div>
  );
};
export default Header;
