/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { connect } from 'react-redux';

class ResultScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        var score = this.props.navigation.state.params.score; 
        var result = '';
        if (score == 0)
            result = 'Maybe try reading the notes or flashcards';
        else if (score == 1)
            result = 'Better Luck Next Time';
        else if (score == 2)
            result = 'Room for Improvement';
        else if (score == 3)
            result = 'You got more than 50%';
        else if (score == 4)
            result = 'Almost Perfect';
        else if (score == 4)
            result = '100%';

        this.state = {
            result: result,
            score: score,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{...styles.largeTitle, color: this.props.colorValue}}>YOU GOT</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{...styles.largeTitle, color: this.props.colorValue}}>{this.state.score} / 5</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{...styles.smallTitle, color: this.props.colorValue}}>{this.state.result}</Text>
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
    largeTitle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 48,
        fontWeight: 'bold',
        height: '100%',
    },
    smallTitle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        height: '100%',
    },
});

const mapStateToProps = state => {
    return {
      colorValue: state.setting.colorValue,
    }
}
  
export default connect(mapStateToProps)(ResultScreen)
//export default ResultScreen;
