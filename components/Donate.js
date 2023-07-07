import React from 'react';
import Link from 'next/link';

const Donate = () => {
    return (
        <section className="donate-area2">
            <div className="container">
                <div className="row donate-content-wrap">
                    <div className="col-lg-8">
                        <div className="donate-item">
                            <h3 className="donate__title">Personal Info</h3>
                            <div className="form-shared">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control"
                                                       placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-6">
                                            <div className="form-group">
                                                <div className="select-group">
                                                    <select className="select-option">
                                                        <option value="Country">Country</option>
                                                        <option value="usa">Usa</option>
                                                        <option value="Uk">Uk</option>
                                                        <option value="Pakistan">Pakistan</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="India">India</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <textarea className="textarea" name="message"
                                                      placeholder="Leave a Comment"></textarea>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-shared">
                            <div className="side-widget blog-content">
                                <div className="blog-item">
                                    <div className="blog-img">
                                        <img src="/images/img15.jpg" alt="" />
                                    </div>
                                    <div className="blog-inner-content">
                                        <ul className="blog__list">
                                            <li><h3><i className="icon-target"></i> Goal: <span>$26,500,000</span></h3></li>
                                            <li><h3><i className="fa fa-line-chart"></i> Raised: <span>$5,000,000</span></h3></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donate;
