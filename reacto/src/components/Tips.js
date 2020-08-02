import React from "react";
import Arrow from "../assets/img/oval-icon.png";

export default function Tips(props) {
  return (
    <>
      {/* {JSON.stringify(props)} */}
      <div>
        <div>
          <h3>Helpt & Tips</h3>
          <div>
            {props.tips.map(tip => (
              <div>
                <img src={tip.image} alt={tip.slug} />
                <div>
                  <p>{tip.title}</p>
                  <img src={Arrow} alt="arrow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
