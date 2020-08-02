import React from "react";

export default function Testimonial(props) {
  return (
    <>
      {/* {JSON.stringify(props)} */}
      <div>
        <div>
          <div className="testimonial-wrapper-1">
            <div className="testimonial-circle-object" />
            <div>
              <h3>Testimonial</h3>
            </div>
          </div>
          <div className="testimonials-text-slider">
            <div>
              {props.testimonials.map(testimony => (
                <div>
                  <h4>{testimony.by}</h4>
                  <p>{testimony.testimony}</p>
                </div>
              ))}
            </div>
            {/* <p> -should display fetch data of testimonials-</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
