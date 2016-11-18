/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TimerMixin from 'react-timer-mixin';
import { View, Text, StyleSheet, AppRegistry, TouchableHighlight } from 'react-native';


class SampleTimer extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentTimer: 0
    };

    this._startTimer = this._startTimer.bind(this);
    this._stopTimer = this._stopTimer.bind(this);
    this._updateTimer = this._updateTimer.bind(this);
    this._resetTimer = this._resetTimer.bind(this);
  }

  componentDidMount() {
  }

  _updateTimer() {
    this.setState({ currentTimer: this.state.currentTimer+1 });
  }

  _startTimer() {
    //alert('Timer start...');
    //TimerMixin.setInterval( () => this._updateTimer(), 500);

    // TimerMixin.setInterval( () => {
    //   this.setState({
    //     currentTimer: this.state.currentTimer+1
    //   })
    // }, 500);

    //this.timer = setInterval( () => this._updateTimer(), 500);

    this.timer = TimerMixin.setInterval( () => this._updateTimer(), 500);

  }



  _stopTimer() {
    //alert('Timer stop...');
    //TimerMixin.clearInterval('mytimer');

    clearInterval(this.timer);
  }

  _resetTimer() {
    //alert('Timer stop...');
    //TimerMixin.clearInterval('mytimer');

    this.setState({currentTimer: 0});
  }

  render() {
    return (
      <View style={styles.container}>
       <View>
         <Text>TIMER - {this.state.currentTimer}
         </Text>
        </View>
        <TouchableHighlight onPress={this._startTimer}>
          <Text>
            Start
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._stopTimer}>
          <Text>
            Stop
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._resetTimer}>
          <Text>
            Reset
          </Text>
        </TouchableHighlight>
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
});

AppRegistry.registerComponent('SampleTimer', () => SampleTimer);
