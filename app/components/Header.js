import Image from 'next/image'
import HeaderNavBar from '@/components/HeaderNavBar.js'

export default function Header() {
    return (
        <>
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
                                <HeaderNavBar />
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
        <section id="banner" className="w-full bg-[url(/images/banner-img.jpg)]">
        <div className="container">
          <div className="owl-carousel owl-theme banner-slider">
            <div className="item">
              <div className="banner-content">
                <h4>Helping seniors by donate us!!</h4>
                <h1>For just <span>7000</span> rupees</h1>
                <p>one's sight can be restored.</p>
                <div className="banner-btn">
                  <a href="#" className="btn-white">Donate Now</a>
                  <a href="#" className="btn-red">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="banner-content">
                <h4>Helping seniors by donate us!!</h4>
                <h1>For just <span>7000</span> rupees</h1>
                <p>one's sight can be restored.</p>
                <div className="banner-btn">
                  <a href="#" className="btn-white">Donate Now</a>
                  <a href="#" className="btn-red">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="banner-content">
                <h4>Helping seniors by donate us!!</h4>
                <h1>For just <span>7000</span> rupees</h1>
                <p>one's sight can be restored.</p>
                <div className="banner-btn">
                  <a href="#" className="btn-white">Donate Now</a>
                  <a href="#" className="btn-red">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="banner-overlay"></span>
        </section>
        
        </>
    )
}
