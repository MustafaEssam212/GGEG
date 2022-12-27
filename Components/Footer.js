import {FaDiscord, FaFacebookF} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>

        <div className="FirstOfFooter">
            <div className='RightFirstFooter'>
                <p><span>GGEG</span> حقوق النشر محفوظة لشركة  <span>2023</span> &#169; </p>
            </div>

            <div className='LeftFirstFooter'>

                <a><RiWhatsappFill className='FooterIcon' /></a>
                <a><FaFacebookF className='FooterIcon' /></a>
                <a><FaDiscord className='FooterIcon' /></a>

            </div>
        </div>


      
    </footer>
  )
}

export default Footer
