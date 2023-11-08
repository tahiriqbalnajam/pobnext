import Image from 'next/image';
import 'animate.css';
import Header from './components/Header.js'

import Footer from './components/Footer.js'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <section className="urgent-donation pt-[120px]">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="about-info-text">
                <h2>Absolutely Free <br /><span>Eye Care </span></h2>
                <div className="about-tag animate__animated animate__zoomIn">
                  <p>More than <span>3.5 lac </span> free eye surgeries for cataract, glaucoma and other eye diseases</p>
                </div>
                <p className="text mt-3 mb-5">
                  <b>Prevention of Blindness</b> Trust is a registered charity working for the prevention and treatment of the avoidable causes of blindness focusing 
                  on the deprived and marginalized communities. Since its <u className='red'>inception in July 2007</u>, the trust has been providing <b>free-of-cost diagnostic and surgical 
                  eye care
                  services</b> in remote and deprived areas of &apos;Pakistan&apos; and different &apos;African&apos; countries. We have established a strong <u className='red'>network of volunteer ophthalmologists, 
                  eye care professionals, donors,</u> and community-based workers.</p>
                <a href="#" className="btn-red">View Details</a>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12">
              <div className="about-info-img">
                <Image height="428" width="576" src="/images/IMG_0580.JPG" alt="" className='border-img' />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 animate__animated animate__backInLeft">
              <div className="about-box boxes">
                {/* <Image className='inline-flex' height="80" width="61" src="/images/donate-icon.png" alt="" /> */}
                <i class="far fa-eye mainpage-icons"></i>
                <h3>950</h3>
                <p>Eye camps</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="about-box boxes">
                <i class="fas fa-glasses mainpage-icons"></i>
                <h3>10 Thousand </h3>
                <p>Free Eye Glasses</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="about-box boxes">
                <i class="fas fa-tint mainpage-icons"></i>
                <h3>Millions</h3>
                <p>of Eye Drops </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 animate__animated animate__backInRight">
              <div className="about-box boxes">
                <i class="fas fa-globe mainpage-icons"></i>
                <h3 className='boxes'>23</h3>
                <p>Different Countries</p>
              </div>
            </div>
          </div>
          <div className="collection">
            <h2>80 Million Rupees Collected </h2>
            <a href="#" className="btn-white">Donate Now</a>
          </div>
        </div>
      </section>

      <section className="our-stats w-full">
        <div className="container">
          <div className="default-heading center white">
            <h2>Our Stats</h2>
            <span className="heading-line1"></span>
            <span className="heading-line2"></span>
            <span className="heading-line3"></span>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="our-stat-box">
                <i className="fa-solid fa-eye"></i>
                <h2>50000</h2>
                <p>Total<br />surgeries</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="our-stat-box">
                <i className="fa-solid fa-bed"></i>
                <h2>40000</h2>
                <p>Total<br />Patients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="our-stat-box">
                <i className="fa-solid fa-users"></i>
                <h2>80000</h2>
                <p>PATIENTS<br />VIST DAILY</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="our-stat-box">
                <i className="fa-solid fa-user-doctor"></i>
                <h2>10000</h2>
                <p>OPD patient<br />in a day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-mission w-full">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="vision-mission-content">
                <div className="default-heading">
                  <h2>VISION & MISSION</h2>
                  <span className="heading-line1"></span>
                  <span className="heading-line2"></span>
                  <span className="heading-line3"></span>
                </div>
                <p className="text mb-2">A world in which no one is needlessly blind and where those with
                  unavoidable blindness can achieve the full potential of life.</p>
                <p className="text">To work for the elimination of avoidable cause of blindness regardless of
                  religion, ethnicity, gender, and nationality of our beneficiaries.</p>
                <div className="row">
                  <div className="col-lg-3 col-sm-6">
                    <div className="mission-box">
                      <i className="fa-solid fa-circle-exclamation"></i>
                      <h5>Awareness</h5>
                      <p>Campaigns</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="mission-box">
                      <i className="fa-solid fa-person-chalkboard"></i>
                      <h5>Training</h5>
                      <p>Workshops</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="mission-box">
                    <i class="fa-solid fa-book-open-reader"></i>
                      <h5>Research</h5>
                      <p>Projects</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="mission-box">
                      <i className="fa-solid fa-book-open"></i>
                      <h5>Advocacy</h5>
                      <p>Initiatives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="mission-img">
                <Image height="419" width="576" src="/images/blind_eye.jpeg" alt="" className='border-img' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery w-full">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="default-heading">
                <h2>MEDIA GALLERY</h2>
                <span className="heading-line1"></span>
                <span className="heading-line2"></span>
                <span className="heading-line3"></span>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="image-gallery-tab" data-bs-toggle="tab" data-bs-target="#image-gallery-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Image Gallery</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="video-gallery-tab" data-bs-toggle="tab" data-bs-target="#video-gallery-tab-pane" type="button" role="tab" aria-controls="video-gallery-tab-pane" aria-selected="false">Video Gallery</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-content image-tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="image-gallery-tab-pane" role="tabpanel" aria-labelledby="image-gallery-tab" tabindex="0">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="289" width="356" src="/images/gallary1.jpg" alt="" />
                  </div>
                  <div className="image-box">
                    <Image height="577" width="356" src="/images/gallary2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="577" width="356" src="/images/gallary3.jpg" alt="" />
                  </div>
                  <div className="image-box">
                    <Image height="289" width="356" src="/images/gallary4.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="290" width="356" src="/images/gallary5.jpg" alt="" />
                  </div>
                  <div className="image-box">
                    <Image height="577" width="356" src="/images/gallary6.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href="#" className="btn-red">View More</a>
              </div>
            </div>
            <div className="tab-pane fade" id="video-gallery-tab-pane" role="tabpanel" aria-labelledby="video-gallery-tab" tabindex="0">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary1.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary2.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary3.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary4.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary5.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary6.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href="#" className="btn-red">View More</a>
              </div>
            </div>
          </div>
          <div className="tab-content video-tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="image-gallery-tab-pane" role="tabpanel" aria-labelledby="image-gallery-tab" tabindex="0">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="289" width="356" src="/images/gallary1.jpg" alt="" />
                  </div>
                  <div className="image-box">
                    <Image height="577" width="356" src="/images/gallary2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="577" width="356" src="/images/gallary3.jpg" alt="" />
                  </div>
                  <div className="image-box">
                    <Image height="289" width="356" src="/images/gallary4.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="290" width="356" src="/images/gallary5.jpg" alt="" />
                  </div>
                  <div className="image-box">
                    <Image height="577" width="356" src="/images/gallary6.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href="#" className="btn-red">View More</a>
              </div>
            </div>
            <div className="tab-pane fade" id="video-gallery-tab-pane" role="tabpanel" aria-labelledby="video-gallery-tab" tabindex="0">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary1.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary2.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary3.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary4.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary5.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                  <div className="image-box">
                    <Image height="50" width="50" src="/images/gallary6.jpg" alt="" />
                    <a title="title here" data-height="420" data-width="900" className="html5lightbox content-vbtn-color-blue" href="https://www.youtube.com/watch?v=8VnjK4P7gIg"><i className="fa fa-play" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a href="#" className="btn-red">View More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clinic-timing w-full">
        <div className="container">
          <div className="clinic-timing-box">
            <div className="row">
              <div className="col-md-6 cols-m-12">
                <div className="default-heading">
                  <h2>clinic Timings</h2>
                  <span className="heading-line1"></span>
                  <span className="heading-line2"></span>
                  <span className="heading-line3"></span>
                </div>
                <div className="clinic-info">
                  <i className="fa-regular fa-envelope"></i>
                  <p>info@pobtrust.org</p>
                </div>
                <div className="clinic-info">
                  <i className="fa-solid fa-phone"></i>
                  <p>+923479997772</p>
                </div>
                <div className="clinic-info">
                  <i className="fa-regular fa-clock"></i>
                  <p>MON to SUN 4PM to 7PM</p>
                </div>
              </div>
              <div className="col-md-6 cols-m-12">
                <div className="clinic-timing-img">
                  <Image height="474" width="541" src="/images/hospital.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-can-help w-full">
        <div className="container">
          <div className="default-heading center">
            <h2>How you can Help</h2>
            <span className="heading-line1"></span>
            <span className="heading-line2"></span>
            <span className="heading-line3"></span>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="how-can-help-box zakat">
                <i className="fa-solid fa-hand-holding-hand"></i>
                <h4>Zakat</h4>
                <p>We adhere to the Islamic principles and guidelines of zakat and use it to support poor and needy patients with eye care and treatment.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="how-can-help-box endowment">
                <i className="fa-solid fa-seedling"></i>
                <h4>Endowment</h4>
                <p>By giving an endowment, you will not only help us to continue our work, but also earn the reward of Allah for your generosity.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="how-can-help-box volunteer">
                <i className="fa-solid fa-dove"></i>
                <h4>Volunteer</h4>
                <p>Volunteers can assist with various tasks, such as screening patients, dispensing glasses, educating the public, fundraising, and more.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="how-can-help-box sponsor">
                <i className="fa-solid fa-parachute-box"></i>
                <h4>Sponsor</h4>
                <p>Embrace this opportunity to make a lasting impact and be a beacon of light for those in need, and create a ripple effect of positive change</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-blog w-full">
        <div className="container">
          <div className="default-heading">
            <h2>Our Blog</h2>
            <span className="heading-line1"></span>
            <span className="heading-line2"></span>
            <span className="heading-line3"></span>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="blog-box-bg">
                <div className="blog-img">
                  <Image height="354" width="576" src="/images/blog-1.jpg" alt="" />
                </div>
                <div className="blog-info">
                  <h4>Why do we use it?</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                  <a href="#" className="btn-sm btn-red">Read More</a>
                  <div className="blog-date">
                    <span>28 Apr</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="blog-box-sm">
                <div className="blog-img">
                  <Image height="210" width="240" src="/images/blog-2.jpg" alt="" />
                </div>
                <div className="blog-info">
                  <h4>Why do we use it?</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                  <a href="#" className="btn-sm btn-red">Read More</a>
                  <div className="blog-date">
                    <span>28 Apr</span>
                  </div>
                </div>
              </div>
              <div className="blog-box-sm">
                <div className="blog-img">
                  <Image height="210" width="240" src="/images/blog-3.jpg" alt="" />
                </div>
                <div className="blog-info">
                  <h4>Why do we use it?</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </p>
                  <a href="#" className="btn-sm btn-red">Read More</a>
                  <div className="blog-date">
                    <span>28 Apr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
