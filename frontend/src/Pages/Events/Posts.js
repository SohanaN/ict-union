import React from 'react';

const Posts = ({ event, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <>
				<section class="promo-primary">
					<picture>
						<source srcset="../../../assets/img/events.jpg" media="(min-width: 992px)"/><img class="img--bg" src="../../../assets/img/events.jpg" alt="img"/>
					</picture>
					<div class="promo-primary__description"> <span>Happiness</span></div>
					<div class="container">
						<div class="row">
							<div class="col-auto">
								<div class="align-container">
									<div class="align-container__item"><span class="promo-primary__pre-title">Helpo</span>
										<h1 class="promo-primary__title"><span>Our</span> <span>Events</span></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- events inner start--> */}
				<section class="section events-inner"><img class="events-inner__bg" src="../../../assets/img/events_inner-bg.png" alt="img"/>
					<div class="container">
						<div class="row offset-30">
						{
                            event.map((data, i)=>(                               
							<div key={i} class="col-xl-10 offset-xl-1">
								<div class="upcoming-item">
									<div class="upcoming-item__date"><span>30</span><span>Oct, 19</span></div>
									<div class="upcoming-item__body">
										<div class="row align-items-center">
											<div class="col-lg-5 col-xl-4">
												<div class="upcoming-item__img"><img class="img--bg" src={data.featured_image} alt="img"/></div>
											</div>
											<div class="col-lg-7 col-xl-8">
												<div class="upcoming-item__description">
													<h6 class="upcoming-item__title"><a href="event-details.html">{data.title}</a></h6>
													{/* <p>{data.content}</p> */}
													<div class="upcoming-item__details">
														<p>
															<svg class="icon">
                                                            <use href="#clock" xlinkHref="#clock"></use>
															</svg> <strong>{data.start_date}</strong> - <strong>{data.submission_date}</strong> 
														</p>
														<p>
															<svg class="icon">
                                                            <use href="#placeholder" xlinkHref="#placeholder"></use>			
															</svg> <strong>Dark Spurt,</strong> San Francisco, CA 94528, USA
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							))
                        }
						</div>
						<div class="row">
							<div class="col-12">
								{/* <!-- pagination start--> */}
								{/* <ul class="pagination">
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
								</ul> */}
								{/* <!-- pagination end--> */}
							</div>
						</div>
					</div>
				</section>
				{/* <!-- events inner end--> */}
				{/* <!-- bottom bg start--> */}
				<section class="bottom-background background--brown">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="bottom-background__img"><img src="../../../assets/img/bottom-bg.png" alt="img"/></div>
							</div>
						</div>
					</div>
				</section>
				{/* <!-- bottom bg end--> */}
			
        </>
    );
};

export default Posts;