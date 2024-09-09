import React from 'react';
import './collab.scss';
import { collabration1, collabration2 } from '../../../assets/images/image';

export default function Collab() {
    return (
        <section className="collab-main">
            <div className="container6">
                <div className="collab">
                    <div className="collab-div">
                        <h2>COLLABORATIONS</h2>
                        <div className="collab-div-img">
                            <img src={collabration1} alt="collabration1" />
                            <p>HOMETOWN HEROES X YOUNG BAFANA</p>
                        </div>
                        <p>Our journey with Hometown Heroes has been enriched by valuable partnerships with organizations that share our vision for positive change. <br />
                            Young Bafana, a non-profit organization dedicated to the holistic development of underprivileged youth in South Africa, was our inaugural partner. Through our first Hometown Heroes exhibition, we raised funds to support their programs, reinforcing our commitment to making a meaningful impact by selling our prints at the gallery.</p>
                    </div>
                    <div className="collab-div">
                        <h2>COLLABORATIONS</h2>
                        <div className="collab-div-img second">
                            <img src={collabration2} alt="collabration2" />
                            <span>HOMETOWN HEROES X CANON</span>
                        </div>
                        <p>Canon Germany, a renowned photography and imaging solutions provider, collaborated with us by sponsoring our debut exhibition. Their support extended to sponsoring the printing of the 34 images featured in the exhibition, showcasing their commitment to our vision and the power of storytelling through photography. </p>
                        <p>These collaborations have allowed us to expand our reach and amplify the message of Hometown Heroes. We are continuously seeking new partnerships to further our mission of promoting equality, human rights, and positive change worldwide.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
