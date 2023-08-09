import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  // axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/");
        } else {
          alert(res.data.Error);
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <section className="p-5">
      <div className="container p-5 h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="SampleImg"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div>
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p className="lead fw-bold mb-0 me-3">Sign in with</p>
            <button
              type="button"
              className="btn btn-primary btn-floating mx-1"
              style={{ borderRadius: "20px" }}
            >
              <i className="fab fa-facebook-f  text-white"></i>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-floating mx-1"
              style={{ borderRadius: "20px" }}
            >
              <i className="fab fa-twitter text-white"></i>
            </button>

            <button
              type="button"
              className="btn btn-primary btn-floating mx-1"
              style={{ borderRadius: "20px" }}
            >
              <i className="fab fa-linkedin-in text-white"></i>
            </button>
          </div>

          <div className="my-4">
            <hr />
            <p className="fw-bold mx-3 mb-0" style={{ background: "white" }}>
              Or
            </p>
            <hr />
          </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-2">
                <input
                  type="email"
                  className="form-control form-control-md"
                  placeholder="Enter a valid email address"
                  onChange={ e => setValues({...values, email: e.target.value}) }
                />
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  className="form-control form-control-md"
                  placeholder="Enter password"
                  onChange={ e => {setValues({...values, password: e.target.value})}}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-md btn-block w-100"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?
                  <Link to="/register" className="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
