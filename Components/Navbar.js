import Image from "next/image"
import {HiBars3} from 'react-icons/hi2';
import { AiOutlineHome, AiOutlineFire } from "react-icons/ai"
import { MdOutlineLocationSearching, MdOutlineLeaderboard, MdShareLocation } from "react-icons/md";
import { BsCart3} from "react-icons/bs"
import { FaRegHandPeace,FaSearchDollar, FaRegHandRock } from "react-icons/fa"
import { useRouter } from "next/router";
import {BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs"
import Link from "next/link"
import {HiOutlineUserGroup} from 'react-icons/hi'
import {HiOutlineBars3CenterLeft} from 'react-icons/hi2'
import { useState, useContext } from "react";
import { AppContext } from "./contextApi";



const Navbar = () => {


    const router = useRouter();
    const [MyTeams, setMyTeams] = useState(false);
    const [MyClub, setMyClub] = useState(false);
    const [Toggled, setToggled] = useState(false);
    const appContxt = useContext(AppContext);

    const handleBars = () => {
        setToggled(!Toggled)

        if(appContxt.BodyWidth === 280){
            appContxt.setBodyWidth(80)
        }else{
            appContxt.setBodyWidth(280)
        }
    }


  return (
    <div className={Toggled ? "NavbarContainer2" : "NavbarContainer"}>

            <div className="TopNavbar">
                <Image src={'/logo.png'} width={75} height={50}></Image>
                
                <HiBars3 onClick={()=>handleBars()} className="BarsIcon" />
            </div>


            <div className="NavbarLinks">

                <Link href="/home" className={router.pathname === '/home' ? "ActiveLink" : ""}><AiOutlineHome className="NavbarIcon" /> <span> الرئيسية</span></Link>
                <Link href="#"><MdOutlineLocationSearching className="NavbarIcon" /> <span>اكتشف</span></Link>
                <Link href="/timeline" className={router.pathname === '/timeline' ? "ActiveLink" : ""}><AiOutlineFire className="NavbarIcon" /> <span>تايم لاين</span></Link>
                <Link href="#"><MdOutlineLeaderboard className="NavbarIcon" /> <span>التصنيف</span></Link>
                <Link href="#"><BsCart3 className="NavbarIcon" /> <span>تسوق</span></Link>
                <Link href="#"><FaRegHandPeace className="NavbarIcon" /> <span>بطولات</span></Link>
                <Link href="#"><FaSearchDollar className="NavbarIcon" /> <span>سكريمات</span></Link>
                <Link href="#"><MdShareLocation className="NavbarIcon" /> <span>أرينا</span></Link>

            </div>

            <div className="NavbarLineWide"></div>


            <div className="MyTeamsNavbar">
                <div className="BtnMyTeam"><button onClick={()=>setMyTeams(!MyTeams)}><FaRegHandRock className="MyTeamsIcon" /> <span>الفرق بتاعتي</span></button> <div className="SecondBtnDiv"><span className="SpanOfTeamsNums">3</span> {MyTeams ? <BsArrowUpCircle onClick={()=>setMyTeams(!MyTeams)} className="DownMenuIcon CircleUp" /> : <BsArrowDownCircle onClick={()=>setMyTeams(!MyTeams)} className="DownMenuIcon" />}</div> </div>


                <div className={MyTeams ? "TeamsDiv" : "TeamsDivUp"}>

                    <div className="TeamDiv">
                        <Link href="#">
                            <Image src={'/2.png'} width={30} height={30} unoptimized></Image>
                            <span id="SpanTeam">Old School Team</span>
                        </Link>
                    </div>

                    <div className="TeamDiv">
                        <Link href="#">
                            <Image src={'/2.png'} width={30} height={30} unoptimized></Image>
                            <span id="SpanTeam">Old School Team</span>
                        </Link>
                    </div>

                    <div className="TeamDiv">
                        <Link href="#">
                            <Image src={'/2.png'} width={30} height={30} unoptimized></Image>
                            <span id="SpanTeam">Old School Team</span>
                        </Link>
                    </div>

                    <Link href="#" className="ShowMoreLink">إظهر الباقي</Link>

                </div>
                
            </div>


            <div className="NavbarLineWide"></div>


            <div className="MyClubNavbar">

                <div className="BtnMyClub"><button onClick={()=>setMyClub(!MyClub)}><HiOutlineUserGroup className="MyClubIcon" /> <span>النادي بتاعي</span></button> <div className="SecondBtnDiv"><span className="SpanOfClubNums">10</span> {MyClub ? <BsArrowUpCircle onClick={()=>setMyClub(!MyClub)} className="DownMenuIcon CircleUp" /> : <BsArrowDownCircle onClick={()=>setMyClub(!MyClub)} className="DownMenuIcon" />}</div> </div>

                <div className={MyClub ? "ClubsDiv" : "ClubsDivUp"}>

                    <div className="ClubDiv">
                        <Link href="#">
                            <Image src={'/2.png'} width={30} height={30} unoptimized></Image>
                            <span id="SpanClub">Old School Club</span>
                        </Link>
                    </div>

                    <div className="ClubDiv">
                        <Link href="#">
                            <Image src={'/2.png'} width={30} height={30} unoptimized></Image>
                            <span id="SpanClub">Old School Club</span>
                        </Link>
                    </div>

                    <div className="ClubDiv">
                        <Link href="#">
                            <Image src={'/2.png'} width={30} height={30} unoptimized></Image>
                            <span id="SpanClub">Old School Club</span>
                        </Link>
                    </div>

                    <Link href="#" className="ShowMoreLink">إظهر الباقي</Link>

                </div>

            </div>

            <div className="NavbarLineWide"></div>


            <div className="OpenToggle">
                <HiOutlineBars3CenterLeft onClick={()=>handleBars()} className="SecondBarsIcon" />
            </div>



    </div>
  )
}

export default Navbar
