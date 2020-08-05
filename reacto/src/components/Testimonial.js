import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function Testimonial(props) {
  return (
    <div className="testimonial-container">
      <div className="testimonial-width">
        <div className="testimonial-wrapper-1">
          <div className="testimonial-circle-object" />
          <div className="testimonial-title">
            <h3 className="title">Testimonial</h3>
          </div>
        </div>
        <div className="testimonials-text-slider">
          <Carousel slidesPerPage={2.5} arrows>
            {props.testimonials.map(testimony => (
              <div>
                <h4 className="testimonial-h4">{testimony.by}</h4>
                <p className="testimonial-p">{testimony.testimony}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
