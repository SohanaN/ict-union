import axios from 'axios';
import React, { useEffect, useState } from 'react';

const WorkPlan = () => {    
	const [workPlan, setWorkPlan]=useState([]);
    useEffect(()=>{
    axios.get('http://localhost:8081/workPlan')
    .then(res=> setWorkPlan(res.data))
    .catch(err=> console.log(err));
    },[])

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

				{/* <!-- about us style-2 start--> */}
                {
                            workPlan.map((data, i)=>(  
				
				<section key={i} className="section about-us about-us--style-2 no-padding-top">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6 col-xl-5">
                                <h2>{data.title}</h2>
								<h4 className="about-us__subtitle">{data.subtitle}</h4>
								{/* <p>{data.body}</p>								 */}
							</div>
							<div className="col-lg-6 offset-xl-1">
								<div className="about-us__text-aside">{data.name}</div>
							</div>
						</div>
					</div>
				</section>
				
	))
}
			{/* <!-- about us style-2 end--> */}
			
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

export default WorkPlan;