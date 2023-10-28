import React from 'react';
import Video from 'react-native-video';
import funny from '../../assets/video/emotion.mp4';
const VideoPlayer = ({videoUri, sccrenHeight}) => {
  console.log('======== VideoPlayer =========');
  console.log('videoUri', videoUri);
  return <Video source={funny} style={{width: 350, height: 200, flex: 1}} />;
};

export default VideoPlayer;
