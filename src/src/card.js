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
  TouchableOpacity,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

class CardScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        this.state = {
            word: 'FLASHCARDS',
            answer: 'ANSWER',
            index: -1
        }
    }

    chooseWord = () => {
        var rand =  Math.floor(Math.random() * 22);
        this.setState({
            word: this.cards[rand].word,
            answer: '',
            index: rand
        })
    }

    showAnswer = () => {
        if (this.state.index >= 0)
            this.setState({
                answer: this.cards[this.state.index].answer
            })
    }
      
    goToBack = () => {
      this.props.navigation.goBack(null);
    }

    goToHome = () => {
        this.props.navigation.navigate("Main")
    }

    cards = [
        {
            word: 'PATENT',
            answer: 'A right grated for any device, substance, method of process that is new, inventive and useful. Gives the owner exclusive rights to commercially exploit the invention for the life of the patent'
        },
        {
            word: 'TRADEMARK',
            answer: 'A way of identifying a unique product or service used to differentiate goods and services of one trade from those of another.'
        },
        {
            word: 'COPYRIGHT PROTECTION',
            answer: 'Protects the original expression of ideas not the idea themselves; free automatic in Australia such as books, films, music, programs.'
        },
        {
            word: 'DESIGN REGISTRATION',
            answer: 'Protects designs which have an industrial/commercial use. Design refers to the features of shape, configuration, pattern or ornamentation which gives a product a unique appearance and must be: NEW: it must not be identical to any design disclosed and DISTINCTIVE: it must not be substantially similar in overall impression to any design previously published.'
        },
        {
            word: 'INNOVATION',
            answer: 'Innovation uses an existing material/technology in new way or is an improvement to an existing design through use of materials/technology."'
        },
        {
            word: 'ENTREPRENEUR',
            answer: 'Entrepreneur is responsible for the overall management: Ensuring a design/innovation is successfully manufactured and marketed (e.g. sales and services), Ensuring availability of resources. Raising financial backing, Protecting intellectual property, Managing Distribution and Transportation.'
        },
        {
            word: 'SUSTAINABLE DESIGN PRACTICE',
            answer: 'Sustainable design practice is designing is such as way as to preserve our non-renewable; reduces consumption of energy, raw materials and resources as well as minimising environmental impact aat the end of the product’s life cycle.'
        },
        {
            word: 'LIFE-CYCLE ANALYSIS',
            answer: 'A tool used by designers to assess the environmental impact of their design throughout all stages of designs. The process includes: Gathering raw materials --> Process raw materials --> Product manufacture --> Packaging and transport --> Product use --> End of life disposal.'
        },
        {
            word: 'APPROPRIATENESS OF DESIGN SOLUTION',
            answer: 'Design solution mest be in context with the problem, suitable for the environment in which it will be used.'
        },
        {
            word: 'NEEDS OF USER',
            answer: 'Something that is wanted or required to increase a person\'s quality of life, wellbeing or happiness'
        },
        {
            word: 'FUNCTION',
            answer: 'Determines how a product works, not just it’s obvious function, but its function as a proper design in general.'
        },
        {
            word: 'AESTHETICS',
            answer: 'Refers to beauty and physical appearance of a design. Beauty is in the eye of the beholder.'
        },
        {
            word: 'FINANCE',
            answer: 'The overall cost in designing, manufacturing and marketing of the product'
        },
        {
            word: 'ERGONOMICS',
            answer: 'Relationship between people and the environment. Application of design to all aspects of the targeted environment. Really the way people interact with the environment.'
        },
        {
            word: 'OCCUPATIONAL HEALTH AND SAFETY',
            answer: 'Wide spectrum of policies, guidelines and activities that focus on promoting and managing health and safety at work; design should not pose any health hazards throughout its life-cycle.'
        },
        {
            word: 'QUALITY',
            answer: 'Design solutions that are not only good now, but also good for the future in terms of quality and durability.'
        },
        {
            word: 'OBSOLESCENCE',
            answer: 'Loss of value or usefulness usually over a period of time, because of wear, changing technology or user preference.'
        },
        {
            word: 'SOCIAL',
            answer: 'Referes to values; individual\'s and society\'s sense of right and wrong in reference to the wellbeing of society and community.'
        },
        {
            word: 'RENEWABLE RESOURCES',
            answer: 'Resources that can be replaced by natural processes in a relatively short-period of time.'
        },
        {
            word: 'NON-RENEWABLE RESOURCES',
            answer: 'Resources that cannot be replaced within a time-span relevant to humans.'
        },
        {
            word: 'SUSTAINABLE DESIGN',
            answer: 'A design that involves natural resources that may be replaced in a relatively short-period of time, and use of sustainable technology.'
        },
        {
            word: 'SUSTAINABLE TECHNOLOGY',
            answer: 'Technology that meets production requirements while still conserving natural resources.'
        },
    ]

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        <Text style={{...styles.headerTitle, color: this.props.colorValue, flex:10}}>DESIGN AND TECHNOLOGY</Text>
                        <TouchableOpacity activeOpacity = { .5 } onPress={ this.goToHome }>    
                            <Image source={require('../images/home_2_black.png')} style={{flex:0.5}}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{...styles.headerSubTitle, color: this.props.colorValue}}>FLASHCARDS</Text>
                </View>
                <View style={{...styles.cardContainer, backgroundColor: this.props.colorValue}}>
                    <Text style={styles.question}>{this.state.word}</Text>
                    <ScrollView>
                        <Text style={styles.answer}>{this.state.answer}</Text>
                    </ScrollView>
                    
                    <View style={{flexDirection: 'row', height: 60, margin: 20}}>
                        <TouchableOpacity onPress={this.chooseWord} style={{flex: 1, margin: 5}}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>CHOOSE WORD</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.showAnswer} style={{flex: 1, margin: 5}}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>SHOW ANSWER</Text>
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
  headerTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
  headerSubTitle: {
    textAlign: 'center',
    fontSize: 18,
  },
  cardContainer: {
    flex: 1,
    marginTop: 0,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
  question: {
    textAlign: 'center',
    fontSize: 24,
    color: '#FFFFFF',
    margin: 30,
  },
  answer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF',
    marginLeft: 40,
    marginRight: 40,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: '#FFFFFF',
    borderWidth: 3
  },
  buttonText: {
    fontSize: 24,
    padding: 10,
    color: '#FFFFFF'
  },
});

const mapStateToProps = state => {
    return {
      colorValue: state.setting.colorValue,
    }
}
  
export default connect(mapStateToProps)(CardScreen)
//export default CardScreen;
