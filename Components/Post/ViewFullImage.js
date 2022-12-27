import {AiOutlineClose} from 'react-icons/ai'
import { AppContext } from '../contextApi'
import { useContext } from 'react'

const ViewFullImage = () => {

  const appContxt = useContext(AppContext);

  const handleCloseViewImage = ()=> {
    appContxt.setImageView(false);
  }

  return (
    <div className="FullImageView">
        <AiOutlineClose className='CloseIcon' onClick={handleCloseViewImage} />
        <img src={`/lea.jpg`} title={`PIC`} alt={`Pic`}></img>
    </div>
  )
}

export default ViewFullImage
