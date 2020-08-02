import React from "react";
import {
  Header,
  Top,
  Definition,
  Testimonial,
  Pov,
  Resource,
  Tips
} from "../components";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const [testimonials, loadingTestimonials, errorTestimonials] = useFetch(
    "https://wknd-take-home-challenge-api.herokuapp.com/testimonial"
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
      <div className="povResource-wrapper">
        <Pov />
      </div>
      <div className="povResource-wrapper">
        <Resource />
      </div>
      <div>
        <Tips />
      </div>
    </>
  );
}
