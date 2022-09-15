import { ResponsiveBar } from "@nivo/bar";
import axios from "../../node_modules/axios/index";
import { useEffect, useState } from "react";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const React3D = (props) => {
  const [test1Data, SetTest1Data] = useState();
  const [test2Data, SetTest2Data] = useState();
  const [test3Data, SetTest3Data] = useState();
  useEffect(() => {
    //SELF1,2,3 은 각 질환의 ROUND(AVG(PERCENTAGE))부분의 별칭임
    axios
      .post("http://localhost:8008/self1percentage")
      .then((self1percentage) => {
        console.log(self1percentage.data[0].SELF1);
        SetTest1Data(self1percentage.data[0].SELF1);
      })
      .catch((e) => {
        console.error(e);
      });
    axios
      .post("http://localhost:8008/self2percentage")
      .then((self2percentage) => {
        console.log(self2percentage.data[0].SELF2);
        SetTest2Data(self2percentage.data[0].SELF2);
      })
      .catch((e) => {
        console.error(e);
      });
    axios
      .post("http://localhost:8008/self3percentage")
      .then((self3percentage) => {
        console.log(self3percentage.data[0].SELF3);
        SetTest3Data(self3percentage.data[0].SELF3);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);
  return (
    // chart height이 100%이기 때문이 chart를 덮는 마크업 요소에 height 설정
    <div style={{ width: "900px", height: "500px", margin: "0 auto" }}>
      <ResponsiveBar
        /**
         * chart에 사용될 데이터
         */
        data={[
          { bottle: "우울증", ME: props.percentageSelf1, OTHER: test1Data },
          { bottle: "ADHD", ME: props.percentageSelf2, OTHER: test2Data },
          { bottle: "공황장애", ME: props.percentageSelf3, OTHER: test3Data },
        ]}
        /**
         * chart에 보여질 데이터 key (측정되는 값)
         */
        keys={["ME", "OTHER"]}
        /**
         * keys들을 그룹화하는 index key (분류하는 값)
         */
        indexBy="bottle"
        /**
         * chart margin
         */
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        /**
         * chart padding (bar간 간격)
         */
        padding={0.3}
        /**
         * chart 색상
         */
        colors={["rgb(75, 165, 88)", "rgba(75, 165, 88,0.5)", "orange"]} // 커스터하여 사용할 때
        // colors={{ scheme: 'nivo' }} // nivo에서 제공해주는 색상 조합 사용할 때
        /**
         * color 적용 방식
         */
        colorBy="id" // 색상을 keys 요소들에 각각 적용
        // colorBy="indexValue" // indexBy로 묵인 인덱스별로 각각 적용
        maxValue={100}
        groupMode="grouped"
        theme={{
          /**
           * label style (bar에 표현되는 글씨)
           */
          labels: {
            text: {
              fontSize: 14,
              fill: "#000000",
            },
          },
          /**
           * legend style (default로 우측 하단에 있는 색상별 key 표시)
           */
          legends: {
            text: {
              fontSize: 12,
              fill: "#000000",
            },
          },
          axis: {
            /**
             * axis legend style (bottom, left에 있는 글씨)
             */
            legend: {
              text: {
                fontSize: 20,
                fill: "#000000",
              },
            },
            /**
             * axis ticks style (bottom, left에 있는 값)
             */
            ticks: {
              text: {
                fontSize: 16,
                fill: "#000000",
              },
            },
          },
        }}
        /**
         * axis bottom 설정
         */
        axisBottom={{
          tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
          tickPadding: 5, // tick padding
          tickRotation: 0, // tick 기울기
          // legend: "다른 회원과의 비교",
          legendPosition: "middle", // 글씨 위치
          legendOffset: 40, // 글씨와 chart간 간격
        }}
        /**
         * axis left 설정
         */
        axisLeft={{
          tickSize: 5, // 값 설명하기 위해 튀어나오는 점 크기
          tickPadding: 5, // tick padding
          tickRotation: 0, // tick 기울기
          legend: "PERCENTAGE", // left 글씨
          legendPosition: "middle", // 글씨 위치
          legendOffset: -50, // 글씨와 chart간 간격
        }}
        /**
         * label 안보이게 할 기준 width
         */
        labelSkipWidth={36}
        /**
         * label 안보이게 할 기준 height
         */
        labelSkipHeight={12}
        /**
         * bar 클릭 이벤트
         */
        /**
         * legend 설정 (default로 우측 하단에 있는 색상별 key 표시)
         */
        legends={[
          {
            dataFrom: "keys", // 보일 데이터 형태
            anchor: "bottom-right", // 위치
            direction: "column", // item 그려지는 방향
            justify: false, // 글씨, 색상간 간격 justify 적용 여부
            translateX: 120, // chart와 X 간격
            translateY: -360, // chart와 Y 간격
            itemsSpacing: 2, // item간 간격
            itemWidth: 180, // item width
            itemHeight: 20, // item height
            itemDirection: "left-to-right", // item 내부에 그려지는 방향
            itemOpacity: 0.85, // item opacity
            symbolSize: 20, // symbol (색상 표기) 크기
            effects: [
              {
                // 추가 효과 설정 (hover하면 item opacity 1로 변경)
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default React3D;
