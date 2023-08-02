import Image from 'next/image'

export default function Home() {
    return (
        <>
   
            <div className="container my-24 mx-auto md:px-6">
                <section className="mb-32">
                    <div className="container mx-auto text-center lg:text-left xl:px-32">
                        <div className=" grid items-center lg:grid-cols-2">
                            <div className="mb-12 lg:mb-0">
                                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                    <div className='about-info-text mb-[25px]'>
                                        <h2>PHILOSPHY <span></span> <br /></h2>
                                    </div>
                                    <p className="mb-8 pb-2 text-black dark:text-neutral-300 lg:pb-0 text-[18px] about-image-part philosophy1st">
                                    As Muslim physicians, our mission is to serve humanity without discrimination, guided by Islamic principles.<br /><br />
                                    We provide community-based, free eye care services, driven by our commitment to compassion, equality, and social justice.<br /><br />
                                    With a dedicated team of volunteers, ophthalmologists, healthcare professionals, philanthropists, and donors, we strive to improve the lives of individuals who lack access to eye care.<br /><br />
                                    </p>          
                                </div>
                            </div>
                            <div className=''>
                            <Image height='725' width='488' src="/images/philosopphymain.png"
                                className="transition duration-700 ease-in-out  hover:scale-110 w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="why-choose-area mb-[80px] overlay py-120">
                <div className="container">
                    <div className="row gap-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="why-choose-content text-white rmb-65">
                                <div className="default-heading">
                                    <h2>inclusive approach</h2>
                                    <span className="heading-line1"></span>
                                    <span className="heading-line2"></span>
                                    <span className="heading-line3"></span>
                                </div>
                                <div className="vission-mission-tab">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active text-[18px]" id="mission">
                                            <p className='text-[18px]'>Our inclusive approach ensures that our services reach diverse backgrounds, fostering understanding and respect. <br /> <br />
                                                Our work is a testament of our social responsibility and commitment to serve humanity.<br /><br />
                                                Deeply inspired by the Islamic values, we strive to make a positive difference in the lives of those in need.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-choose-video">
                                <div className="video rel">
                                    <Image height='344' width='444' className='transition duration-700 ease-in-out  hover:scale-90' src="/images/philosophy.jpg" alt="Video" />
                                </div>
                                <Image height='50' width='50' className="leaf-shape top_image_bounce" src="/images/shapes/three-round-green.png"
                                    alt="Shape" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-[187px] mt-[155px] mx-auto md:px-6">
                <div className="default-heading center">
                    <h2>Our goal</h2>
                    <span className="heading-line1"></span>
                    <span className="heading-line2"></span>
                    <span className="heading-line3"></span>
                </div>
                <section className="mb-32">
                    <div className="container mx-auto text-center lg:text-left xl:px-32">
                        <div className=" grid items-center lg:grid-cols-2">
                            <div class="faq-image-part">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="image">
                                            <Image className='transition duration-700 ease-in-out  hover:scale-110' height='393' width='287' src="/images/gallary6.jpg" alt="About" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="image">
                                            <Image className='transition duration-700 ease-in-out  hover:scale-110' height='287' width='274' src="/images/gallary5.jpg" alt="About" />
                                        </div>
                                        <div class="image">
                                            <Image className='transition duration-700 ease-in-out  hover:scale-110' height='287' width='215' src="/images/about/contactus3.jpg" alt="About" />
                                            <Image height='50' width='50' class="shape two right_image_bounce" src="/images/shapes/three-round-red.png" alt="Shape" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-12 lg:mb-0 relative left-[-47px]">
                                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                                    <p className="mb-8 pb-2 text-black dark:text-neutral-300 lg:pb-0 text-[18px] about-image-part philosophy2nd">
                                        Together with our volunteers and supporters, we aim to create a more compassionate, inclusive, and equitable society.<br /><br />
                                        Our ultimate goal is to ensure that quality eye care is accessible to all individuals, regardless of their socio-economic background.
                                    </p>          
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>            
        </>
    )
}