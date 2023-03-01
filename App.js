import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView,TextInput, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'
import { Entypo } from '@expo/vector-icons'; 
import axios from 'axios';

const Post = styled.View`
  padding: 15px;
  background: red;
  height: 100px;
  width: 100px;
`

let onClick = (id,text) => {
  console.log(id, text);
  // setIsSended(!isSended)
  // axios.post('url', [id, text])
}

export default function App() {
  const [text, onChangeText] = React.useState('');
  const [isSended, setIsSended] = React.useState(false);
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      
      <Text style={styles.sovok}>СОВКОМБАНК</Text>
      <Text style={styles.sovokSmall}>с заботой о сотрудниках</Text>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder={'Введите ваше ФИО'}
        />
      </SafeAreaView>
      {
        !isSended ? (
          <View style={styles.emoji}>
              <View style={styles.emojiBlock}><Entypo name="emoji-sad" size={50} color="red" onPress={() => {setIsSended(!isSended); onClick(0, text)}} /></View>
              <View style={styles.emojiBlock}><Entypo name="emoji-neutral" size={50} color="#ff758f" onPress={() => {setIsSended(!isSended); onClick(1, text)}} /></View>
              <View style={styles.emojiBlock}><Entypo name="emoji-flirt" size={50} color="#a3b18a" onPress={() => {setIsSended(!isSended); onClick(2, text)}} /></View>
              <View style={styles.emojiBlock}><Entypo name="emoji-happy" size={50} color="green" onPress={() => {setIsSended(!isSended); onClick(3, text)}} /></View>
          </View>
        ) : (
          <View style={styles.emoji} >
              <Text onPress={() => setIsSended(!isSended)}>Упешно отправлено, возвращайтесь завтра!</Text>
          </View>
        )
      }
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  emoji:{
    width: 350,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  emojiBlock:{
    width: 50,
    height: 50,
  },
  sovok:{
    position: 'absolute',
    top: 50,
    fontSize: 15,
    fontWeight: 'bold',
  },
  sovokSmall:{
    position: 'absolute',
    top: 70,
    fontSize: 15,
    fontWeight: 'semi-bold',
  }
});
