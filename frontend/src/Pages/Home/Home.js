import React, { useState, useEffect } from "react";
import {Helmet} from "react-helmet";
import PromoSlider from "./PromoSlider";

const Home = (props) => {
   
    return (
      
            <main className="main">

            <Helmet>
                <script src={window.$host+"/assets/js/common.min.js"} ></script>
            </Helmet>
            
            {/* Slider  */}
               <PromoSlider></PromoSlider>

                {/* <!-- about us start--> */}
                <section className="section about-us background--brown">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="heading heading--primary"><span className="heading__pre-title">About Us</span>
                                    <h2 className="heading__title"><span>About Helpo</span> <span>Charity Company</span></h2>
                                </div>
                                <p><strong>Thresher shark rudd African lungfish silverside, Red salmon rockfish grunion, garpike zebra danio king-of-the-salmon banjo catfish."</strong></p>
                                <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perch</p>
                                <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead warbonnet</p><a className="button button--primary" href="about.html">More About</a>
                            </div>
                            <div className="col-lg-6 col-xl-5 offset-xl-1">
                                <div className="info-box"><img className="img--bg" src="../../../assets/img/about-us-2.jpg" alt="img" />
                                    <h4 className="info-box__title">We are Awesome Volounteer Team</h4>
                                    <p>Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p><a className="info-box__link" href="volunteer.html">Become a volounteer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- about us end--> */}
                {/* <!-- section start--> */}
                <section className="section background--brown no-padding-top">
                    <div className="container">
                        <div className="row offset-margin">
                            <div className="col-md-4 text-center">
                                <div className="counter-item counter-item--style-3">
                                    <div className="counter-item__top">
                                        <h6 className="counter-item__title">We Helped on 2018</h6>
                                    </div>
                                    <div className="counter-item__lower"><span className="js-counter">200</span><span>k</span></div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="counter-item counter-item--style-3">
                                    <div className="counter-item__top">
                                        <h6 className="counter-item__title">Dollars We Collected</h6>
                                    </div>
                                    <div className="counter-item__lower"><span className="js-counter">65</span><span>bil</span></div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center">
                                <div className="counter-item counter-item--style-3">
                                    <div className="counter-item__top">
                                        <h6 className="counter-item__title">Closed Projects</h6>
                                    </div>
                                    <div className="counter-item__lower"><span className="js-counter">100</span><span>k +</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- section end--> */}
                {/* <!-- section start--> */}
                <section className="section">
                    <div className="container">
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <div className="heading heading--primary heading--center"><span className="heading__pre-title">What We do</span>
                                    <h2 className="heading__title"><span>We do it</span> <span>for all people</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row offset-margin">
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img">
                                        <img src="../../../assets/img/svg/2_animal_shelter.svg" alt="icon" />
                                        </div>
                                    <div className="icon-item__text">
                                        <p>Medicine Help</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img"><img src="../../../assets/img/svg/2_beggar.svg" alt="icon" /></div>
                                    <div className="icon-item__text">
                                        <p>We Build and Create</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img"><img src="../../../assets/img/svg/2_charity.svg" alt="icon" /></div>
                                    <div className="icon-item__text">
                                        <p>Water Delivery</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img"><img src="../../../assets/img/svg/2_child.svg" alt="icon" /></div>
                                    <div className="icon-item__text">
                                        <p>We Care About</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img"><img src="../../../assets/img/svg/2_love.svg" alt="icon" /></div>
                                    <div className="icon-item__text">
                                        <p>New Clothes</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img"><img src="../../../assets/img/svg/2_money_hand.svg" alt="icon" /></div>
                                    <div className="icon-item__text">
                                        <p>Fresh Food</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img"><img src="../../../assets/img/svg/2_phone_donate.svg" alt="icon" /></div>
                                    <div className="icon-item__text">
                                        <p>Best Volounteers</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="icon-item">
                                    <div className="icon-item__img">
                                        <img src="../../../assets/img/svg/2_piggy_bank.svg" alt="icon" />
                                        </div>
                                    <div className="icon-item__text">
                                        <p>Donation Around the World</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- section end--> */}
                {/* <!-- causes start--> */}
                <section className="section causes background--brown"><img className="causes__bg" src="../../../assets/img/causes_img.png" alt="img" />
                    <div className="container">
                        <div className="row align-items-start margin-bottom">
                            <div className="col-xl-4">
                                <div className="heading heading--primary"><span className="heading__pre-title">What we Do</span>
                                    <h2 className="heading__title"><span>Helpo</span> <span>Causes</span></h2>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <p className="margin-30">Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish. Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet.</p><a className="button button--primary" href="#">More Causes</a>
                            </div>
                        </div>
                        <div className="row offset-margin">
                            <div className="col-12">
                                <div className="items-slider-wrapper">
                                    <div className="items-slider">
                                        <div className="items-slider__item">
                                            <div className="causes-item causes-item--style-3 causes-item--slider no-padding">
                                                <div className="causes-item__body">
                                                    <div className="row align-items-center">
                                                        <div className="col-xl-8">
                                                            <div className="causes-item__img">
                                                                {/* <!-- slider nav start--> */}
                                                                <div className="slider__nav items-slider__nav">
                                                                    <div className="slider__arrows">
                                                                        <div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- slider nav end--> */}
                                                                <img className="img--bg" src="../../../assets/img/lion.jpg" alt="img" />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4">
                                                            <div className="causes-item__wrapper">
                                                                <div className="causes-item__action">
                                                                    <div className="causes-item__badge" 
                                                                    style={{backgroundColor : '#49C2DF', paddingRight : '5px'}}
                                                                   >Water Delivery</div>
                                                                </div>
                                                                <div className="causes-item__top">
                                                                    <h6 className="causes-item__title"> <a href="cause-details.html">Clean Water in Africa</a></h6>
                                                                    <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster rostrata. </p>
                                                                </div>
                                                                <div className="causes-item__lower">
                                                                    <div className="progress-bar">
                                                                        <div className="progress-bar__inner"
                                                                        style={{width : '78%'}}
                                                                       >
                                                                            <div className="progress-bar__value">78%</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="causes-item__details-holder">
                                                                        <div className="causes-item__details-item"><span>Goal: </span><span>25 000$</span></div>
                                                                        <div className="causes-item__details-item text-right"><span>Pledged: </span><span>20 350$</span></div>
                                                                    </div><a className="causes-item__button button button--primary" href="#">+ Donate</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="items-slider__item">
                                            <div className="causes-item causes-item--style-3 causes-item--slider no-padding">
                                                <div className="causes-item__body">
                                                    <div className="row align-items-center">
                                                        <div className="col-xl-8">
                                                            <div className="causes-item__img">
                                                                {/* <!-- slider nav start--> */}
                                                                <div className="slider__nav items-slider__nav">
                                                                    <div className="slider__arrows">
                                                                        <div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <!-- slider nav end--> */}
                                                                <img className="img--bg" src="../../../assets/img/action-block_2.jpg" alt="img"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-4">
                                                            <div className="causes-item__wrapper">
                                                                <div className="causes-item__action">
                                                                    <div className="causes-item__badge"
                                                                    style={{backgroundcolor : '#F36F8F'}}
                                                                    >Medicine</div>
                                                                </div>
                                                                <div className="causes-item__top">
                                                                    <h6 className="causes-item__title"> <a href="cause-details.html">Health in other Countries</a></h6>
                                                                    <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin.</p>
                                                                </div>
                                                                <div className="causes-item__lower">
                                                                    <div className="progress-bar">
                                                                        <div className="progress-bar__inner" 
                                                                        style={{width : '23%', }}
                                                                       >
                                                                            <div className="progress-bar__value">23%</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="causes-item__details-holder">
                                                                        <div className="causes-item__details-item"><span>Goal: </span><span>14 000$</span></div>
                                                                        <div className="causes-item__details-item text-right"><span>Pledged: </span><span>6 098$</span></div>
                                                                    </div>
                                                                </div><a className="causes-item__button button button--primary" href="#">+ Donate</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- causes end--> */}
                {/* <!-- section start--> */}
                <section className="section">
                    <div className="container">
                        <div className="row align-items-end margin-bottom">
                            <div className="col-sm-6">
                                <div className="heading heading--primary"><span className="heading__pre-title">What we Did</span>
                                    <h2 className="heading__title no-margin-bottom"><span>Helpo</span> <span>Projects</span></h2>
                                </div>
                            </div>
                            <div className="col-sm-6 text-sm-right">
                                {/* <!-- slider nav start--> */}
                                <div className="slider__nav projects-slider__nav">
                                    <div className="slider__arrows">
                                        <div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
                                        </div>
                                        <div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- slider nav end--> */}
                            </div>
                        </div>
                    </div>
                    <div className="projects-slider">
                        <div className="projects-slider__item">
                            <div className="projects-masonry__item projects-masonry__item--primary projects-masonry__item--height-2">
                                <div className="projects-masonry__img"><img className="img--bg" src="../../../assets/img/projects-slider_1.jpg" alt="img" />
                                    <div className="projects-masonry__inner"><span className="projects-masonry__badge" 
                                    style={{background : '#F36F8F'}}>Medicine</span>
                                        <h3 className="projects-masonry__title"> <a href="cause-details.html">More than One Life Changed</a></h3>
                                        <p>Rockweed gunnel; candlefish mail-cheeked fish, yellowtail snapper cuskfish elasmobranch seamoth triggerfish gar </p>
                                        <div className="projects-masonry__details-holder">
                                            <div className="projects-masonry__details-item"><span>Goal: </span><span>25 000$</span></div>
                                            <div className="projects-masonry__details-item"><span>Date: </span><span>23 Jan'19</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects-slider__item">
                            <div className="projects-masonry__item projects-masonry__item--primary projects-masonry__item--height-2">
                                <div className="projects-masonry__img"><img className="img--bg" src="../../../assets/img/projects-slider_2.jpg" alt="img" />
                                    <div className="projects-masonry__inner"><span className="projects-masonry__badge" 
                                    style={{background : '#49C2DF'}}>Water Delivery</span>
                                        <h3 className="projects-masonry__title"> <a href="cause-details.html">Helpo for Help</a></h3>
                                        <p>Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp</p>
                                        <div className="projects-masonry__details-holder">
                                            <div className="projects-masonry__details-item"><span>Goal: </span><span>25 000$</span></div>
                                            <div className="projects-masonry__details-item"><span>Date: </span><span>23 Jan'19</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects-slider__item">
                            <div className="projects-masonry__item projects-masonry__item--primary projects-masonry__item--height-2">
                                <div className="projects-masonry__img"><img className="img--bg" src="../../../assets/img/projects-slider_3.jpg" alt="img" />
                                    <div className="projects-masonry__inner"><span className="projects-masonry__badge" 
                                    style={{background : '#F36F8F'}}>Medicine</span>
                                        <h3 className="projects-masonry__title"> <a href="cause-details.html">He Needs Your Protection</a></h3>
                                        <p>Sea snail bigeye zebra turkeyfish mola mola sunfish roach. Southern Dolly Varden, lightfish ray long-whiskered catfish; burbot dealfish</p>
                                        <div className="projects-masonry__details-holder">
                                            <div className="projects-masonry__details-item"><span>Goal: </span><span>35 000$</span></div>
                                            <div className="projects-masonry__details-item"><span>Date: </span><span>23 Jan'19</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects-slider__item">
                            <div className="projects-masonry__item projects-masonry__item--primary projects-masonry__item--height-2">
                                <div className="projects-masonry__img"><img className="img--bg" src="../../../assets/img/projects-slider_2.jpg" alt="img" />
                                    <div className="projects-masonry__inner"><span className="projects-masonry__badge" 
                                    style={{background : '#F36F8F'}}>Medicine</span>
                                        <h3 className="projects-masonry__title"> <a href="cause-details.html">More than One Life Changed</a></h3>
                                        <p>Rockweed gunnel; candlefish mail-cheeked fish, yellowtail snapper cuskfish elasmobranch seamoth triggerfish gar </p>
                                        <div className="projects-masonry__details-holder">
                                            <div className="projects-masonry__details-item"><span>Goal: </span><span>25 000$</span></div>
                                            <div className="projects-masonry__details-item"><span>Date: </span><span>23 Jan'19</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- section end--> */}
                {/* <!-- text section start--> */}
                {/*<section className="section text-section text-section--front_2 no-padding-bottom"><img className="text-section__bg" src="../../../assets/img/text-section_2.png" alt="img" />
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h2 className="text-section__heading">Sponsor</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-4 col-xl-7 offset-xl-4">
                                <h3 className="text-section__title">Delivering help and hope <br />to children through sponsorship.</h3>
                                <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish</p><a className="button button--primary" href="#">More information</a>
                            </div>
                        </div>
                    </div>
                </section>*/}
                {/* <!-- text section end--> */}
                {/* <!-- events start--> */}
                <section className="section events events--front_2"><img className="events__bg" src="../../../assets/img/events_bg.png" alt="img" />
                    <div className="container">
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <div className="heading heading--primary heading--center"><span className="heading__pre-title">Events</span>
                                    <h2 className="heading__title"><span>Helpo Holds</span> <span>for You</span></h2>
                                    <p className="no-margin-bottom">Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <div className="event-item">
                                    <div className="event-item__img"><img className="img--bg" src="../../../assets/img/event_1.jpg" alt="img" /></div>
                                    <div className="event-item__content">
                                        <h6 className="event-item__title"><a href="#">Help for Language. Voluanteer</a></h6>
                                        <p><b>Dark Spurt,</b> San Francisco, CA 94528, USA</p>
                                        <p><b>September 30 - October 31,</b> 2019</p>
                                        <p><b>10:00 AM - 18:00 PM,</b> Everyday</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="event-item">
                                    <div className="event-item__img"><img className="img--bg" src="../../../assets/img/event_2.jpg" alt="img" /></div>
                                    <div className="event-item__content">
                                        <h6 className="event-item__title"><a href="#">The Culture of Africa. Rebirth</a></h6>
                                        <p><b>Dark Spurt,</b> San Francisco, CA 94528, USA</p>
                                        <p><b>September 30 - October 31,</b> 2019</p>
                                        <p><b>10:00 AM - 18:00 PM,</b> Everyday</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="event-item">
                                    <div className="event-item__img"><img className="img--bg" src="../../../assets/img/event_3.jpg" alt="img" /></div>
                                    <div className="event-item__content">
                                        <h6 className="event-item__title"><a href="#">Help for Language. Voluanteer</a></h6>
                                        <p><b>Dark Spurt,</b> San Francisco, CA 94528, USA</p>
                                        <p><b>April 15 - April 20,</b> 2019</p>
                                        <p><b>10:00 AM - 15:00 PM,</b> Everyday</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center"><a className="button button--primary" href="#">View all events</a></div>
                        </div>
                    </div>
                </section>
                {/* <!-- events end--> */}
                {/* <!-- section start--> */}
                <section className="section no-padding-top no-padding-bottom">
                    <div className="row no-gutters">
                        <div className="col-xl-6">
                            <div className="action-block">
                                <div className="action-block__inner"><img className="img--bg" src="../../../assets/img/action-block_1.jpg" alt="img" />
                                    <h3 className="action-block__title">We are Awesome Volounteer Team</h3>
                                    <p className="action-block__text">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p><a className="action-block__link button button--primary" href="#">Become</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="action-block">
                                <div className="action-block__inner"><img className="img--bg" src="../../../assets/img/action-block_2.jpg" alt="img" />
                                    <h3 className="action-block__title">All donations can help change a life</h3>
                                    <p className="action-block__text">Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p><a className="action-block__link button button--primary" href="#">Donate</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- section end--> */}
                {/* <!-- testimonials style-1 start--> */}
                <section className="section testimonials testimonials--style-1">
                    <div className="container">
                        <div className="row align-items-end margin-bottom">
                            <div className="col-lg-8 col-xl-7 offset-xl-1">
                                <div className="heading heading--primary"><span className="heading__pre-title">Testimonials</span>
                                    <h2 className="heading__title"><span>What People</span> <span>Says About Us</span></h2>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-3">
                                {/* <!-- slider nav start--> */}
                                <div className="slider__nav testimonials-style-1__nav">
                                    <div className="slider__arrows">
                                        <div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
                                        </div>
                                        <div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- slider nav end--> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="testimonials-slider testimonials-slider--style-1">
                                    <div className="testimonials-slider__item">
                                        <div className="testimonials-slider__icon">“</div>
                                        <div className="testimonials-slider__text">
                                            <p>Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury</p>
                                            <div className="testimonials-slider__author"><span className="testimonials-slider__name">Jack Wolfskin, </span><span className="testimonials-slider__position">Volunteer</span></div>
                                        </div>
                                    </div>
                                    <div className="testimonials-slider__item">
                                        <div className="testimonials-slider__icon">“</div>
                                        <div className="testimonials-slider__text">
                                            <p>Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury</p>
                                            <p>Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury</p>
                                            <div className="testimonials-slider__author"><span className="testimonials-slider__name">Jack Wolfskin, </span><span className="testimonials-slider__position">Volunteer</span></div>
                                        </div>
                                    </div>
                                    <div className="testimonials-slider__item">
                                        <div className="testimonials-slider__icon">“</div>
                                        <div className="testimonials-slider__text">
                                            <p>Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin herring, Moses sole sea snail grouper discus. European eel slender snipe eel. Gulper eel dealfish ocean sunfish; rohu yellow-and-black triplefin Atlantic saury</p>
                                            <div className="testimonials-slider__author"><span className="testimonials-slider__name">Jack Wolfskin, </span><span className="testimonials-slider__position">Volunteer</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- testimonials style-1 end--> */}
                {/* <!-- blog start--> */}
                <section className="section blog blog--front_3"><img className="blog__bg" src="../../../assets/img/blog_bg-2.png" alt="img" />
                    <div className="container">
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <div className="heading heading--primary heading--center"><span className="heading__pre-title">News</span>
                                    <h2 className="heading__title no-margin-bottom"><span>Helpo</span> <span>Blog</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row offset-margin">
                            <div className="col-md-6 col-xl-4">
                                <div className="blog-item blog-item--style-1">
                                    <div className="blog-item__img"><img className="img--bg" src="../../../assets/img/blog_1.jpg" alt="img" /><span className="blog-item__badge" 
                                    style={{backgroundcolor : '#49C2DF'}}>Water Delivery</span></div>
                                    <div className="blog-item__content">
                                        <h6 className="blog-item__title"><a href="#">Save the Children's Role in Fight Against Malnutrition Hailed</a></h6>
                                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster</p>
                                        <div className="blog-item__details"><span className="blog-item__date">23 Jan' 19</span><span>
                                            <svg className="icon">
                                                {/* <use xlinkHref="#comment"></use> */}
                                            </svg> 501</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="blog-item blog-item--style-1">
                                    <div className="blog-item__img"><img className="img--bg" src="../../../assets/img/blog_4.png" alt="img" /><span className="blog-item__badge"
                                    style={{backgroundcolor : '#F36F8F'}}>Medicine</span></div>
                                    <div className="blog-item__content">
                                        <h6 className="blog-item__title"><a href="#">Save the Children's Role in Fight Against Malnutrition Hailed</a></h6>
                                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster</p>
                                        <div className="blog-item__details"><span className="blog-item__date">23 Jan' 19</span><span>
                                            <svg className="icon">
                                                {/* <use xlinkHref="#comment"></use> */}
                                            </svg> 501</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-4">
                                <div className="blog-item blog-item--style-1">
                                    <div className="blog-item__img"><img className="img--bg" src="../../../assets/img/blog_7.jpg" alt="img" /><span className="blog-item__badge" 
                                    style={{backgroundcolor : '#F8AC3A'}}>Food</span></div>
                                    <div className="blog-item__content">
                                        <h6 className="blog-item__title"><a href="blog-post.html">Back to the future: Quality education through respect, </a></h6>
                                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail canthigaster</p>
                                        <div className="blog-item__details"><span className="blog-item__date">23 Jan' 19</span><span>
                                            <svg className="icon">
                                                {/* <use xlinkHref="#comment"></use> */}
                                            </svg> 5</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- blog end--> */}
                {/* <!-- donors start--> */}
                <section className="section donors donors--style-2 no-padding-top no-padding-bottom">
                    <div className="container">
                        <div className="row margin-bottom">
                            <div className="col-12">
                                <div className="heading heading--primary heading--center"><span className="heading__pre-title">Donors</span>
                                    <h2 className="heading__title no-margin-bottom"><span>Who Help</span> <span>Us</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                {/* <!-- donors slider start--> */}
                                <div className="slider-holder">
                                    <div className="donors-slider donors-slider--style-1">
                                        <div className="donors-slider__item">
                                            <div className="donors-slider__img"><img src="../../../assets/img/donor_1.png" alt="donor" /></div>
                                        </div>
                                        <div className="donors-slider__item">
                                            <div className="donors-slider__img"><img src="../../../assets/img/donor_2.png" alt="donor" /></div>
                                        </div>
                                        <div className="donors-slider__item">
                                            <div className="donors-slider__img"><img src="../../../assets/img/donor_3.png" alt="donor" /></div>
                                        </div>
                                        <div className="donors-slider__item">
                                            <div className="donors-slider__img"><img src="../../../assets/img/donor_4.png" alt="donor" /></div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- donors slider end--> */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- donors end--> */}
                {/* <!-- bottom bg start--> */}
                <section className="bottom-background">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bottom-background__img">
                                    <img src="../../../assets/../../../assets/img/bottom-bg.png" alt="img" />
                                    {/* <img src="../../../assets/img/bottom-bg.png" alt="img" /> */}
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- bottom bg end--> */}
            </main>
     
    );
};

export default Home;