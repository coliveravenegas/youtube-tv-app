import React from 'react';

export const Channels: React.FC = ({ channels, handleChannelClick }) => {
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
