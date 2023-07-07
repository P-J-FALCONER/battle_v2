import React, {Component} from 'react';

class FaqArea extends Component {

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
                                <h2 className="section__title">Question?</h2>
                                <p className="section__meta">Frequently Asked Questions</p>
                            </div>
                            <div className="faq-img-box">
                                <img src="/images/faq-img.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-container">
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Wait, I missed it. Start from the beginning?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">On October 22nd 2020 Michigan State University discontinued their Men’s and Women’s Varsity Swim and Dive teams citing budget challenges and the impending closure of the outdoor 50m pool. Supporters of the program formed the Battle for Spartan Swim and Dive advocacy group to identify financial commitments and rally public support for reinstatement of these programs.</p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">Then what happened?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">After years of persistent advocacy and University leadership changes, the MSU board of trustees voted on June 16th 2023 to approve the budget and construction scope of the new student recreation and wellness center. It will include an indoor 50m recreation pool creating a “window of opportunity” for the Battle for Spartan Swim and Dive to collaborate with the University as it seeks to hit financial targets which will eliminate the operating expense and facility barriers to reinstatement. </p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">What are the fundraising targets?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">$6.5M in operating expenses over the next 5 years is needed to re-initiate the programs. $20M in infrastructure enhancements will provide space for expanded spectator seating, Varsity team locker rooms, coaches offices, and a separate tank of water with a 10M diving tower.</p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">What’s the timeline?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">To meet the construction planning timeline, funds need to be identified by October 1, 2023 and would be collected over the subsequent 5 years. </p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">How are you collecting donations without the teams in place?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">The MSU University Advancement office is collecting pledges contingent on the return of the Men’s and Women’s Swimming and Diving programs. No funds will be collected until such time as the programs are successfully reinstated. Our target for the return of the teams is as soon as possible after the targets are met, so that the men’s and women’s teams can return to competition in the fall of 2024, and move into the new facility by the fall of 2026.</p>
                                    </div>
                                </div>

                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">How do I make a pledge?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">Fill out the pledge form on our website to support the operating expense needs – www.battleforspartanswimanddive.com
Contact Vivian Leung in University Advancement directly to discuss higher dollar value contributions and naming rights opportunities on the new Aquatic facility – leungv@msu.edu</p>
                                    </div>
                                </div>
                                <div className="ac">
                                    <h2 className="ac-q" tabIndex="0">What else should I know?</h2>
                                    <div className="ac-a">
                                        <p className="accordion__content-desc">MSU has expressly agreed to reinstate both the Men’s and Women’s Swim and Dive teams if the financial targets are met by 10/1/23. If successful, the program would make its return for the 100th season, likely in 2024.</p>
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

export default FaqArea;