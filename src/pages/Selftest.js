import { useState, useEffect } from "react";
import axios from "../../node_modules/axios/index";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useStore from "../store/Store";
import ChatAPI from "./ChatAPI";
import ReactPlayer from "react-player";
import selfscore1_img1 from "../images/selfscore1_img1.png";
import selfscore1_img2 from "../images/selfscore1_img2.png";
import selfscore2_img1 from "../images/selfscore2_img1.png";
import selfscore2_img2 from "../images/selfscore2_img2.png";
import selfscore3_img1 from "../images/selfscore3_img1.png";
import selfscore3_img2 from "../images/selfscore3_img2.png";
import React3D from "./React3D";
import "./Selftest.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

//우울증 설명

const Selftest = () => {
  useEffect(() => {
    axios
      .post("https://greentouch.herokuapp.com/self1")
      .then((res) => {
        Setselftest1_data(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  const [modalShow, setModalShow] = useState(false);
  const [grade, setGrade] = useState("");
  const [selftest1_data, Setselftest1_data] = useState([{}]);
  const [s1, sets1] = useState(0);
  const [s2, sets2] = useState(0);
  const [s3, sets3] = useState(0);
  const [s4, sets4] = useState(0);
  const [s5, sets5] = useState(0);
  const [s6, sets6] = useState(0);
  const [s7, sets7] = useState(0);
  const [s8, sets8] = useState(0);
  const [s9, sets9] = useState(0);
  const [s10, sets10] = useState(0);
  const [s11, sets11] = useState(0);
  const [s12, sets12] = useState(0);
  const [s13, sets13] = useState(0);
  const [s14, sets14] = useState(0);
  const [s15, sets15] = useState(0);
  const [s16, sets16] = useState(0);
  const [s17, sets17] = useState(0);
  const [s18, sets18] = useState(0);
  const [s19, sets19] = useState(0);
  const [s20, sets20] = useState(0);
  const { user_location } = useStore();
  const selftest1_result =
    s1 +
    s2 +
    s3 +
    s4 +
    s5 +
    s6 +
    s7 +
    s8 +
    s9 +
    s10 +
    s11 +
    s12 +
    s13 +
    s14 +
    s15 +
    s16 +
    s17 +
    s18 +
    s19 +
    s20;

  let now = new Date();
  let year = now.getFullYear();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();
  const percentage = ((selftest1_result * 100) / 60).toFixed(2);

  const Selftest1_score1 = () => {
    // setGrade("A");
    console.log(grade);
    axios.post("https://greentouch.herokuapp.com/self1Score", {
      id: window.sessionStorage.getItem("id"),
      score: selftest1_result,
      grade: "A",
      date: `${year}년 ${todayMonth}월 ${todayDate}일`,
      percentage: `${percentage}`,
    });
    return (
      <div>
        <div>
          검사 일시: {year}년 {todayMonth}월 {todayDate}일
        </div>
        <h1>우울증의 증상이 발견되지 않았습니다.</h1>
        <br />
        <h4>아래의 항목을 보고 실천해 보세요.</h4>
        <br />
        <div style={{ display: "flex" }}>
          <img src={selfscore1_img1} style={{ width: "200px" }} />
          <div>
            <p>
              규칙적인 수면과 식습관을 지켜 생체리듬의 균형을 잘 잡아야 합니다.
            </p>
            <p>수면시 주변의 소음을 최소화합니다.</p>
            <p>자기전 카페인이 들어간 음식을 자재하십시오</p>
            <p>아침,점심,저녁은 대략 5시간 간격으로 먹도록 합시다.</p>
          </div>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <img src={selfscore1_img2} style={{ width: "200px" }} />
          <div>
            <p>행복했던 시절의 사진을 보면서 당시의 기억을 떠올려보세요.</p>
            <p>약간 느리게 걸으면서 산책을 하세요.</p>
            <p>따뜻한 목욕을 하세요.</p>
            <p>마음 맞는 친구에게 스트레스 상황에 관해 얘기해보세요</p>
          </div>
        </div>
        <br />
        <h3>다른 회원과 결과를 비교해보세요.</h3>
        <React3D percentageSelf1={percentage} />
      </div>
    );
  };
  const Selftest1_score2 = () => {
    // setGrade("B");
    console.log(grade);
    axios.post("https://greentouch.herokuapp.com/self1Score", {
      id: window.sessionStorage.getItem("id"),
      score: selftest1_result,
      grade: "B",
      date: `${year}년 ${todayMonth}월 ${todayDate}일`,
      percentage: `${percentage}`,
    });
    return (
      <div>
        <div>
          검사 일시: {year}년 {todayMonth}월 {todayDate}일
        </div>
        <h1>약간의 우울증 증세가 보입니다.</h1>
        <br />
        <h4>채팅을 통해 심리치료 및 상담을 받아보세요.</h4>
        <div>
          {" "}
          <ReactPlayer
            className="player"
            url={"https://youtu.be/-gokD9owEcQ"}
            width="600px"
            heigth="200px"
            playing={false}
            muted={true}
            controls={true}
          />
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <img src={selfscore2_img1} style={{ width: "200px" }} />
          <div>
            <h5 style={{ fontWeight: "700" }}>전조증상</h5>
            <p>무기력 & 의욕없음</p>
            <p>식욕이 너무 줄어들거나 많아지거나</p>
            <p>잠을 계속 못 자거나 너무 많이 잘 때</p>
          </div>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <img src={selfscore2_img2} style={{ width: "200px" }} />
          <div>
            <p>내 감정을 일기를 통해 분출해 보세요.</p>
            <p>음주 및 흡연의 양을 조절하거나 끊어보세요.</p>
            <p>친구와 함께 취미생활을 해보세요.</p>
            <p>2주 이상 우울감이 계속되면 병원을 방문하십시오.</p>
          </div>
        </div>
        <br />
        <h3>다른 회원과 결과를 비교해보세요.</h3>
        <React3D percentageSelf1={percentage} />
      </div>
    );
  };
  const Selftest1_score3 = () => {
    // setGrade("C");
    console.log(grade);
    axios.post("https://greentouch.herokuapp.com/self1Score", {
      id: window.sessionStorage.getItem("id"),
      score: selftest1_result,
      grade: "C",
      date: `${year}년 ${todayMonth}월 ${todayDate}일`,
      percentage: `${percentage}`,
    });
    return (
      <div>
        <div>
          검사 일시: {year}년 {todayMonth}월 {todayDate}일
        </div>
        <h2>중증 이상의 우울증 증세가 보입니다.</h2>
        <h4> 이런 증상이 지속되고 반복된다면 전문가의 도움이 필요합니다.</h4>
        <br />
        <h5>페이지 하단에 지역에 대한 병원위치가 나와있습니다.</h5>
        <br />
        <div style={{ display: "flex" }}>
          <img src={selfscore3_img1} style={{ width: "200px" }} />
          <div>
            <span>가까운 약국에서 항우울제를 처방받아</span>
            <p>항우울제를 7주 이상 복용하십시오.</p>
            <p style={{ fontSize: "15px" }}>
              자해 혹은 자살 기도를 했다면 병원을 방문하거나 채팅으로 상담을
              해보십시오.
            </p>
            <p>상담 후 병원방문을 권장합니다.</p>
          </div>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <img src={selfscore3_img2} style={{ width: "200px" }} />
          <div>
            <span>일상생활에서 할 수 있는 작은 행동 중</span>
            <p>실현 가능한 목표를 세우십시오.</p>
            <p>
              환자 주변 사람들은 환자가 가지고 있는 강점을 지속적으로 이야기
              해주십시오
            </p>
            <span>
              육류 및 등푸른 생선은 행복한 느낌을 들게 만드는 트립토판
            </span>
            <p>이 많이 들어있어 우울증 예방에 도움이 됩니다.</p>
          </div>
        </div>
        <br />
        <h3>다른 회원과 결과를 비교해보세요.</h3>
        <React3D percentageSelf1={percentage} />
      </div>
    );
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <div>
        {console.log(selftest1_result)}
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              검사결과
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selftest1_result < 30 ? <Selftest1_score1 /> : null}
            {selftest1_result >= 30 && selftest1_result <= 40 ? (
              <Selftest1_score2 />
            ) : null}
            {selftest1_result >= 41 ? <Selftest1_score3 /> : null}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  const s1func = (e) => {
    sets1(parseInt(e.target.value));
  };
  const s2func = (e) => {
    sets2(parseInt(e.target.value));
  };
  const s3func = (e) => {
    sets3(parseInt(e.target.value));
  };
  const s4func = (e) => {
    sets4(parseInt(e.target.value));
  };
  const s5func = (e) => {
    sets5(parseInt(e.target.value));
  };
  const s6func = (e) => {
    sets6(parseInt(e.target.value));
  };
  const s7func = (e) => {
    sets7(parseInt(e.target.value));
  };
  const s8func = (e) => {
    sets8(parseInt(e.target.value));
  };
  const s9func = (e) => {
    sets9(parseInt(e.target.value));
  };
  const s10func = (e) => {
    sets10(parseInt(e.target.value));
  };
  const s11func = (e) => {
    sets11(parseInt(e.target.value));
  };
  const s12func = (e) => {
    sets12(parseInt(e.target.value));
  };
  const s13func = (e) => {
    sets13(parseInt(e.target.value));
  };
  const s14func = (e) => {
    sets14(parseInt(e.target.value));
  };
  const s15func = (e) => {
    sets15(parseInt(e.target.value));
  };
  const s16func = (e) => {
    sets16(parseInt(e.target.value));
  };
  const s17func = (e) => {
    sets17(parseInt(e.target.value));
  };
  const s18func = (e) => {
    sets18(parseInt(e.target.value));
  };
  const s19func = (e) => {
    sets19(parseInt(e.target.value));
  };
  const s20func = (e) => {
    sets20(parseInt(e.target.value));
  };
  return (
    <div className="selftest1_div">
      <div className="selftest_top_div">
        <h1>우울증 자가진단</h1>
        <p>@GREENTORUCH</p>
      </div>
      <div className="selftest">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          allowTouchMove={false}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mbti_mySwiper"
        >
          <SwiperSlide
            style={{ display: "block", paddingTop: "35px", width: "70vw" }}
          >
            <div className="selftest_test" onChange={s1func}>
              <div className="selftest_content">
                {selftest1_data[0]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s1"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s1"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s1"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s1"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s2func}>
              <div className="selftest_content">
                {selftest1_data[1]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s2"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s2"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s2"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s2"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s3func}>
              <div className="selftest_content">
                {selftest1_data[2]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s3"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s3"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s3"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s3"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s4func}>
              <div className="selftest_content">
                {selftest1_data[3]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s4"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s4"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s4"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s4"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <div className="selftest_test" onChange={s5func}>
              <div className="selftest_content">
                {selftest1_data[4]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s5"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s5"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s5"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s5"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s6func}>
              <div className="selftest_content">
                {selftest1_data[5]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s6"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s6"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s6"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s6"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s7func}>
              <div className="selftest_content">
                {selftest1_data[6]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s7"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s7"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s7"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s7"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s8func}>
              <div className="selftest_content">
                {selftest1_data[7]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s8"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s8"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s8"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s8"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <div className="selftest_test" onChange={s9func}>
              <div className="selftest_content">
                {selftest1_data[8]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s9"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s9"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s9"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s9"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s10func}>
              <div className="selftest_content">
                {selftest1_data[9]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s10"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s10"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s10"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s10"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s11func}>
              <div className="selftest_content">
                {selftest1_data[10]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s11"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s11"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s11"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s11"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s12func}>
              <div className="selftest_content">
                {selftest1_data[11]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s12"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s12"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s12"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s12"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <div className="selftest_test" onChange={s13func}>
              <div className="selftest_content">
                {selftest1_data[12]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s13"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s13"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s13"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s13"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s14func}>
              <div className="selftest_content">
                {selftest1_data[13]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s14"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s14"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s14"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s14"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s15func}>
              <div className="selftest_content">
                {selftest1_data[14]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s15"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s15"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s15"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s15"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s16func}>
              <div className="selftest_content">
                {selftest1_data[15]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s16"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s16"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s16"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s16"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <div className="selftest_test" onChange={s17func}>
              <div className="selftest_content">
                {selftest1_data[16]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s17"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s17"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s17"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s17"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s18func}>
              <div className="selftest_content">
                {selftest1_data[17]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s18"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s18"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s18"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s18"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s19func}>
              <div className="selftest_content">
                {selftest1_data[18]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s19"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s19"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s19"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s19"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s20func}>
              <div className="selftest_content">
                {selftest1_data[19]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s20"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s20"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s20"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s20"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
              <div className="btn-area">
                <input
                  type="button"
                  value="제출하기"
                  className="selftest1_btn"
                  onClick={() => setModalShow(true)}
                  style={{
                    width: "150px",
                    height: "70px",
                    marginBottom: "20px",
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <br />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <ChatAPI />
    </div>
  );
};

export default Selftest;
