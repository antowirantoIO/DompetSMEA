import React from "react";
import AppLayout from "../components/AppLayout";
import { useAuth } from "../hooks/auth";
import { useState } from "react";
import Link from "next/link";

export default function register() {
  const { register } = useAuth({
    middleware: "guest",
    redirectIfAuthenticated: "/",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  const submitForm = (event) => {
    event.preventDefault();

    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    });
  };

  return (
    <AppLayout>
      <>
        {/* App Header */}
        <div className="appHeader no-border transparent position-absolute">
          <div className="left">
            <a href="#" className="headerButton goBack">
              <ion-icon name="chevron-back-outline" />
            </a>
          </div>
          <div className="pageTitle" />
          <div className="right">
            <Link href="/login">
              <a className="headerButton">Login</a>
            </Link>
          </div>
        </div>
        {/* * App Header */}
        {/* App Capsule */}
        <div id="appCapsule">
          <div className="section mt-2 text-center">
            <h1>Register now</h1>
            <h4>Create an account</h4>
          </div>
          <div className="section mb-5 p-2">
            <form onSubmit={submitForm}>
              <div className="card">
                <div className="card-body">
                  <div className="form-group basic">
                    <div className="input-wrapper">
                      <label className="label" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Full name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                      <i className="clear-input">
                        <ion-icon name="close-circle" />
                      </i>
                      <div className="text-danger text-sm">
                        {errors[0] ?? ""}
                      </div>
                    </div>
                  </div>
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
                      <div className="text-danger text-sm">
                        {errors[1] ?? ""}
                      </div>
                    </div>
                  </div>
                  <div className="form-group basic">
                    <div className="input-wrapper">
                      <label className="label" htmlFor="password1">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password1"
                        autoComplete="off"
                        placeholder="Your password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <i className="clear-input">
                        <ion-icon name="close-circle" />
                      </i>
                      <div className="text-danger text-sm">
                        {errors[2] ?? ""}
                      </div>
                    </div>
                  </div>
                  <div className="form-group basic">
                    <div className="input-wrapper">
                      <label className="label" htmlFor="password2">
                        Password Again
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password2"
                        autoComplete="off"
                        placeholder="Type password again"
                        value={passwordConfirmation}
                        onChange={(event) =>
                          setPasswordConfirmation(event.target.value)
                        }
                      />
                      <i className="clear-input">
                        <ion-icon name="close-circle" />
                      </i>
                    </div>
                  </div>
                  <div className="custom-control custom-checkbox mt-2 mb-1">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customCheckb1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customCheckb1"
                      >
                        I agree{" "}
                        <a
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#termsModal"
                        >
                          terms and conditions
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-button-group transparent">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-lg"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* * App Capsule */}
        {/* Terms Modal */}
        <div
          className="modal fade modalbox"
          id="termsModal"
          tabIndex={-1}
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Terms and Conditions</h5>
                <a href="#" data-bs-dismiss="modal">
                  Close
                </a>
              </div>
              <div className="modal-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  fermentum, urna eget finibus fermentum, velit metus maximus
                  erat, nec sodales elit justo vitae sapien. Sed fermentum
                  varius erat, et dictum lorem. Cras pulvinar vestibulum purus
                  sed hendrerit. Praesent et auctor dolor. Ut sed ultrices
                  justo. Fusce tortor erat, scelerisque sit amet diam rhoncus,
                  cursus dictum lorem. Ut vitae arcu egestas, congue nulla at,
                  gravida purus.
                </p>
                <p>
                  Donec in justo urna. Fusce pretium quam sed viverra blandit.
                  Vivamus a facilisis lectus. Nunc non aliquet nulla. Aenean
                  arcu metus, dictum tincidunt lacinia quis, efficitur vitae
                  dui. Integer id nisi sit amet leo rutrum placerat in ac
                  tortor. Duis sed fermentum mi, ut vulputate ligula.
                </p>
                <p>
                  Vivamus eget sodales elit, cursus scelerisque leo. Suspendisse
                  lorem leo, sollicitudin egestas interdum sit amet,
                  sollicitudin tristique ex. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Phasellus id ultricies eros. Praesent vulputate interdum
                  dapibus. Duis varius faucibus metus, eget sagittis purus
                  consectetur in. Praesent fringilla tristique sapien, et
                  maximus tellus dapibus a. Quisque nec magna dapibus sapien
                  iaculis consectetur. Fusce in vehicula arcu. Aliquam erat
                  volutpat. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* * Terms Modal */}
      </>
    </AppLayout>
  );
}
