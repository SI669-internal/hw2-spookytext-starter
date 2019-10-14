import React from 'react';
import { StyleSheet, Text, View,
      TextInput, Switch, Image } from 'react-native';

/**
 * @param {string} text The string to reverse
 * @returns {string} The string, reversed
 */
function reverseText(text) {
  return text.split('').reverse().join('');
}

export default class classApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
      resultText: '',
      reverseText: false,
      reverseColors: false,
      resultStyle: styles.resultTextLight
    }
  }
  


  handleChangeText = (text) => {

  }
  
  handleReverseText = (value) => {

  }

  handleReverseColors = (value) => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./spookytext.png')}
          style={styles.logoImage}/>
        <View style={styles.inputArea}>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Enter something:</Text>
            <TextInput
              style={styles.inputBox}
              onChangeText={this.handleChangeText}
              value={this.state.currentInput}
            />
          </View>
        </View>
        <View style={styles.switchArea}>
          <View style={styles.labeledSwitch}>
            <Text>Reverse text:</Text>
            <Switch
              value={this.state.reverseText}
              onValueChange={this.handleReverseText}
            />
          </View>
          <View style={styles.labeledSwitch}>
            <Text>Reverse colors:</Text>
            <Switch
              value={this.state.reverseColors}
              onValueChange={this.handleReverseColors}
            />
          </View>
        </View>
        <View style={styles.resultArea}>
          <Text style={styles.resultLabel}>Result: </Text>
          <Text style={this.state.resultStyle}>{this.state.resultText}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoImage: {
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '80%',
    height: undefined,
    resizeMode: 'contain'
  },
  inputArea: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
  },
  inputLabel: {
    flex: 0.4,
  },
  inputBox: {
    flex: 0.6,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 24,
    padding: 5,

  },
  switchArea: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20
  },
  labeledSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  resultArea: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  resultLabel: {
    flex: 0.4
  },
  resultTextLight: {
    flex: 0.6,
    height: 40,
    padding: 5,
    color: 'black',
    backgroundColor: 'orange',
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'black'
  },
  resultTextDark: {
    flex: 0.6,
    height: 40,
    padding: 5,
    color: 'orange',
    backgroundColor: 'black',
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'orange'
  },
});
