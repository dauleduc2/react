import React from "react";
import { BATH_SHOWER } from "../share/bath_shower";
import { BEDDING } from "../share/bedding";
import { LIGHTING } from "../share/lighting";
import DashBoard from "./dashboard";
import Detail from "./DetailComponent";
import Header from "./HeaderComponent";
function Main() {
  const [bathShowerList, setBathShowerList] = React.useState(BATH_SHOWER);
  const [beddingList, setBeddingList] = React.useState(BEDDING);
  const [lightingList, setLightingList] = React.useState(LIGHTING);
  return (
    <div>
      <Header />
      <DashBoard />

      <div className="">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-12 col-md m-1 border rounded-sm">
              <Detail data={bathShowerList[0]} />
            </div>
            <div className="col-12 col-md m-1 border rounded-sm">
              <Detail data={beddingList[0]} />
            </div>
            <div className="col-12 col-md m-1 border rounded-sm">
              <Detail data={lightingList[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
