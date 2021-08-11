/* eslint-disable radix */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {
  counterDecrement,
  counterIncrement,
  counterClear,
  counterSet,
  helloAction,
} from './actions';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 0,
  //   };
  //   this.onPressIncrement = this.onPressIncrement.bind(this);
  //   this.onPressDecrement = this.onPressDecrement.bind(this);
  //   this.onPressClear = this.onPressClear.bind(this);
  //   this.onChangeText = this.onChangeText.bind(this);
  // }

  // onPressIncrement() {
  //   this.setState({count: this.state.count + 1});
  // }

  // onPressDecrement() {
  //   this.setState({count: this.state.count - 1});
  // }

  // onPressClear() {
  //   this.setState({count: 0});
  // }

  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(number) {
    const count = parseInt(number);
    // this.setState({count});
    this.props.counterSet(count);
  }

  render() {
    // console.log(this.props);
    const {helloText, loading, pressedButton} = this.props.hello;
    const {container, countViewStyle, welcome} = styles;
    return (
      <View style={container}>
        <TextInput
          style={{width: 40, height: 40, borderWidth: 1}}
          onChangeText={this.onChangeText}
          // value={this.state.count.toString()}
          value={this.props.count.toString()}
        />
        <View style={countViewStyle}>
          {/* <Button onPress={this.onPressIncrement} title="+" /> */}
          <Button onPress={this.props.counterIncrement} title="+" />
          <Text style={welcome}>
            {/* {this.state.count} */}
            {this.props.count}
          </Text>
          {/* <Button onPress={this.onPressDecrement} title="-" /> */}
          <Button onPress={this.props.counterDecrement} title="-" />
        </View>
        {/* <Button onPress={this.onPressClear} title="Clear" /> */}
        <Button onPress={this.props.counterClear} title="Clear" />

        <Text>{this.props.hello.helloText}</Text>
        <Text>{`${this.props.hello.loading}`}</Text>

        <Text>{helloText}</Text>
        <Text>{`${loading}`}</Text>

        <Text>
          {helloText} ? {pressedButton.toString()}{' '}
        </Text>
        <Button title="show me the magic" onPress={this.props.helloAction} />
      </View>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     count: state,
//   };
// }

function mapStateToProps(state) {
  return {
    count: state.counter,
    hello: state.hello,
  };
}

export default connect(mapStateToProps, {
  counterIncrement,
  counterDecrement,
  counterClear,
  counterSet,
  helloAction,
})(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  countViewStyle: {
    flexDirection: 'row',
  },
});
