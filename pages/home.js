import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

import Link from 'next/link';
import LineTournment from '../Components/LineTournment';
import dynamic from 'next/dynamic'
import CardCarousel from '../Components/CardCarousel';
import {SiRiotgames} from 'react-icons/si'
import {AiFillGift} from 'react-icons/ai'
import {GiTwoCoins} from 'react-icons/gi'
import Footer from '../Components/Footer';


const Home = () => {



  const PixiComponentWithNoSSR = dynamic(
    () => import('../Components/Slider'),
    { ssr: false }
  )


  const [ToursCateg, setToursCateg] = useState('Created');

  return (
      <>
      
        <div className='HomeContainer'>


              <PixiComponentWithNoSSR  />

              <div className="LeadboardAd"><Image  src={'/728x90.png'} width={728} height={90} ></Image></div>


              <div className='SecondHomeDiv'>


                    <h1><span>KFC</span> <span>OSAMITOS DUCK</span> بطولاتك يا</h1>



                    <div className='ToursFilter'>
                          <button onClick={()=> setToursCateg('Finished')} className={ToursCateg === 'Finished' ? 'Active' : ""}>بطولات خلصت على خير</button>
                          <button onClick={()=> setToursCateg('Joined')} className={ToursCateg === 'Joined' ? "Active" : ""}>بطولات مشترك فيها</button>
                          <button onClick={()=> setToursCateg('Created')} className={ToursCateg === 'Created' ? "Active" : ""}>بطولات انت كريتها</button>
                    </div>



                    <div className='LineTours'>


                        <LineTournment />
                        <LineTournment />
                        <LineTournment />
                        <LineTournment />
                        <LineTournment />

                    </div>






              </div>
              

              <div className='ThirdHomeDiv'>
                  <h1> <AiFillGift className='GiftIcon' /> الجوايز</h1>

                  <div className='RedeemContainer'>




                    <div className="RedeemBarContainer">
                              
                              <div className='RedeemBar'>
                                    <div className='RedeemProgress'><p><span>25,000</span> كوين <GiTwoCoins className='CoinsIcon' /></p></div>


                                    <div className='FirstPrize'>
                                        <div className='Pointer'></div>

                                        <div className='PrizeContainer'>
                                            <img src='/steam.jpg'></img>
                                        </div>
                                    </div>


                                    <div className='SecondPrize'>
                                        <div className='Pointer'></div>

                                        <div className='PrizeContainer'>
                                            <img src='/steam.jpg'></img>
                                        </div>
                                    </div>


                                    
                                    <div className='ThirdPrize'>
                                        <div className='Pointer'></div>

                                        <div className='PrizeContainer'>
                                            <img src='/steam.jpg'></img>
                                        </div>
                                    </div>


                                    <div className='FourthPrize'>
                                        <div className='Pointer'></div>

                                        <div className='PrizeContainer'>
                                            <img src='/steam.jpg'></img>
                                        </div>
                                    </div>


                              </div>






                    </div>
                    


                  </div>

              </div>


              <div className='FourthHomeDiv'>

                  <h1> <SiRiotgames className='RiotIcon' /> بطولات ليج</h1>

                  <div className='InnerFourth'>
                    <CardCarousel />
                  </div>

              </div>


              <div className='FifthHomeDiv'>

                  <h1> <SiRiotgames className='RiotIcon' /> بطولات ڤالورانت</h1>

                  <div className='InnerFourth'>
                    <CardCarousel />
                  </div>

              </div>


          

        </div>


          <Footer />
      
      </>
  )
}

Home.layout = 'L2';

export default Home;
