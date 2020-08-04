import React from "react";
import {
  Header,
  Top,
  Definition,
  Testimonial,
  Pov,
  Resource,
  Tips,
  Set,
  Footer
} from "../components";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const [testimonials, loadingTestimonials, errorTestimonials] = useFetch(
    "https://wknd-take-home-challenge-api.herokuapp.com/testimonial"
  );

  const [tips, loadingTips, errorTips] = useFetch(
    "https://wknd-take-home-challenge-api.herokuapp.com/help-tips"
  );
  return (
    <>
      <Header />
      <div className="top-wrapper">
        <Top />
      </div>
      <div className="definition-wrapper">
        <Definition />
      </div>
      <div className="testimonial-wrapper">
        {testimonials && <Testimonial testimonials={testimonials} />}
        {loadingTestimonials && <p>Loading...</p>}
        {errorTestimonials && <p>Failed to fetch...</p>}
      </div>
      <div className="pov-wrapper">
        <Pov />
      </div>
      <div className="resource-wrapper">
        <Resource />
      </div>
      <div className="tips-wrapper">
        {tips && <Tips tips={tips} />}
        {loadingTips && <p>Loading...</p>}
        {errorTips && <p>Failed to fetch...</p>}
      </div>
      <div className="set-wrapper">
        <Set />
      </div>
      <Footer />
    </>
  );
}
