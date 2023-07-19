export default function Footer() {

return (
    <footer class="footer w-full">
            <div class="container">
                <div class="newsletter">
                    <h2>enter your e-mail</h2>
                    <p>subscribe for news and update</p>
                    <div class="newsletter-form">
                        <input type="text" class="form-control" placeholder="enter your email" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3 col-md-7">
                        <div class="footer-box">
                            <h4>about us</h4>
                            <p>A world in which no one is needlessly blind and where those with unavoidable blindness can achieve the full potential of life.</p>
                            <div class="social-icons">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="offset-lg-1 col-lg-2 col-md-5">
                        <div class="footer-box">
                            <h4>LINKS</h4>
                            <div class="footer-list">
                                <a href="#">Home</a>
                                <a href="#">About Us</a>
                                <a href="#">Projects</a>
                                <a href="#">Eye Hospital</a>
                                <a href="#">Join</a>
                                <a href="#">Gallery</a>
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-box">
                            <h4>News & event</h4>
                            <div class="footer-list">
                                <a href="#">Annual report</a>
                                <a href="#">Newsletters</a>
                                <a href="#">Success stories</a>
                                <a href="#">Milestone patient</a>
                                <a href="#">Photo gallery</a>
                            </div>
                        </div>
                    </div>	
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-box">
                            <h4>CONTACT US</h4>
                            <div class="footer-info mb-4">
                                <h5><i class="fa-solid fa-location-dot"></i> Address</h5>
                                <p class="mb-2">Lahore: 720 Kamran Block, Allama Iqbal Town. Lahore</p>
                                <p>Karachi: C-15, Block 12, Gulishtan e Johar, Munawar Chorangi, Karachi</p>
                            </div>
                            <div class="footer-info mb-4">
                                <h5><i class="fa-solid fa-phone-volume"></i> Phone</h5>
                                <p class="mb-2">Lahore: 92 42 3541 4720-21</p>
                                <p>Karachi: 0092 21 3415 6597</p>
                            </div>
                            <div class="footer-info">
                                <h5><i class="fa-regular fa-envelope"></i> Email Address</h5>
                                <p class="mb-2">info@pobtrust.org</p>
                                <p>gs@pobtrust.org</p>
                            </div>
                        </div>
                    </div>	
                </div>
                <p class="copyright">Copyright 2023 @ <a href="www.pobtrust.org">POBT TRUST</a> </p>
            </div>
    </footer>
    )
}