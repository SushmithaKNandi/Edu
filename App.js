/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform,Alert, StyleSheet,TextInput, Text,Button, View} from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      textValue:'Hello'
    }
  }
  _onPressButton() {
    console.log("hai");
    Alert.alert('You tapped the button!')
  }

  onChangeText(value){
    this.setState({
      textValue:value
    });
  }
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
    //   <View style={{height:300}}>
    //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
    //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    // </View>
  //   <View style={styles.container}>
  //   <View style={styles.buttonContainer}>
  //     <Button
  //       onPress={this._onPressButton}
  //       title="Press Me"
  //     />
  //   </View>
  //   <View style={styles.buttonContainer}>
  //     <Button
  //       onPress={this._onPressButton}
  //       title="Press Me"
  //       color="#841584"
  //     />
  //   </View>
  //   <View style={styles.alternativeLayoutButtonContainer}>
  //     <Button
  //       onPress={this._onPressButton}
  //       title="This looks great!"
  //     />
  //     <Button
  //       onPress={this._onPressButton}
  //       title="OK!"
  //       color="#841584"
  //     />
  //   </View>
  // </View>
  <View>
    <TextInput 
    placeholder="Hai"
    value={this.state.textValue}
    onChangeText={(value)=>console.log(value)}
    />
<Text>{this.state.textValue}</Text>
<Text>Hai</Text>
    
  </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    margin: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
