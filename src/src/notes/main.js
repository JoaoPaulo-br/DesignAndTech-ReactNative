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


class NoteMainScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
    }

    goToDetails1 = () => {
        this.props.navigation.navigate("NoteDetails1");
    }

    goToDetails2 = () => {
        this.props.navigation.navigate("NoteDetails2");
    }

    goToDetails3 = () => {
        this.props.navigation.navigate("NoteDetails3");
    }

    goToDetails4 = () => {
        this.props.navigation.navigate("NoteDetails4");
    }
    goToHome = () => {
        this.props.navigation.navigate("Main")
    }
    demo = () => {
        console.log('111');
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        <Text style={{...styles.headerTitle, color: this.props.colorValue, flex:10}}>
                            DESIGN AND TECHNOLOGY NOTES
                        </Text>
                        <TouchableOpacity activeOpacity = { .5 } onPress={ this.goToHome }>    
                            <Image source={require('../../images/home_2_black.png')} style={{flex: 0.4}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 20, marginRight: 20}}>
                    <View style={{flex: 2, borderColor: 'black', borderWidth: 1, borderRadius:1, borderStyle: 'dashed', marginBottom: 20, marginRight: 5, justifyContent:'center', alignItems: 'center'}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../images/note_1.png')}/>
                    </View>
                    <View style={{flex: 3}}>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={this.goToDetails1}>
                            <Text style={{...styles.sectionTitle, color: this.props.colorValue}}>DEFINITIONS</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={this.goToDetails2}>
                            <Text style={{...styles.sectionTitle, color: this.props.colorValue}}>ESSAY/CASE STUDY EXAMPLES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={this.goToDetails3}>
                            <Text style={{...styles.sectionTitle, color: this.props.colorValue}}>FACTORS THAT AFFECT DESIGN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress={this.goToDetails4}>
                            <Text style={{...styles.sectionSmallTitle, color: this.props.colorValue}}>FACTORS THAT INFLUENCE INNOVATION AND{'\n'}THE SUCCESS OF THE INNOVATION</Text>
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
  header: {
    paddingTop: 5,
    paddingBottom: 5
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  scaledImg: {
    width: Dimensions.get('window').height * 0.8,
    height: Dimensions.get('window').height * 0.7,
    borderWidth:0
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 24
  },
  sectionSmallTitle: {
    textAlign: 'center',
    fontSize: 18
  },
});

const mapStateToProps = state => {
    return {
      colorValue: state.setting.colorValue,
    }
}
  
export default connect(mapStateToProps)(NoteMainScreen)
//export default NoteMainScreen;
