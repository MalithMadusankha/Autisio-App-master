import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import ENDPOINT from '../../constants/constants';

const recordOptions = {
  mute: false,
  maxDuration: 5,
  quality: RNCamera.Constants.VideoQuality['288p'],
};

const VideoRecorder = ({resArr, setResArr, setIsLoading, navigation}) => {
  const [{cameraRef, isRecording}, {takePicture, setIsRecording, recordVideo}] =
    useCamera(null);
  const [videoUri, setVideoUri] = useState(null);

  const uploadHandler = async (parent, urlVideo) => {
    let url = `${ENDPOINT}${parent}/facce-turn`;
    let formData = new FormData();
    let locArr = resArr;
    formData.append('file', {
      name: 'mobile-video-upload',
      type: 'video/mp4',
      uri: urlVideo,
    });
    // console.log('===url===', url);
    fetch(url, {
      method: 'post',
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          let ress = response.json();
          return ress;
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then(data => {
        // 'data' is the parsed JSON response
        console.log(parent);
        console.log('mSG == ', data.msg);
        locArr.push(data.msg);
        setResArr(locArr);
        return data;
      })
      .then(data => {
        if (parent === 'mother' && data) {
          setIsLoading(false);
          navigation.navigate('audioReportSummaryScreen', {resArr});
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const recordingHandler = async parent => {
    try {
      setIsRecording(true);
      const data = await recordVideo(recordOptions);

      setVideoUri(data.uri);
      uploadHandler(parent, data.uri);
    } catch (error) {
      // console.warn(error);
    } finally {
      setIsRecording(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      recordingHandler('father');
    }, 5000);
    setTimeout(() => {
      recordingHandler('mother');
    }, 20000);
  }, []); // eslint-disable-line

  return (
    <View style={styles.body}>
      <View style={{flexBasis: 'row'}}>
        <RNCamera
          style={styles.preview}
          ref={cameraRef}
          type={RNCamera.Constants.Type.front}
        />
      </View>
    </View>
  );
};

export default VideoRecorder;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 200,
    width: 150,
    paddingBottom: 20,
  },
  video: {
    flexDirection: 'row',
  },
});
