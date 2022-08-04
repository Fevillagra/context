import './Footer.css'

export const Footer = () => {
    return(
        <footer className="footer" id="f">
            <div className="footer__content">
                <div className="footer__content--main">
                    <h3>Firemovie's ©</h3>
                    <p>Movies and series.</p>
                </div>
                <div className="footer__content--divlist">
                    <h3>Content</h3>
                    <ul>
                        <li><a href="#f">Movies</a></li>
                        <li><a href="#f">Series</a></li>
                        <li><a href="#f">Anime</a></li>
                        <li><a href="#f">Ovas</a></li>
                        <li><a href="#f">Shorts</a></li>
                    </ul>
                </div>
                <div className="footer__content--divlist">
                    <h3>Services</h3>
                    <ul>
                        <li><a href="#f">FIre Music</a></li>
                        <li><a href="#f">Fire TV+</a></li>
                        <li><a href="#f">Fire Books</a></li>
                        <li><a href="#f">Fire Arcade</a></li>
                        <li><a href="#f">Fire Card</a></li>
                        <li><a href="#f">Fire Podcast</a></li>
                    </ul>
                </div>
                
                <div className="footer__content--divlist">
                    <h3>Us</h3>
                    <ul>
                        <li><a href="#f">About Us</a></li>
                        <li><a href="#f">Contact Us</a></li>
                        <li><a href="#f">Affiliates</a></li>
                        <li><a href="#f">Resources</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__media">
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-facebook-f"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-twitter"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-youtube"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-instagram"></i></a></div>
                <div className="footer__media--div"><a href="#f"><i className="fa-brands fa-linkedin-in"></i></a></div>
            </div>
            <div className="footer__copy">
                <p>©Copyright. All rights reserved.</p>
            </div>
        </footer>
    )
}