import "./depression2.css?after";
import { MdArrowCircleUp, MdTextsms } from "react-icons/md";
import Header from "./Header";
import { useState, useRef } from "react";
import Comfort_modal from "./Comfort_modal";
import Selftest from "./Selftest";
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
import dep2 from "../images/dep2.png";
import treatmentBackground from "../images/ADHD/treatmentBackground.png";
import { GiLoveInjection } from "react-icons/gi";
import { GiAmplitude } from "react-icons/gi"; //새로 추가
import { RiVoiceRecognitionLine } from "react-icons/ri";
import { FaDiagnoses } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa"; //새로 추가
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import LoadingSpin from "react-loading-spin";

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
    document.getElementById("flag5").scrollIntoView({ behavior: "smooth" });
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
                  src={require("../images/Depression/Logo2.png")}
                  alt="우울증 로고2"
                ></img>
              </SwiperSlide>
              <SwiperSlide id="swiper_article2">
                <img
                  src={require("../images/Depression/stethoscope-icon-ge3ac584a5_12802.png")}
                  alt="청진기"
                ></img>
              </SwiperSlide>
              <SwiperSlide id="swiper_article3">
                <img
                  src={require("../images/Depression/dep_help.png")}
                  alt="셀프케어"
                ></img>
              </SwiperSlide>
            </Swiper>
          </div>

          <div id="index_btn_dep">
            <button className="mainBtn" onClick={depression1}>
              <div className="mBtn mBtn1"></div>
              <div className="mBtnText">우울증이란?</div>
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
              <div className="mBtnText">셀프케어</div>
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
                  <h1 id="headline1">우울증</h1>
                  <div className="exp1">
                    <div align="left">우울증(Depression)</div>
                  </div>
                  <div className="exp_bottom">
                    <div className="exp_img">
                      <p>
                        우울증은 생활에 지장을 줄 정도로 우울한 기분을 느끼는 것
                        뿐 아니라 <br /> 사고, 의욕, 행동, 수면, 신체적 활동
                        또한 저하되는 상태로 심하면 <br /> 자해 또는 자살까지
                        생각하는 정신건강 장애로, <br /> 흔한 정신질환 중
                        하나입니다.
                      </p>
                      <p>
                        최근 5년(2017~2021년) 우울증 환자 수는 2017년 69만
                        1,164명 대비 <br /> 2021년에 93만3,481명으로
                        35.1%(연평균 7.8%) 증가한 만큼 <br /> 우울증 환자수가
                        대폭 늘고 있습니다.
                      </p>
                      <p>
                        일시적으로 기분이 저하되는 것이 아니라 일반적으로 2주
                        이상 지속됩니다. <br />
                        의사는 환자가 보이는 증상과 다른 질환을 앓고 있는지 여부
                        등을 통해 <br />
                        우울증을 진단합니다. 환자가 보이는 증상은 다음과
                        같습니다.
                        <br />
                        <br />
                        <li>
                          - <span className="exp_span">수면패턴 변화</span>
                          <br />: 잠을 너무 적게 자거나 너무 많이 잡니다.
                        </li>
                        <li>
                          - <span className="exp_span">식욕변화</span> <br />:
                          우울증에 걸리면 식욕이 떨어지는데 식욕이 증가하는
                          사람도 있습니다.
                        </li>
                        <li>
                          -{" "}
                          <span className="exp_span">
                            죄책감, 쓸모없다는 느낌
                          </span>{" "}
                          <br />: 모두 내 잘못인 것 같고, 자신이 쓸모없는
                          사람처럼 느껴집니다.
                        </li>
                        <li>
                          -{" "}
                          <span className="exp_span">
                            무기력증, 집중력 저하
                          </span>{" "}
                          <br />: 일상 대부분의 일에 흥미와 관심을 잃습니다.
                        </li>
                        <li>
                          - <span className="exp_span">자해 또는 자살</span>
                        </li>
                      </p>
                    </div>
                    <Fade right>
                      <div className="desc1_div_img">
                        <img id="pic1" src={dep2} alt="Depression1" />
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
            <div id="show-desc2">
              <div id="flag5"></div>
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
                  <div className="gene_dep">
                    <img src={require("../images/ADHD/adhdReason1.png")} />
                  </div>
                </Fade>
                <Fade right>
                  <div className="gene_desc_dep">
                    <div className="gene_desc_dep_title">유전적 요인</div>
                    <p>
                      우울증은 우울증을 앓았던 가족이 있는 경우 <br />
                      우울증이 더 잘 발생합니다. 특히 일란성 쌍둥이인 경우,
                      <br />
                      한 쪽이 우울증을 앓는다면
                      <br />
                      다른 한 쪽도 우울증을 앓을 확률이 높습니다.
                    </p>
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="neuro">
                    <img src={require("../images/ADHD/adhdReason3.png")} />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="neuro_content">
                    <div className="neuro_content_title">생화학적 요인</div>
                    <p>
                      호르몬 변화나 뇌의 신경전달물질
                      <br />
                      (세로토닌, 노르에피네프린, 도파민 등)의 <br />
                      불균형으로 발병할 수 있습니다.
                    </p>
                  </div>
                </Fade>
                <Fade left>
                  <div className="environmental">
                    <img src={require("../images/Depression/dep_reason.png")} />
                  </div>
                </Fade>
                <Fade left>
                  <div className="environmental_content">
                    <div className="environmental_content_title">
                      환경적 요인
                    </div>
                    <p>
                      사랑하는 사람을 잃는 등의 감정적으로
                      <br />
                      고통스러운 사건이나 경제적 문제,
                      <br />
                      극심한 스트레스 등으로 인해 우울증을 앓을 수 있습니다.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div id="flag2"></div>
          <div className="treatment">
            <Fade top>
              <div className="treatment_title_dep" ref={depressionRef}>
                <h1>치료방안</h1>
              </div>
            </Fade>
            <Slide bottom>
              <div id="show-treatment">
                <div class="card">
                  <div class="face face1">
                    <div class="content">
                      <GiLoveInjection size="50" color="#fff" />
                      <h3>약물치료</h3>
                    </div>
                  </div>
                  <div class="face face2">
                    <div class="content">
                      <p>
                        약물치료는 항우울제를 사용하며 항불안제나 항정신병약을
                        함께 사용하기도 합니다. 약물 투여 후 4~6주는 지나야
                        효과가 나타나며, 재발 방지를 위해 6개월은 약물치료를
                        받는 것이 좋습니다.
                        <br />
                        항우울제는 신경전달물질의 분비를 조절하여 우울증을
                        개선합니다. 대표적인 항우울제로는 삼환계 항우울제(TCA),
                        세로토닌 노르에피네프린 재흡수 억제제(SNRI)가 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="face face1">
                    <div class="content">
                      <FaHandHoldingHeart size="50" color="#fff" />{" "}
                      <h3>심리치료</h3>
                    </div>
                  </div>
                  <div class="face face2">
                    <div class="content">
                      <p>
                        우울증을 유발한 스트레스에 대처하는 능력을
                        향상시킴으로써 현재의 증상을 조절하는 치료 방법으로
                        약물치료와 병행하는 것이 효과적입니다. 심리치료에는
                        인지행동치료, 대인관계치료, 정신역동치료가 있습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="face face1">
                    <div class="content">
                      <GiAmplitude size="50" color="#fff" />
                      <h3>전기경련요법(ECT)</h3>
                    </div>
                  </div>
                  <div class="face face2">
                    <div class="content">
                      <p>
                        뇌로 짧은 전기 충격을 전달하는 방법으로 다른 치료방법이
                        효과가 없을 때 빠른 효과를 볼 수 있습니다. 그러나 이
                        치료는 기억상실 등의 부작용이 있을 수 있고, 치료 중단
                        후에는 증상이 재발할 수 있기 때문에 재방방지를 위해
                        항우울제를 처방합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
          <div id="show-tip">
            <span>
              <div id="flag3"></div>
              <span>
                <h1 align="center" className="contentstitle_adhd">
                  셀프케어 및 테라피
                </h1>
              </span>
            </span>
            <Fade left>
              <div className="dep_mainTipText" id="dep_mainTipText">
                치유음악
              </div>
              <div className="dep_mainTipWrap">
                <div className="dep_mainTip tip2">
                  <div className="dep_mainTipContent">
                    <iframe
                      width="430"
                      height="220"
                      src="https://www.youtube.com/embed/TIVO7zXG78o?start=0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="dep_mainTipTitle">힐링 음악</div>
                  </div>
                </div>
                <div className="dep_mainTip tip2">
                  <div className="dep_mainTipContent">
                    <iframe
                      // width="560"
                      // height="315"
                      width="430"
                      height="220"
                      src="https://www.youtube.com/embed/_tgmTj4pw3Y"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="dep_mainTipTitle">528Hz 음악</div>
                  </div>
                </div>
                <div className="dep_mainTip tip3">
                  <div className="dep_mainTipContent">
                    <iframe
                      width="430"
                      height="220"
                      src="https://www.youtube.com/embed/P470PcW8kMQ?start=52"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="dep_mainTipTitle">명상 음악</div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="dep2_mainTipText2">컬러테라피</div>
              <div className="dep2_mainTipWrap">
                <div className="dep2_mainTip tip6">
                  <div className="dep2_mainTipTitle">❤️빨간색</div>
                  <div className="dep2_mainTipContent">
                    혈액순환을 활성화시키는
                    <br /> 빨간색은 무기력하거나
                    <br /> 우울할때 좋아요
                  </div>
                </div>
                <div className="dep2_mainTip tip7">
                  <div className="dep2_mainTipTitle">🧡주황색</div>
                  <div className="dep2_mainTipContent">
                    기운을 북돋아주는 <br />
                    주황색은 상실감이나
                    <br /> 우울함을 느낄 때 좋아요
                  </div>
                </div>
                <div className="dep2_mainTip tip8">
                  <div className="dep2_mainTipTitle">💚초록색</div>
                  <div className="dep2_mainTipContent">
                    긴장된 몸을 이완시켜주는
                    <br /> 초록색은 피로감이 과하게
                    <br /> 쌓였을 때 좋아요
                  </div>
                </div>
                <div className="dep2_mainTip tip9">
                  <div className="dep2_mainTipTitle">💙파란색</div>
                  <div className="dep2_mainTipContent">
                    기분을 안정시켜서 <br />
                    편안감을 주는 파란색은
                    <br /> 긴장상태에 있을 때 좋아요
                  </div>
                </div>
                <div className="dep2_mainTip tip10">
                  <div className="dep2_mainTipTitle">💜보라색</div>
                  <div className="dep2_mainTipContent">
                    치유와 변화를 상징하는 <br /> 보라색은 우울하거나
                    <br /> 정신적 고뇌가 있을 때 좋아요
                  </div>
                </div>
              </div>
            </Fade>
            <br />
            <br />
            {/* <h1 className="comfort">위로</h1>
            <p className="swiper_desc">우울증을 앓고 있는 모든 사람들에게</p>

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2400 }}
              slideperview={1}
              loop={true}
              className="mySwiper1"
            >
              <SwiperSlide>
                <div id="comfort-text">많이 힘들었겠다</div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="comfort-text">지금까지 버텨줘서 너무 고마워</div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="comfort-text">우울해도 괜찮아. 그것도 너니까</div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="comfort-text">너는 지금도 충분히 잘하고 있어</div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="comfort-text">
                  네가 행복해지길 진심으로 바라고 응원하고 있어.
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div id="comfort-text">
                  마지막에는 한 번 더 나를 보러 와 줄래?
                </div>
              </SwiperSlide>
            </Swiper> */}

            <br />
            <br />
          </div>
          <div id="show-selftest_dep" align="center">
            <Fade bottom>
              <div id="flag4"></div>
              <Selftest />
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
