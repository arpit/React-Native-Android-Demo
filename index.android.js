/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableOpacity,
  ToastAndroid
} = React;

var ch2 = React.createClass({

getInitialState: function() {
    // naming it initialX clearly indicates that the only purpose
    // of the passed down prop is to initialize something internally
    return {count: 0};
  },

  render: function() {
    return (
    <View style={{flex: 1}}>
      <ToolbarAndroid
        style={styles.toolbar}
        titleColor="#ffffff"
        title='My Awesome App' />

        <Text style={styles.instructions}>
          This simple example shows how to handle clicks from a button
        </Text>
        
        <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.button} >
          <Text style={{color: 'black'}}>
            Count {this.state.count}
          </Text>
        </View>
      </TouchableOpacity>

      </View>
    );
  },

  handlePress: function(){
    this.setState({count: this.state.count + 1});
    ToastAndroid.show('Updating', ToastAndroid.SHORT)
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 18,
    margin: 30
  },
  toolbar: {
    backgroundColor: '#000000',
    height: 56,
  },
  button:{
    backgroundColor: '#dfdfdf',
    textAlign:'center',
    marginTop:20,
    alignSelf:'center',
    width: 80,
    borderRadius: 5,
    padding:10,
    alignItems: 'center',
  }
});
AppRegistry.registerComponent('ch2', () => ch2);
