import React from "react";
import { useEffect, useState } from "react";
import React3D from "./React3D";
import "./Modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const selftest1_result = 30;

const Testmodal = () => {
  const [modalShow, setModalShow] = useState(false);
  const Selftest2_score1 = () => {
    return (
      <div>
        <div className="modalWrap">
          <div className="testDate">YYYY MM DD</div>
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
        <br />
        <h3>다른 회원과 결과를 비교해보세요.</h3>
        <React3D />
      </div>
    );
  };
  const Selftest2_score2 = () => {
    return (
      <div>
        <div className="modalWrap">
          <div className="testDate">YYYY MM DD</div>
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
        <React3D />
      </div>
    );
  };

  const Selftest2_score3 = () => {
    return (
      <div>
        <div className="modalWrap">
          <div className="testDate">YYYY MM DD</div>
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
        <React3D />
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
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            TEST RESULT
          </Modal.Title>
        </Modal.Header>
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
  return (
    <div>
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
      <div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
};

export default Testmodal;
