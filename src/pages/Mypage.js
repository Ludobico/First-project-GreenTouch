import React from "react";
import Header from "./Header";
import "./Mypage.css";
import axios from "../../node_modules/axios/index";
import { MdAccountCircle, MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { HiIdentification } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import React3Dra from "./React3Dra";
import React3Dra2 from "./React3Dra2";
import React3Dra3 from "./React3Dra3";
import free_icon_adhd from "../images/mypageadhd.png";
import anxiety from "../images/anxiety.png";
import depressed from "../images/depressed.png";
import Fade from "react-reveal/Fade";
import { useNavigate } from "../../node_modules/react-router-dom/index";
import useStore from "../store/Store";
import { motion } from "framer-motion";

const Mypage = () => {
  const [test1Data, SetTest1Data] = useState();
  const [test2Data, SetTest2Data] = useState();
  const [test3Data, SetTest3Data] = useState();
  const [myinfo, setMyinfo] = useState(); //아이디,비밀번호,이메일,주소
  const [myinfo2, setMyinfo2] = useState(); //등급,검사결과,아이디,백분율(우울증)
  const [myinfo3, setMyinfo3] = useState(); //등급,검사결과,아이디,백분율(adhd)
  const [myinfo4, setMyinfo4] = useState(); //등급,검사결과,아이디,백분율(공황장애)
  const id_check = window.sessionStorage.getItem("id");
  const navigate = useNavigate();
  const { setloginfalse, setlogoutfalse } = useStore((state) => state);

  useEffect(() => {
    console.log("idcheceker", window.sessionStorage.getItem("id"));
    axios
      .post("http://localhost:8008/mypage", {
        id: window.sessionStorage.getItem("id"),
      })
      .then((res) => {
        console.log("info1 = ", res.data[0]);
        setMyinfo(res.data[0]);
      })
      .catch((e) => {
        console.error(e);
      });

    axios
      .post("http://localhost:8008/mypage2", {
        id: window.sessionStorage.getItem("id"),
      })
      .then((res) => {
        console.log("info2 = ", res.data[0]);
        setMyinfo2(res.data[0]);
      })
      .catch((e) => {
        console.error(e);
      });
    axios
      .post("http://localhost:8008/mypage3", {
        id: window.sessionStorage.getItem("id"),
      })
      .then((res) => {
        console.log("info3 = ", res.data[0]);
        setMyinfo3(res.data[0]);
      })
      .catch((e) => {
        console.error(e);
      });
    axios
      .post("http://localhost:8008/mypage4", {
        id: window.sessionStorage.getItem("id"),
      })
      .then((res) => {
        console.log("info4 = ", res.data[0]);
        setMyinfo4(res.data[0]);
      })
      .catch((e) => {
        console.error(e);
      });
    axios
      .post("http://localhost:8008/self1percentage")
      .then((self1percentage) => {
        console.log(self1percentage.data[0].SELF1);
        SetTest1Data(self1percentage.data[0]?.SELF1);
      })
      .catch((e) => {
        console.error(e);
      });
    axios
      .post("http://localhost:8008/self2percentage")
      .then((self2percentage) => {
        console.log(self2percentage.data[0].SELF2);
        SetTest2Data(self2percentage.data[0]?.SELF2);
      })
      .catch((e) => {
        console.error(e);
      });
    axios
      .post("http://localhost:8008/self3percentage")
      .then((self3percentage) => {
        console.log(self3percentage.data[0].SELF3);
        SetTest3Data(self3percentage.data[0]?.SELF3);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const delete_user = () => {
    if (window.confirm("회원정보를 삭제하시겠습니까?")) {
      axios.post("http://localhost:8008/delete_user", {
        id: window.sessionStorage.getItem("id"),
      });
      alert("회원정보가 삭제되었습니다.");
      window.sessionStorage.clear();
      navigate("/");
      setloginfalse();
      setlogoutfalse();
    } else {
      return false;
    }
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <motion.div
        className="mypage"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="page_header">
          <div className="page_header_logo">
            <MdAccountCircle style={{ opacity: "0.5" }} />
          </div>

          <div className="page_header_user">{myinfo?.id}님 환영합니다</div>
          <Fade bottom>
            <div className="info_box1_top">
              <div className="info_box1">
                <div className="info_box_title info_box_title1">ID</div>
                <div className="info_box_content info_box_content1">
                  {myinfo?.id}
                </div>
                <div className="info_box_image info_box2_image1">
                  <HiIdentification />
                </div>
              </div>
              <div className="info_box1">
                <div className="info_box_title info_box_title2">E-MAIL</div>
                <div className="info_box_content info_box_content2">
                  {myinfo?.email}
                </div>
                <div className="info_box_image info_box2_image2">
                  <MdEmail />
                </div>
              </div>
              <div className="info_box1">
                <div className="info_box_title info_box_title3">ADRESS</div>
                <div className="info_box_content info_box_content3">
                  {myinfo?.adress}
                </div>
                <div className="info_box_image info_box2_image3">
                  <IoLocationSharp />
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="info_box2_top">
              <div className="info_box2">
                <div className="info_box_title info_box_title1">우울증</div>
                <div className="info_box_content info_box_content1">
                  검사일시: {myinfo2?.date}
                  <div>
                    <React3Dra
                      test1Data={test1Data}
                      test1Data2={myinfo2?.percentage}
                    />
                  </div>
                  <div className="info_box_image info_box_image1">
                    <img src={depressed} />
                  </div>
                </div>
              </div>
              <div className="info_box2">
                <div className="info_box_title info_box_title2">ADHD</div>
                <div className="info_box_content info_box_content2">
                  검사일시: {myinfo2?.date}
                  <div>
                    <React3Dra2
                      test1Data={test2Data}
                      test1Data2={myinfo3?.percentage}
                    />
                  </div>
                </div>
                <div className="info_box_image info_box_image2">
                  <img src={free_icon_adhd} />
                </div>
              </div>
              <div className="info_box2">
                <div className="info_box_title info_box_title3">공황장애</div>
                <div className="info_box_content info_box_content3">
                  검사일시: {myinfo2?.date}
                  <div>
                    <React3Dra3
                      test1Data={test3Data}
                      test1Data2={myinfo4?.percentage}
                    />
                  </div>
                </div>
                <div className="info_box_image info_box_image3">
                  <img src={anxiety} />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="delete_user">
          <div className="btn-area">
            <input type="button" value="회원탈퇴" onClick={delete_user} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Mypage;
