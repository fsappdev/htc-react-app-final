import React, { Fragment } from "react";
import "./style-login.css";
import logoPrincipal from "./logo-principal.png";

const Login = () => {
  return (
    <Fragment>
      <div className="modal-dialog text-center">
        <div className="col-sm-8 main-section">
          <div className="modal-content">
            <div className="col-12 user-img">
              <img
                src={logoPrincipal}
                alt="Logo-Honorable-Tribunal-de-Cuentas-Formosa"
              />
            </div>
            <form className="col-12 " action="admin.html ">
              <div className="form-group input-group-append align-items-center user-group ">
                <i className="fas fa-user pr-2"></i>
                <input
                  type="text "
                  id="inputEmail "
                  className="form-control "
                  placeholder="Nombre de usuario "
                  name="username "
                ></input>
              </div>
              <div className="form-group input-group-append align-items-center contrasena-group ">
                <i className="fas fa-lock pr-2"></i>
                <input
                  type="password"
                  id="inputPassword"
                  className="form-control "
                  placeholder="Contraseña "
                  name="password "
                ></input>
              </div>
              <a className="btn " href="#" role="button ">
                <i className="fas fa-sign-in-alt "></i> Iniciar Sesión
              </a>
            </form>
            <div className="col-12 forgot ">
              <a href="# ">Recordar contrasena?</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
