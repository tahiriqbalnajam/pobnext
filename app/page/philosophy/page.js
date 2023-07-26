import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div class="why-choose-area mb-[80px] overlay py-120">
                <div class="container">
                    <div class="row gap-100 align-items-center">
                        <div class="col-lg-6">
                            <div class="why-choose-content text-white rmb-65">
                                <div class="section-title mb-60">
                                    <h2><span>PHILOSPHY</span></h2>
                                </div>
                                <div class="vission-mission-tab">
                                    <div class="tab-content">
                                        <div class="tab-pane fade show active text-[18px]" id="mission">
                                            <p className='text-[18px]'>As Muslim physicians, our mission is to serve humanity without discrimination, guided by Islamic principles. </p>
                                            <p className='text-[18px]'>We provide community-based, free eye care services, driven by our commitment to compassion, equality, and social justice.</p>
                                            <p className='text-[18px]'> With a dedicated team of volunteers, ophthalmologists, healthcare professionals, philanthropists, and donors, we strive to improve the lives of individuals who lack access to eye care.</p>
                                        </div>
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
            <div class="faq-area py-120">
                <div class="container ">
                    <div class="row gap-100 align-items-center justify-content-between">
                        <div class="col-lg-6">
                            <div class="faq-image-part">
                                <div class="row">
                                    <div class="col-6">
                                        <div class="image">
                                            <Image height='393' width='287' src="/images/gallary6.jpg" alt="About" />
                                        </div>
                                        <div class="image">
                                            <Image height='287' width='215' src="/images/gallary1.jpg" alt="About" />
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="image">
                                            <Image height='287' width='274' src="/images/gallary5.jpg" alt="About" />
                                        </div>
                                        <div class="image">
                                            <Image height='287' width='215' src="/images/about/contactus3.jpg" alt="About" />
                                            <Image height='50' width='50' class="shape two right_image_bounce"
                                                src="/images/shapes/three-round-red.png" alt="Shape" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 py-[19%] philosophy2p">
                            <div class="faq-content-part rmt-65 rel z-2">
                                <div class="section-title mb-45 for-hide-summary text-black">
                                    <p className='text-[18px]'>Our inclusive approach ensures that our services reach diverse backgrounds, fostering understanding and respect.</p>
                                    <p className='text-[18px]'>Our work is a testament of our social responsibility and commitment to serve humanity.</p>
                                    <p className='text-[18px]'>Deeply inspired by the Islamic values, we strive to make a positive difference in the lives of those in need. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="become-volunteer-three pb-120 pt-80 rel z-1">
                <div class="container">
                        <div class="row align-items-center justify-content-between">
                            <div class="col-lg-6 text-black py-[19%] philosophylastp bg-[#EDF0FE]">
                                <p className='text-[18px]'>Together with our volunteers and supporters, we aim to create a more compassionate, inclusive, and equitable society. </p>
                                <p className='text-[18px]'>Our ultimate goal is to ensure that quality eye care is accessible to all individuals, regardless of their socio-economic background.</p>
                            </div>
                            <div class="col-lg-6">
                                <div class="volunteer-left-video rel rmb-75">
                                    <Image height='683' width='437' src="/images/gallary4.jpg" alt="valunteer" />
                                    <Image className='relative top-[-64px] left-[-34%]' height='263' width='211' src="/images/gallary1.jpg" alt="valunteer" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
}