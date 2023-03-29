import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
	const [team, setTeam]=useState([]);
    useEffect(()=>{
    axios.get('http://localhost:8081/team')
    .then(res=> setTeam(res.data))
    .catch(err=> console.log(err));
    },[])
    return (
        <div>
            	<main class="main">
				<section class="promo-primary promo-primary--elements">
					<picture>
						<source srcset="../../../assets/img/alerts.jpg" media="(min-width: 992px)"/><img class="img--bg" src="../../../assets/img/alerts.jpg" alt="img"/>
					</picture>
					<div class="promo-primary__description"> <span>Elements</span></div>
					<div class="container">
						<div class="row">
							<div class="col-auto">
								<div class="align-container">
									<div class="align-container__item"><span class="promo-primary__pre-title">Helpo</span>
										<h1 class="promo-primary__title"><span>Team</span></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section class="section elements no-padding-top">
					<div class="container">
						<div class="row">
							<div class="col-auto">
								<h4 class="elements__title"></h4>
							</div>
						</div>
						<div class="row offset-margin">
						{
                            team.map((data, i)=>(                               
							<div key={i} class="col-sm-6 col-lg-4 col-xl-3">								
								<div class="team-item team-item--primary">
									<div class="team-item__img">
										<ul class="team-item__socials">
											<li>
											<Link to={data.facebook}>
											<i class="fa fa-facebook" aria-hidden="true"></i>
											</Link >
											</li>
											<li class="item--active">
											<Link to={data.twitter}>
											<i class="fa fa-twitter" aria-hidden="true"></i>
											</Link ></li>
											<li>
											<Link to={data.instagram}>
											<i class="fa fa-instagram"></i>
											</Link >
												</li>
											<li>
											<Link to={data.linkedin}>
											<i class="fa fa-linkedin"></i>
											</Link >
												</li>
										</ul><img class="img--bg" src={data.image} alt="teammate"/>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">{data.name}</div>
										<div class="team-item__position">{data.rank}</div>
									</div>
								</div>								
							</div>
								))
							}
						</div>
					</div>
				</section>
				
				<section class="bottom-background">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="bottom-background__img"><img src="../../../assets/img/bottom-bg.png" alt="img"/></div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- bottom bg end--> */}
			</main>
        </div>
    );
};

export default Team;