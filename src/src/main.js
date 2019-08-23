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
import { connect } from 'react-redux';

class MainScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
    }

    goToNote = () => {
        this.props.navigation.navigate("NoteMain");
    }

    goToTip = () => {
        this.props.navigation.navigate("TipMain");
    }

    goToSetting = () => {
        this.props.navigation.navigate("Setting");
    }

    goToCard = () => {
        this.props.navigation.navigate("Card");
    }

    goToQuiz = () => {
        this.props.navigation.navigate("QuizMain");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{...styles.header, backgroundColor: this.props.colorValue}}>
                    <Text style={styles.headerTitle}>DESIGN AND TECHNOLOGY</Text>
                    <Text style={styles.headerSubTitle}>STUDY APPLICATION</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 40, marginLeft: 20, marginRight: 20}}>
                    <TouchableOpacity style={{flex: 1}} onPress={this.goToNote}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../images/notes.png')}/>
                        <Text style={styles.sectionTitle}>NOTES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={this.goToTip}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../images/tips.png')}/>
                        <Text style={styles.sectionTitle}>HOT-TIPS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={this.goToQuiz}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../images/quiz.png')}/>
                        <Text style={styles.sectionTitle}>QUIZ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={this.goToCard}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../images/card.png')}/>
                        <Text style={styles.sectionTitle}>FLASHCARDS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex: 1}} onPress={this.goToSetting}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../images/setting.png')}/>
                        <Text style={styles.sectionTitle}>SETTINGS</Text>
                    </TouchableOpacity>
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
  header: {
    paddingTop: 5,
    paddingBottom: 5
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  headerSubTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 18
  },
  scaledImg: {
    width: Dimensions.get('window').width / 5 - 8,
    height: Dimensions.get('window').width / 5 - 8,
  },
});

const mapStateToProps = state => {
    return {
      colorValue: state.setting.colorValue,
    }
}
  
export default connect(mapStateToProps)(MainScreen)
//export default MainScreen;
