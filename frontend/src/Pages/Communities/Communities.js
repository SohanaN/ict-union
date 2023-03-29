import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Communities = () => {
	const [communities, setCommunities]=useState([]);
    useEffect(()=>{
    axios.get('http://localhost:8081/communities')
    .then(res=> setCommunities(res.data))
    .catch(err=> console.log(err));
    },[])
    return (
        <div>
            <main class="main">
				<section class="promo-primary">
					<picture>
						<source srcset="../../../assets/img/donors.jpg" media="(min-width: 992px)"/><img class="img--bg" src="../../../assets/img/donors.jpg" alt="img"/>
					</picture>
					<div class="promo-primary__description"> <span>Mercy</span></div>
					<div class="container">
						<div class="row">
							<div class="col-auto">
								<div class="align-container">
									<div class="align-container__item"><span class="promo-primary__pre-title">Helpo</span>
										<h1 class="promo-primary__title"><span>Partners</span> <span>& Donors</span></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- donors inner start--> */}
				<section class="section donors-inner"><img class="donors-inner__bg" src="../../../assets/img/donors_inner.png" alt="img"/>
					<div class="container">
						<div class="row margin-bottom">
							<div class="col-12">
								<div class="heading heading--primary heading--center"><span class="heading__pre-title">Donors</span>
									<h2 class="heading__title"><span>Who Help</span> <span>Us</span></h2>
									<p>Tackling the necessity of safe water for all requires a cooperative and worldwide effort. Many philanthropists have chosen to take action in support of safe water by donating in support of One Drop's projects.</p>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								{/* <!-- donors slider start--> */}
								<div class="slider-holder">
									<div class="donors-slider donors-slider--style-2 offset-margin">
										<div class="donors-slider__item">
											<div class="donors-slider__img"><img src="../../../assets/img/donor_1.png" alt="donor"/></div>
										</div>
										<div class="donors-slider__item">
											<div class="donors-slider__img"><img src="../../../assets/img/donor_2.png" alt="donor"/></div>
										</div>
										<div class="donors-slider__item">
											<div class="donors-slider__img"><img src="../../../assets/img/donor_3.png" alt="donor"/></div>
										</div>
										<div class="donors-slider__item">
											<div class="donors-slider__img"><img src="../../../assets/img/donor_4.png" alt="donor"/></div>
										</div>
										<div class="donors-slider__item">
											<div class="donors-slider__img"><img src="../../../assets/img/donor_5.png" alt="donor"/></div>
										</div>
										<div class="donors-slider__item">
											<div class="donors-slider__img"><img src="../../../assets/img/donor_6.png" alt="donor"/></div>
										</div>
										<div class="donors-slider__item">
											<div class="donors-slider__img"><img src="../../../assets/img/donor_7.png" alt="donor"/></div>
										</div>
										<div class="donors-slider__item">
											<div class="donors-slider__img"><img src="../../../assets/img/donor_8.png" alt="donor"/></div>
										</div>
									</div>
								</div>
								{/* <!-- donors slider end--> */}
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<ul class="donors-list">
								{
                            communities.map((data, i)=>(    
									<li key={i} class="donors-list__item"><a class="donors-list__link" href="#">{data.client_name}</a></li>
									))
								}	
								</ul>
							</div>
						</div>
					</div>
				</section>
				
				<section class="section text-section text-section--style-2"><img class="text-section__bg-left" src="../../../assets/img/text-section_left.png" alt="img"/><img class="text-section__bg-right" src="../../../assets/img/text-section_right.png" alt="img"/>
					<div class="container">
						<div class="row">
							<div class="col-12 text-center">
								<h2 class="text-section__heading">Thank You</h2>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-8 offset-lg-4 col-xl-7 offset-xl-4">
								<h3 class="text-section__title">To all our donors, <br/>partners and volunteers</h3>
								<p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish</p>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- text section end--> */}
			</main>
        </div>
    );
};

export default Communities;