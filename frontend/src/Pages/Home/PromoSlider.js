import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PromoSlider = () => {
    const [slider, setSlider]=useState([]);
    useEffect(()=>{
    axios.get('http://localhost:8081/')
    .then(res=> setSlider(res.data))
    .catch(err=> console.log(err));
    },[])
    return (
        <div>
            {/* <!-- promo start--> */}
            <section className="promo promo--front_3">
            {
                            slider.map((data, i)=>(
                    <div className="promo-slider">
                        <div className="promo-slider__item promo-slider__item--style-3">
                            <picture>
                                <source srcset="../../../assets/img/front-3_promo.jpg" media="(min-width: 635px)" />
                                <source srcset="../../../assets/img/375front-3_promo.jpg" media="(min-width: 276px)" />
                                <img className="img--bg" src="../../../assets/img/375front-3_promo.jpg" alt="img" />
                            </picture>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 offset-xl-6 text-left">
                                        <div className="align-container">
                                            <div className="align-container__item">
                                                <div className="promo-slider__wrapper-1">
                                                    <h2 className="promo-slider__title"><span>{data.title}</span></h2>
                                                </div>
                                                <div className="promo-slider__wrapper-2">
                                                    <p className="promo-slider__subtitle">{data.text}</p>
                                                </div>
                                                <div className="promo-slider__wrapper-3"><a className="button promo-slider__button button--primary" href="#">Discover</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    ))
}
                    {/* <!-- promo pannel start--> */}
                    <div className="promo-pannel">
                        <div className="promo-pannel__video"><img className="img--bg" src="../../../assets/img/video_block-3.jpg" alt="image" /><a className="video-trigger" href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"><span>Watch our video</span><i className="fa fa-play" aria-hidden="true"></i></a></div>
                    </div>
                    {/* <!-- promo pannel end--> */}
                    {/* <!-- slider nav start--> */}
                    <div className="slider__nav slider__nav--promo">
                        <div className="promo-slider__count"></div>
                        <div className="slider__arrows">
                            <div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
                            </div>
                            <div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    {/* <!-- slider nav end--> */}
                </section>
                {/* <!-- promo end--> */} 
        </div>
    );
};

export default PromoSlider;