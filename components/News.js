import React from 'react';
import Link from 'next/link';

const News = () => {
    return (
        <section className="blog-area blog-area2">
            <div className="container">
                <div className="row recent-post-wrap">

                <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="news__content">
                                <h3 className="news__content-title">MSU Board of Trustee chair Dr. Rema Vassar makes a path for a potential swim and dive team</h3>
                                <p className="news__content-text">
                                At the OCT 28th 2022 Board of Trustees Meeting the board requested the administration to develop a plan forward for a potential swim and dive team. During the past several months, administrators worked with supporters of the swim and dive program to evaluate possible scenarios. With today’s approval of a recreational pool as part of the new student recreation and wellness center a window of opportunity exists for supporters of the program who have been, I mean, pretty persistent to raise support to fund the additional infrastructure needed for a competitive intercollegiate athletic swim and dive facility. They have been given a target and a timeline and have agreed upon that. The board, administration, and supporters of the swim and dive program are aligned to restart a swim and dive MSU program.
                                    </p>
                                <Link href="https://trustees.msu.edu/meetings/documents/2023/MSU-BOT-2023-06-16.mp3"target='_blank' className="theme-btn">Listen to meeting (starts at 1:03:50 ) </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="news__content">
                                <h3 className="news__content-title">MSU takes 'massive step' toward reinstating swimming and diving programs</h3>
                                <p className="news__content-text">
                                The battle to reinstate Michigan State's men's and women's swimming and diving teams is in its 28th month and, for the first time, the finish line might finally be in sight.
                                </p>
                                <Link href="https://www.detroitnews.com/story/sports/college/michigan-state-university/2023/06/16/michigan-state-takes-massive-step-toward-reinstating-swimming-and-diving-programs/70329934007/"target='_blank' className="theme-btn">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="news__content">
                                <h3 className="news__content-title">MSU board's approval of student wellness center gives hope to swim, dive supporters</h3>
                                <p className="news__content-text">
                                The Michigan State University Board of Trustees approved plans Friday for a new $200 million student recreation and wellness center that could aid the potential reinstatement of its swim and dive team once the project is complete.</p>
                                <Link href="https://www.lansingstatejournal.com/story/news/local/campus/2023/06/16/michigan-state-student-wellness-center-swim-dive-program-reinstatement/70325019007/" target='_blank' className="theme-btn">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="news__content">
                                <h3 className="news__content-title">MSU board renews hope for swim and dive reinstatement with new pool</h3>
                                <p className="news__content-text">
                                With funding for a new 50-meter pool approved, Michigan State University’s board of trustees sees a “window of opportunity” for reinstating the university’s controversially-cut swim and dive program.
                                </p>
                                <Link href="https://statenews.com/article/2023/06/msu-board-renews-hope-for-swim-and-dive-reinstatement-with-new-pool" target='_blank' className="theme-btn">Read More</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="recent-item">
                            <div className="news__content">
                                <h3 className="news__content-title">Michigan State Could Be Close to Reinstating Swimming and Diving Programs</h3>
                                <p className="news__content-text">
                                Michigan State could be close to reinstating its men’s and women’s swimming and diving teams, according to the Battle for Spartan Swim and Dive advocacy group that has fought for their return since the 2020 cuts.
                                </p>
                                <Link href="https://swimswam.com/michigan-state-could-be-close-to-reinstating-swimming-and-diving-programs/" target='_blank' className="theme-btn">Read More</Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default News;
