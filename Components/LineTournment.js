
import Image from 'next/image';
import {GiStarfighter, GiTwoCoins} from 'react-icons/gi'
import {BiUser} from 'react-icons/bi'
import Link from 'next/link';


const LineTournment = () => {
  return (
    <div className='TourDiv'>


                <Link href="#">
                      
                      <div className='RightTour'>

                          <div className='TourImage'><Image src={'/lwhite.png'} width={40} height={40}></Image></div>


                          <div className='FirstTour'>

                                <Image src={'/4.webp'} width={45} height={40}></Image>

                                <div className='InnerFirstTour'>

                                    <p id='TourName'>بطولة جامده جاحده فاجره</p>

                                    <div className='TourTags'>
                                        <span><GiStarfighter className='TourIcon' /> 1v1</span>
                                        <span><BiUser className='TourIcon' /> Osamitos Duck</span>
                                        <span><GiTwoCoins className='TourIcon CoinsIcon' /> كوينز</span>
                                    </div>
                                </div>  
                            
                          </div>

                      </div>


                      <div className='LeftTour'>

                          <div className='TourLineHeight'></div>
                          <div className='SecondTour'>

                              <div className='TopSecond'>
                                  <span>7 - 10 <BiUser className='TourIcon' /></span>
                                  <span> <p></p> بنجمع الناس</span>
                              </div>


                              <div className='BottomSecond'>
                                  
                                  <div className='BotSecondBar'></div>
                              </div>

                          </div>




                          <div className='TourLineHeight'></div>
                          <div className='ThirdTour'>

                              <p><GiTwoCoins className='CoinsIcon' /> 1,000,000</p>
                              <span>جايزة البطولة</span>

                          </div>




                          <div className='FourthTour'>
                              <p>دخول مجاني</p>
                              <span>هتتقفل خلال 14 يوم</span>
                          </div>

                      </div>

                      <div className='TourOverView'>
                            <p>ادخل دلوقتي</p>
                            <span>هتتقفل خلال 14 يوم</span>
                      </div>
                
                
                </Link>
      
    </div>
  )
}

export default LineTournment
