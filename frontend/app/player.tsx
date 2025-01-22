"use client"
import { useState } from 'react'
import YouTube from 'react-youtube'

export const Player = ({ channelVideos }: { channelVideos: string[] }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const currentVideo = channelVideos[currentVideoIndex];


  return (<YouTube className="mt-4" videoId={currentVideo}
    opts={{
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1
      }
    }}
    onEnd={() => {
      setCurrentVideoIndex(prev => prev + 1)
    }} />);

}