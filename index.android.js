import React, { Component } from 'react';
import TimerMixin from 'react-timer-mixin';
import { View, Text, StyleSheet, AppRegistry, TouchableHighlight } from 'react-native';

class SampleTimer extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentMinute: 0,
      currentSecond: 0,
    };

    this._startTimer = this._startTimer.bind(this);
    this._stopTimer = this._stopTimer.bind(this);
    this._updateTimer = this._updateTimer.bind(this);
    this._resetTimer = this._resetTimer.bind(this);
  }

  _updateTimer() {
    let secondCtr = this.state.currentSecond + 1;
    let minuteCtr = this.state.currentMinute;

    if(secondCtr == 60) {
      minuteCtr = minuteCtr + 1;
      secondCtr = 0;
    }

    this.setState({
                    currentMinute: minuteCtr,
                    currentSecond: secondCtr,
                  });
  }

  _startTimer() {
    this.timer = TimerMixin.setInterval( () => this._updateTimer(), 1000);
  }

  _stopTimer() {
    clearInterval(this.timer);
  }

  _resetTimer() {
    this._stopTimer();
    this.setState({
                    currentMinute: 0,
                    currentSecond: 0,
                  });
  }

  formatNumber(value){
    let result = value.toString();
    // Add 0 when value is less than 10
    if(value < 10){
      result = '0' + result;
    }
    return result;
  }

  renderResult() {
    return this.formatNumber(this.state.currentMinute) +
           '.' +
           this.formatNumber(this.state.currentSecond);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <Text style={styles.display}>
            {this.renderResult()}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button} onPress={this._startTimer}>
            <Text style={styles.text}>
              Start
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this._stopTimer}>
            <Text style={styles.text}>
              Stop
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this._resetTimer}>
            <Text style={styles.text}>
              Reset
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default SampleTimer;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  display: {
    fontSize: 80,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: 'steelblue',
    borderColor: 'steelblue',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    height: 30,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 3,
  }
});

AppRegistry.registerComponent('SampleTimer', () => SampleTimer);
