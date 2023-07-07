import React from 'react';

const CallToActionTwo = () => {
    return (
        <section className="cta-area text-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <div className="cta-item cta-item1">
                            <h3 className="cta__title">Pledge Your Support</h3>
                            <a href="/pledge" className="theme-btn">Become a Donor</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <div className="cta-item cta-item2">
                            <h3 className="cta__title">Join the Volunteering Efforts</h3>
                            <a href="/get-involved" className="theme-btn">Get Involved!</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionTwo;
