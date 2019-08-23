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
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

class QuizMainScreen extends React.Component {

    hints = [
        {
            title: 'No PAIN, No GAIN.'
        },
        {
            title: 'Knowledge is Powerful.'
        },
        {
            title: 'E = M...that science, not Design.'
        },
        {
            title: 'Everybody is a genius, I am not.'
        },
        {
            title: 'Creativity is more important the knowledge.'
        },
    ]

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        var rand =  Math.floor(Math.random() * 5);
        this.state = {
            hinText: this.hints[rand].title
        }
    }

    goToPage = () => {
        this.props.navigation.navigate("QuizPage");
    }

    goToBack = () => {
        this.props.navigation.goBack(null);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 100, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{...styles.headerTitle, color: this.props.colorValue}}>
                        Quiz
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 20}}>
                        <TouchableOpacity onPress={this.goToPage}>
                            <Text style={{...styles.headerSubTitle, color: this.props.colorValue}}>
                                START{'\n'}THE QUIZ
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goToBack}>
                            <Text style={{...styles.headerSubTitle, color: this.props.colorValue}}>
                                GO BACK{'\n'}TO MENU
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{position: 'absolute', height: '100%', right: 10, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Image
                        style={styles.scaledTeacherImg}
                        source={require('../../images/teacher.png')}/>
                </View>
                <View style={{position: 'absolute', right: 10, justifyContent: 'flex-end'}}>
                    <View style={styles.hint}>
                        <ImageBackground
                            style={styles.scaledHintImg}
                            source={require('../../images/hint.png')}>
                            <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{...styles.hintText, color: this.props.colorValue}}>{this.state.hinText}</Text>
                            </View>
                        </ImageBackground>
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
  headerTitle: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
    marginRight: 25,
  },
  headerSubTitle: {
    textAlign: 'center',
    fontSize: 32,
    marginLeft: 25,
  },
  scaledTeacherImg: {
    width: Dimensions.get('window').width * 0.2 ,
    height: Dimensions.get('window').width * 0.2 * 1.6,
  },
  hint: {
    marginRight: Dimensions.get('window').width * 0.2,
    marginTop: 20,
    flex: 1,
  },
  hintText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
  },
  scaledHintImg: {
    width: Dimensions.get('window').width * 0.25 ,
    height: Dimensions.get('window').width * 0.25 * 0.55,
  },
});

const mapStateToProps = state => {
    return {
      colorValue: state.setting.colorValue,
    }
}
  
export default connect(mapStateToProps)(QuizMainScreen)
//export default QuizMainScreen;
