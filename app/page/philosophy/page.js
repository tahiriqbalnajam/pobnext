import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div class="why-choose-area mb-[80px] overlay py-120 mt-[3.5rem]">
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