import React from 'react';
import './collabor.scss';
import { collabration1, collabration2 } from '../../../assets/images/image';

export default function Collabor() {
    return (
        <>
            <div className="collabor">
                <div className="collabor-div">
                    <h2>COLLABOR<br />ATIONS</h2>
                    <div className="collabor-div-img">
                        <img src={collabration1} alt="collabration1" />
                        <p>HOMETOWN HEROES X YOUNG BAFANA</p>
                    </div>
                    <p>Our journey with Hometown Heroes has been enriched by valuable partnerships with organizations that share our vision for positive change. <br />
                    Young Bafana, a non-profit organization dedicated to the holistic development of underprivileged youth in South Africa, was our inaugural partner. Through our first Hometown Heroes exhibition, we raised funds to support their programs, reinforcing our commitment to making a meaningful impact by selling our prints at the gallery.</p>
                </div>
                <div className="collabor-div">
                    <h2>COLLABOR<br />ATIONS</h2>
                    <div className="collabor-div-img second">
                        <img src={collabration2} alt="collabration2" />
                        <span>HOMETOWN HEROES X CANON</span>
                    </div>
                    <p>Canon Germany, a renowned photography and imaging solutions provider, collaborated with us by sponsoring our debut exhibition. Their support extended to sponsoring the printing of the 34 images featured in the exhibition, showcasing their commitment to our vision and the power of storytelling through photography. </p>
                    <p>These collaborations have allowed us to expand our reach and amplify the message of Hometown Heroes. We are continuously seeking new partnerships to further our mission of promoting equality, human rights, and positive change worldwide.</p>
                </div>
            </div>
        </>
    )
}
