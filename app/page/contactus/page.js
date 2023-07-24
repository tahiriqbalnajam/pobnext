import Image from 'next/image'

export default function Home() {
    return (
        <>  
            <div className="contact-page-area overflow-hidden py-120 rpt-100">
                <div className="container flex">
                    <div className="rows gap-60 align-items-center contents">
                        <div className="col-lg-6">
                            <div className="faq-three-left-part mb-20 rel rmb-75">
                                <Image height='520' width='481' src="/images/about/contactusimg.png" alt="Man" />
                                <div className="counter-item counter-text-wrap">
                                    <div className="counter-item__content">
                                        <span className="count-text" data-speed="3000" data-stop="80000">20,071,260</span>
                                        <h5 className="counter-title">OPD</h5>
                                    </div>
                                </div>
                                <div className="project-complete">
                                    <div className="project-complete__icon">
                                        <i className="flaticon-charity"></i>
                                    </div>
                                    <div className="project-complete__content">
                                        <h5>We Completed 293,242 Surgeries</h5>
                                        <span>Donet for charity</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-page-form form-style-two py-110 rpy-85">
                                <div className="section-title mb-10">
                                    <span className="section-title__subtitle mb-10">Need help</span>
                                    <h3>Get In touch</h3>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-xl-9 mb-10">
                                            <p>Donate a camp, donate a school screening, donate in POB Eye Hospitals, Volunteer with us.</p>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                           
                                                <input type="text" id="name" name="name" className="form-control" value=""
                                                    placeholder="Username" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                        
                                                <input type="email" id="email" name="email" className="form-control" value=""
                                                    placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            
                                                <input type="text" id="phone_number" name="phone_number" className="form-control"
                                                    value="" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                
                                                <textarea name="message" id="message" className="form-control" rows="2"
                                                    placeholder="Your Message" required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group pt-10 mb-0">
                                            <a href="#" class="btn-red">Send Message</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-info-area pb-85">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-4 col-sm-6">
                            <div class="contact-info-item contact-info-item--green">
                                <div class="contact-info__icon"><i class="flaticon-phone-call"></i></div>
                                <h5>Phone Number</h5>
                                <div class="contact-info__text">
                                    <span>Lahore: 92 42 3541 4720-21</span><br /><br />
                                    <span>Karachi: 0092 21 3415 6597</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="contact-info-item contact-info-item--yellow">
                                <div class="contact-info__icon"><i class="fas fa-paper-plane"></i></div>
                                <h5>Email Address</h5>
                                <div class="contact-info__text">
                                    <a href="mailto:info1234@gmail.com">info@pobtrust.org</a><br />
                                    <a href="mailto:test1234@gmail.com">gs@pobtrust.org</a><br />
                                    <a href="mailto:test1234@gmail.com">info@pobkarachi.org</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="contact-info-item">
                                <div class="contact-info__icon"><i class="flaticon-pin"></i></div>
                                <h5>Address</h5>
                                <div class="contact-info__text">
                                Lahore: 720 Kamran Block,<br /> Allama Iqbal Town. Lahore <br /><br />
                                Karachi: C-15, Block 12, Gulishtan <br /> e Johar, Munawar Chorangi, <br /> Karachi
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}