import React from "react";
import Arrow from "../assets/img/oval-icon.png";

export default function Tips(props) {
  return (
    <div className="tips-container">
      {/* {JSON.stringify(props)} */}
      <div className="tips-detail">
        <h3 className="tips-title">Helpt & Tips</h3>
        <div className="tips-text-slider">
          {props.tips.map(tip => (
            <div className="tip">
              <img className="tip-img" src={tip.image} alt={tip.slug} />
              <div className="tip-detail">
                <p>{tip.title}</p>
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
