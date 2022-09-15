import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import useStore from "../store/Store";

const LoginForm = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const navigate = useNavigate();
  const { setloginfalse } = useStore((state) => state);
  const { setlogoutfalse } = useStore((state) => state);

  const handleLogin = () => {
    if (idRef.current.value === "" || idRef.current.value === undefined) {
      alert("아이디를 입력해라");
      idRef.current.focus();
      return false;
    }
    if (pwRef.current.value === "" || pwRef.current.value === undefined) {
      alert("비번을 입력해라");
      pwRef.current.focus();
      return false;
    }

    console.log(
      "LoginForm:window.sessionStorage(login_id) =>",
      window.sessionStorage.getItem("id")
      //데이터 저장의 목적이 아닌 휘발성데이터를 저장하기 위한 목적으로 SessionStorage 또는 LocalStorage를 사용
      //f12-애플리케이션-세션스토리지에 값저장(창을 닫아버리면 사라짐)
    );

    axios
      .post("http://localhost:8008/login", {
        id: idRef.current.value,
        pw: pwRef.current.value,
      })
      .then((res) => {
        console.log("handleLogin =>", res);
        if (res.data[0].cnt === 1) {
          window.sessionStorage.setItem("id", idRef.current.value);
          window.sessionStorage.setItem("adress", res.data[0].adress);
          console.log(window.sessionStorage.getItem("adress"));
          navigate("/");
          // setloginfalse();
          // setlogoutfalse();
        } else {
          navigate("/login");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleMemberForm = () => {
    navigate("/member");
  };

  //   return (
  //     <div className="topdiv">
  //       <form>
  //         <input
  //           className="input_id"
  //           type="text"
  //           name="id"
  //           size="20"
  //           ref={idRef}
  //           placeholder="아이디를 입력해라"
  //         ></input>
  //         <input
  //           type="password"
  //           name="id"
  //           size="20"
  //           ref={pwRef}
  //           placeholder="비번을 입력해라"
  //         ></input>
  //         <div id="remember-container">
  //           <input
  //             type="checkbox"
  //             id="checkbox-2-1"
  //             class="checkbox"
  //             checked="checked"
  //           />
  //         </div>
  //         <input type="button" value="로그인" onClick={handleLogin}></input>
  //         &nbsp;
  //         <input
  //           type="button"
  //           value="회원등록"
  //           onClick={handleMemberForm}
  //         ></input>
  //       </form>
  //     </div>
  //   );
  // };
  return (
    <div className="body">
      <div className="login-form">
        <h1>GREEN TOUCH</h1>
        <form>
          <div className="int-area">
            <input
              type="text"
              name="id"
              id="id"
              autoComplete="off"
              required
              ref={idRef}
            ></input>
            <label htmlFor="id">USER NAME</label>
          </div>
          <div className="int-area">
            <input
              type="password"
              name="pw"
              id="pw"
              autoComplete="off"
              required
              ref={pwRef}
            ></input>
            <label htmlFor="pw">PASSWORD</label>
          </div>
          <div className="btn-area">
            <input type="button" onClick={handleLogin} value="LOGIN" />
          </div>
          <div className="regist">
            <input type="button" onClick={handleMemberForm} value="REGIST" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
