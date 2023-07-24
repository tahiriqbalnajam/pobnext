import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div class="about-area py-120">
                <div class="container">
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
                                                <h5>We Complate 15000+ Project</h5>
                                                <span>Donet for charity</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="image mt-65 rmt-15 rel">
                                            <Image height='244' width='233' src="/images/about/contactus2.jpg" alt="About" />
                                            <div class="experiences-years">
                                                <span class="experiences-years__number">25</span>
                                                <span class="experiences-years__text">Years Experiences</span>
                                            </div>
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
                                <div class="section-title mb-60">
                                    
                                    <h2><span>BRIEF PROFILE</span></h2>
                                </div>
                                <p>Prevention of Blindness Trust is a registered charity working for the prevention and treatment of the avoidable causes of blindness focusing on the deprived and marginalized communities. Since its inception in July 2007, the trust has been providing free-of-cost diagnostic and surgical eye care services in remote and deprived areas of 'Pakistan' and different 'African' countries. We have established a strong network of volunteer ophthalmologists, eye care professionals, donors, and community-based workers. We safely assume that our services have covered millions of people and contributed to social and economic development.</p>
                                <div class="counter-item counter-text-wrap mt-30">
                                    <div class="counter-item__icon"><i class="flaticon-solidarity"></i></div>
                                    <div class="counter-item__content">
                                        <span class="count-text" data-speed="3000" data-stop="876000">0</span>
                                        <span class="counter-title">Raised by 78,000 people in one year</span>
                                    </div>
                                </div>
                                <div class="counter-item counter-text-wrap">
                                    <div class="counter-item__icon counter-item__icon--green"><i class="flaticon-help"></i>
                                    </div>
                                    <div class="counter-item__content">
                                        <span class="count-text" data-speed="3000" data-stop="45000">0</span>
                                        <span class="counter-title">Volunteers are available to help you</span>
                                    </div>
                                </div>
                                <a class="btn ml-5 mt-25" href="#">Didcover more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactus rows gap-60 align-items-center w-full flex justify-center">
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
                                    <div className="form-group mt-6 pt-10 mb-0 w-full flex justify-center">
                                        <button type="submit" className="btn ">Send us a message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="why-choose-area overlay py-120 mt-[3.5rem]">
                <div class="container">
                    <div class="row gap-100 align-items-center">
                        <div class="col-lg-6">
                            <div class="why-choose-content text-white rmb-65">
                                <div class="section-title mb-60">
                                    <h2><span>PHILOSPHY</span></h2>
                                </div>
                                <div class="vission-mission-tab">
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active" id="mission">As Muslim physicians, we are intended to accomplish our religious obligations by serving the humanity without discrimination of race, religion, ethnicity or any other affiliation of the recipients. In this way, we are trying to fulfill the requirements of the social contract between the society and medical professional. Deeply inspired by the Islamic values and principles, the trust is engaged in community based free eye care services with the support of motivated, dedicated and committed team of volunteers, ophthalmologists, health care professionals, philanthropists and donors.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="why-choose-video">
                                <div class="video rel">
                                    <Image height='344' width='444' src="/images/philosophy.jpg" alt="Video" />
                                </div>
                                <Image height='50' width='50' class="leaf-shape top_image_bounce" src="/images/shapes/three-round-green.png"
                                    alt="Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}