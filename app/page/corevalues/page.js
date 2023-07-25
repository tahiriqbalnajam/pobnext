import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div class="volunteer-style-one pt-120 pb-90 rel z-1">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-8 col-md-10">
                            <div class="section-title text-center mb-60">
                                <h2>Core <span>Values</span></h2>
                                
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-xl-12 col-sm-6">
                            <div class="valunteer-item w-full">
                                <div class="valunteer-item__img">
                                    <Image height='650' width='650' src="/images/corevaluesimg.jpg" alt="Valunteer" />
                                </div>
                                <div class="col-xl-12 flex relative top-[-40px]">
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="valunteer-item--green valunteer-item__designation h-[162px]">
                                            <h5>To provide free of cost, state of the art eye care services in the remote and deprived areas.</h5>
                                           
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="valunteer-item__designation h-[162px]">
                                            <h5>To make arrangements for the prevention, education and treatment of eye diseases.</h5>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="valunteer-item--yellow valunteer-item__designation h-[162px]">
                                            <h5>To establish community based, sustainable and quality oriented eye care centers.</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-12 flex relative top-[-40px]">
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="valunteer-item--yellow valunteer-item__designation h-[224px]">
                                            <h5>To establish Tertiary care eye institutes for the treatment of major eye diseases, professional training and research work in the field of ophthalmology.</h5>
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="valunteer-item--green valunteer-item__designation h-[224px]">
                                            <h5>To organize, arrange and manage refresher courses with latest medical advancements for the eye-specialists of various categories.</h5>
                                           
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-sm-6">
                                        <div class="valunteer-item__designation h-[224px]">
                                            <h5>To do all lawful and charitable things as are incidental or conducive to the attainment of the objectives of the trust.</h5>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}