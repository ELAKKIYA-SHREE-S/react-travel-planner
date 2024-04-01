import React from "react";
import styled from "styled-components";
import a1 from "../assets/a1.jpeg";
import a2 from "../assets/a2.jpeg";
import a3 from "../assets/a3.jpeg";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>"Great service! Highly recommended!"</p>
          <div className="info">
            <img src={a1} alt="" />
            <div className="details">
              <h4>John Doe</h4>
              <span>Founder - ABC Company</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>"Excellent product quality and fast delivery!"</p>
          <div className="info">
            <img src={a3} alt="" />
            <div className="details">
              <h4>Janine</h4>
              <span>Manager - XYZ Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>"Outstanding customer support and professional team!"</p>
          <div className="info">
            <img src={a2} alt="" />
            <div className="details">
              <h4>David</h4>
              <span>Director - PQR Corporation</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
