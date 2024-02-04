import React from "react";
import { observer, useLocalStore } from "mobx-react-lite";
import * as VKID from "@vkid/sdk";
import { useGoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import Input from "../../input/Input";
import authStore from "../../../store/authenticateStore";
import "./form.scss";

const Form = observer (() => {
  // Auth VK

  VKID.Config.set({
    app: 51847496, // Идентификатор приложения.
    redirectUrl: "http://localhost:5173/", // Адрес для перенаправления.
  });

  async function getTokenVk() {
    let response = await fetch(
      "https://api.vk.com/method/auth.exchangeSilentAuthToken"
    );
    if (response.ok) {
      let json = await response.json();
      console.log(json);
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  // Auth Google

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const token = tokenResponse.access_token;
      localStorage.setItem("access_token", token);
      authStore.setAuth(true);
    },
  });
  return (
    <form className="form">
      <div className="form__input-group">
        <Input placeholder="Enter Email" type="email" />
        <Input placeholder="Enter Password" type="password" />
      </div>
      <div className="form__wrapper-link">
        <Link className="form__link" to="/">
          Recover Password ?
        </Link>
      </div>
      <button className="form__button">Sign In</button>
      <div className="form__subtitle-wrapper">
        <h4 className="form__subtitle">Or continue with</h4>
      </div>
      <ul className="form__socials-list">
        <li className="form__socials-list__item">
          <button
            className="form__socials-list__item-button"
            onClick={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.44 14.3182C27.44 13.3254 27.3509 12.3709 27.1855 11.4545H14V16.87H21.5345C21.21 18.62 20.2236 20.1027 18.7409 21.0954V24.6082H23.2655C25.9127 22.1709 27.44 18.5818 27.44 14.3182Z"
                fill="#4285F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0001 28C17.7801 28 20.9491 26.7463 23.2655 24.6082L18.741 21.0954C17.4873 21.9354 15.8837 22.4318 14.0001 22.4318C10.3537 22.4318 7.26732 19.9691 6.16641 16.66H1.48914V20.2872C3.79277 24.8627 8.52732 28 14.0001 28Z"
                fill="#34A853"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.16637 16.66C5.88637 15.82 5.72727 14.9227 5.72727 14C5.72727 13.0773 5.88637 12.18 6.16637 11.34V7.71271H1.48909C0.540909 9.60271 0 11.7409 0 14C0 16.2591 0.540909 18.3973 1.48909 20.2873L6.16637 16.66Z"
                fill="#FBBC05"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.0001 5.56818C16.0555 5.56818 17.901 6.27455 19.3519 7.66182L23.3673 3.64637C20.9428 1.38727 17.7737 0 14.0001 0C8.52732 0 3.79277 3.13727 1.48914 7.71273L6.16641 11.34C7.26732 8.03091 10.3537 5.56818 14.0001 5.56818Z"
                fill="#EA4335"
              />
            </svg>
          </button>
        </li>
        <li className="form__socials-list__item">
          <button
            className="form__socials-list__item-button"
            onClick={(e) => {
              e.preventDefault();
              VKID.Auth.login();
              getTokenVk();
            }}
          >
            <svg
              fill="#0077FF"
              width="30px"
              height="30px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.802 12.298s1.617 1.597 2.017 2.336a.127.127 0 0 1 .018.035c.163.273.203.487.123.645-.135.261-.592.392-.747.403h-2.858c-.199 0-.613-.052-1.117-.4-.385-.269-.768-.712-1.139-1.145-.554-.643-1.033-1.201-1.518-1.201a.548.548 0 0 0-.18.03c-.367.116-.833.639-.833 2.032 0 .436-.344.684-.585.684H9.674c-.446 0-2.768-.156-4.827-2.327C2.324 10.732.058 5.4.036 5.353c-.141-.345.155-.533.475-.533h2.886c.387 0 .513.234.601.444.102.241.48 1.205 1.1 2.288 1.004 1.762 1.621 2.479 2.114 2.479a.527.527 0 0 0 .264-.07c.644-.354.524-2.654.494-3.128 0-.092-.001-1.027-.331-1.479-.236-.324-.638-.45-.881-.496.065-.094.203-.238.38-.323.441-.22 1.238-.252 2.029-.252h.439c.858.012 1.08.067 1.392.146.628.15.64.557.585 1.943-.016.396-.033.842-.033 1.367 0 .112-.005.237-.005.364-.019.711-.044 1.512.458 1.841a.41.41 0 0 0 .217.062c.174 0 .695 0 2.108-2.425.62-1.071 1.1-2.334 1.133-2.429.028-.053.112-.202.214-.262a.479.479 0 0 1 .236-.056h3.395c.37 0 .621.056.67.196.082.227-.016.92-1.566 3.016-.261.349-.49.651-.691.915-1.405 1.844-1.405 1.937.083 3.337z" />
            </svg>
          </button>
        </li>
      </ul>
    </form>
  );
});

export default Form;
