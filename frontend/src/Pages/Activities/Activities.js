import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Activities = () => {

	const [activities, setActivities]=useState([]);
    useEffect(()=>{
    axios.get('http://localhost:8081/activities')
    .then(res=> setActivities(res.data))
    .catch(err=> console.log(err));
    },[])

    return (
        <div>
            <main class="main">
				<section class="promo-primary">
					<picture>
						<source srcset="../../../assets/img/stories.jpg" media="(min-width: 992px)"/><img class="img--bg" src="../../../assets/img/stories.jpg" alt="img"/>
					</picture>
					<div class="promo-primary__description"> <span>Compassion</span></div>
					<div class="container">
						<div class="row">
							<div class="col-auto">
								<div class="align-container">
									<div class="align-container__item"><span class="promo-primary__pre-title">Helpo</span>
										<h1 class="promo-primary__title"><span>Our</span> <span>Stories</span></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- stories start--> */}
				<section class="section stories">
					<div class="container">
						<div class="row offset-70">
						{
                            activities.map((data, i)=>(
								
							<div key={i} class="col-md-10 offset-md-1 col-lg-12 offset-lg-0">
								<div class="stories-item">
									<div class="row align-items-center">
										<div class="col-lg-6 col-xl-5">
											<div class="img-box"><img class="img--layout" src="../../../assets/img/storie_1-layout.png" alt="img"/>
												<div class="img-box__img"><img class="img--bg" src={data.main_image} alt="img"/>
												</div>
											</div>
										</div>
										<div class="col-lg-6 col-xl-6 offset-xl-1">
											<div class="heading heading--primary"><span class="heading__pre-title">{data.serial_number}</span>
												<h2 class="heading__title"><span>{data.title} </span>		
												</h2>
											</div>
											{/* <p> {data.content}</p> */}
											<a class="button stories-item__button button--primary" href="storie-details.html">Read Story</a>
										</div>
									</div>
								</div>
							</div>
							    ))
							}
						</div>
					</div>
				</section>
				{/* <!-- stories end--> */}
			</main>
        </div>
    );
};

export default Activities;