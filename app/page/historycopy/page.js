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
                                    <div class="col-sm-12">
                                        <div class="image">
                                            <Image className='transition-transform duration-700 ease-in-out transform hover:translate-x-8 hover:scale-110' height='560' width='520' src="/images/image-2.jpg" alt="About" />
                                            <div className='imagewithcolorblue'></div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 newshistorypage absolute top-[35%]">
                                        <div class="image mt-65 rmt-15 rel">
                                        <div className='imagewithcolor'></div>
                                        <Image className='transition duration-700 ease-in-out hover:scale-110' height='333' width='243' src="/images/about/contactus1-1.jpg" alt="About" />
                                        
                                        </div>
                                        <svg className='relative left-[177%] bottom-[63px]' width="72" height="38" viewBox="0 0 72 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z" fill="#4A6CF7"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0035 11.9727C59.6808 11.6896 57.4524 12.6321 55.1508 14.6049C51.3631 17.8515 44.7908 19.4665 38.8668 14.6196C36.329 12.5433 34.117 12.215 32.2894 12.5196C30.3972 12.8349 28.8057 13.8437 27.5547 14.6777C25.5734 15.9986 23.3915 17.3866 20.8786 17.7124C18.2847 18.0486 15.515 17.2432 12.3598 14.6139C9.71804 12.4124 7.45748 11.989 5.72104 12.2561C3.94436 12.5294 2.56003 13.5501 1.76341 14.4916C1.40666 14.9132 0.775686 14.9658 0.354079 14.6091C-0.0675277 14.2523 -0.120109 13.6213 0.236635 13.1997C1.27334 11.9745 3.0643 10.6413 5.41692 10.2794C7.80979 9.91122 10.6326 10.5711 13.6402 13.0775C16.485 15.4481 18.7154 15.9761 20.6215 15.729C22.6086 15.4714 24.4266 14.3594 26.4453 13.0136L27 13.8457L26.4453 13.0136C27.6943 12.1809 29.6028 10.9397 31.9606 10.5468C34.383 10.1431 37.1711 10.6481 40.1333 13.0717C45.1548 17.1802 50.6369 15.8397 53.8492 13.0864C56.3795 10.9176 59.1512 9.61019 62.2455 9.9874C65.3089 10.3608 68.4333 12.3571 71.7557 16.1907C72.1174 16.608 72.0723 17.2396 71.655 17.6013C71.2376 17.963 70.606 17.9179 70.2443 17.5005C67.0668 13.8341 64.3571 12.2596 62.0035 11.9727Z" fill="#4A6CF7"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0035 21.8953C59.6808 21.6122 57.4524 22.5548 55.1508 24.5275C51.3631 27.7741 44.7908 29.3891 38.8668 24.5422C36.329 22.4659 34.117 22.1376 32.2894 22.4422C30.3972 22.7575 28.8057 23.7663 27.5547 24.6003C25.5734 25.9212 23.3915 27.3093 20.8786 27.635C18.2847 27.9712 15.515 27.1658 12.3598 24.5365C9.71804 22.335 7.45748 21.9116 5.72104 22.1787C3.94436 22.4521 2.56003 23.4728 1.76341 24.4142C1.40666 24.8358 0.775686 24.8884 0.354079 24.5317C-0.0675277 24.1749 -0.120109 23.5439 0.236635 23.1223C1.27334 21.8971 3.0643 20.5639 5.41692 20.202C7.80979 19.8338 10.6326 20.4937 13.6402 23.0001C16.485 25.3707 18.7154 25.8987 20.6215 25.6516C22.6086 25.394 24.4266 24.282 26.4453 22.9362L27 23.7683L26.4453 22.9362C27.6943 22.1035 29.6028 20.8624 31.9606 20.4694C34.383 20.0657 37.1711 20.5707 40.1333 22.9943C45.1548 27.1028 50.6369 25.7624 53.8492 23.009C56.3795 20.8403 59.1512 19.5328 62.2455 19.91C65.3089 20.2834 68.4333 22.2797 71.7557 26.1133C72.1174 26.5306 72.0723 27.1622 71.655 27.5239C71.2376 27.8856 70.606 27.8405 70.2443 27.4231C67.0668 23.7567 64.3571 22.1822 62.0035 21.8953Z" fill="#4A6CF7"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0035 31.8182C59.6808 31.535 57.4524 32.4776 55.1508 34.4504C51.3631 37.6969 44.7908 39.312 38.8668 34.4651C36.329 32.3887 34.117 32.0604 32.2894 32.365C30.3972 32.6804 28.8057 33.6892 27.5547 34.5232C25.5734 35.8441 23.3915 37.2321 20.8786 37.5578C18.2847 37.8941 15.515 37.0887 12.3598 34.4594C9.71804 32.2579 7.45748 31.8344 5.72104 32.1016C3.94436 32.3749 2.56003 33.3956 1.76341 34.3371C1.40666 34.7587 0.775686 34.8113 0.354079 34.4545C-0.0675277 34.0978 -0.120109 33.4668 0.236635 33.0452C1.27334 31.82 3.0643 30.4868 5.41692 30.1248C7.80979 29.7567 10.6326 30.4166 13.6402 32.9229C16.485 35.2936 18.7154 35.8215 20.6215 35.5744C22.6086 35.3169 24.4266 34.2049 26.4453 32.8591L27 33.6911L26.4453 32.8591C27.6943 32.0264 29.6028 30.7852 31.9606 30.3922C34.383 29.9885 37.1711 30.4936 40.1333 32.9172C45.1548 37.0256 50.6369 35.6852 53.8492 32.9319C56.3795 30.7631 59.1512 29.4557 62.2455 29.8329C65.3089 30.2063 68.4333 32.2026 71.7557 36.0361C72.1174 36.4535 72.0723 37.085 71.655 37.4468C71.2376 37.8085 70.606 37.7634 70.2443 37.346C67.0668 33.6796 64.3571 32.1051 62.0035 31.8182Z" fill="#4A6CF7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-area historycopy2 py-120 text-[black]">
                <div class="container aboutus">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="about-image-part corevaluestrn">
                                <div class="row flex justify-end">
                                    <div class="col-sm-10">
                                        <div class="image">
                                            <Image className='transition duration-700 ease-in-out  hover:scale-110' height='333' width='243' src="/images/about/contactus1-1.jpg" alt="About" />
                                            <svg className='relative left-[58%] bottom-[-67px]' width="72" height="38" viewBox="0 0 72 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z" fill="#ED1C24"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0035 11.9727C59.6808 11.6896 57.4524 12.6321 55.1508 14.6049C51.3631 17.8515 44.7908 19.4665 38.8668 14.6196C36.329 12.5433 34.117 12.215 32.2894 12.5196C30.3972 12.8349 28.8057 13.8437 27.5547 14.6777C25.5734 15.9986 23.3915 17.3866 20.8786 17.7124C18.2847 18.0486 15.515 17.2432 12.3598 14.6139C9.71804 12.4124 7.45748 11.989 5.72104 12.2561C3.94436 12.5294 2.56003 13.5501 1.76341 14.4916C1.40666 14.9132 0.775686 14.9658 0.354079 14.6091C-0.0675277 14.2523 -0.120109 13.6213 0.236635 13.1997C1.27334 11.9745 3.0643 10.6413 5.41692 10.2794C7.80979 9.91122 10.6326 10.5711 13.6402 13.0775C16.485 15.4481 18.7154 15.9761 20.6215 15.729C22.6086 15.4714 24.4266 14.3594 26.4453 13.0136L27 13.8457L26.4453 13.0136C27.6943 12.1809 29.6028 10.9397 31.9606 10.5468C34.383 10.1431 37.1711 10.6481 40.1333 13.0717C45.1548 17.1802 50.6369 15.8397 53.8492 13.0864C56.3795 10.9176 59.1512 9.61019 62.2455 9.9874C65.3089 10.3608 68.4333 12.3571 71.7557 16.1907C72.1174 16.608 72.0723 17.2396 71.655 17.6013C71.2376 17.963 70.606 17.9179 70.2443 17.5005C67.0668 13.8341 64.3571 12.2596 62.0035 11.9727Z" fill="#ED1C24"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0035 21.8953C59.6808 21.6122 57.4524 22.5548 55.1508 24.5275C51.3631 27.7741 44.7908 29.3891 38.8668 24.5422C36.329 22.4659 34.117 22.1376 32.2894 22.4422C30.3972 22.7575 28.8057 23.7663 27.5547 24.6003C25.5734 25.9212 23.3915 27.3093 20.8786 27.635C18.2847 27.9712 15.515 27.1658 12.3598 24.5365C9.71804 22.335 7.45748 21.9116 5.72104 22.1787C3.94436 22.4521 2.56003 23.4728 1.76341 24.4142C1.40666 24.8358 0.775686 24.8884 0.354079 24.5317C-0.0675277 24.1749 -0.120109 23.5439 0.236635 23.1223C1.27334 21.8971 3.0643 20.5639 5.41692 20.202C7.80979 19.8338 10.6326 20.4937 13.6402 23.0001C16.485 25.3707 18.7154 25.8987 20.6215 25.6516C22.6086 25.394 24.4266 24.282 26.4453 22.9362L27 23.7683L26.4453 22.9362C27.6943 22.1035 29.6028 20.8624 31.9606 20.4694C34.383 20.0657 37.1711 20.5707 40.1333 22.9943C45.1548 27.1028 50.6369 25.7624 53.8492 23.009C56.3795 20.8403 59.1512 19.5328 62.2455 19.91C65.3089 20.2834 68.4333 22.2797 71.7557 26.1133C72.1174 26.5306 72.0723 27.1622 71.655 27.5239C71.2376 27.8856 70.606 27.8405 70.2443 27.4231C67.0668 23.7567 64.3571 22.1822 62.0035 21.8953Z" fill="#ED1C24"></path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M62.0035 31.8182C59.6808 31.535 57.4524 32.4776 55.1508 34.4504C51.3631 37.6969 44.7908 39.312 38.8668 34.4651C36.329 32.3887 34.117 32.0604 32.2894 32.365C30.3972 32.6804 28.8057 33.6892 27.5547 34.5232C25.5734 35.8441 23.3915 37.2321 20.8786 37.5578C18.2847 37.8941 15.515 37.0887 12.3598 34.4594C9.71804 32.2579 7.45748 31.8344 5.72104 32.1016C3.94436 32.3749 2.56003 33.3956 1.76341 34.3371C1.40666 34.7587 0.775686 34.8113 0.354079 34.4545C-0.0675277 34.0978 -0.120109 33.4668 0.236635 33.0452C1.27334 31.82 3.0643 30.4868 5.41692 30.1248C7.80979 29.7567 10.6326 30.4166 13.6402 32.9229C16.485 35.2936 18.7154 35.8215 20.6215 35.5744C22.6086 35.3169 24.4266 34.2049 26.4453 32.8591L27 33.6911L26.4453 32.8591C27.6943 32.0264 29.6028 30.7852 31.9606 30.3922C34.383 29.9885 37.1711 30.4936 40.1333 32.9172C45.1548 37.0256 50.6369 35.6852 53.8492 32.9319C56.3795 30.7631 59.1512 29.4557 62.2455 29.8329C65.3089 30.2063 68.4333 32.2026 71.7557 36.0361C72.1174 36.4535 72.0723 37.085 71.655 37.4468C71.2376 37.8085 70.606 37.7634 70.2443 37.346C67.0668 33.6796 64.3571 32.1051 62.0035 31.8182Z" fill="#ED1C24"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative top-[-437px] left-[66%]">
                                    <div class="col-sm-5 ">
                                        <div class="image ">
                                            <Image className='transition-transform duration-700 ease-in-out transform hover:translate-x-8 hover:scale-110' height='183' width='243' src="/images/about/contactus3.jpg" alt="About" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 textwala relative top-[-84px]">
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