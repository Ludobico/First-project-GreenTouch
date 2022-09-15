import "./depression2.css?after";
import { MdArrowCircleUp, MdTextsms } from "react-icons/md";
import Header from "./Header";
import { useState, useRef } from "react";
import Comfort_modal from "./Comfort_modal";
import Selftest3 from "./Selftest3";
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
import panic_logo from "../images/ex/panic_logo.png";
import treatmentBackground from "../images/ADHD/treatmentBackground.png";
import { GiLoveInjection } from "react-icons/gi";
import { GiAmplitude } from "react-icons/gi"; //새로 추가
import { RiVoiceRecognitionLine } from "react-icons/ri";
import { FaDiagnoses } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa"; //새로 추가
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import LoadingSpin from "react-loading-spin";
import "./PanicDisorder.css";

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
                  src={require("../images/Jang/panic1.png")}
                  alt="우울증 로고2"
                ></img>
              </SwiperSlide>
              <SwiperSlide id="swiper_article2">
                <img
                  src={require("../images/Jang/treatment.png")}
                  alt="청진기"
                ></img>
              </SwiperSlide>
              <SwiperSlide id="swiper_article3">
                <img
                  src={require("../images/Jang/self_test3.png")}
                  alt="셀프케어"
                ></img>
              </SwiperSlide>
            </Swiper>
          </div>

          <div id="index_btn_panic">
            <button className="mainBtn" onClick={depression1}>
              <div className="mBtn mBtn1"></div>
              <div className="mBtnText">공황장애란?</div>
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
                  <h1 id="headline1">공황장애</h1>
                  <div className="exp1">
                    <div align="left">Panic disorder</div>
                  </div>
                  <div className="exp_bottom">
                    <div className="exp_img">
                      <p>
                        공황 장애란 갑자기
                        <br />
                        <span className="exp_panic_span">
                          극도의 두려움과 불안
                        </span>
                        을 느끼는 <br />
                        불안 장애의 일종입니다.
                      </p>
                      <p>
                        자들은 심한 불안과 초조감, 죽을 것 같은 공포를 느끼고,
                        이와 함께 가슴 뜀, 호흡 곤란, 흉통이나 가슴 답답함,
                        어지러움, 손발 저림, 열감 등의 다양한 신체 증상을
                        경험합니다.
                      </p>
                      <p>
                        일단 공황 장애를 진단한 후 적절한 치료를 시작하면
                        <br /> 증상이 비교적 잘 조절되는 편입니다. 따라서 공황
                        장애를 극복하기 위해서는 이 질환의 증상, 진단, 치료법을
                        <br />
                        정확히 아는 것이 필수적입니다.
                      </p>
                    </div>
                    <Fade right>
                      <div className="desc1_div_img">
                        <img id="pic1" src={panic_logo} alt="Depression1" />
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
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
                <Fade top>
                  <div className="gene_panic">
                    <img src={require("../images/ADHD/adhdReason1.png")} />
                  </div>
                </Fade>
                <Fade top>
                  <div className="gene_content_panic">
                    <div className="gene_content_title">정신적 요인</div>
                    <p>
                      정신분석가들은 공황발작이 개인이 받아들이기 힘든 생각이나
                      소망, 충동들이
                      <br /> 억압되어 의식하지 못하고 있다가 어느 순간 무의식적
                      내용들이
                      <br /> 의식 속으로 터져 나오려 할 때 나타나는 것이라고
                      했습니다
                    </p>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="neurological_panic">
                    <img src={require("../images/ADHD/adhdReason2.png")} />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="neurological_content_panic">
                    <div className="neurological_content_title">
                      유전적 요인
                    </div>
                    <p>
                      공황장애를 가진 환자의 경우 <br />그 가까운 친척들이
                      공황장애를 앓게 되는 경우가 <br />
                      일반 인구에 비해 10배 정도 더 많은 것으로 알려져 있습니다.
                    </p>
                  </div>
                </Fade>
                <Fade right>
                  <div className="neuroanatomy_panic">
                    <img src={require("../images/ADHD/adhdReason4.png")} />
                  </div>
                </Fade>
                <Fade right>
                  <div className="neuroanatomy_content_panic">
                    <div className="neuroanatomy_content_title">
                      신경생물학적 요인
                    </div>
                    <p>
                      공황발작을 일으킬 수 있는 물질들은 중추신경계의
                      <br /> 노르에피네프린, 세로토닌, GABA 수용체에 작용하는
                      <br />
                      신경화학적 물질과 과호흡, 생체 내의 산-염기 균형을
                      깨뜨리는
                      <br /> 호흡 관련 물질로 나누어집니다.
                    </p>
                  </div>
                </Fade>
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
              <div id="show-treatment_panic">
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
                        공황발작을 한 번 경험한 사람들은 다시 그러한 고통스러운
                        <br />
                        공황발작을 경험할까 항상 불안해합니다.
                        <br />
                        나중에는 두려워하는 상황이 확대되며 <br />
                        그럴수록 두려움이 더욱 커집니다.
                        <br /> 이러한 잘못된 생각과 행동을 치료자와 함께
                        알아내고
                        <br /> 교정하는 치료를 인지-행동 요법이라고 합니다.
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
                        공황장애에 사용되는 약물에는 항우울제, 항불안제가
                        있습니다. 항우울제의 장점은 치료 효과가 비교적 오래
                        유지되고,
                        <br /> 공황발작을 예방하는 효과가 있습니다.항불안제는
                        항우울제에 비해 치료 효과가 바로 나타나 <br />
                        불안을 빠르게 감소시켜 준다는 장점이 있지만, <br /> 치료
                        효과가 수 시간 정도만 지속되며 습관성이 있습니다.
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
                      <div className="panic_mainTipTitle">🥛우유</div>
                      <div className="panic_mainTipContent">
                        우유속의 트립토판 <br />
                        성분이 잠을 더<br /> 잘 오게 해줄거에요
                      </div>
                    </div>
                  </div>
                  <div className="panic_mainTip tip2">
                    <div className="panic_mainTipTitle">🌾통곡물</div>
                    <div className="panic_mainTipContent">
                      오독오독한 통곡물은
                      <br /> 불안감과 긴장감을 <br />
                      해소시켜 줄거에요
                    </div>
                  </div>
                  <div className="panic_mainTip tip3">
                    <div className="panic_mainTipTitle">🍌바나나</div>
                    <div className="panic_mainTipContent">
                      칼륨이 많은 바나나가 <br />
                      당신의 스트레스를
                      <br />
                      날려줄거에요
                    </div>
                  </div>
                  <div className="panic_mainTip tip4">
                    <div className="panic_mainTipTitle">🍵캐모마일차</div>
                    <div className="panic_mainTipContent">
                      캐모마일차는
                      <br /> 마음을 진정시키는 효능이
                      <br /> 있답니다
                    </div>
                  </div>
                  <div className="panic_mainTip tip5">
                    <div className="panic_mainTipTitle">🥜견과류</div>
                    <div className="panic_mainTipContent">
                      견과류는 오메가가
                      <br /> 풍부해서 두뇌활동에 <br />
                      도움을 준답니다
                    </div>
                  </div>
                </div>
              </Fade>
              <Fade right>
                <div className="panic_mainTipText2">악화되는 음식</div>
                <div className="panic_mainTipWrap">
                  <div className="panic_mainTip tip6">
                    <div className="panic_mainTipTitle">🍝매운 음식</div>
                    <div className="panic_mainTipContent">
                      맵고 뜨거운 음식은
                      <br /> 심장을 빨리뛰게 해서
                      <br /> 위험해요
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
                    <div className="panic_mainTipTitle">🍜가공 식품</div>
                    <div className="panic_mainTipContent">
                      가공식품에는
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
            <div id="flag4"></div>
            <div id="show-selftest_dep" align="center">
              <Fade bottom>
                <Selftest3 />
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
        {/* <aside>
          <div className="topbtn" onClick={goToTop}>
            <img
              src={require("../images/upbutton.png")}
              className="topbutton_img"
              alt="탑버튼"
            />
          </div>
        </aside> */}
      </div>
    </div>
  );
};

export default Depression;
