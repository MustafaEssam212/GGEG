import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {SiRiotgames} from 'react-icons/si'
import {GiThornedArrow} from 'react-icons/gi'
import {FaDiscord, FaFacebookF} from 'react-icons/fa'
import {BsTwitch, BsGoogle} from 'react-icons/bs'
import {AiFillYoutube, AiOutlineClose} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import {BsTrophy} from 'react-icons/bs'


export default function Home() {


    const [Login, setLogin] = useState(false);




    useEffect(()=>{
        const header = document.getElementById('LandingHeaderID');
        window.onscroll = () =>{
            if(window.pageYOffset   > 0){
                header.style.backgroundColor = 'black'
            }else{
                header.style.backgroundColor = 'transparent'
            }
        }
    })



    useEffect(()=>{

        function reveal() {
          var reveals = document.querySelectorAll(".reveal");
          for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add("active");
            } else {
              reveals[i].classList.remove("active");
            }
          }
        }
      
      
        window.addEventListener("scroll", reveal);
      
      // To check the scroll position on page load
        reveal();


            function revea() {
      var reveals = document.querySelectorAll(".revea");
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("activ");
        } else {
          reveals[i].classList.remove("activ");
        }
      }
    }
  
  
    window.addEventListener("scroll", revea);
  
  // To check the scroll position on page load
    revea();
      
      
      
   
      
    
      })


  return (
    <div className='LandingContainer'>


        <Head>
            <title>???? ????! ???????? ???????? ?????????? ???????????? ???? ??????</title>
        </Head>


    {
        Login ?         <div className='LoginLandingDiv'>

        <div className='InnerLoginLanding'>


            <div className='LoginContainer'>
                <p><Image src={'/logo.png'} width={60} height={40}></Image> GGEG</p>
                <AiOutlineClose onClick={()=>setLogin(false)} className='CloseLogin' />
                
                <div className='InnerLoginContainer'>
                        <button><FaDiscord className='LoginIcon' /> ?????? ?????????? ????????????????</button>
                        <button><FaFacebookF className='LoginIcon' /> ?????? ?????????? ???????? ??????</button>
                        <button><BsTwitch id='TwitchIcon' className='LoginIcon' /> ?????? ?????????? ??????????</button>
                        <button><BsGoogle id='GoogleIcon' className='LoginIcon' /> ?????? ?????????? ??????????</button>

                        
                </div>
            </div>



        </div>

    </div> : <></>
    }



        <header className='LandingHeader' id='LandingHeaderID'>
              <div className='LeftLandingHeader'>
                  <Link href="/"><Image src={'/logo.png'} width={55} height={40} alt="???? ????" title='???? ????' unoptimized></Image>GGEG</Link>
              </div>

              <div className='RightLandingHeader'>
                  <Link href="/" data-replace="????????????????"><span>????????????????</span></Link>
                  <Link href="#Sharek" data-replace="????????"><span>????????</span></Link>
                  <Link href="#Endam" data-replace="????????"><span>????????</span></Link>
                  <Link href="#El3ab" data-replace="????????"><span>????????</span></Link>
                  <button onClick={()=>setLogin(!Login)}><SiRiotgames id='LandingHeaderIcon' /> ??????????????</button>
                  
              </div>
        </header>

        
        <div className='FirstLandingDiv' id='FirstLandingDiv'>
            <div className='FirstBackground'>
                <Image src={`/2background.jpg`} fill></Image>
            </div>
            <span className='BlackScreen'></span>

            <div className='OnBlackOne'>
                <div className='InnerBlackOne'>
                    <h1><span>???? ????</span> .. ???? ??????</h1>
                    <h1><span>!.. </span>?????????? <span>?????????? ????????</span></h1>
                    <h2>.. ???????? ?????????? .. ?????????????? ??????????</h2>
                    <p>???????????? ???????? ???????? ?????? ?????? ????????.. ?????????? ???? ??????????????</p>
                    <p>!??????????????.. ???????? ???????? ???? ???????? ??????????.. ???????? ?????????? ??????????</p>
                </div>
            </div>

            <div className='OnBlackTwo'>

                <div className='SecTwo'>
                    <Image src={'/coins2.png'} width={90} height={90} alt="??????????????" title="??????????????" unoptimized></Image>
                    <div className='InnerSecTwo'>
                        <p>??????????</p>
                        <p>????????????</p>
                        <span>??39,615</span>
                    </div>
                </div>

                <div className='BlackTwoLine'></div>

                <div className='SecTwo'>
                    <Image src={'/1s.png'} width={90} height={90} alt="?????????? ????????" title="?????????? ????????" unoptimized></Image>
                    <div className='InnerSecTwo'>
                        <p>??????????</p>
                        <p>????????</p>
                        <span>??305,60</span>
                    </div>
                </div>

                <div className='BlackTwoLine'></div>

                <div className='SecTwo'>
                    <Image src={'/mouse.png'} width={70} height={90} alt="?????? ????????????????" title="?????? ????????????????" unoptimized></Image>
                    <div className='InnerSecTwo'>
                        <p>??????</p>
                        <p>????????????????</p>
                        <span>7502</span>
                    </div>
                </div>

                <div className='BlackTwoLine'></div>

                <div className='SecTwo'>
                    <Image src={'/tr.png'} width={90} height={90} alt="?????? ????????????????" title="?????? ????????????????" unoptimized></Image>
                    <div className='InnerSecTwo'>
                        <p>??????</p>
                        <p>????????????????</p>
                        <span>7502</span>
                    </div>
                </div>

            </div>
        </div>



        <div className='SecondLandingDiv' id='Sharek'>


                <div className='BottomLeftSecondLanding'>

                    <h1>!.. ????????</h1>
                    <p>???? ???? ?????? ???????????? ?????????? ???? ???????? ??????????</p>
                    <p>?????????? ?????????? ???? ???????? ???? ???????? ???????? ????????????</p>
                    <p>?????????????????? ?????????????????? - ?????? ???? ??????????</p>
                    <p>??????????</p>
                    <p>???????????? ?????????? ???????? ..! ?????? ?????????? ??????????</p>
                    <button onClick={()=>setLogin(!Login)}>!???????? ???? ???? ???????? ???????????? <GiThornedArrow id='ArrowIco' className='ArrowIcon' /></button>
                </div>

                <div className='SecondBackGround reveal'>
                    <Image src={'/pic1.png'} width={750} height={550} unoptimized></Image>
                </div>

                <div className='TopRightSecondLandin'>
                            <h1>!????????</h1>
                            <p>???? ??????????????</p>
                            <p>????????????</p>
                            <p>??????????????! ???? ?????????? ??????????????</p>
                </div>

                <div className='BlurBackGround'></div>




                <div className='SecondBlurBackGround'></div>

        </div>


        <div className='LandingThirdDiv' id="LandingDivThird">

            <div className='LeftThirdLandingDiv'>
                  <Image className='revea' src={'/pic2.png'} width={550} height={700} alt="?????? ???????? ??????????" title="?????? ???????? ??????????"></Image>

                  <div className='InnerLeftThird'>

                    <h1>!????????</h1>
                    <p>?????????? ?????????? ?????????? ?????? ?????????? ???? ????????</p>
                    <p>??????????</p>
                    <p>! ?????????? ???????? ?????? ??????</p>

                  </div>
            </div>


            <div className='RightThirdLandingDiv'>

                 <div className='InnerRightThird'>

                    <h1>!??????????</h1>
                    <p>?????????? ?????????? ?????????? ???????????? ??????????????????</p>
                    <p>???? ?????? ?????????? ?????? ???????????? ????????</p>
                    <p>????????????</p>
                    <button onClick={()=>setLogin(!Login)}>???????? ???????????? <GiThornedArrow id='ArrowIco' className='ArrowIcon' /></button>
                 </div>

                 <Image className='reveal rotImg' src={'/pici.png'} width={550} height={700} alt="?????? ???????? ??????????" title="?????? ???????? ??????????"></Image>
            </div>

            <div className='ThirdBackgroundBlur'></div>
            <div className='SecThirdBackgroundBlur'></div>

        </div>


        <div className='FourthLandingDiv' id="LandingFourthDiv">
            <div className='FourthBackground'><div className='blackOnGround'></div></div>

            <div className='FourthLayout'>

                <div className='LeftFourthLayout'>
                    <Image className='revea ImageFourth' src={'/pic3.png'} width={400} height={650}></Image>
                    <div className='BlurFourthBackground'></div>
                </div>


                <div className='RightFourthLayout'>
                    <div className='FirstFourthRight'>
                        <h1>?????? ?????????? ???? ????????</h1>
                        <h1>???????????? ?????? ??????????</h1>
                        <h1>!.. ?????????? ?? ??????????????</h1>
                        <button onClick={()=>setLogin(!Login)}>????????</button>
                    </div>

                    <div className='SecondFourthRight'>

                            <div className='FourthCard BronzeCard'>

                                <Image className='backgroundImage' src={'/backi.jpg'} width={240} height={115}></Image>


                                <div className='CardProfile'>
                                    <Image src={'/duck.png'} width={90} height={90}></Image>
                                    <p className='CardRank ThiCardRank'>3<span>rd</span></p>
                                </div> 


                                <div className='CardDetails'>
                                        
                                        <p><span>DUK</span> OSAMITOS</p>
                                        <p><span>#</span>lmred01234</p>
                                </div>


                                <div className='LineCard'></div>


                                <div className='CardStats'>

                                    <p> :???????????? <span>152??</span></p>
                                    <p>:?????????????? <span>152</span> </p>
                                    <p>:???????????? <span>152</span> </p>


                                </div>


                                <div className='LineCard2'></div>


                                <div className='CardTrophis'>

                                    <div>
                                        <p><BsTrophy className='PlatinumTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='GoldTrophy CardTrophy' /> 5000</p>
                                    </div>

                                    <div>
                                        <p><BsTrophy className='SilverTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='BronzeTrophy CardTrophy' /> 5000</p>
                                    </div>

                                </div>  



                                <div className='LineCard3'></div>


                                <div className='BottomCard'>
                                    <p>:?????????????? <span>NOOB</span></p>
                                    <p>:???????????? <span>DUK</span></p>
                                    <p>:???????????? <span>KFC</span></p>
                                </div>

                                

                            </div>

                            <div className='FourthCard GoldCard'>

                                <Image className='backgroundImage' src={'/backi.jpg'} width={240} height={115}></Image>


                                <div className='CardProfile'>
                                    <Image src={'/duck.png'} width={90} height={90}></Image>
                                    <p className='CardRank'>1<span>st</span></p>
                                </div> 


                                <div className='CardDetails'>
                                        
                                        <p><span>DUK</span> OSAMITOS</p>
                                        <p><span>#</span>lmred01234</p>
                                </div>


                                <div className='LineCard'></div>


                                <div className='CardStats'>

                                    <p> :???????????? <span>152??</span></p>
                                    <p>:?????????????? <span>152</span> </p>
                                    <p>:???????????? <span>152</span> </p>


                                </div>


                                <div className='LineCard2'></div>


                                <div className='CardTrophis'>

                                    <div>
                                        <p><BsTrophy className='PlatinumTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='GoldTrophy CardTrophy' /> 5000</p>
                                    </div>

                                    <div>
                                        <p><BsTrophy className='SilverTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='BronzeTrophy CardTrophy' /> 5000</p>
                                    </div>

                                </div>  



                                <div className='LineCard3'></div>


                                <div className='BottomCard'>
                                    <p>:?????????????? <span>NOOB</span></p>
                                    <p>:???????????? <span>DUK</span></p>
                                    <p>:???????????? <span>KFC</span></p>
                                </div>

                                

                            </div>




                            <div className='FourthCard SilverCard'>

                                <Image className='backgroundImage' src={'/backi.jpg'} width={240} height={115}></Image>


                                <div className='CardProfile'>
                                    <Image src={'/duck.png'} width={90} height={90}></Image>
                                    <p className='CardRank SecCardRank'>2<span>nd</span></p>
                                </div> 


                                <div className='CardDetails'>
                                        
                                        <p><span>DUK</span> OSAMITOS</p>
                                        <p><span>#</span>lmred01234</p>
                                </div>


                                <div className='LineCard'></div>


                                <div className='CardStats'>

                                    <p> :???????????? <span>152??</span></p>
                                    <p>:?????????????? <span>152</span> </p>
                                    <p>:???????????? <span>152</span> </p>


                                </div>


                                <div className='LineCard2'></div>


                                <div className='CardTrophis'>

                                    <div>
                                        <p><BsTrophy className='PlatinumTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='GoldTrophy CardTrophy' /> 5000</p>
                                    </div>

                                    <div>
                                        <p><BsTrophy className='SilverTrophy CardTrophy' /> 5000</p>
                                        <p><BsTrophy className='BronzeTrophy CardTrophy' /> 5000</p>
                                    </div>

                                </div>  



                                <div className='LineCard3'></div>


                                <div className='BottomCard'>
                                    <p>:?????????????? <span>NOOB</span></p>
                                    <p>:???????????? <span>DUK</span></p>
                                    <p>:???????????? <span>KFC</span></p>
                                </div>

                                

                            </div>

                    </div>


                </div>



            </div>
            
        </div>



        <div className='FifthLandingDiv'>

            <div className='TopFifthLandingDiv'>
                    <div className='LeftFifth'>
                        <h1>???????? ???????? ???????????? ???????? ??????????????</h1>
                        <h1>???? ???????????????? ????</h1>
                        <h1>!?????????????? ????????????</h1>

                        <div className='FifthBackground'></div>
                    </div>

                    <div className='RightFifth'>
                        <Image src={'/pic4.png'} width={800} height={750}></Image>
                    </div>
            </div>


            <div className='SecondFifthLandingDiv'>
                    <Image src={'/bbb.png'} width={720} height={492} unoptimized></Image>
            </div>

        </div>


        <div className='SixthLandingDiv' id='Endam'>
                <h1>!???????? ???????? ???????? ?????????? ?????????????????? ???? ??????</h1>

                <div className='SixthContainerTeams'>

                        <div onClick={()=>setLogin(!Login)} className='SixthRight'>

                           <div className='BlurFourthBackground'></div>
                            
                            <div className='SixthTeam'>
                                <Image src={'/1.webp'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>???????? <span>15</span></p>
                                        <p><span>1#</span> ????????????</p>
                                    </div>

                                </div>
                            </div>


                            <div className='SixthTeam TwoTeam'>
                                <Image src={'/2.png'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>???????? <span>15</span></p>
                                        <p><span>1#</span> ????????????</p>
                                    </div>

                                </div>
                            </div>


                            <div className='SixthTeam OpTeam'>
                                <Image src={'/3.webp'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>???????? <span>15</span></p>
                                        <p><span>1#</span> ????????????</p>
                                    </div>

                                </div>
                            </div>

                        </div>


                        <div onClick={()=>setLogin(!Login)} className='SixthLeft'>
                            <div className='BlurFourthBackground2'></div>
                            <div className='SixthTeam OpTeam'>
                                <Image src={'/4.webp'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>???????? <span>15</span></p>
                                        <p><span>1#</span> ????????????</p>
                                    </div>

                                </div>
                            </div>


                            <div className='SixthTeam TwoTeam'>
                                <Image src={'/5.jpg'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>???????? <span>15</span></p>
                                        <p><span>1#</span> ????????????</p>
                                    </div>

                                </div>
                            </div>


                            <div className='SixthTeam '>
                                <Image src={'/6.webp'} width={320} height={350}></Image>

                                <div className='SixthTeamBot'>

                                    <div className='SixthTeamBlur'>
                                        <p>DUK</p>
                                        <p>???????? <span>15</span></p>
                                        <p><span>1#</span> ????????????</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                </div>
        </div>


        <div className='SeventhLandingDiv' id='El3ab'>

            <h1>..?????? ?? ???????? ???????????? ???????? ??????????</h1>
            <h1>!..???? ???????????? ??????????????</h1>

            <div className='SeventhBackground'>
                <div className='SeventhInnerBackground'>

                </div>
            </div>





        <div className='gallery'>

            <img onClick={()=>setLogin(!Login)} src={'/val.jpg'} ></img>


    

            <img onClick={()=>setLogin(!Login)} src={'/lea.jpg'}></img>

        </div>





        </div>


        <footer>

            <div className='FirstFooter'>
                <div className='LeftFirst'>
                    <Link href="#"><FaDiscord className='DiscordIcon' /> ?????????? ??????????????</Link>
                </div>

                <div className='RightFirst'>
                    <h1>???????? ????????????</h1>
                    <p>???????????? ???????????????????? </p>
                </div>
            </div>


            <div className='SecondFooter'>
                    <div className='LeftSecond'>
                        <Image src={'/logowhite.png'} width={95} height={85}></Image>
                    </div>

                    <div className='RightSecond'>
                        <Link href="#"><FaFacebookF className='SocialIcon' /></Link>
                        <Link href="#"><BsTwitch className='SocialIcon' /></Link>
                        <Link href="#"><FaDiscord className='SocialIcon' /></Link>
                        <Link href="#"><AiFillYoutube className='SocialIcon' /></Link>

                    </div>
            </div>


            <div className="ThirdFooter">
                <p><span>GGEG</span> ???????? ?????????? ???????????? ??????????  <span>2023</span> &#169; </p>
            </div>

        </footer>
        


    </div>
  )
}


Home.layout = 'L1'