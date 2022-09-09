import { useRef } from "react";
const Navbar = (props) => {
  const openRef = useRef();
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          if (
            openRef.current.style.width === "0px" ||
            openRef.current.style.width === ""
          ) {
            openRef.current.style.width = "250px";
            props.close.style.marginLeft = "250px";
          } else {
            openRef.current.style.width = "0px";
            props.close.style.marginLeft = "40px";
          }
        }}
        style={{ backgroundColor: "#e0ebf29e" }}
      >
        ☰
      </button>
      <div id="mySidebar" className="sidebar" ref={openRef}>
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipOrd5_0YVExeAs7JRG8aXZRmCcfInA4KZOpdTK0=w427-h240-k-no"
          alt="logo"
          className="mb-2"
          style={{ width: "inherit" }}
        />
        <div className="input-group rounded mb-4 " style={{ width: "95%" }}>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Quick access"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </div>

        <p className="text-muted ps-2 fw-bold">Dashboard</p>
        <p className="text-muted ps-2 fw-bold" style={{ fontSize: "13px" }}>
          SETTINGS
        </p>
        <div className="accordion mb-3" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button fw-bold text-muted"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{ backgroundColor: "#050e2d" }}
              >
                ATM Settings
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">ATM settings</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed fw-bold text-muted"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{ backgroundColor: "#050e2d" }}
              >
                Business Setup
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Business Setup</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed fw-bold text-muted"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{ backgroundColor: "#050e2d" }}
              >
                User Management
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>Users</p>
                <p>Profiles</p>
                <p>Groups</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-muted ps-2 fw-bold ">License Management</p>
      </div>
    </div>
  );
};

export default Navbar;
