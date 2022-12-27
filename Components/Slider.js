import {Carousel} from '3d-react-carousal';
import Head from 'next/head';
import Link from 'next/link';

import Image from 'next/image';
const Slider = () => {



    let slides = [
        <Image width={800} height={300} src="/b1.png" title="GGEG" alt="GGEG" />,
        <Image width={800} height={300}  src="/b2.png" title="GGEG" alt="GGEG" />  ,
        <Image width={800} height={300}  src="/b3.png" title="GGEG" alt="GGEG" />  ,
        <Image width={800} height={300}  src="/b4.png" title="GGEG" alt="GGEG" />  ,
        <Image width={800} height={300} src="/b5.png" title="GGEG" alt="GGEG" />   ];

    return(
        <>

                <Carousel slides={slides} style={{zIndex: '-1'}} autoplay={true} interval={3000} arrows={false}/>

   
        </>
    )
}


export default Slider;