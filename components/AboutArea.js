import React from 'react';
import Link from 'next/link';

const AboutArea = () => {
    return (
        <section className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                <h5 className="involve_title">Reach out to our team to share your ideas or collaborate on more creative outreach options. fightforspartanswimdive@gmail.com</h5>
                    </div>

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
                                <h2 className='involve_header'>Email AD Alan Haller to express your excitement about the recent announcement and indicate our willingness to partner to ensure reinstating these teams is a success.</h2>
                                <div className='pledge-form'>
                                    <Link href="mailto:ad@ath.msu.edu" target='_blank' className="theme-btn">
                                    Athletic Director, Allan Haller: ad@ath.msu.edu
                                    </Link>
                                </div>
                                <h2 className='involve_header'>Email the president and board to express your excitement that they are working with our group in good faith and highlight the fact that there are multiple different avenues to success that we can continue to explore together.</h2>

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutArea;
