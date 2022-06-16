import React from "react";
import { useAuth } from "../hooks/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function login() {
  const router = useRouter();

  const { login } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (router.query.reset?.length > 0 && errors.length === 0) {
      setStatus(atob(router.query.reset));
    } else {
      setStatus(null);
    }
  });

  const submitForm = async (event) => {
    event.preventDefault();

    login({ email, password, setErrors, setStatus });
  };

  return (
    <div>
      <>
        {/* App Header */}
        <div className="appHeader no-border transparent position-absolute">
          <div className="left">
            <a href="#" className="headerButton goBack">
              <ion-icon name="chevron-back-outline" />
            </a>
          </div>
          <div className="pageTitle" />
          <div className="right"></div>
        </div>
        {/* * App Header */}
        {/* App Capsule */}
        <div id="appCapsule">
          <div className="section mt-2 text-center">
            <h1>Log in</h1>
            <h4>Fill the form to log in</h4>
          </div>
          <div className="section mb-5 p-2">
            <form onSubmit={submitForm}>
              <div className="card">
                <div className="card-body pb-1">
                  <div className="form-group basic">
                    <div className="input-wrapper">
                      <label className="label" htmlFor="email1">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email1"
                        placeholder="Your e-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                      />
                      <i className="clear-input">
                        <ion-icon name="close-circle" />
                      </i>
                    </div>
                    <div className="text-danger text-sm">{errors[0] ?? ""}</div>
                  </div>
                  <div className="form-group basic">
                    <div className="input-wrapper">
                      <label className="label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <i className="clear-input">
                        <ion-icon name="close-circle" />
                      </i>
                      <div className="text-danger text-sm">
                        {errors[1] ?? ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-links mt-2">
                <div>
                  <Link href="/register">
                    <a>Register Now</a>
                  </Link>
                </div>
                <div>
                  <a href="app-forgot-password.html" className="text-muted">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="form-button-group  transparent">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* * App Capsule */}
      </>
      <div
        className="modal fade dialogbox"
        id="DialogIconedDanger"
        data-bs-backdrop="static"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-icon text-danger">
              <ion-icon name="close-circle" />
            </div>
            <div className="modal-header">
              <h5 className="modal-title">Error</h5>
            </div>
            <div className="modal-body">There is something wrong.</div>
            <div className="modal-footer">
              <div className="btn-inline">
                <a href="#" className="btn" data-bs-dismiss="modal">
                  CLOSE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
