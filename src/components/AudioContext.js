import React, { createContext, useContext, useState } from 'react';
import { Howl, Howler } from 'howler';
import natureMusic from '../natureMusic.mp3';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [sound] = useState(new Howl({ src: [natureMusic] }));
  const [isPlaying, setIsPlaying] = useState(false);

  const playPause = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <AudioContext.Provider value={{ playPause }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  return useContext(AudioContext);
};
