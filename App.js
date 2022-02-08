import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av'

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          marginLeft: 100,
          borderColor: 'rgba(0 , 0 , 6 , 0.2)',
          alignItems: 'center',
          justifyContent: 'center',
          width: 200,
          height: 200,
          borderRadius: 75,
        }}
        onPress = {this.playSound}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          click me!
        </Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <SoundButton />
      </View>
    );
  }
}











