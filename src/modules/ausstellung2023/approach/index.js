import React from 'react';
import './approach.scss';
import { approach1, approach2 } from '../../../assets/images/image';

export default function Approach() {
    return (
        <>
            <div className="approach">
                <div className="container3">
                    <div className="approach-div">
                        <div className="approach-div1">
                            <div className="approach-div1-head">
                                <h2>APP RO ACH</h2>
                                <img src={approach1} alt="approach1" />
                            </div>
                            <p>On-Site Documentation and Collaboration with Local Empowerment Organizations: Through purposeful journeys to diverse countries, we establish authentic connections with the local people. We not only listen to their stories, capture their aspirations, and preserve them through compelling photographs and films, but we also actively collaborate with organizations on the ground that provide assistance to the individuals we portray and whose stories we accompany and document.</p>
                        </div>
                        <div className="approach-div2">
                            <img src={approach2} alt="approach2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
