import React from 'react';
import { Channel } from './types';

export const Channels = ({ channels, handleChannelClick }: {
  channels: Channel[];
  handleChannelClick: (channelId: string) => void;
}) => {
  return (
    <ul className="mt-4 flex items-center">
      {channels.map(el => <li key={el.id} className="p-4 text-center cursor-pointer"
        onClick={() => {
          handleChannelClick(el.id)
        }}
      >{el.name}</li>)}
    </ul>
  );
};
