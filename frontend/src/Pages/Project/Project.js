import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Project = () => {
	const [project, setProject]=useState([]);
    useEffect(()=>{
    axios.get('http://localhost:8081/project')
    .then(res=> setProject(res.data))
    .catch(err=> console.log(err));
    },[])
    return (       
			<main class="main">
				<section class="promo-primary">
					<picture>
						<source srcset="../../../assets/img/causes.jpg" media="(min-width: 992px)"/><img class="img--bg" src="../../../assets/img/causes.jpg" alt="img"/>
					</picture>
					<div class="promo-primary__description"> <span>Charity</span></div>
					<div class="container">
						<div class="row">
							<div class="col-auto">
								<div class="align-container">
									<div class="align-container__item"><span class="promo-primary__pre-title">Helpo</span>
										<h1 class="promo-primary__title"><span>Our</span> <span>Causes</span></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section class="section causes-inner">
					<div class="container">
						<div class="row offset-margin">
						{
                            project.map((data, i)=>( 
							<div key={i} class="col-md-6 col-lg-4">
								<div class="causes-item causes-item--primary">
									<div class="causes-item__body">
										<div class="causes-item__top">
											<h6 class="causes-item__title"> <a href="cause-details.html">{data.title}</a></h6>
											<p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail</p>
										</div>
										<div class="causes-item__img">
											<div class="causes-item__badge" style={{background:'#49C2DF'}}>Water Delivery</div><img class="img--bg" src={data.main_image} alt="img"/>
										</div>
										
									</div><a class="button causes-item__button button--primary" href="cause-details.html">+ Details</a>
								</div>
							</div>
))
}
						</div>
					</div>
					<div class="container">
						<div class="row">
							<div class="col-12">
								
								<ul class="pagination">
									<li class="pagination__item pagination__item--prev"><i class="fa fa-angle-left" aria-hidden="true"></i><span>Back</span>
									</li>
									<li class="pagination__item"><span>1</span></li>
									<li class="pagination__item pagination__item--active"><span>2</span></li>
									<li class="pagination__item"><span>3</span></li>
									<li class="pagination__item"><span>4</span></li>
									<li class="pagination__item"><span>5</span></li>
									<li class="pagination__item pagination__item--disabled">...</li>
									<li class="pagination__item"><span>12</span></li>
									<li class="pagination__item pagination__item--next"><span>Next</span><i class="fa fa-angle-right" aria-hidden="true"></i>
									</li>
								</ul>
								
							</div>
						</div>
					</div>
				</section>
				
				<section class="bottom-background background--brown">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="bottom-background__img"><img src="../../../assets/img/bottom-bg.png" alt="img"/></div>
							</div>
						</div>
					</div>
				</section>
				
			</main>
			
			
			
		
				
			
        
    );
};

export default Project;