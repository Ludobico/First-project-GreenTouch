import "./depression2.css?after";
import { MdArrowCircleUp, MdTextsms } from "react-icons/md";
import Header from "./Header";
import { useState, useRef } from "react";
import Comfort_modal from "./Comfort_modal";
import Selftest2 from "./Selftest2";
import KakakoMap from "./KakakoMap";

import useStore from "../store/Store";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCube, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import "./font.css";
import Annoying3 from "../images/ADHD/Annoying3.jpg";
import treatmentBackground from "../images/ADHD/treatmentBackground.png";
import { GiLoveInjection } from "react-icons/gi";
import { GiAmplitude } from "react-icons/gi"; //새로 추가
import { RiVoiceRecognitionLine } from "react-icons/ri";
import { FaDiagnoses } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa"; //새로 추가
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import LoadingSpin from "react-loading-spin";
import "./ADHD.css";

const Depression = () => {
  const depressionRef = useRef();
  const { user_location } = useStore();
  const depression1 = () => {
    document
      .getElementById("show-desc1")
      .scrollIntoView({ behavior: "smooth" });
  };
  const depression2 = () => {
    document.getElementById("flag2").scrollIntoView({ behavior: "smooth" });
  };
  const depression3 = () => {
    document.getElementById("flag3").scrollIntoView({ behavior: "smooth" });
  };
  const depression4 = () => {
    document.getElementById("flag4").scrollIntoView({ behavior: "smooth" });
  };
  const depression5 = () => {
    document
      .getElementById("show-desc2")
      .scrollIntoView({ behavior: "smooth" });
  };
  const goToTop = () => {
    document
      .getElementById("head_swiper")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bodyTag" align="center">
        <article className="bodyarticle">
          <div id="head_swiper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={800}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper_dep"
            >
              <SwiperSlide id="swiper_article1">
                <img
                  src={require("../images/ADHD/adhd_logo.png")}
                  alt="우울증 로고2"
                ></img>
              </SwiperSlide>
              <SwiperSlide id="swiper_article2">
                <img
                  src={require("../images/ADHD/stethoscope-icon-ge3ac584a5_1280.png")}
                  alt="청진기"
                ></img>
              </SwiperSlide>
              <SwiperSlide id="swiper_article3">
                <img
                  src={require("../images/ADHD/ADHD_LOGO2.png")}
                  alt="셀프케어"
                ></img>
              </SwiperSlide>
            </Swiper>
          </div>

          <div id="index_btn_adhd">
            <button className="mainBtn" onClick={depression1}>
              <div className="mBtn mBtn1"></div>
              <div className="mBtnText">ADHD란?</div>
            </button>
            <button className="mainBtn" onClick={depression5}>
              <div className="mBtn mBtn5"></div>
              <div className="mBtnText">원인</div>
            </button>
            <button className="mainBtn" onClick={depression2}>
              <div className="mBtn mBtn2"></div>
              <div className="mBtnText">치료법</div>
            </button>
            <button className="mainBtn" onClick={depression3}>
              <div className="mBtn mBtn3"></div>
              <div className="mBtnText">식이요법</div>
            </button>
            <button className="mainBtn" onClick={depression4}>
              <div className="mBtn mBtn4"></div>
              <div className="mBtnText">자가진단</div>
            </button>
          </div>

          <div id="flag1"></div>
          <div id="desccover">
            <Fade left>
              <div id="show-desc1">
                <div className="desc1_content">
                  <h1 id="headline1">ADHD</h1>
                  <div className="exp1">
                    <div align="left">
                      {" "}
                      주의력 결핍 과다행동 장애
                      <br />
                      (Attention-Deficit/Hyperactivity Disorder)
                    </div>
                  </div>
                  <div className="exp_bottom">
                    <div className="exp_img">
                      <p>
                        주의력 결핍 과잉행동장애(ADHD)는{" "}
                        <span className="exp1_span">
                          <br />
                          산만함, 과잉행동, 충동성
                        </span>
                        을 특징으로 <br />
                        하는 질환입니다.
                      </p>
                      <p>
                        대략 3~4 : 1 정도의 비율로 여성보다 <br />
                        남성에서 흔하게 발견됩니다.
                      </p>
                      <p>
                        성인기의 산만함이나 충동성에 대해 <br /> 별개의 시기에
                        발현한 성인 ADHD로
                        <br /> 진단할 것인가, 이전 시기에 발현한 <br />
                        ADHD의 잔재 증상으로 이해할 것인가,
                        <br />
                        <p>
                          혹은 전혀 다른 별개의 질환에 의한 증상이 <br /> 집중력
                          장애의 형태로 나타난 것인가에 <br />
                          대해서는 현재까지도 활발하게 논의되고
                          <br /> 있습니다.
                        </p>
                      </p>
                    </div>
                    <Fade right>
                      <div className="desc1_div_img">
                        <img id="pic1" src={Annoying3} alt="Depression1" />
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
            <div>
              <div id="show-desc2">
                <div className="outline_circle">
                  <LoadingSpin
                    duration="20s"
                    width="20px"
                    timingFunction="ease-in-out"
                    direction="alternate"
                    size="580px"
                    primaryColor="#d3d3d3"
                    secondaryColor="#fff"
                    animationDuration="4s"
                    numberOfRotationsInAnimation={1}
                  />
                  <div className="center_circle">
                    <div className="center_circle_logo"></div>
                    <div className="center_circle_content1">WHY?</div>
                  </div>
                  <Fade right>
                    <div className="gene">
                      <img src={require("../images/ADHD/adhdReason1.png")} />
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="gene_content">
                      <div className="gene_content_title">유전적 요인</div>
                      <p>ADHD는 높은 유전성을 가지고 있습니다.</p>
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="neurological">
                      <img src={require("../images/ADHD/adhdReason2.png")} />
                    </div>
                  </Fade>
                  <Fade bottom>
                    <div className="neurological_content">
                      <div className="neurological_content_title">
                        신경학적 요인
                      </div>
                      <p>
                        도파민과 노르에피네프린 등의
                        <br />
                        불균형으로 인하여 ADHD가 발생할 수 있습니다.
                      </p>
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="neurochemical">
                      <img src={require("../images/ADHD/adhdReason3.png")} />
                    </div>
                  </Fade>
                  <Fade left>
                    <div className="neurochemical_content">
                      <div className="neurochemical_content_title">
                        신경화학적 요인
                      </div>
                      <p>
                        전두엽이 기능을 잘 하지 못하는 것이
                        <br />이 병의 원인이 될 것으로 보는 학자가 많습니다.
                      </p>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="neuroanatomy">
                      <img src={require("../images/ADHD/adhdReason4.png")} />
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="neuroanatomy_content">
                      <div className="neuroanatomy_content_title">
                        신경해부학적 요인
                      </div>
                      <p>
                        뇌 손상, 뇌의 후천적 질병 미숙아 등의 원인이 있습니다.
                      </p>
                    </div>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <div id="flag2"></div>
          <div className="treatment">
            <Fade top>
              <div className="treatment_title_adhd" ref={depressionRef}>
                <h1>치료방안</h1>
              </div>
            </Fade>
            <Slide bottom>
              <div id="show-treatment">
                <div class="card">
                  <div class="face face1">
                    <div class="content">
                      <RiVoiceRecognitionLine size="50" color="#fff" />
                      <h3>인지-행동 치료</h3>
                    </div>
                  </div>
                  <div class="face face2">
                    <div class="content">
                      <p>
                        계획 세우기, 조직화, 충동성과 분노 조절, 자존감 높이기,
                        청취 등 인지행동치료를 하면 효과가 배가됩니다. 또한,
                        수첩이나 계획표를 활용해 시간관리를 꼼꼼히 하고, 일을
                        쉽게 할 수 있게 체계화하는 식으로 주의력이 분산되지
                        않도록 환경적인 자극을 최대한 줄이는 훈련을 하면 더욱
                        좋습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="face face1">
                    <div class="content">
                      <GiLoveInjection size="50" color="#fff" />{" "}
                      <h3>약물치료</h3>
                    </div>
                  </div>
                  <div class="face face2">
                    <div class="content">
                      <p>
                        도파민이 부족한 전두엽 부위만 선택적으로 자극하여 도파민
                        공급을 늘려줍니다. 이는 장기적으로 뇌 신경망을
                        활성화시켜 신경 발달을 촉진시키는 효과가 있습니다.
                        그러나, 약물치료에는 정해진 기한이 없으므로, 단기간에
                        획기적으로 좋아지거나 하지는 않습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="face face1">
                    <div class="content">
                      <FaDiagnoses size="50" color="#fff" />
                      <h3>진료 상담</h3>
                    </div>
                  </div>
                  <div class="face face2">
                    <div class="content">
                      <p>
                        진료상담 효율을 위해, 그리고 의료진이 아이에 대한 중요한
                        정보를 해석하고 그에 맞는 최적화된 진료상담을 준비할
                        시간을 주기 위해, 가능하다면 내원 전 미리 전화상담을
                        하는 것도 도움이 됩니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
          <div id="flag3">
            <div id="show-tip">
              <span>
                <h1 align="center" className="contentstitle_adhd">
                  식품, 영양 정보
                </h1>
              </span>
              <br />
              <Fade left>
                <div className="panic_mainTipText" id="panic_mainTipText">
                  도움되는 음식
                </div>
                <div className="panic_mainTipWrap">
                  <div className="panic_mainTip tip1_panic">
                    <div className="panic_tip1">
                      <div className="panic_mainTipTitle">🍳단백질</div>
                      <div className="panic_mainTipContent">
                        단백질은 두뇌의 <br />
                        신경전달물질이 <br />
                        원활하도록 도와줘요
                      </div>
                    </div>
                  </div>
                  <div className="panic_mainTip tip2">
                    <div className="panic_mainTipTitle">🍚탄수화물</div>
                    <div className="panic_mainTipContent">
                      쌀에 들어있는 <br />
                      탄수화물은 혈당의 <br />
                      급상승을 막아줍니다
                    </div>
                  </div>
                  <div className="panic_mainTip tip3">
                    <div className="panic_mainTipTitle">🐟오메가3</div>
                    <div className="panic_mainTipContent">
                      오메가3 지방산은 <br />
                      두뇌와 심장건강에 <br />
                      이롭게 작용해요
                    </div>
                  </div>
                  <div className="panic_mainTip tip4">
                    <div className="panic_mainTipTitle">🥦엽산</div>
                    <div className="panic_mainTipContent">
                      브로콜리와 시금치 속의
                      <br /> 엽산은 ADHD의 <br /> 특효약이라고 불려요
                    </div>
                  </div>
                  <div className="panic_mainTip tip5">
                    <div className="panic_mainTipTitle">🍊비타민</div>
                    <div className="panic_mainTipContent">
                      소고기를 먹으면 <br />
                      비타민을 흡수해서 <br />
                      ADHD의 발병율을 <br />
                      줄이는 효과가 있답니다
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="panic_mainTipText2">악화되는 음식</div>
                <div className="panic_mainTipWrap">
                  <div className="panic_mainTip tip6">
                    <div className="panic_mainTipTitle">🍹과일주스</div>
                    <div className="panic_mainTipContent">
                      과일주스는 <br />
                      혈당을 급상승 시켜
                      <br /> 위험하답니다
                    </div>
                    <div className="panic_mainTipIcon icon1"></div>
                  </div>
                  <div className="panic_mainTip tip7">
                    <div className="panic_mainTipTitle">🍺술</div>
                    <div className="panic_mainTipContent">
                      술을 마시면 <br />
                      자율신경의 균형이 깨져서 <br />
                      과호흡이 오기 쉬워져요
                    </div>
                    <div className="panic_mainTipIcon icon2"></div>
                  </div>
                  <div className="panic_mainTip tip8">
                    <div className="panic_mainTipTitle">🍔패스트 푸드</div>
                    <div className="panic_mainTipContent">
                      패스트 푸드에는
                      <br /> 각종 식품 첨가물과 보존제,
                      <br /> 착색제가 함유되어 있어
                      <br /> 몸에 좋지 않답니다
                    </div>
                    <div className="panic_mainTipIcon icon3"></div>
                  </div>
                  <div className="panic_mainTip tip9">
                    <div className="panic_mainTipTitle">☕커피</div>
                    <div className="panic_mainTipContent">
                      커피를 마시면 <br />
                      카페인때문에 <br />
                      심장이 빨리 뛰어요
                    </div>
                    <div className="panic_mainTipIcon icon4"></div>
                  </div>
                  <div className="panic_mainTip tip10">
                    <div className="panic_mainTipTitle">🧂설탕 </div>
                    <div className="panic_mainTipContent">
                      과도한 설탕 섭취는 <br />
                      불안, 예민, 과민 반응을 <br />
                      유발해요
                    </div>
                    <div className="panic_mainTipIcon icon5"></div>
                  </div>
                </div>
              </Fade>
            </div>
            <div id="show-selftest_dep" align="center">
              <Fade bottom>
                <div id="flag4"></div>
                <Selftest2 />
              </Fade>
            </div>
            <div className="hospital">
              <h1 className="hospital_content_dep">병원안내</h1>
              <KakakoMap user_location={user_location} />
            </div>
            <div className="mainLineWrap">
              <div className="mainLineContent lineCon1"></div>
              <div className="mainLineContent lineCon2"></div>
              <div className="mainLineContent lineCon3"></div>
              <div className="mainLineContent lineCon4"></div>
              <div className="mainLineContent lineCon5"></div>
              <div className="mainLineContent lineCon6"></div>
            </div>
          </div>
        </article>
      </div>
      <div>
        <aside>
          <div className="topbtn" onClick={goToTop}>
            <img
              src={require("../images/upbutton.png")}
              className="topbutton_img"
              alt="탑버튼"
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Depression;
