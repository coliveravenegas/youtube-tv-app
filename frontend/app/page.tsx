"use client"
import { Player } from "./player";
import { Channels } from './channels'
import { useState } from "react";
import { Channel } from "./types";

const channels: Channel[] = [
  {
    id: "1",
    name: "Cars (Spanish)",
    videos: [
      "Pyw6G4ulaUo",
      "5yNufmn8W4I",
      "FOr5KNPRxd4",
      "8mg49pfR9HM",
      "dj4BIOhmqYg",
      "5nDGs1PoFWw&",
      "1AyPgmBkuPs"
    ]
  }, {
    id: "2",
    name: 'Mejora continua',
    videos: [
      "vkCNwLWaPj8",
      "5YzWy6C0ZX8"
    ]
  },
  {
    id: "3",
    name: 'Noticias Peru',
    videos: [
      "qh1-rSwdtiI",
      "jynd0QseI0c",
      "qh1-rSwdtiI",
      "brEQadxaJDQ",
      "c2Tk6t0LT1U",
      "pEEmNqIM0S4"
    ]
  }, {
    id: "4",
    name: 'Noticias Internacionales',
    videos: [
      "BNArBr_J8mA",
      "qzJPhr9y2XA",
      "eGdNGJcnbhc",
    ]
  }
]

export default function Home() {
  const [channelIndex, setChannelIndex] = useState(0)
  const channelVideos = channels[channelIndex].videos;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-xl">Youtbe TV For You</h1>
        <Channels channels={channels} handleChannelClick={(channelId: string) => {
          const nextChannelId = channels.findIndex(channel => channel.id === channelId)
          setChannelIndex(nextChannelId)
        }} />
        <Player channelVideos={channelVideos} />
      </main>
    </div>
  );
}
