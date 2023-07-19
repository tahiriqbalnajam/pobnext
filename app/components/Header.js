import Image from 'next/image'

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <div className="main-logo">
                        <a href="#">
                            <Image height="103" width="160" src="/images/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="header-box-right">
                        <div className="header-middle">
                            <div className="header-middle-left">
                                <div className="header-info">
                                    <i className="fa-solid fa-envelope"></i>
                                    <div className="header-info-text">
                                        <h6>Email</h6>
                                        <p>info@pobtrust.org</p>
                                    </div>
                                </div>
                                <div className="header-info">
                                    <i className="fa-regular fa-clock"></i>
                                    <div className="header-info-text">
                                        <h6>08:00 - 16:30</h6>
                                        <p>Monday to Saturday</p>
                                    </div>
                                </div>
                                <div className="header-info">
                                    <i className="fa-solid fa-phone"></i>
                                    <div className="header-info-text">
                                        <h6>Call Now</h6>
                                        <p>+923479997772</p>
                                    </div>
                                </div>
                            </div>
                            <div className="social-icons">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                        <div className="header-bottom">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand" href="#">
                                    <Image height="50" width="50" src="/images/logo.png" alt="" />
                                </a>
                                <div className="navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">About Us</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Projects
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Eye Hospitals</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Join</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Gallery</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="header-btn">
                                    <a href="#">Donate Now</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
