/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';

import { connect } from 'react-redux';
import { setColor } from '../actions/color';

class SettingScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
    }

    selectColor = (index) => {
      var value = '#000000';
      if (index == 1) {
        value = '#FF00FF';
      } else if (index == 2) {
        value = 'black';
      } else if (index == 3) {
        value = 'red';
      } else if (index == 4) {
        value = '#00BFFF';
      } else if (index == 5) {
        value = '#43464B';
      } else if (index == 6) {
        value = '#FFA500';
      } else if (index == 7) {
        value = '#191970';
      } else if (index == 8) {
        value = 'grey';
      } else if (index == 9) {
        value = '#32CD32';
      } else if (index == 10) {
        value = '#4B0082';
      }

      this.props.setColor(value);
    }

    goToBack = () => {
      this.props.navigation.goBack(null);
    }
    goToHome = () => {
      this.props.navigation.navigate("Main")
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                    <Text style={{...styles.headerTitle, color: this.props.colorValue,flex:10}}>SETTINGS</Text>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ this.goToHome }>    
                        <Image source={require('../images/home_2_black.png')} style={{flex:0.6}}/>
                    </TouchableOpacity>
                </View>    
                    <Text style={{...styles.headerSubTitle, color: this.props.colorValue}}>CHOOSE COLOUR:</Text>
                </View>
                <ScrollView>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1}}>
                            <View style={{flexDirection: 'row', height: 60}}>
                                <TouchableOpacity onPress={() => this.selectColor(1)} style={{flex: 1, margin: 5}}>
                                    <View style={styles.button_magenta}>
                                        <Text style={styles.buttonText_magenta}>MAGENTA</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.selectColor(2)} style={{flex: 1, margin: 5}}>
                                    <View style={styles.button_black}>
                                        <Text style={styles.buttonText_black}>BLACK</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', height: 60}}>
                                <TouchableOpacity onPress={() => this.selectColor(3)} style={{flex: 1, margin: 5}}>
                                    <View style={styles.button_red}>
                                        <Text style={styles.buttonText_red}>RED</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.selectColor(4)} style={{flex: 1, margin: 5}}>
                                    <View style={styles.button_skyblue}>
                                        <Text style={styles.buttonText_skyblue}>DEEP SKY BLUE</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', height: 60}}>
                                <TouchableOpacity onPress={() => this.selectColor(5)} style={{flex: 1, margin: 5}}>
                                    <View style={styles.button_darkgray}>
                                        <Text style={styles.buttonText_darkgray}>DARK SLATE GRAY</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.selectColor(6)} style={{flex: 1, margin: 5}}>
                                    <View style={styles.button_orange}>
                                        <Text style={styles.buttonText_orange}>ORANGE</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', height: 60}}>
                                <TouchableOpacity onPress={() => this.selectColor(7)} style={{flex: 1, margin: 5}}>
                                    <View style={styles.button_blue}>
                                        <Text style={styles.buttonText_blue}>MIDNIGHT BLUE</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.selectColor(8)} style={{flex: 1, margin: 5}}>
                                    <View style={styles.button_grey}>
                                        <Text style={styles.buttonText_grey}>GREY</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: 'row', height: 60}}>
                                <TouchableOpacity onPress={() => this.selectColor(9)} style={{flex: 1, margin: 5}}>
                                    <View style={styles.button_green}>
                                        <Text style={styles.buttonText_green}>LIME GREEN</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.selectColor(10)} style={{flex: 1, margin: 5}}>
                                    <View style={styles.button_purple}>
                                        <Text style={styles.buttonText_purple}>PURPLE/INDIGO</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View  style={{flex: 1}}>
                            <Text  style={{...styles.contact, color: this.props.colorValue}}>
                                Contact Info:{'\n'}
                                If there are any issues and help needed please email:{'\n'}
                                {'\n'}
                                kkappproductions@hotmail.com{'\n'}
                                or {'\n'}
                                kokulan.kandeepan@hotmail.com{'\n'}
                                or{'\n'}
                                kandeepankokulan@gmail.com{'\n'}
                                {'\n'}
                                Phone number:{'\n'}
                                +61 421 825 790{'\n'}
                                {'\n'}
                                Please fill out the survey at: {'\n'}
                                https://www.surveymonkey.com/r/9ZQNLNP
                            </Text>
                        </View>
                    </View>

                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  headerTitle: {
    textAlign: 'left',
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 20,
  },
  headerSubTitle: {
    textAlign: 'left',
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20,
  },
  contact: {
    margin: 10,
    fontSize: 16,
  }, 

  button_magenta: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#FF00FF',
    borderWidth: 2
  },
  buttonText_magenta: {
    fontSize: 14,
    padding: 10,
    color: '#FF00FF'
  },
  button_black: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 2
  },
  buttonText_black: {
    fontSize: 14,
    padding: 10,
    color: 'black'
  },
  button_red: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
    borderWidth: 2
  },
  buttonText_red: {
    fontSize: 14,
    padding: 10,
    color: 'red'
  },
  button_skyblue: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#00BFFF',
    borderWidth: 2
  },
  buttonText_skyblue: {
    fontSize: 14,
    padding: 10,
    color: '#00BFFF'
  },
  button_darkgray: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#43464B',
    borderWidth: 2
  },
  buttonText_darkgray: {
    fontSize: 14,
    padding: 10,
    color: '#43464B'
  },
  button_orange: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFA500',
    borderWidth: 2
  },
  buttonText_orange: {
    fontSize: 14,
    padding: 10,
    color: '#FFA500'
  },
  button_blue: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#191970',
    borderWidth: 2
  },
  buttonText_blue: {
    fontSize: 14,
    padding: 10,
    color: '#191970'
  },
  button_grey: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: 'grey',
    borderWidth: 2
  },
  buttonText_grey: {
    fontSize: 14,
    padding: 10,
    color: 'grey'
  },
  button_green: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#32CD32',
    borderWidth: 2
  },
  buttonText_green: {
    fontSize: 14,
    padding: 10,
    color: '#32CD32'
  },
  button_purple: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#4B0082',
    borderWidth: 2
  },
  buttonText_purple: {
    fontSize: 14,
    padding: 10,
    color: '#4B0082'
  },
});

const mapStateToProps = state => {
  return {
    colorValue: state.setting.colorValue,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setColor: (name) => {
      dispatch(setColor(name))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
//export default SettingScreen;
