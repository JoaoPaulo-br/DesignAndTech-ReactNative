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
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

class HomeScreen extends React.Component {

    static navigationOptions = {
      header: null
    }

    constructor(props) {
        super(props);
    }

    goToMain = () => {
        this.props.navigation.replace("Main");
    }

    goToLicense = () => {
        this.props.navigation.navigate("License");
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.sectionTitle}>WELCOME TO THE{'\n'}DESIGN AND TECHNOLOGY STUDY APP
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flex: 1}}>
                            <Image
                                style={styles.scaledImg}
                                source={require('../images/logo.png')}/>
                        </View>
                        <TouchableOpacity style={{marginBottom: 10}} onPress={this.goToMain}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>PRESS TO ENTER APPLICATION</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{position: 'absolute', right: 10, bottom: 10, justifyContent: 'flex-end'}}>
                        {/* <Text style={styles.helpTitle}>ç to{'\n'}"Enter Application" you{'\n'}are agreeing{'\n'}to End License User{'\n'}Agreement (EULA).</Text> */}
                        <TouchableOpacity onPress={this.goToLicense}>
                            <View style={styles.button}>
                            <Text style={styles.buttonText}>VIEW EULA</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  helpTitle: {
    fontSize: 16,
  }, 
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1
  },
  buttonText: {
    fontSize: 18,
    padding: 10,
    color: 'black'
  },
  scaledImg: {
    width: Dimensions.get('window').height * 3 / 5 / 0.54,
    height: Dimensions.get('window').height * 3 / 5,
    borderWidth: 0
  },
});

export default HomeScreen;
