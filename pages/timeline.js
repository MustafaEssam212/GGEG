import React from 'react'
import Image from 'next/image'
import Skyad from '../Components/Skyad'
import TimelinePoster from '../Components/Post/Timeline-Poster'
import TimelineRegularPost from '../Components/Post/TimelineRegularPost'
import TimelinePicPost from '../Components/Post/TimelinePicPost'
import TimelineVideoPost from '../Components/Post/TimelineVideoPost'
import { useState, useEffect } from 'react'
import { Puff  } from 'react-loading-icons'
import TimelineVotePost from '../Components/Post/TimelineVotePost'

const Timeline = () => {

  const [isClient, setIsClient] = useState(false);


  useEffect(() =>{
    setIsClient(true)
  }, [])


  return (
    <div className='BigTimelineContainer'>

             

        
        




          <>
          
              {
                isClient ? <>          <div className='TimelineContainer'>

                  <TimelinePoster />
                  <TimelineRegularPost />
                  <TimelinePicPost />
                  <TimelineVideoPost />
                  <TimelineVotePost />
  
            </div>
  
  
  
            <Skyad /></> : <div><Puff stroke="#FFC831" width="140" height="64" /></div>
              }
          
          </>
                    
   

    </div>
  )
}

Timeline.layout = 'L2'

export default Timeline
