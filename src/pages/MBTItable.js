// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "../../node_modules/axios/index";
// import "./MBTItable.css";
// import "./MBTIswiper.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper";

// const MBTItable = () => {
//   useEffect(() => {
//     axios
//       .post("http://localhost:8008/self1")
//       .then((res) => {
//         Setselftest2_data(res.data);
//       })
//       .catch((e) => {
//         console.error(e);
//       });
//   }, []);

//   const [selftest2_data, Setselftest2_data] = useState([{}]);

//   return (
//     <div className="selftest">
//       <Swiper
//         pagination={{
//           type: "progressbar",
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mbti_mySwiper"
//       >
//         <SwiperSlide style={{ display: "block", paddingTop: "20px" }}>
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[0]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s1" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s1" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s1" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s1" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[1]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s2" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s2" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s2" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s2" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[2]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s3" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s3" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s3" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s3" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[3]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s4" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s4" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s4" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s4" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide style={{ display: "block" }}>
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[4]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s5" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s5" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s5" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s5" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[5]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s6" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s6" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s6" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s6" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[6]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s7" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s7" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s7" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s7" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[7]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s8" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s8" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s8" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s8" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide style={{ display: "block" }}>
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[8]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s9" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s9" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s9" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s9" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[9]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s10" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s10" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s10" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s10" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[10]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s11" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s11" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s11" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s11" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[11]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s12" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s12" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s12" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s12" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide style={{ display: "block" }}>
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[12]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s13" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s13" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s13" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s13" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[13]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s14" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s14" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s14" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s14" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[14]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s15" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s15" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s15" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s15" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[15]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s16" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s16" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s16" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s16" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide style={{ display: "block" }}>
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[16]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s17" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s17" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s17" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s17" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[17]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s18" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s18" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s18" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s18" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[18]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s19" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s19" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s19" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s19" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//           <br />
//           <div className="selftest_test">
//             <div className="selftest_content">
//               {selftest2_data[19]?.QUESTION}
//             </div>
//             <div className="selftest_radio">
//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s20" value="0" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">아니다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s20" value="1" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">가끔 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s20" value="2" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">자주 그렇다</div>
//               </label>

//               <label class="rad-label">
//                 <input type="radio" class="rad-input" name="s20" value="3" />
//                 <div class="rad-design"></div>
//                 <div class="rad-text">항상 그렇다</div>
//               </label>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default MBTItable;
