
import {RiSearch2Line} from 'react-icons/ri';
import Image from 'next/image';
import {IoNotifications} from 'react-icons/io5'
import {GiTwoCoins, GiSwordsEmblem} from 'react-icons/gi'
import {TbLetterG} from 'react-icons/tb'
import {FaUserAlt} from 'react-icons/fa'
import {TfiCrown} from 'react-icons/tfi'
import {FiSettings, FiLogOut} from "react-icons/fi"
import { SlWallet } from "react-icons/sl";
import { GoBroadcast } from "react-icons/go";

import {SiMinutemailer} from 'react-icons/si'
import {RiSwordFill} from 'react-icons/ri'
import { Puff  } from 'react-loading-icons'
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';





const Header = () => {

    const [ProfileClick, setProfileClick] = useState(false);
    const [NotificatonBtn, setNotificatonBtn] = useState(false);
  


    useEffect(()=> {



      if(document.getElementById('ProfileDiv') !== null){

        window.addEventListener('mouseup',function(event){
          var pol = document.getElementById('ProfileDiv');
          if(event.target != pol && event.target.parentNode != pol){
            setProfileClick(false)
          }
        });  

      }




      if(document.getElementById('NotificationDiv') !== null){

        window.addEventListener('mouseup',function(event){
          var pol = document.getElementById('NotificationDiv');
          if(event.target != pol && event.target.parentNode != pol){
              setNotificatonBtn(false)
          }
        });  

      }


      
    })




 


  return (
    <div className="HeaderContainer">


        
        <div className="RightHeader">

            <div className='SearchDiv'>
                <input placeholder="دور على صحابك"></input>
                <RiSearch2Line className='SearchIcon' />
            </div>
            
        </div>




        <div className="LeftHeader">



          <div className='MoneyArea'>
              <span><GiTwoCoins className='CoinsIcon' /> 12,000</span>
              <span><TbLetterG className='GeezIcon' /> 33,000</span>
          </div>



          <div className='MailerArea'>
              <SiMinutemailer className='MailerIcon' />
              <span className='NotificationPoint'></span>
              <span className='AreaTitle'>الرسايل</span>
          </div>

          <div className='ApplicationsArea'>
              <RiSwordFill className='ApplicationIcon' />
              <span className='NotificationPoint'></span>
              <span className='AreaTitle'>ركويستس</span>
          </div>

          <div className='InvitationArea'>
              <GiSwordsEmblem className='InvitationIcon' />
              <span className='NotificationPoint'></span>
              <span className='AreaTitle'>الدعوات</span>
          </div>

          <div className='NotificationArea'>
            <IoNotifications onClick={()=>setNotificatonBtn(!NotificatonBtn)} className="NotificationIcon" />
            <span className='NotificationPoint'></span>
            <span className='AreaTitle'>نوتس</span>

            {
              NotificatonBtn ? <div id='NotificationDiv' className='NotificationUL'>
              <div className="arrow-up"></div>
              <div className='PuffContainer'><Puff stroke="#FFC831" width="140" height="64" /></div>
           </div> : <></>
            }
            

          </div>
            
            <div className='ProfileArea'>
              <Image onClick={()=>setProfileClick(!ProfileClick)} src={'/profile.png'} width={70} height={65}></Image>

              {
                ProfileClick ?               <div id="ProfileDiv" className='ProfileUL'>
                <Link href="#">بروفايلي <FaUserAlt className='ProfileIcons' /> </Link>
                <Link href="#"> بريميم <TfiCrown className='ProfileIcons' id='CrownIcon' /></Link>
                <Link href="#"> المحفظة <SlWallet className='ProfileIcons' /></Link>
                <Link href="#"> اعلن معانا <GoBroadcast className='ProfileIcons' /></Link>
                <Link href="#"> الاعدادات <FiSettings className='ProfileIcons' /></Link>
                <Link href="#"> تسجيل خروج <FiLogOut className='ProfileIcons' /></Link>
              </div> : <></>
              }

            </div>
        </div>

    </div>
  )
}

export default Header
