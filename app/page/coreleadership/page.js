import Image from 'next/image';
import Dropdoenmenus from '../../components/DropdownMenu.js'

export default function Home() {
    return (
        <>
        <Dropdoenmenus />
        <div className="testimonials-area-three pt-120 pb-100 rel z-1">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="section-title about-info-text text-center mb-30">
                            <h2>Core <span></span>leadership</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati
                                consectetur adipisicing</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-4 col-md-6">
                        <div className="testimonial-item-three">
                            <div className="author inline-grid"><Image height='150' width='150' src="/images/Prof.Dr.IntzarHussain1.jpg" alt="Author" /></div>
                            <h4 className="name relative top-[-53px]">Prof. Dr. Intzar Hussain</h4>
                            <span className="designation relative top-[-20px] font-bold text-black">CHAIRMAN</span>
                            <div className="text"></div>
                            <div className="row">
                                <div className="col-xl-6 col-md-6 icon"><Image height='50' width='50' src="/images/testimonials/quote-icon1.png" alt="Quote" /></div>
                                <div className="col-xl-6 col-md-6 icon flex justify-end"><Image height='50' width='50' src="/images/quote-icon23.png" alt="Quote" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="testimonial-item-three">
                            <div className="author inline-grid"><Image height='150' width='150' src="/images/ZahidLatif1.jpg" alt="Author" /></div>
                            <h4 className="name relative top-[-53px]">Prof. Dr. M.Zahid Latif</h4>
                            <span className="designation relative top-[-20px] font-bold text-black">GENERAL SECRETARY</span>
                            <div className="text"></div>
                            <div className="row">
                                <div className="col-xl-6 col-md-6 icon"><Image height='50' width='50' src="/images/testimonials/quote-icon1.png" alt="Quote" /></div>
                                <div className="col-xl-6 col-md-6 icon flex justify-end"><Image height='50' width='50' src="/images/quote-icon23.png" alt="Quote" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="testimonial-item-three">
                            <div className="author inline-grid"><Image height='150' width='150' src="/images/Dr.ShafqatJaved1.jpg" alt="Author" /></div>
                            <h4 className="name relative top-[-53px]">Dr. Shafqat Javed</h4>
                            <span className="designation relative top-[-20px] font-bold text-black">FINANCE SECRETARY</span>
                            <div className="text"></div>
                            <div className="row">
                                <div className="col-xl-6 col-md-6 icon"><Image height='50' width='50' src="/images/testimonials/quote-icon1.png" alt="Quote" /></div>
                                <div className="col-xl-6 col-md-6 icon flex justify-end"><Image height='50' width='50' src="/images/quote-icon23.png" alt="Quote" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center sndleadership">
                    <div className="col-xl-4 col-md-6">
                        <div className="testimonial-item-three">
                            <div className="author inline-grid"><Image height='150' width='150' src="/images/Prof.Dr.IntzarHussain1.jpg" alt="Author" /></div>
                            <h4 className="name relative top-[-53px]">Prof. Dr. Intzar Hussain</h4>
                            <span className="designation relative top-[-20px] font-bold text-black">CHAIRMAN</span>
                            <div className="text"></div>
                            <div className="row">
                                <div className="col-xl-6 col-md-6 icon"><Image height='50' width='50' src="/images/testimonials/quote-icon1.png" alt="Quote" /></div>
                                <div className="col-xl-6 col-md-6 icon flex justify-end"><Image height='50' width='50' src="/images/quote-icon23.png" alt="Quote" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div className="testimonial-item-three">
                            <div className="author inline-grid"><Image height='150' width='150' src="/images/ZahidLatif1.jpg" alt="Author" /></div>
                            <h4 className="name relative top-[-53px]">Prof. Dr. M.Zahid Latif</h4>
                            <span className="designation relative top-[-20px] font-bold text-black">GENERAL SECRETARY</span>
                            <div className="text"></div>
                            <div className="row">
                                <div className="col-xl-6 col-md-6 icon"><Image height='50' width='50' src="/images/testimonials/quote-icon1.png" alt="Quote" /></div>
                                <div className="col-xl-6 col-md-6 icon flex justify-end"><Image height='50' width='50' src="/images/quote-icon23.png" alt="Quote" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonials-bg bgs-cover bg-[url('/imges/background/feature-bg.jpg')]" >
            </div>
        </div>
        </>
    )
}