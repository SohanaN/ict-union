import React from 'react';

const Team = () => {
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
							<div class="col-sm-6 col-lg-4 col-xl-3">
								
								<div class="team-item team-item--primary">
									<div class="team-item__img">
										<ul class="team-item__socials">
											<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
											<li class="item--active"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
											<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
										</ul><img class="img--bg" src="../../../assets/img/team_1.jpg" alt="teammate"/>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Chris Patt</div>
										<div class="team-item__position">CEO/Founder</div>
									</div>
								</div>
								
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								
								<div class="team-item team-item--primary">
									<div class="team-item__img">
										<ul class="team-item__socials">
											<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
											<li class="item--active"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
											<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
										</ul><img class="img--bg" src="../../../assets/img/team_6.jpg" alt="teammate"/>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Lisa Cherster</div>
										<div class="team-item__position">CEO/Founder</div>
									</div>
								</div>
								
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								
								<div class="team-item team-item--primary">
									<div class="team-item__img">
										<ul class="team-item__socials">
											<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
											<li class="item--active"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
											<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
										</ul><img class="img--bg" src="../../../assets/img/team_2.jpg" alt="teammate"/>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Mike Carter</div>
										<div class="team-item__position">Volunteer</div>
									</div>
								</div>
								
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								
								<div class="team-item team-item--primary">
									<div class="team-item__img">
										<ul class="team-item__socials">
											<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
											<li class="item--active"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
											<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
										</ul><img class="img--bg" src="../../../assets/img/team_7.jpg" alt="teammate"/>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Aisha Ten</div>
										<div class="team-item__position">CEO</div>
									</div>
								</div>
								
							</div>
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