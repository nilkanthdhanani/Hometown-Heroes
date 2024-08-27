import React from 'react';
import './theIdea.scss'
import { theIdea } from '../../../assets/images/image';

export default function TheIdea() {
  return (
    <>
      <div className="the-idea">
        <div className="containerH">
            <div className="the-idea-div">
                <img src={theIdea} alt="theIdea" />
                <div className="the-idea-div-text">
                    <h2>THE IDEA</h2>
                    <p>The fundamental idea behind Hometown Heroes is to create a platform that amplifies the voices of people in suppressed communities. Hometown Heroes represents not just a creative endeavor, but an inspiring movement dedicated to supporting those who are oppressed in their hometowns - be it due to political, religious, or racial circumstances, including government corruption. Our mission is to tell their stories of oppression and spread the universal message of equality and humanity - "Equal as Humans - Despite differences". We harness the power of art to raise awareness, nurture empathy, and drive social change. Our endeavors aim to strengthen commitment and solidarity for a more just world.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
