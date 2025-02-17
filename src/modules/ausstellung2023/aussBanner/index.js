import React from 'react';
import './aussBanner.scss';
import { aussBanner } from '../../../assets/images/image';

export default function AussBanner() {
  return (
    <section className="auss-banner">
      <div className="containerH">
        <div className="auss-banner-div">
          <div className="auss-banner-div-intro">
            <h1>INTRO</h1>
            <p>“Welcome to this comprehensive document that encapsulates the essence and journey of HOMETOWN HEROES. Within this page, you will find a vivid portrayal of our mission, our experiences, and our unwavering commitment to driving positive change. Explore how HOMETOWN HEROES, with its roots in the townships of Cape Town, will blossom into a platform of compassion, artistry, and impactful collaborations.“</p>
          </div>
          <div className="auss-banner-head">
            <h1>2023</h1>
          </div>
          <div className="auss-banner-image">
            <img src={aussBanner} alt="aussBanner" />
          </div>
        </div>
      </div>
    </section>
  )
}
