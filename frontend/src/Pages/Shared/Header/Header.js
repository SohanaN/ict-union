import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            
         {/* <!-- aside dropdown start--> */}
        <div className="aside-dropdown">
            <div className="aside-dropdown__inner"><span className="aside-dropdown__close">
                <svg className="icon">
                    <use href="#close" xlinkHref="#close"></use>
                </svg></span>
            <div className="aside-dropdown__item d-lg-none d-block">
                <ul className="aside-menu">
                    <li className="aside-menu__item aside-menu__item--has-child aside-menu__item--active"><Link className="aside-menu__link" to="/" >Home</Link>
                        
                    </li>
                    
                    <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>About</span></a>
                        {/* <!-- sub menu start--> */}
                        <ul className="aside-menu__sub-list">
                                        <li><Link to="/about"><span>Mission</span></Link></li>
                                        <li><Link to="/about"><span>Vision</span></Link></li>
                                        <li> <Link to="/about"><span>Goal</span></Link></li>
                                        <li> <Link to="/about"><span>Objectives</span></Link></li>
                                        <li> <Link to="/about"><span>Work Plan</span></Link></li>
                                        <li><Link to="/team"><span>Team</span></Link></li>
                        </ul>
                        {/* <!-- sub menu end--> */}
                    </li>
                    <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Project</span></a>
                        {/* <!-- sub menu start--> */}
                        <ul className="aside-menu__sub-list">
                                <li><Link to="/project"><span>Ongoing</span></Link></li>
                                <li> <Link to="/project"><span>Upcoming</span></Link></li>
                                <li><Link to="/project"><span>Completed</span></Link></li>
                        </ul>
                        {/* <!-- sub menu end--> */}
                    </li>
                    
                </ul>
            </div>
            <div className="aside-dropdown__item">
                {/* <!-- aside menu start--> */}
                <ul className="aside-menu">
                    <li className="aside-menu__item"><Link className="aside-menu__link" to="/activities" >Activities</Link></li>
                    <li className="aside-menu__item"><Link className="aside-menu__link" to="/communities" >Communities</Link></li>
                    <li className="aside-menu__item"><Link className="aside-menu__link" to="/events" >News & Events</Link></li>
                    <li className="aside-menu__item"><Link className="aside-menu__link" to="/gallery" >Gallery</Link></li>
                    <li className="aside-menu__item"><Link className="aside-menu__link" to="/contacts" >Contacts</Link></li>
                </ul>
                {/* <!-- aside menu end--> */}
                <div className="aside-inner"><span className="aside-inner__title">Email</span><a className="aside-inner__link" href="mailto:support@helpo.org">support@helpo.org</a></div>
                <div className="aside-inner"><span className="aside-inner__title">Phone numbers</span><a className="aside-inner__link" href="tel:+180012345678">+ 1800 - 123 456 78</a><a className="aside-inner__link" href="tel:+18009756511">+ 1800 - 975 65 11</a></div>
                <ul className="aside-socials">
                    <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li className="aside-socials__item"><a className="aside-socials__link aside-socials__link--active" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className="aside-dropdown__item"><a className="button button--squared" href="#"><span>Donate</span></a></div>
            </div>
        </div>
        {/* <!-- aside dropdown end--> */}
        {/* <!-- top bar start--> */}
        <div className="top-bar d-none d-lg-block">
            <div className="container-fluid">
                <div className="row align-items-end">
                    <div className="col-lg-9">
                    
                        <a className="top-bar__link" href="front_3.html">Home</a>
                        <a className="top-bar__link"><Link to="/contacts" className="top-bar__link">Contact</Link></a><a className="top-bar__link" href="mailto:support@helpo.org"></a></div>
                    <div className="col-lg-3 text-right">
                        <ul className="socials">
                            <li className="socials__item"><a className="socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li className="socials__item"><a className="socials__link" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li className="socials__item"><a className="socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li className="socials__item"><a className="socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- top bar end--> */}
        {/* <!-- header start--> */}
        <header className="header header--front_3">
            <div className="container-fluid">
                <div className="row no-gutters justify-content-between">
                    <div className="col-auto d-flex align-items-center">
                        <div className="dropdown-trigger d-none d-sm-block">
                            <div className="dropdown-trigger__item"></div>
                        </div>
                        <div className="header-logo">
                       <Link to="/" className="header-logo__link">
                        <span>
                            <img className="header-logo__img" src="assets/img/ictu.png" alt="logo" />
                            </span>
                            </Link>
                            </div>
                    </div>
                    <div className="col-auto">
                        {/* <!-- main menu start--> */}
                        <nav>
                            <ul className="main-menu">
                            
                                <li className="main-menu__item main-menu__item--has-child"><Link to="/about" className="main-menu__link"><span>About</span></Link>
                                    {/* <!-- sub menu start--> */}
                                    <ul className="main-menu__sub-list sub-list--style-2">
                                        
                                        <li> <Link to="/about"><span>Objectives</span></Link></li>
                                        <li> <Link to="/about"><span>Work Plan</span></Link></li>
                                        <li><Link to="/team"><span>Team</span></Link></li>
                                    </ul>
                                    {/* <!-- sub menu end--> */}
                                </li>
                                <li className="main-menu__item"><Link to="/activities" className="main-menu__link"><span>Activities</span></Link>

                                </li>

                                <li className="main-menu__item main-menu__item--has-child"><Link to="" className="main-menu__link" ><span>Project</span></Link>
                                    {/* <!-- sub menu start--> */}
                                    <ul className="main-menu__sub-list">
                                        <li><Link to="/project"><span>Ongoing</span></Link></li>
                                        <li> <Link to="/project"><span>Upcoming</span></Link></li>
                                        <li><Link to="/project"><span>Completed</span></Link></li>
                                    </ul>
                                    {/* <!-- sub menu end--> */}
                                </li>
                                <li className="main-menu__item"><Link to="/communities" className="main-menu__link"><span>Communities</span></Link>

                                </li>
                                <li className="main-menu__item"><Link to="/events" className="main-menu__link"><span>News & Events</span></Link>

                                </li>
                                <li className="main-menu__item"><Link to="/gallery" className="main-menu__link"><span>Gallery</span></Link>

                                </li>

                            </ul>
                        </nav>
                        {/* <!-- main menu end--> */}
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        {/* <!-- lang select start--> 
                        <ul className="lang-select">
                            <li className="lang-select__item lang-select__item--active"><span>En</span>
                                <ul className="lang-select__sub-list">
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">Spanish</a></li>
                                    <li><a href="#">Deutsch</a></li>
                                    <li><a href="#">Russian</a></li>
                                </ul>
                            </li>
                        </ul>*/}
                        {/* <!-- lang select end--> */}
                        <Link to="/membership" className="button button--squared"><span>Membership</span></Link>
                        
                        <div className="dropdown-trigger d-block d-sm-none">
                            <div className="dropdown-trigger__item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </div>
    );
};

export default Header;