import React from 'react';
import Link from 'next/link';

const Contact = () => {
    return (
        <section className="contact-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2 className="section__title">Get in Touch With Us</h2>
                            <Link href="mailto:fightforspartanswimdive@gmail.com" className="theme-btn">Email fightforspartanswimsdive@gmail.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
