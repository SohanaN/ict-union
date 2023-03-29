import React from 'react';

const AboutUs = () => {
	return (
		<div>
			 	<main className="main">
				<section className="promo-primary">
					<picture>
						<source srcset="../../../assets/img/about.jpg" media="(min-width: 992px)"/><img className="img--bg" src="../../../assets/img/about.jpg" alt="img"/>
					</picture>
					<div className="promo-primary__description"> <span>Donation</span></div>
					<div className="container">
						<div className="row">
							<div className="col-auto">
								<div className="align-container">
									<div className="align-container__item"><span className="promo-primary__pre-title">ICT UNION</span>
										<h1 className="promo-primary__title"><span>About</span><br/><span>Organization</span></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- about-us start--> */}
				<section className="section about-us">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-xl-5">
								<div className="img-box"><img className="img--layout" src="../../../assets/img/about_layout-reverse.png" alt="img"/>
									<div className="img-box__img"><img className="img--bg" src="../../../assets/img/about_2.png" alt="img"/></div>
								</div>
							</div>
							<div className="col-lg-6 col-xl-6 offset-xl-1">
								<div className="heading heading--primary"><span className="heading__pre-title">About Us</span>
									<h2 className="heading__title"><span>Help is ICT</span> <span>Main UNION</span></h2>
								</div>
								<p><strong>Innovation through collaboration."</strong></p>
								<p>ICT Union is a labor union that represents workers in the information and communication technology (ICT) industry. It is dedicated to advancing the rights and interests of ICT workers, providing collective bargaining and representation for employees, and advocating for better working conditions and job security. The union works to ensure that ICT workers are treated fairly, and to protect their rights and benefits. The ICT Union operates in many countries around the world, and its membership includes a range of ICT professionals, including software engineers, data analysts, web developers, and more.</p>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- about-us end--> */}
				{/* <!-- vison style-2 start--> */}
				<section className="section about-us about-us--style-2 no-padding-top">
					<div className="container">
						<div className="row align-items-center">
							
							<div className="col-lg-6 col-xl-5 offset-xl-1">
								<div className="about-us__text-aside">Our Vision</div>
							</div>
							<div className="col-lg-6">
								<h4 className="about-us__subtitle">envision every country of the world be strong and full of skilled human resources through ICT.</h4>
								<p>education and training to build user-friendly ICT environment 
									and culture for smart and smooth life everywhere with the assurance 
									of human relations, social harmony and peace.</p>
								
							</div>
						</div>
					</div>
				</section>
				{/* <!-- vison style-2 end--> */}
				{/* <!-- about us style-2 start--> */}
				<section className="section about-us about-us--style-2 no-padding-top">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-xl-5">
								<h4 className="about-us__subtitle">The mission is to advance ICT knowledge, skill and practice through education.</h4>
								<p>training, research, awareness and innovation in every spare of life and society to reach the goal of modern technology-friendly country and the world community at large to boost up overall growth, development and peace.</p>
								
							</div>
							<div className="col-lg-6 offset-xl-1">
								<div className="about-us__text-aside">Our Mission</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- about us style-2 end--> */}
				{/* <!-- Objectives style-2 start--> */}
				<section className="section about-us about-us--style-2 no-padding-top">
					<div className="container">
						<div className="row align-items-center">
							
							<div className="col-lg-6 col-xl-5">
								<div className="about-us__text-aside">Our Objectives</div>
							</div>
							<div className="col-lg-6 offset-xl-1">
								<h4 className="about-us__subtitle">The mission is to advance ICT knowledge, skill and practice through education.</h4>
								<p>a.	Introduce information technology in different sectors for skill development and boostup outputs of the engaged workforce with particular emphasis on higher education as well as a technical discipline.</p>
								<p>b.	Organize pre-employment demand-driven IT courses to facilitate employment opportunities and self-employment as an entrepreneur.</p>
								<p>c.	Introduce and design need based IT courses for professional groups in health, tourism, transport and other growing sectors of the economy .</p>
								<p>d.	Design special IT courses for senior citizens, retired professionals, housewives as well as school-going children and disadvantaged groups of people that enhance their respective life and work.</p>
								<p>e.	Introduce special IT courses for occupational/technical workers in the field of agriculture, production and business with a focus on export on import.</p>
								<p>f.	Build partnerships for IT skill development for their respective organizational quality outputs through outsourcing of IT skill professionals based on each organization demand.</p>
								<p>g.	Create awareness for use and efficiency of different professional groups mostly independent groups to upgrade their professional skills and outputs</p>
                                <p>h.	To support ICT professionals, institutions and users by creating associations/unions globally for their recognition, development, networking, career support & training, business exposure, information dissemination, professional rights, awareness building, advocacy and representation.</p>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- Objectives style-2 end--> */}
				
				{/* <!-- video block start--> 
				<section className="section video-block no-padding-top">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="video-frame"><img className="img--bg" src="../../../assets/img/video_frame.png" alt="frame"/><a className="video-trigger video-frame__trigger" href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"><span className="video-frame__icon"><i className="fa fa-play" aria-hidden="true"></i></span><span className="video-frame__text">Watch our video</span></a><img className="video-frame__img-layout" src="../../../assets/img/video_frame-layout.png" alt="layout"/></div>
							</div>
						</div>
					</div>
				</section>*/}
				{/* <!-- video block end--> */}
				
				
			</main>
		</div>
	);
};

export default AboutUs;