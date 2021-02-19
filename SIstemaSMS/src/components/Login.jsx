import React, { Component } from "react";
import "./Style/Login.css";
import { signIn,isAuthenticated } from "../service/LoginService";
import { useForm } from "react-hook-form";
import { Message } from "primereact/message";
import { Redirect } from "react-router-dom";

function LoginFrom(props) {
  const { register, handleSubmit, errors } = useForm();
  console.log(errors);
  const onSubmit = (data) => {
    props.handleSubmit(data);
  };

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-grid">
        <div className="p-col-12">
          <h1>Sistema SMS</h1>
        </div>
        <br />
        <div className="p-col-12">
          <input
            type="text"
            placeholder="LOGIN_USER"
            name="userName"
            style={{ width: "100%" }}
            className="p-inputtext p-component"
            ref={register({
              required: {
                value: true,
                message:"LOGIN_USER IS_REQUIRED",
              },
            })}
          />

          {errors.userName && (
            <Message severity="error" text={errors.userName.message} />
          )}
        </div>
        <div className="p-col-12">
          <input
            type="password"
            placeholder="LOGIN_PASSWORD"
            name="password"
            style={{ width: "100%" }}
            className="p-inputtext p-component"
            ref={register({
              required: {
                value: true,
                message: "LOGIN_PASSWORD IS_REQUIRED",
              },
            })}
          />
          {errors.password && (
            <Message severity="error" text={errors.password.message} />
          )}
        </div>
        <div className="p-col-6">
          <button className="p-link">
            <Trans i18nKey="LOGIN_FORGET_PASSWORD" />
          </button>
        </div>
        <div className="p-col-6" style={{ textAlign: "right" }}>
          <button
            type="submit"
            className="p-button p-component p-button-text-only"
            style={{ width: "100%" }}
          >
            <span className="p-button-text p-c">
              <Trans i18nKey="LOGIN" />
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      auth: {
        user: "",
        password: "",
      },
    };
  }

  handleSubmit = (auth) => {
    signIn(auth.userName, auth.password);
  };

  render() {
    if (isAuthenticated(this.context)) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login-body">
        <div className="login-panel ui-fluid">
          <div className="login-panel-header">
            <img src={imgLogo} alt="sapphire" />
          </div>
          <div className="login-panel-content">
            <LoginFrom handleSubmit={this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation("translations")(Login);