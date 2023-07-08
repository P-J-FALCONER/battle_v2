import React, {Component} from 'react';
import Link from 'next/link';

class FaqPledge extends Component {

    componentDidMount() {
        new Accordion('.accordion-container');
    }



    render() {
        return (
            <section className="faq-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2 className="section__title">Pledge FAQ</h2>
                                <div className='pledge-form'>
                                <Link href="https://battle-for-msu-swim-dive.s3.amazonaws.com/EXAMPLE+PLEDGE.pdf" target='_blank' className="theme-btn">Example Pledge Form</Link>
                                </div>
                                <div className='pledge-form'>
                                <Link href="https://battle-for-msu-swim-dive.s3.amazonaws.com/Conditional+pledge+form+-+Swim+and+Dive.pdf" target='_blank' className="theme-btn">OFFICIAL MSU PLEDGE FORM</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-container">
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Does this cover reinstatement of both men's and women's teams?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Yes</p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">When will one-time and 5-year donations start?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Likely this year, possibly next year.</p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Can you look up my previous commitments?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Yes, we can look up your original amount by request, though we would ask that everyone consider their current situation and giving capacity accordingly.</p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Do I need to print and sign?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Yes, scanned copies can be emailed to Vivian Leung (leungv@msu.edu). Photos can be emailed short term, but she needs a scanned or mailed copy eventually.</p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Can I mail the form instead of scanning and emailing?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Yes, please send them to vivian at the address below. It's important it reaches her specifically so it can be tallied for our effort and not processed prior to reinstatement.</p>
                                        <p>Attn: Vivian Leung ~{"\n"}
                                        Spartan Way - Univ Devel</p>
                                    </div>
                                </div>


                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">HELP! I don't have a printer, can you mail me a form?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Yes, please email us at fightforspartanswimsive@gmail.com to request a mailed copy.</p>
                                    </div>
                                </div>


                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">What parts of the form do I need to fill out?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">See below example from Sparty for more direction on the form.</p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Do we need to provide credit card info on this form?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">No! you will be contacted at a later date for completing these donations.</p>
                                    </div>
                                </div>


                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Who can I contact with more questions?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">University Advancement Execuitive Director Vivian Leung (leungv@msu.edu) or B4SSD (fightforspartanswimsive@gmail.com).</p>
                                    </div>
                                </div>









                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqPledge;