import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import ReactPlayer from "react-player";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Semain.css";
import { useNavigate } from "react-router-dom";
import test3 from "../images/test3.png";
import maintitle from "../images/se0_img/maintitle.jpg";
import maintitle2 from "../images/se0_img/maintitle2.jpg";
import maintitle3 from "../images/se0_img/maintitle3.jpg";
import ChatAPI from "./ChatAPI";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Semainswiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Semain = (props) => {
  const navigate = useNavigate();
  const onClickBoard = () => {
    navigate("/main");
  };
  const navigateDep = useNavigate();
  const navigatePanic = useNavigate();
  const navigateadhd = useNavigate();
  const navigatemypage = useNavigate();
  const mypageLogin = window.sessionStorage.getItem("id");

  const GotoDep = () => {
    navigateDep("/dep");
  };

  const GotoPanic = () => {
    navigatePanic("/panic");
  };

  const GoToadhd = () => {
    navigateadhd("/adhd");
  };

  const scrollToTest = () => {
    document
      .getElementById("mainHypeImgWrap1")
      .scrollIntoView({ behavior: "smooth" });
  };

  const mypagebutton = () => {
    if (mypageLogin === null) {
      alert("로그인후 이용가능");
      return false;
    } else {
      navigatemypage("/mypage");
    }
  };
  return (
    <>
      <Header></Header>
      <motion.div
        className="mainWrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mainItrImg">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={800}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={maintitle} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={maintitle2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={maintitle3} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mainBtnWrap">
          <button className="mainBtn" onClick={scrollToTest}>
            <div className="mBtn mBtn1"></div>
            <div className="mBtnText">SELF TEST</div>
          </button>
          <button className="mainBtn" onClick={onClickBoard}>
            <div className="mBtn mBtn3"></div>
            <div className="mBtnText">COMMUNITY</div>
          </button>
          <button className="mainBtn" onClick={mypagebutton}>
            <div className="mBtn mBtn2"></div>
            <div className="mBtnText">MY ACCOUNT</div>
          </button>
        </div>
        <div className="mainVdoWrap">
          <div className="mainVdo mVdo1">
            <ReactPlayer
              className="player1"
              url={"https://www.youtube.com/watch?v=n3Xv_g3g-mA"}
              width="34vw"
              heigth="40vh"
              playing={false}
              muted={true}
              controls={true}
            />
          </div>
          <div className="mainVdo mVdo2">
            <ReactPlayer
              className="player2"
              url={"https://www.youtube.com/watch?v=WPPPFqsECz0"}
              width="34vw"
              heigth="40vh"
              playing={false}
              muted={true}
              controls={true}
            />
          </div>
        </div>
        <div className="mainHypeImgWrap" id="mainHypeImgWrap1">
          <div className="imgWrap imgWrap1" onClick={GotoDep}>
            <div className="mainHypeImg img1"></div>
            <div className="mainImgText Text1">우울증</div>
          </div>
          <div className="imgWrap imgWrap2" onClick={GoToadhd}>
            <div className="mainHypeImg img2 img21"></div>
            <div className="mainImgText Text2">ADHD</div>
          </div>
          <div className="imgWrap imgWrap2" onClick={GotoPanic}>
            <div className="mainHypeImg img2 img22"></div>
            <div className="mainImgText Text3">공황장애</div>
          </div>
        </div>
        <div className="mainTipText">
          일상 속의 작은 변화가
          <br />
          당신에게 도움을 줄 거예요!
        </div>
        <div className="mainTipWrap">
          <div className="mainTip tip1">
            <div className="mainTipTitle">가벼운 산책</div>
            <div className="mainTipContent">스트레스 지수를 낮춰줘요</div>
            <div className="mainTipIcon icon1"></div>
          </div>
          <div className="mainTip tip2">
            <div className="mainTipTitle">충분한 호흡</div>
            <div className="mainTipContent">
              호흡을 통해
              <br />
              마음을 안정시키세요
            </div>
            <div className="mainTipIcon icon2"></div>
          </div>
          <div className="mainTip tip3">
            <div className="mainTipTitle">음악 감상</div>
            <div className="mainTipContent">
              자신이 좋아하는 장르의
              <br />
              음악을 들어보세요
            </div>
            <div className="mainTipIcon icon3"></div>
          </div>
          <div className="mainTip tip4">
            <div className="mainTipTitle">커피 한 잔</div>
            <div className="mainTipContent">
              소량의 카페인이 ADHD
              <br />
              완화에 도움을 줄 거예요
            </div>
            <div className="mainTipIcon icon4"></div>
          </div>
          <div className="mainTip tip5">
            <div className="mainTipTitle">대화</div>
            <div className="mainTipContent">
              마음이 맞는 상대와
              <br />
              대화를 해보세요
            </div>
            <div className="mainTipIcon icon5"></div>
          </div>
        </div>
        <div className="mainLineWrap">
          <div className="mainLineContent lineCon1"></div>
          <div className="mainLineContent lineCon2"></div>
          <div className="mainLineContent lineCon3"></div>
          <div className="mainLineContent lineCon4"></div>
          <div className="mainLineContent lineCon5"></div>
          <div className="mainLineContent lineCon6"></div>
        </div>
        <div>{/* <ChatAPI /> */}</div>
      </motion.div>
    </>
  );
};

export default Semain;
