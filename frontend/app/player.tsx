"use client"
import { useState } from 'react'
import YouTube from 'react-youtube'

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1
  }
};


export const Player = ({ channelVideos }: { channelVideos: string[] }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const currentVideo = channelVideos[currentVideoIndex];


  return (<YouTube videoId={currentVideo} opts={opts} onEnd={() => {
    setCurrentVideoIndex(prev => prev + 1)
  }} />);

}