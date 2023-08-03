import Image from 'next/image'

export default function Home() {
    return (
        <>
        <div className="features-area-three py-120 pb-55">
            <div className="section-titles mb-50 text-center">
                <h2><span className='text-black '>History of Pobtrust</span></h2>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div class="col-xl-12 flex">
                        <div className="col-xl-5 col-sm-6 text-black">
                            <div class="default-heading mt-[203px]">
                                <h2>Lorem Ipsum?</h2>
                                <span class="heading-line1"></span
                                ><span class="heading-line2"></span>
                                <span class="heading-line3"></span>
                            </div>
                            <div className="feature-three-content-part pb-35">
                                <p className='text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className="pl-[4rem] col-xl-7 col-sm-6 pt-[29px]">
                        <div class="about-image-part history1stsection">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="image">
                                            <Image className='transition duration-700 ease-in-out hover:scale-110' height='333' width='243' src="/images/about/contactus1-1.jpg" alt="About" />
                                            <div className='imagewithcolorblue'></div>
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
                                        <div className='imagewithcolor'></div>
                                        <Image className='transition duration-700 ease-in-out hover:scale-110' height='333' width='243' src="/images/about/contactus1-1.jpg" alt="About" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-area py-120 text-[black]">
                <div class="container aboutus">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="about-image-part corevaluestrn">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="image">
                                            <Image className='transition duration-700 ease-in-out  hover:scale-110' height='333' width='243' src="/images/about/contactus1-1.jpg" alt="About" />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="image mt-65 rmt-15 rel">
                                            <Image className='transition duration-700 ease-in-out hover:scale-110' height='244' width='233' src="/images/about/contactus2.jpg" alt="About" />
                                            
                                        </div>
                                        <div class="image ">
                                            <Image className=' transition duration-700 ease-in-out  hover:scale-110' height='183' width='243' src="/images/about/contactus3.jpg" alt="About" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-content-part rmt-65">
                                <div class="default-heading mt-[60px]">
                                    <h2>TRAINING & RESEARCH</h2>
                                    <span class="heading-line1"></span
                                    ><span class="heading-line2"></span>
                                    <span class="heading-line3"></span>
                                </div>
                                <p className='pb-[16px]'>To establish community based, sustainable and quality oriented eye care centers.</p>
                                <p className='pb-[16px]'>To establish Tertiary care eye institutes for the treatment of major eye diseases, professional training and research work in the field of ophthalmology.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="become-volunteer-three py-120 rel z-1">
            <div class="container">
                    <div class="row align-items-center justify-content-between">
                        
                        <div class="col-lg-6 text-black">
                            <div class="default-heading mt-[-32px]">
                                <h2>REFESHER COURSES</h2>
                                <span class="heading-line1"></span
                                ><span class="heading-line2"></span>
                                <span class="heading-line3"></span>
                            </div>
                            <p className='text-[18px]'>To organize, arrange and manage refresher courses with latest medical advancements for the eye-specialists of various categories.</p>

                            <p className='text-[18px]'>To do all lawful and charitable things as are incidental or conducive to the attainment of the objectives of the trust.</p>

                            <p className='text-[18px]'>To enter into arrangements, agreements, contracts and collaborations with any governmental or nongovernmental organization or authority, local or otherwise, any person or company that may promote the objective of the organization.</p>
                        </div>
                        <div class="col-lg-6">
                            <div class="volunteer-left-video rel rmb-75 corevalueslast about-image-part">
                                <div className='about-image-part2'></div>
                                <Image height='683' width='437' src="/images/gallary1.jpg" alt="valunteer" className=' transition duration-700 ease-in-out  hover:scale-110 ' />
                                <Image className='relative top-[-14px] left-[65%]  transition duration-700 ease-in-out  hover:scale-110 ' height='263' width='211' src="/images/gallary4.jpg" alt="valunteer" />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        
        </>
    )
}