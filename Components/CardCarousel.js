import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Link from 'next/link';
import {GiStarfighter, GiTwoCoins} from 'react-icons/gi'
import {BiUser} from 'react-icons/bi'

const CardCarousel = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (

    <div className='CaroContainer'>

        


        <Carousel itemClass='CarouselItem' className='Carousel'  infinite={true}  responsive={responsive}>





            <div className='TourCard'>

                    <Link href="#">


                        <div className='TopCard'>
                            <div className='FirstTopCard'>
                                <h1>League Of</h1>
                                <h1>Legends</h1>
                            </div>

                            <div className='SecondTopCard'>
                                <h2><GiTwoCoins className='CoinsIcon' /><span>15,000</span> كوين </h2>
                            </div>
                        </div>

                        <div className='CardName-Tags'>

                            <p id='NameTour'>بطولة جامدة جاحدة فاجرة</p>

                            <div className='CardTags'>
                                <span><GiStarfighter className='CardTagIcon' /> 1v1</span>
                                <span><BiUser className='CardTagIcon' /> Osamitos Duck</span>
                                <span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
                                <span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
                                <span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
                                <span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
                            </div>

                        </div>

                        <div className='CardLine'></div>

                        <div className='CardProgress'>

                                <div className='TopSecond'>
                                    <span>7 - 10 <BiUser className='TourIcon' /></span>
                                    <span> <p></p> بنجمع الناس</span>
                                </div>


                                <div className='BottomSecond'>
                                        
                                    <div className='BotSecondBar'></div>
                                </div>

                        </div>
                    
                        <div className='CardLine'></div>

                        <div className='CardBottom'>
                            <div className='LeftCardBot'>
                                    <p><GiTwoCoins className='CoinsIcon' /> 15,000,000</p>
                                    <span>جايزة البطولة</span>
                            </div>

                            <div className='RightCardBot'>
                                    <p>دخول مجاني</p>
                                    <span>هتتقفل كمان 14 يوم</span>
                            </div>
                        </div>

                        <div className='CardOverView'>
                            <p>ادخل دلوقتي</p>
                            <span>هتتقفل كمان 14 يوم</span>
                        </div>
                    </Link>
            

            </div>





















<div className='TourCard'>

<Link href="#">


<div className='TopCard'>
<div className='FirstTopCard'>
<h1>League Of</h1>
<h1>Legends</h1>
</div>

<div className='SecondTopCard'>
<h2><GiTwoCoins className='CoinsIcon' /><span>15,000</span> كوين </h2>
</div>
</div>

<div className='CardName-Tags'>

<p>بطولة جامدة جاحدة فاجرة</p>

<div className='CardTags'>
<span><GiStarfighter className='CardTagIcon' /> 1v1</span>
<span><BiUser className='CardTagIcon' /> Osamitos Duck</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
</div>

</div>

<div className='CardLine'></div>

<div className='CardProgress'>

<div className='TopSecond'>
<span>7 - 10 <BiUser className='TourIcon' /></span>
<span> <p></p> بنجمع الناس</span>
</div>


<div className='BottomSecond'>
     
<div className='BotSecondBar'></div>
</div>

</div>

<div className='CardLine'></div>

<div className='CardBottom'>
<div className='LeftCardBot'>
<p><GiTwoCoins className='CoinsIcon' /> 15,000,000</p>
<span>جايزة البطولة</span>
</div>

<div className='RightCardBot'>
<p>دخول مجاني</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</div>

<div className='CardOverView'>
<p>ادخل دلوقتي</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</Link>


</div>






<div className='TourCard'>

<Link href="#">


<div className='TopCard'>
<div className='FirstTopCard'>
<h1>League Of</h1>
<h1>Legends</h1>
</div>

<div className='SecondTopCard'>
<h2><GiTwoCoins className='CoinsIcon' /><span>15,000</span> كوين </h2>
</div>
</div>

<div className='CardName-Tags'>

<p>بطولة جامدة جاحدة فاجرة</p>

<div className='CardTags'>
<span><GiStarfighter className='CardTagIcon' /> 1v1</span>
<span><BiUser className='CardTagIcon' /> Osamitos Duck</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
</div>

</div>

<div className='CardLine'></div>

<div className='CardProgress'>

<div className='TopSecond'>
<span>7 - 10 <BiUser className='TourIcon' /></span>
<span> <p></p> بنجمع الناس</span>
</div>


<div className='BottomSecond'>
     
<div className='BotSecondBar'></div>
</div>

</div>

<div className='CardLine'></div>

<div className='CardBottom'>
<div className='LeftCardBot'>
<p><GiTwoCoins className='CoinsIcon' /> 15,000,000</p>
<span>جايزة البطولة</span>
</div>

<div className='RightCardBot'>
<p>دخول مجاني</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</div>

<div className='CardOverView'>
<p>ادخل دلوقتي</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</Link>


</div>








<div className='TourCard'>

<Link href="#">


<div className='TopCard'>
<div className='FirstTopCard'>
<h1>League Of</h1>
<h1>Legends</h1>
</div>

<div className='SecondTopCard'>
<h2><GiTwoCoins className='CoinsIcon' /><span>15,000</span> كوين </h2>
</div>
</div>

<div className='CardName-Tags'>

<p>بطولة جامدة جاحدة فاجرة</p>

<div className='CardTags'>
<span><GiStarfighter className='CardTagIcon' /> 1v1</span>
<span><BiUser className='CardTagIcon' /> Osamitos Duck</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
</div>

</div>

<div className='CardLine'></div>

<div className='CardProgress'>

<div className='TopSecond'>
<span>7 - 10 <BiUser className='TourIcon' /></span>
<span> <p></p> بنجمع الناس</span>
</div>


<div className='BottomSecond'>
     
<div className='BotSecondBar'></div>
</div>

</div>

<div className='CardLine'></div>

<div className='CardBottom'>
<div className='LeftCardBot'>
<p><GiTwoCoins className='CoinsIcon' /> 15,000,000</p>
<span>جايزة البطولة</span>
</div>

<div className='RightCardBot'>
<p>دخول مجاني</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</div>

<div className='CardOverView'>
<p>ادخل دلوقتي</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</Link>


</div>











<div className='TourCard'>

<Link href="#">


<div className='TopCard'>
<div className='FirstTopCard'>
<h1>League Of</h1>
<h1>Legends</h1>
</div>

<div className='SecondTopCard'>
<h2><GiTwoCoins className='CoinsIcon' /><span>15,000</span> كوين </h2>
</div>
</div>

<div className='CardName-Tags'>

<p>بطولة جامدة جاحدة فاجرة</p>

<div className='CardTags'>
<span><GiStarfighter className='CardTagIcon' /> 1v1</span>
<span><BiUser className='CardTagIcon' /> Osamitos Duck</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
</div>

</div>

<div className='CardLine'></div>

<div className='CardProgress'>

<div className='TopSecond'>
<span>7 - 10 <BiUser className='TourIcon' /></span>
<span> <p></p> بنجمع الناس</span>
</div>


<div className='BottomSecond'>
     
<div className='BotSecondBar'></div>
</div>

</div>

<div className='CardLine'></div>

<div className='CardBottom'>
<div className='LeftCardBot'>
<p><GiTwoCoins className='CoinsIcon' /> 15,000,000</p>
<span>جايزة البطولة</span>
</div>

<div className='RightCardBot'>
<p>دخول مجاني</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</div>

<div className='CardOverView'>
<p>ادخل دلوقتي</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</Link>


</div>















<div className='TourCard'>

<Link href="#">


<div className='TopCard'>
<div className='FirstTopCard'>
<h1>League Of</h1>
<h1>Legends</h1>
</div>

<div className='SecondTopCard'>
<h2><GiTwoCoins className='CoinsIcon' /><span>15,000</span> كوين </h2>
</div>
</div>

<div className='CardName-Tags'>

<p>بطولة جامدة جاحدة فاجرة</p>

<div className='CardTags'>
<span><GiStarfighter className='CardTagIcon' /> 1v1</span>
<span><BiUser className='CardTagIcon' /> Osamitos Duck</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
</div>

</div>

<div className='CardLine'></div>

<div className='CardProgress'>

<div className='TopSecond'>
<span>7 - 10 <BiUser className='TourIcon' /></span>
<span> <p></p> بنجمع الناس</span>
</div>


<div className='BottomSecond'>
     
<div className='BotSecondBar'></div>
</div>

</div>

<div className='CardLine'></div>

<div className='CardBottom'>
<div className='LeftCardBot'>
<p><GiTwoCoins className='CoinsIcon' /> 15,000,000</p>
<span>جايزة البطولة</span>
</div>

<div className='RightCardBot'>
<p>دخول مجاني</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</div>

<div className='CardOverView'>
<p>ادخل دلوقتي</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</Link>


</div>








<div className='TourCard'>

<Link href="#">


<div className='TopCard'>
<div className='FirstTopCard'>
<h1>League Of</h1>
<h1>Legends</h1>
</div>

<div className='SecondTopCard'>
<h2><GiTwoCoins className='CoinsIcon' /><span>15,000</span> كوين </h2>
</div>
</div>

<div className='CardName-Tags'>

<p>بطولة جامدة جاحدة فاجرة</p>

<div className='CardTags'>
<span><GiStarfighter className='CardTagIcon' /> 1v1</span>
<span><BiUser className='CardTagIcon' /> Osamitos Duck</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
</div>

</div>

<div className='CardLine'></div>

<div className='CardProgress'>

<div className='TopSecond'>
<span>7 - 10 <BiUser className='TourIcon' /></span>
<span> <p></p> بنجمع الناس</span>
</div>


<div className='BottomSecond'>
     
<div className='BotSecondBar'></div>
</div>

</div>

<div className='CardLine'></div>

<div className='CardBottom'>
<div className='LeftCardBot'>
<p><GiTwoCoins className='CoinsIcon' /> 15,000,000</p>
<span>جايزة البطولة</span>
</div>

<div className='RightCardBot'>
<p>دخول مجاني</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</div>

<div className='CardOverView'>
<p>ادخل دلوقتي</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</Link>


</div>










<div className='TourCard'>

<Link href="#">


<div className='TopCard'>
<div className='FirstTopCard'>
<h1>League Of</h1>
<h1>Legends</h1>
</div>

<div className='SecondTopCard'>
<h2><GiTwoCoins className='CoinsIcon' /><span>15,000</span> كوين </h2>
</div>
</div>

<div className='CardName-Tags'>

<p>بطولة جامدة جاحدة فاجرة</p>

<div className='CardTags'>
<span><GiStarfighter className='CardTagIcon' /> 1v1</span>
<span><BiUser className='CardTagIcon' /> Osamitos Duck</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
</div>

</div>

<div className='CardLine'></div>

<div className='CardProgress'>

<div className='TopSecond'>
<span>7 - 10 <BiUser className='TourIcon' /></span>
<span> <p></p> بنجمع الناس</span>
</div>


<div className='BottomSecond'>
     
<div className='BotSecondBar'></div>
</div>

</div>

<div className='CardLine'></div>

<div className='CardBottom'>
<div className='LeftCardBot'>
<p><GiTwoCoins className='CoinsIcon' /> 15,000,000</p>
<span>جايزة البطولة</span>
</div>

<div className='RightCardBot'>
<p>دخول مجاني</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</div>

<div className='CardOverView'>
<p>ادخل دلوقتي</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</Link>


</div>














<div className='TourCard'>

<Link href="#">


<div className='TopCard'>
<div className='FirstTopCard'>
<h1>League Of</h1>
<h1>Legends</h1>
</div>

<div className='SecondTopCard'>
<h2><GiTwoCoins className='CoinsIcon' /><span>15,000</span> كوين </h2>
</div>
</div>

<div className='CardName-Tags'>

<p>بطولة جامدة جاحدة فاجرة</p>

<div className='CardTags'>
<span><GiStarfighter className='CardTagIcon' /> 1v1</span>
<span><BiUser className='CardTagIcon' /> Osamitos Duck</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
<span><GiTwoCoins className='CardTagIcon CoinsIcon' /> كوينز</span>
</div>

</div>

<div className='CardLine'></div>

<div className='CardProgress'>

<div className='TopSecond'>
<span>7 - 10 <BiUser className='TourIcon' /></span>
<span> <p></p> بنجمع الناس</span>
</div>


<div className='BottomSecond'>
     
<div className='BotSecondBar'></div>
</div>

</div>

<div className='CardLine'></div>

<div className='CardBottom'>
<div className='LeftCardBot'>
<p><GiTwoCoins className='CoinsIcon' /> 15,000,000</p>
<span>جايزة البطولة</span>
</div>

<div className='RightCardBot'>
<p>دخول مجاني</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</div>

<div className='CardOverView'>
<p>ادخل دلوقتي</p>
<span>هتتقفل كمان 14 يوم</span>
</div>
</Link>


</div>





</Carousel>





    </div>

  )
}

export default CardCarousel
