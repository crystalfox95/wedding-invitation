import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 3호선 <b>양재역/신분당선 양재역-9번 출구</b> 
            <br />
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 지선(초록): 0411, 4432, 4435
            <br />
            - 간선(파랑): 140, 341, 400, 405, 421, 440, 441,
            <br />
             &nbsp;&nbsp;&nbsp;452, 470, 741
            <br />
            - 광역: 9404, 9408, 9409, 9500, 9501, 9711, 
            <br />
             &nbsp;&nbsp;&nbsp;9802, M4403, M4434, M4448, M4449, 
            <br />
             &nbsp;&nbsp;&nbsp;M5422, M5438, M5443, M6410, M6450
            <br />
            - 마을: 6, 11-3, 917
            <br />
            - 직행: 6, 11-3, 917
            <br />
            - 일반: 1006, 1311, 3000, 3002, 3003, 3007, 
            <br />
             &nbsp;&nbsp;&nbsp;3008, 3030, 3100, 3101, 3102, 3201, 3800, 
            <br />
             &nbsp;&nbsp;&nbsp;5200, 5300, 9202, 9400, 9700, G1003, 
            <br />
             &nbsp;&nbsp;&nbsp;G3900, G8157, G9633
            <br />
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>엘타워 </b> 검색
            <br />
            - 전용 주차장 구비
            <br />
          </div>
          <div />
          <div className="content">
              <b>※ 서초IC에서 양재역 방면으로 나오신 후 양재역</b>
			  </br>
			  <b>&nbsp;&nbsp;&nbsp;사거리에서 성남방향으로 우회전합니다. 우회전 </b>
			  </br>
			  <b>&nbsp;&nbsp;&nbsp;후 100m 직진하시면 우측에 엘타워가 있습니다. </b>
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
