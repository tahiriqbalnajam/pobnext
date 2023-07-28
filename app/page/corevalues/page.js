import Image from 'next/image'

export default function Home() {
    return (
        <>
        <div className="features-area-three py-120 pb-55">
            <div className="section-titles mb-50 text-center">
                <h2><span className='text-black '>OBJECTIVES</span></h2>
            </div>
            <div className="container">
                <div className="row align-items-center">
                <div class="col-xl-12 flex">
                    <div className="col-xl-5 col-sm-6 text-black">
                        <div class="default-heading mt-[203px]">
                            <h2>EYE CARE SERVICES</h2>
                            <span class="heading-line1"></span
                            ><span class="heading-line2"></span>
                            <span class="heading-line3"></span>
                        </div>
                        <div className="feature-three-content-part pb-35">
                            <p className='text-[18px]'>To provide free of cost, state of the art eye care services in the remote and deprived areas.</p>
                            <p className='text-[18px]'>To make arrangements for the prevention, education </p><p className='text-[18px]'> and treatment of eye diseases.</p>
                        </div>
                    </div>
                    <div className="pl-[4rem] col-xl-7 col-sm-6 pt-[29px]">
                        <div className='about-image-part corevalues1sts'></div>
                        <div className="feature-three-image-part pb-65 about-image-part corevalues1st">
                            <Image className=' transition duration-700 ease-in-out  hover:scale-110 ' height='694' width='658' src="/images/corevaluesn_transparent.png" alt="Features"  />
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