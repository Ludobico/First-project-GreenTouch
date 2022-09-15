import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import useStore from "../store/Store";
import ReactPlayer from "react-player";
import selfscore1_img1 from "../images/selfscore1_img1.png";
import test3_selfscore1_img1 from "../images/test3_selfscore1_img1.png";
import test3_selfscore2_img1 from "../images/test3_selfscore2_img1.png";
import test3_selfscore2_img2 from "../images/test3_selfscore2_img2.png";
import test3_selfscore3_img1 from "../images/test3_selfscore3_img1.png";
import test3_selfscore3_img2 from "../images/test3_selfscore3_img2.png";
import React3D from "./React3D";
import "./Selftest.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

const Selftest3 = () => {
  useEffect(() => {
    axios
      .post("https://greentouch.herokuapp.com/self3")
      .then((res) => {
        Setselftest3_data(res.data);
        console.log(selftest3_data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  const [modalShow, setModalShow] = useState(false);
  const [selftest3_data, Setselftest3_data] = useState([{}]);
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
  const [score1, setScore1] = useState(false);
  const [score2, setScore2] = useState(false);
  const [score3, setScore3] = useState(false);
  const selftest1_result =
    s1 + s2 + s3 + s4 + s5 + s6 + s7 + s8 + s9 + s10 + s11 + s12 + s13;
  let now = new Date();
  let year = now.getFullYear();
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();
  const percentage = ((selftest1_result * 100) / 13).toFixed(2);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">검사결과</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selftest1_result < 5 ? <Selftest3_score1 /> : null}
          {selftest1_result >= 5 && selftest1_result <= 8 ? (
            <Selftest3_score2 />
          ) : null}
          {selftest1_result >= 9 ? <Selftest3_score3 /> : null}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
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

  const Selftest3_score1 = () => {
    // setGrade("A");
    console.log(grade);
    axios.post("https://greentouch.herokuapp.com/self3Score", {
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
        <h1>공황장애의 증상이 발견되지 않았습니다.</h1>
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
          <img src={test3_selfscore1_img1} style={{ width: "200px" }} />
          <div>
            <p>규칙적으로 밖으로나가 10분간 스트레칭을 하면 좋습니다.</p>
            <p>심호흡을 하루 세번 5회를 하시면 좋습니다.</p>
            <p>요가, 마사지, 아로마 세라피 등 운동을 하면 좋습니다.</p>
            <p>두피 마사지를 하면 예방에 좋습니다.</p>
          </div>
        </div>
        <br />
        <h3>다른 회원과 결과를 비교해보세요.</h3>
        <React3D percentageSelf3={percentage} />
      </div>
    );
  };
  const Selftest3_score2 = () => {
    // setGrade("B");
    console.log(grade);
    axios.post("https://greentouch.herokuapp.com/self3Score", {
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
        <h3>공황장애 의심증세를 보입니다.</h3>
        <br />
        <h4>
          아래의 증상이 하루 10분이상 지속된다면 병원에서의 상담을 권합니다.
        </h4>
        <br />
        <div style={{ display: "flex" }}>
          <img src={test3_selfscore2_img1} style={{ width: "200px" }} />
          <div>
            <p>두근거림, 심장이 마구 뛰거나 맥박이 빨라지는 느낌</p>
            <p>손발이나 몸이 떨림</p>
            <p>숨이 가빠지거나 막힐 듯한 느낌</p>
            <p>가슴 부위의 통증이나 불쾌감</p>
            <p>메슥거리거나 속이 불편함</p>
          </div>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <img src={test3_selfscore2_img2} style={{ width: "200px" }} />
          <div>
            <p>비현실감, 혹은 이인감</p>
            <p>자제력을 잃을것 같아서 공포스러움</p>
            <p>이상한 감각(손발이 저릿하거나 마비되는 것 같은 느낌)</p>
            <p>오한이나 몸이 화끈거림</p>
          </div>
        </div>
        <br />
        <h3>다른 회원과 결과를 비교해보세요.</h3>
        <React3D percentageSelf3={percentage} />
      </div>
    );
  };
  const Selftest3_score3 = () => {
    // setGrade("C");
    console.log(grade);
    axios.post("https://greentouch.herokuapp.com/self3Score", {
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
        <h3>심각한 수치입니다. 즉시 전문가와의 상담을 권합니다.</h3>
        <br />
        <h4>우울증 자가테스트 검사도 해보시는걸 권장드립니다.</h4>
        <br />
        <div style={{ display: "flex" }}>
          <img src={test3_selfscore3_img1} style={{ width: "200px" }} />
          <div>
            <p>공황 발작은 불안 장애의 일부로 발생할 수 있습니다.</p>
            <p style={{ fontSize: "15px" }}>
              기타 정신 장애( 우울증 등)가 있는 사람에서도 공황 발작이 발생할 수
              있습니다.
            </p>
            <span>
              일부 공황 발작은 특정 상황에 반응하여 발생하기도 합니다.
            </span>
            <p style={{ fontSize: "15px" }}>
              예를 들면, 뱀에 대한 공포가 있는 사람은 뱀을 볼 때 공황 상태를
              겪을 수 있습니다.
            </p>
            <p>
              공황 장애가 발생할 가능성은 여성이 남성에 비해 약 2배 더 높습니다.
            </p>
          </div>
        </div>
        <br />
        <div style={{ display: "flex" }}>
          <img src={test3_selfscore3_img2} style={{ width: "200px" }} />
          <div>
            <p>공황 발작은 일반적이며, 매년 최소 11%의 성인에게 나타납니다.</p>
            <span>
              대부분의 사람들은 치료 없이 공황 발작으로부터 회복되지만
            </span>
            <p>이들 중 소수는 공황 장애로 발전합니다.</p>
            <p>
              공황 장애는 공황 발작이 더 심해지거나 발작을 피하기 위해 행동을
              바꾸겠다고 걱정하는 경우를 말합니다.
            </p>
          </div>
        </div>
        <br />
        <h3>다른 회원과 결과를 비교해보세요.</h3>
        <React3D percentageSelf3={percentage} />
      </div>
    );
  };

  return (
    <div className="selftest1_div">
      <div className="selftest_top_div">
        <h1>공황장애 자가진단</h1>
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
                {selftest3_data[0]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s1"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s2func}>
              <div className="selftest_content">
                {selftest3_data[1]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s2"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s3func}>
              <div className="selftest_content">
                {selftest3_data[2]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s3"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s4func}>
              <div className="selftest_content">
                {selftest3_data[3]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s4"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <div className="selftest_test" onChange={s5func}>
              <div className="selftest_content">
                {selftest3_data[4]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s5"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s6func}>
              <div className="selftest_content">
                {selftest3_data[5]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s6"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s7func}>
              <div className="selftest_content">
                {selftest3_data[6]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s7"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s8func}>
              <div className="selftest_content">
                {selftest3_data[7]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s8"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <div className="selftest_test" onChange={s9func}>
              <div className="selftest_content">
                {selftest3_data[8]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s9"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s10func}>
              <div className="selftest_content">
                {selftest3_data[9]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s10"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s11func}>
              <div className="selftest_content">
                {selftest3_data[10]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s11"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
            <br />
            <div className="selftest_test" onChange={s12func}>
              <div className="selftest_content">
                {selftest3_data[11]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s12"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
                </label>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ display: "block" }}>
            <div className="selftest_test" onChange={s13func}>
              <div className="selftest_content">
                {selftest3_data[12]?.QUESTION}
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
                  <div className="rad-text">NO</div>
                </label>

                <label className="rad-label">
                  <input
                    type="radio"
                    className="rad-input"
                    name="s13"
                    value="1"
                  />
                  <div className="rad-design"></div>
                  <div className="rad-text">YES</div>
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

export default Selftest3;
