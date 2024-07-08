import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import Sound from 'react-native-sound';
import BgSound from '../assets/sound/videoplayback.mp3';
import {useFocusEffect} from '@react-navigation/native';

const SoundPlayer = () => {
  const [sound, setSound] = useState(null);

  const loadSound = () => {
    const newSound = new Sound(BgSound, error => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      // When loaded successfully
      console.log(
        'Duration in seconds: ' +
          newSound.getDuration() +
          ' number of channels: ' +
          newSound.getNumberOfChannels(),
      );

      if (newSound) {
        newSound.setVolume(0.2); // Set the volume to 50%
        newSound.setNumberOfLoops(-1); // Loop indefinitely
        newSound.play(success => {
          if (success) {
            console.log('Successfully finished playing');
          } else {
            console.log('Playback failed due to audio decoding errors');
          }
        });
      }
      setSound(newSound);
    });
  };

  useEffect(() => {
    loadSound();
    // Cleanup the sound object when the component is unmounted
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, []); // eslint-disable-line

  useFocusEffect(
    useCallback(() => {
      // Resume sound when screen gains focus
      if (sound) {
        sound.setVolume(0.2); // Set the volume to 50%
        sound.setNumberOfLoops(-1); // Loop indefinitely
        sound.play();
      }
      return () => {
        // Pause sound when screen loses focus
        if (sound) {
          sound.pause();
        }
      };
    }, [sound]),
  );

  return <View />;
};

export default SoundPlayer;
