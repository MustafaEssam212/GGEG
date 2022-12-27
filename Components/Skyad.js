
import Image from "next/image"

const Skyad = () => {
  return (
    <div className="Skyad">
        <Image src={'/skyad.gif'} width={160} height={600}></Image>
    </div>
  )
}

Skyad.layout = 'L2';

export default Skyad
