import React from 'react';

const Footer = () => {
    return (
        <>
            {/* <!-- footer front_3 start--> */}
            <footer className="footer footer--front_3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-logo"><a className="footer-logo__link" href="index.html"><img className="footer-logo__img" src="assets/img/ictu.png" alt="logo" /></a></div>
                            <div className="footer-contacts">
                                <p className="footer-contacts__address">Elliott Ave, Parkville VIC 3052, Melbourne Canada</p>
                                <p className="footer-contacts__phone">Phone: <a href="tel:+31859644725">+31 85 964 47 25</a></p>
                                <p className="footer-contacts__mail">Email: <a href="mailto:support@helpo.org">support@helpo.org</a></p>
                            </div>
                            {/* <!-- footer socials start--> */}
                            <ul className="footer-socials">
                                <li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                            {/* <!-- footer socials end--> */}
                        </div>
                        <div className="col-lg-8">
                            {/* <!-- footer nav start--> */}
                            <nav>
                                <ul className="footer-menu">
                                    <li className="footer-menu__item footer-menu__item--active"><a className="footer-menu__link" href="#">Home Page</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Blog & News</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Donations</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Clean Water</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">About Us</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Contact Us</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Animals</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Madicine</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Pages</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Elements</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Children</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Food</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Causes</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Documentation</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Old People</a></li>
                                    <li className="footer-menu__item"><a className="footer-menu__link" href="#">Documentation</a></li>
                                </ul>
                            </nav>
                            {/* <!-- footer nav end--> */}
                        </div>
                    </div>
                </div>
                <div className="footer__lower">
                    <div className="container">
                        <div className="row align-items-baseline">
                            <div className="col-md-6 col-xl-7">
                                <p className="footer-copyright">© 2020 Helpo Charity Template by Artureanec</p>
                            </div>
                            <div className="col-md-6 col-xl-5">
                                <div className="footer__form">
                                    <input className="footer__form-input" type="email" placeholder="Enter your E-mail" />
                                    <button className="footer__form-submit button button--primary" type="submit">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- footer front_3 end--> */}
        </>
    );
};

export default Footer;