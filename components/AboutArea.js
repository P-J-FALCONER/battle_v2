import React from 'react';
import Link from 'next/link';

const AboutArea = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="about-large-img">
                            <img src="/images/about-img.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="about-semi-img">
                            <img src="/images/about-img2.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="about-heading">
                            <div className="section-heading">
                                <h2 className="section__title">Got Some Spare Time?</h2>
                                <h2>Reach out to AD Haller and voice your support!</h2>

                                <h4>Write personalized letters about why this fight matters to you. AD Haller is the primary target
                                Top Priority Contacts, Email as Many as You Can:</h4>
                                <div className='pledge-form'>
                                    <Link href="mailto:ad@ath.msu.edu" target='_blank' className="theme-btn">
                                    Athletic Director, Allan Haller: ad@ath.msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="mailto:president@msu.edu" target='_blank' className="theme-btn">
                                    Interim President, Dr. Teresa Woodruff: president@msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="mailto:DrRema@msu.edu" target='_blank' className="theme-btn">
                                    Board of Trustees Chair, Rema Vassar: DrRema@msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="mailto:dkelly@msu.edu" target='_blank' className="theme-btn">
                                    Board of Trustees Vice Chair, Dan Kelly: dkelly@msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="mailto:byrum@msu.edu" target='_blank' className="theme-btn">
                                    Trustee, Dianne Byrum: byrum@msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="mailto:knakeree@msu.edu" target='_blank' className="theme-btn">
                                    Trustee, Renee Knake Jefferson: knakeree@msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="mailto:scottbri@msu.edu" target='_blank' className="theme-btn">
                                    Trustee, Brianna T. Scott: scottbri@msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="mailto:tebaykel@msu.edu" target='_blank' className="theme-btn">
                                    Trustee, Kelly Tebay: tebaykel@msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="mailto:trusteedenno@msu.edu" target='_blank' className="theme-btn">
                                    Trustee, Dennis Denno: trusteedenno@msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="mailto:trusteepierce@msu.edu" target='_blank' className="theme-btn">
                                    Trustee, Sandy Pierce: trusteepierce@msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="tel:517-353-4647" target='_blank' className="theme-btn">
                                    Board of Trustees Office: (517) 353-4647
                                    </Link>
                                </div>

                                        <h4>Other members of the Athletic Department:</h4>
                                        <div className='pledge-form'>
                                    <Link href="mailto:smith170@ath.msu.edu" target='_blank' className="theme-btn">
                                    Deputy AD/Sr. Woman’s Admin/Compliance: smith170@ath.msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="mailto:schager@ath.msu.edu" target='_blank' className="theme-btn">
                                    Exec Assoc AD Ops, Paul Schager: schager@ath.msu.edu
                                    </Link>
                                </div>
                                <div className='pledge-form'>
                                    <Link href="mailto:danie128@ath.msu.edu" target='_blank' className="theme-btn">
                                    ssoc AD/Student-Athlete Engagement, Elliot Daniels: danie128@ath.msu.edu
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea;
