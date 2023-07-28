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
                        <div className="feature-three-content-part pb-35">
                            <p className='text-[18px] mt-[156px]'>To provide free of cost, state of the art eye care services in the remote and deprived areas.</p>
                            <p className='text-[18px]'>To make arrangements for the prevention, education and treatment of eye diseases.</p>
                            <p className='text-[18px]'>To establish community based, sustainable and quality oriented eye care centers.</p>
                            <p className='text-[18px]'>To establish Tertiary care eye institutes for the treatment of major eye diseases, professional training and research work in the field of ophthalmology.</p>
                        </div>
                    </div>
                    <div className="pl-[4rem] col-xl-7 col-sm-6 pt-[29px]">
                        <div className="feature-three-image-part pb-65">
                            <Image className=' transition duration-700 ease-in-out  hover:scale-110 ' height='694' width='658' src="/images/corevaluesn.png" alt="Features"  />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="become-volunteer-three pb-120 rel z-1">
            <div class="container">
                    <div class="row align-items-center justify-content-between">
                        <div class="col-lg-6">
                            <div class="volunteer-left-video rel rmb-75">
                                <Image height='683' width='437' src="/images/gallary1.jpg" alt="valunteer" className=' transition duration-700 ease-in-out  hover:scale-110 ' />
                                <Image className='relative top-[-14px] left-[65%]  transition duration-700 ease-in-out  hover:scale-110 ' height='263' width='211' src="/images/gallary4.jpg" alt="valunteer" />
                            </div>
                        </div>
                        <div class="col-lg-6 text-black">
                            <p className='text-[18px]'>To organize, arrange and manage refresher courses with latest medical advancements for the eye-specialists of various categories.</p>

                            <p className='text-[18px]'>To do all lawful and charitable things as are incidental or conducive to the attainment of the objectives of the trust.</p>

                            <p className='text-[18px]'>To enter into arrangements, agreements, contracts and collaborations with any governmental or nongovernmental organization or authority, local or otherwise, any person or company that may promote the objective of the organization.</p>
                        </div>
                    </div>
            </div>
        </div>
        
        </>
    )
}