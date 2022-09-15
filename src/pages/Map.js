// 출처:https://codegear.tistory.com/14
// 출처:https://velog.io/@st_hwang/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EC%A7%80%EB%8F%84-API%EB%A5%BC-%EC%8D%A8%EB%B3%B4%EC%95%98%EC%8A%B5%EB%8B%88%EB%8B%A4.-%EA%B7%BC%EB%8D%B0-%EC%9D%B4%EC%A0%9C-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EA%B3%81%EB%93%A4%EC%9D%B8#4-%ED%82%A4%EC%9B%8C%EB%93%9C%EB%A5%BC-%EA%B2%80%EC%83%89%ED%95%B4%EC%84%9C-%EC%A7%80%EB%8F%84%EC%97%90-%EB%A7%88%EC%BB%A4-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0

import { useEffect, useState } from "react";

<script
  type="text/javascript"
  src="https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=966eda0c922ddf5cbf4a9679a9fa98e3&appkey=bf46ee0c3926218be398009b1c5fe2d5&libraries=services"
></script>;

function Map() {
  const { kakao } = window;
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    //카카오맵 스크립트 읽어오기
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=966eda0c922ddf5cbf4a9679a9fa98e3&appkey=bf46ee0c3926218be398009b1c5fe2d5&libraries=services"
    );

    //스크립트 읽기 완료 후 카카오맵 설정
    my_script.then(() => {
      console.log("script.loaded!!!");
      kakao.maps.load(() => {
        // const mapContainer = document.getElementById("map");
        // const options = {
        //   center: new kakao.maps.LatLng(37.555983187947646, 126.96944297466436), //좌표설정
        //   level: 3,
        // };
        // const map = new kakao.maps.Map(mapContainer, options); //맵 생성
        // //마커 설정
        // const markerPosition = new kakao.maps.LatLng(
        //   37.555983187947646,
        //   126.96944297466436
        // );
        // const marker = new kakao.maps.Marker({
        //   position: markerPosition,
        // });
        // marker.setMap(map);
      });
      //키워드를 검색해서 지도에 마커 표시하기
      const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

      const mapContainer = document.getElementById("map"),
        mapOption = {
          center: new kakao.maps.LatLng(37.555983187947646, 126.96944297466436),
          level: 3,
        };

      const map = new kakao.maps.Map(mapContainer, mapOption);
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch("서울 정신상담", placeSearchCB, { useMapBounds: true });
      //{useMapBounds:true}옵션 넣으면 지도의 범위에서만 검색(false이면 전국 검색 결과)

      function placeSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          var bounds = new kakao.maps.LatLngBounds();

          for (var i = 0; i < data.length; i++) {
            displayMarker(data[i]);
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          }

          map.setBounds(bounds);
        }
      }

      function displayMarker(place) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(place.y, place.x),
        });

        kakao.maps.event.addListener(marker, "click", function () {
          infowindow.setContent("<div>" + place.place_name + "</div>");
          infowindow.open(map, marker);
        });
      }
    });
  });

  return (
    <div style={{ width: "1000px", height: "800px" }}>
      <form>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          onChange={onChange}
        />
        <button type="submit">검색</button>
      </form>
      <div id="map" style={{ width: "800px", height: "500px" }} />
    </div>
  );
}
export default Map;
