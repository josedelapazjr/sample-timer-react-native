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
      timeLineTop: 75
    };

    this._startTimer = this._startTimer.bind(this);
    this._stopTimer = this._stopTimer.bind(this);
  }

  componentDidMount() {
  }

  _startTimer() {
    //alert('Timer start...');
    TimerMixin.setInterval( () => {
      this.setState({
        timeLineTop: this.state.timeLineTop+1
      })
    }, 500);
  }

  _stopTimer() {
    //alert('Timer stop...');
    TimerMixin.clearInterval();
  }

  render() {
    return (
      <View style={styles.container}>
       <View>
         <Text>TOP - {this.state.timeLineTop}
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
