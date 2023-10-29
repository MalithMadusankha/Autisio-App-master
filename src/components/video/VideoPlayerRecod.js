import React from 'react';
import Video from 'react-native-video';
import emotion from '../../assets/video/normal.mp4';
const VideoPlayerRecod = ({videoUri, sccrenHeight}) => {
  console.log('======== VideoPlayerRecod =========');
  console.log('videoUri', videoUri);
  return (
    <Video
      source={{uri: videoUri}}
      style={{width: 350, height: 200, flex: 1}}
    />
  );
};

export default VideoPlayerRecod;
