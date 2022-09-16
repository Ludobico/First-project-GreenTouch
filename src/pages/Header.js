import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import useStore from "../store/Store";
import { useRef, useEffect } from "react";

function Header() {
  const navigateMain = useNavigate();
  const navigateBoard = useNavigate();
  const navigateLoginForm = useNavigate();
  const navigateDep = useNavigate();
  const navigatePanic = useNavigate();
  const navigateadhd = useNavigate();

  const { Login, LogOut } = useStore();
  const { setloginfalse, setlogoutfalse } = useStore((state) => state);
  const loginRef = useRef();

  const GotoMain = () => {
    navigateMain("/");
  };
  const GotoBoard = () => {
    navigateBoard("/main");
  };

  const GotoLoginForm = () => {
    navigateLoginForm("/login");
    setloginfalse();
    setlogoutfalse();
  };

  const GotoDep = () => {
    navigateDep("/dep");
  };

  const GotoPanic = () => {
    navigatePanic("/panic");
  };

  const GoToadhd = () => {
    navigateadhd("/adhd");
  };

  const GotoLogoutForm = () => {
    alert("로그아웃되었습니다.");
    window.sessionStorage.clear();
    navigateLoginForm("/");
    setloginfalse();
    setlogoutfalse();
  };
  return (
    <>
      <button className="titleBtn" onClick={GotoMain}>
        <div className="titleImage"></div>
        <div className="titleLogo">
          <div className="content">
            <h2>GREENTOUCH</h2>
            <h2>GREENTOUCH</h2>
          </div>
        </div>
      </button>
      <div className="titleMenu">
        <button className="headerBtn" onClick={GotoDep}>
          우울증
        </button>
        <button className="headerBtn" onClick={GoToadhd}>
          ADHD
        </button>
        <button className="headerBtn" onClick={GotoPanic}>
          공황장애
        </button>
        <button className="headerBtn" onClick={GotoBoard}>
          커뮤니티
        </button>
        {Login && (
          <button className="loginBtn" onClick={GotoLoginForm} ref={loginRef}>
            로그인1
          </button>
        )}
        {LogOut && (
          <button className="loginBtn" onClick={GotoLogoutForm}>
            로그아웃
          </button>
        )}
      </div>
    </>
  );
}

export default Header;
