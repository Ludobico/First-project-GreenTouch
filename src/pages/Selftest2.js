import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import selfscore1_img1 from "../images/selfscore1_img1.png";
import test2_selfscore1_img1 from "../images/test2_selfscore1_img1.png";
import test2_selfscore2_img1 from "../images/test2_selfscore2_img1.png";
import test2_selfscore2_img2 from "../images/test2_selfscore2_img2.png";
import test2_selfscore2_img3 from "../images/test2_selfscore2_img3.png";
import test2_selfscore2_img4 from "../images/test2_selfscore2_img4.png";
import test2_selfscore3_img1 from "../images/test2_selfscore3_img1.png";
import test2_selfscore3_img2 from "../images/test2_selfscore3_img2.png";
import React3D from "./React3D";
import "./Selftest.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "./Modal.css";

//adhd 설명
const Selftest2 = () => {
  useEffect(() => {
    axios
      .post("http://localhost:8008/self2")
      .then((res) => {
        Setselftest2_data(res.data);
        console.log(selftest2_data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  const [modalShow, setModalShow] = useState(false);
  const [selftest2_data, Setselftest2_data] = useState([{}]);
  const [grade, setGrade] = useState("");
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

  const Selftest2_score1 = () => {
    // setGrade("A");
    console.log(grade);
    axios.post("http://localhost:8008/self2Score", {
      id: window.sessionStorage.getItem("id"),
      score: selftest1_result,
      grade: "A",
      date: `${year}년 ${todayMonth}월 ${todayDate}일`,
      percentage: `${percentage}`,
    });
    return (
      <div>
        <div>
          <div className="modalWrap">
            <div className="testDate">
              {/* {year}년 {todayMonth}월 {todayDate}일 */}
            </div>
            <div className="resultCon3 moRight moCon31A"></div>
            <div className="resultCon2 moLeft moCon21A"></div>
            <div className="resultCon1 moRight moCon11A">
              <h1 align="right">
                숙면은 <br />
                최고의 보약
              </h1>
            </div>
            <div className="resultCon1 moLeft moCon12A">
              <h1>
                식사는 <br /> 5시간마다 <br /> 규칙적으로
              </h1>
            </div>
            <div className="resultCon2 moRight moCon22A"></div>
            <div className="resultCon3 moLeft moCon32A">
              <h2>
                지나친
                <br /> 카페인은
                <br /> 금물
              </h2>
            </div>
            <div className="resultCon3 moRight moCon33A"></div>
            <div className="resultCon2 moLeft moCon23A">
              <h1>
                가끔은 <br />
                쉬는 것도 <br />
                나쁘지 않지!
              </h1>
            </div>
          </div>
        </div>
        <br />
        <h3>다른 회원과 결과를 비교해보세요.</h3>
        <React3D percentageSelf2={percentage} />
      </div>
    );
  };
  const Selftest2_score2 = () => {
    // setGrade("B");
    console.log(grade);
    axios.post("http://localhost:8008/self2Score", {
      id: window.sessionStorage.getItem("id"),
      score: selftest1_result,
      grade: "B",
      date: `${year}년 ${todayMonth}월 ${todayDate}일`,
      percentage: `${percentage}`,
    });
    return (
      <div>
        <div className="modalWrap">
          <div className="testDate">
            {/* {year}년 {todayMonth}월 {todayDate}일 */}
          </div>
          <div className="resultCon3 moRight moCon31B"></div>
          <div className="resultCon2 moLeft moCon21B"></div>
          <div className="resultCon1 moRight moCon11B">
            <h1>과잉행동-충동형</h1>
            <h2>ADHD-PH</h2>
          </div>
          <div className="resultCon1 moLeft moCon12B">
            <h1>주의력 결핍형</h1>
            <h2> ADHD-PI</h2>
          </div>
          <div className="resultCon2 moRight moCon22B" align="right">
            <h1>혼합형</h1>
            <h2> ADHD-C</h2>
            <p>
              주의력 결핍형과 과잉행동-충동형의 특징을 모두 가지고 있는 증상
            </p>
          </div>
          <div className="resultCon3 moLeft moCon32B"></div>
          <div className="resultCon3 moRight moCon33B"></div>
          <div className="resultCon2 moLeft moCon23B">
            <h1>
              전두엽 <br />
              단련시켜 볼까?
            </h1>
          </div>
        </div>
        <br />
        <h3>다른 회원과 결과를 비교해보세요.</h3>
        <React3D percentageSelf2={percentage} />
      </div>
    );
  };
  const Selftest2_score3 = () => {
    // setGrade("C");
    console.log(grade);
    axios.post("http://localhost:8008/self2Score", {
      id: window.sessionStorage.getItem("id"),
      score: selftest1_result,
      grade: "C",
      date: `${year}년 ${todayMonth}월 ${todayDate}일`,
      percentage: `${percentage}`,
    });
    return (
      <div>
        <div className="modalWrap">
          <div className="testDate">
            {/* {year}년 {todayMonth}월 {todayDate}일 */}
          </div>
          <div className="resultCon3 moRight moCon31C"></div>
          <div className="resultCon2 moLeft moCon21C"></div>
          <div className="resultCon1 moRight moCon11C" align="right">
            <h2>악화되기 전에...</h2>
            <h1>약물치료</h1>
          </div>
          <div className="resultCon1 moLeft moCon12C">
            <h1>CAT 검사</h1>
          </div>
          <div className="resultCon2 moRight moCon22C">
            <h1>메틸페니데이트 계열</h1>
            <h2>
              콘서타
              <br />
              메디키넷
              <br />
              메타데이트
            </h2>
          </div>
          <div className="resultCon3 moLeft moCon32C"></div>
          <div className="resultCon3 moRight moCon33C"></div>
          <div className="resultCon2 moLeft moCon23C">
            <h1>NRI 계열</h1>
            <h2>
              아토목세틴
              <br />
              클로니딘
            </h2>
          </div>
        </div>
        <br />
        <h3>다른 회원과 결과를 비교해보세요.</h3>
        <React3D percentageSelf2={percentage} />
      </div>
    );
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          {selftest1_result < 30 ? <Selftest2_score1 /> : null}
          {selftest1_result >= 30 && selftest1_result <= 40 ? (
            <Selftest2_score2 />
          ) : null}
          {selftest1_result >= 41 ? <Selftest2_score3 /> : null}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  // return <div>{selftest2_data[0].QUESTION}</div>;
  return (
    <div className="selftest1_div">
      <div className="selftest_top_div">
        <h1>ADHD 자가진단</h1>
        <p>@GREENTOUCH</p>
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
          <SwiperSlide style={{ display: "block", paddingTop: "35px" }}>
            <div className="selftest_test" onChange={s1func}>
              <div className="selftest_content">
                {selftest2_data[0]?.QUESTION}
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
                {selftest2_data[1]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s2"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s2"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s2"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s2"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s3func}>
              <div className="selftest_content">
                {selftest2_data[2]?.QUESTION}
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
                {selftest2_data[3]?.QUESTION}
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
                {selftest2_data[4]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s5"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s5"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s5"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s5"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s6func}>
              <div className="selftest_content">
                {selftest2_data[5]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s6"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s6"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s6"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s6"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s7func}>
              <div className="selftest_content">
                {selftest2_data[6]?.QUESTION}
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
                {selftest2_data[7]?.QUESTION}
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
                {selftest2_data[8]?.QUESTION}
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
                {selftest2_data[9]?.QUESTION}
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
                {selftest2_data[10]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s11"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s11"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s11"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s11"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s12func}>
              <div className="selftest_content">
                {selftest2_data[11]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s12"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s12"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s12"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s12"
                    value="3"
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
                {selftest2_data[12]?.QUESTION}
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
                {selftest2_data[13]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s14"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s14"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s14"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s14"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s15func}>
              <div className="selftest_content">
                {selftest2_data[14]?.QUESTION}
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
                {selftest2_data[15]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s16"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s16"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s16"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s16"
                    value="3"
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
                {selftest2_data[16]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s17"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s17"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s17"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s17"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s18func}>
              <div className="selftest_content">
                {selftest2_data[17]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s18"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s18"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s18"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s18"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s19func}>
              <div className="selftest_content">
                {selftest2_data[18]?.QUESTION}
              </div>
              <div className="selftest_radio">
                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s19"
                    value="0"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">아니다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s19"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">가끔 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s19"
                    value="2"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">자주 그렇다</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s19"
                    value="3"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">항상 그렇다</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s20func}>
              <div className="selftest_content">
                {selftest2_data[19]?.QUESTION}
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
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Selftest2;
