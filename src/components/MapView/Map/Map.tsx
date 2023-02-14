import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MapModal from './MapModal';

const Map = () => {
  const MapRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new window.kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

    // 지도를 생성합니다
    var map = new window.kakao.maps.Map(mapContainer, mapOption);

    // 장소 검색 객체를 생성합니다
    var ps = new window.kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    ps.keywordSearch('서울 맛집', placesSearchCB);

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new window.kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place: any) {
      console.log(place);
      // 마커를 생성하고 지도에 표시합니다
      var marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      window.kakao.maps.event.addListener(marker, 'click', function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            '</div>',
        );
        infowindow.open(map, marker);
      });
    }
  }, []);

  return (
    <>
      <Wrap id="map" ref={MapRef} />
      <button onClick={() => setOpenModal((prev) => !prev)}>모달</button>
      {openModal && <MapModal />}
    </>
  );
};

export default Map;

const Wrap = styled.div`
  background-color: grey;
  width: 700px;
  height: 600px;
`;
