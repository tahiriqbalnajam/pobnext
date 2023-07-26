import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div class="about-area py-120 text-[black]">
                <div class="container aboutus">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="about-image-part">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="image">
                                            <Image height='333' width='243' src="/images/about/contactus1-1.jpg" alt="About" />
                                        </div>
                                        <div class="project-complete mb-30">
                                            <div class="project-complete__icon">
                                                <i class="flaticon-charity"></i>
                                            </div>
                                            <div class="project-complete__content">
                                                <h5>We Completed 293,242 Surgeries</h5>
                                                <span>Donet for charity</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="image mt-65 rmt-15 rel">
                                            <Image height='244' width='233' src="/images/about/contactus2.jpg" alt="About" />
                                            
                                        </div>
                                        <div class="image">
                                            <Image height='183' width='243' src="/images/about/contactus3.jpg" alt="About" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content-part rmt-65">
                                <div class="section-titles mb-20">
                                    
                                    <h2>BRIEF<span className='text-[#ED1C24]'> PROFILE</span></h2>
                                </div>
                                <p className='pb-[16px]'>Prevention of Blindness Trust is a registered charity working for the prevention and treatment of the avoidable causes of blindness focusing on the deprived and marginalized communities. Since its inception in July 2007, the trust has been providing free-of-cost diagnostic and surgical eye care services in remote and deprived areas of 'Pakistan' and different 'African' countries. We have established a strong network of volunteer ophthalmologists, eye care professionals, donors, and community-based workers. We safely assume that our services have covered millions of people and contributed to social and economic development.</p>
                                <div class="counter-item counter-text-wrap mt-30">
                                    <div class="counter-item__icon"><i class="flaticon-solidarity"></i></div>
                                    <div class="counter-item__content">
                                        <span class="count-text" data-speed="3000" data-stop="876000">20,071,260</span>
                                        <span class="counter-title">OPD done</span>
                                    </div>
                                </div>
                                <div class="counter-item counter-text-wrap">
                                    <div class="counter-item__icon counter-item__icon--green"><i class="flaticon-help"></i>
                                    </div>
                                    <div class="counter-item__content">
                                        <span class="count-text" data-speed="3000" data-stop="45000">810</span>
                                        <span class="counter-title">Free Eye Camps</span>
                                    </div>
                                </div>
                                <a href="#" class="btn-red">Discover More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="our-event-area pt-120 pb-95 rel z-1">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8 col-md-10">
                            <div class="section-title text-center mb-65">
                                <h3>Events <span> Held</span></h3>
                                
                            </div>
                        </div>
                    </div>
                    <div class="row events-active">
                        <div class="col-xl-4 col-md-6 item">
                            <div class="event-item">
                                <Image height='457' width='416' src="/images/briefprofileevent1.jpg" alt="Event" />
                                <div class="event-item__hover">
                                    <h4><a href="event-details.html">Free Eye Camp held in Tank DI Khan</a></h4>
                                    <ul>
                                        <li><i class="flaticon-time"></i> <span>14 January 2022</span></li>
                                        <li><span><b>OPD:</b> 700 <b>Surgeries:</b> 800</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 item">
                            <div class="event-item">
                                <Image height='323' width='416' src="/images/briefprofileevent2.jpg" alt="Event" />
                                <div class="event-item__hover">
                                    <h4><a href="event-details.html">Free Eye Camp held in Bhera</a></h4>
                                    <ul>
                                        <li><i class="flaticon-time"></i> <span>15 January 2022</span></li>
                                        <li><span><b>OPD:</b> 700 <b>Surgeries:</b> 18</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 item">
                            <div class="event-item">
                                <Image height='437' width='416' src="/images/briefprofileevent3.jpg" alt="Event" />
                                <div class="event-item__hover">
                                    <h4><a href="event-details.html">Khursheed Begubm School, Baidian road Lahore</a></h4>
                                    <ul>
                                        <li><i class="flaticon-time"></i> <span>24 – 27 January 2022</span></li>
                                        <li><span><b>OPD:</b> 1036 <b>Surgeries:</b> 236</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 item relative top-[23px]">
                            <div class="event-item">
                                <Image height='313' width='416' src="/images/briefprofileevent4.jpg" alt="Event" />
                                <div class="event-item__hover">
                                    <h4><a href="event-details.html">Free Eye Camp held in Lahore</a></h4>
                                    <ul>
                                        <li><i class="flaticon-time"></i> <span>26 February 2022</span></li>
                                        <li><span><b>OPD:</b> 120 </span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 item relative top-[-95px]">
                            <div class="event-item">
                                <Image height='547' width='516' src="/images/briefprofileevent5.jpg" alt="Event" />
                                <div class="event-item__hover">
                                    <h4><a href="event-details.html">Free Eye Camp held in Bhera</a></h4>
                                    <ul>
                                        <li><i class="flaticon-time"></i> <span>08 – 09 February 2022</span></li>
                                        <li><span><b>OPD:</b> 769 <b>Surgeries:</b> 120</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-6 item ">
                            <div class="event-item">
                                <Image height='416' width='337' src="/images/briefprofileevent6.jpg" alt="Event" />
                                <div class="event-item__hover">
                                    <h4><a href="event-details.html">Free Eye Camp held in Nishat Colony Lahore</a></h4>
                                    <ul>
                                        <li><i class="flaticon-time"></i> <span>13 February 202</span></li>
                                        <li><span><b>OPD:</b> 550 <b>Surgeries:</b> 13</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="betintouch aboutus rows py-8 align-items-center w-full flex justify-center text-[black]">
                <div className="col-lg-6">
                    <div className="contact-page-form form-style-two py-110 rpy-85">
                        <div className="section-title mb-10">
                            <span className="section-title__subtitle mb-10">Need help</span>
                            <h2>Get In <span>Touch</span> </h2>
                        </div>
                        <form action="#">
                            <div className="row">
                                <div className="col-sm-10 mb-10">
                                    <p>Donate a camp, donate a school screening, donate in POB Eye Hospitals, Volunteer with us.</p>
                                </div>
                                <div className="col-sm-10">
                                    <div className="form-group">
                                        <input type="text" id="name" name="name" className="form-control" value=""
                                            placeholder="Username" required />
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" className="form-control" value=""
                                            placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="col-sm-5">
                                    <div className="form-group">
                                        <input type="text" id="phone_number" name="phone_number" className="form-control"
                                            value="" placeholder="Phone" />
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="form-group">
                                        <textarea name="message" id="message" className="form-control" rows="6"
                                            placeholder="Your Message" required></textarea>
                                    </div>
                                </div>
                                <div className="col-md-10">
                                    <div className="form-group mt-6 pt-10 mb-0 w-full flex justify-center">
                                    <a href="#" class="btn-red">Send Message</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
    )
}