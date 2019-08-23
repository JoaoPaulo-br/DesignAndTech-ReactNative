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
    TouchableOpacity,
    FlatList,
    ScrollView,
    Image
} from 'react-native';

import { Page1Screen } from './details4/page1'
import { Page2Screen } from './details4/page2'
import { Page3Screen } from './details4/page3'
import { Page4Screen } from './details4/page4'
import { Page5Screen } from './details4/page5'
import { Page6Screen } from './details4/page6'
import { Page7Screen } from './details4/page7'

import { connect } from 'react-redux';

class NoteDetails4Screen extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 0
        }
    }

    categories = [
        // {
        //     title: 'TIMING'
        // },
        {
            title: 'AVALIABLE AND EMERGING TECHNOLOGIES'
        },
        {
            title: 'CULTURAL FACTORS'
        },
        {
            title: 'POLITICAL FACTORS'
        },
        {
            title: 'ECONOMIC FACTORS'
        },
        {
            title: 'MARKET STRATEGIE'
        },
        {
            title: 'ROLES OF AGENCIES'
        },
    ]

    showPage = (index) => {
        this.setState({
            currentPage: index
        })
    }
    goToHome = () => {
        this.props.navigation.navigate("NoteMain")
    }
    renderPage = () => {
        switch (this.state.currentPage) {
            // case 0:
            //     return (
            //         <Page1Screen textColor={this.props.colorValue}/>
            //     );

            case 0:
                return (
                    <Page2Screen textColor={this.props.colorValue}/>
                );
            case 1:
                return (
                    <Page3Screen textColor={this.props.colorValue}/>
                );
            case 2:
                return (
                    <Page4Screen textColor={this.props.colorValue}/>
                );
            case 3:
                return (
                    <Page5Screen textColor={this.props.colorValue}/>
                );
            case 4:
                return (
                    <Page6Screen textColor={this.props.colorValue}/>
                );
            case 5:
                return (
                    <Page7Screen textColor={this.props.colorValue}/>
                );              
        }

        return (<View></View>)
    }

    render() {
        let {currentPage} = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        <Text style={{...styles.headerTitle, color: this.props.colorValue, flex: 10}}>FACTORS THAT INFLUENCE INNOVATION AND THE SUCCESS OF AN INNOVATION</Text>
                        <TouchableOpacity activeOpacity = { .5 } onPress={ this.goToHome }>    
                            <Image source={require('../../images/home_2_black.png')} style={{ flex: 0.3}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                    <View style={{ flex: 2.5 }}>
                        <FlatList
                            data={this.categories}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity 
                                    style={currentPage == index ? {...styles.flatView, ...styles.selected, borderColor: this.props.colorValue} : styles.flatView}
                                    onPress={() => this.showPage(index)}>
                                    <Text style={{...styles.category, color: this.props.colorValue}}>{item.title}</Text>
                                </TouchableOpacity>
                            }
                            keyExtractor={(item, index) => item + index}
                            extraData={this.state}
                        />
                    </View>
                    <View style={{ flex: 7 }}>
                        <ScrollView>
                            {this.renderPage()}
                        </ScrollView>
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
        textAlign: 'left',
        fontSize: 32,
        fontWeight: 'bold',
        marginLeft: 20,
        marginRight: 20,
    },
    flatView: {
        height: 60,
    },
    category: {
        fontSize: 12,
        height: '100%',
        textAlign: 'left',
        textAlignVertical: 'center',
        padding: 5,
    },
    selected: {
        borderWidth: 2,
        borderColor: 'black',
        marginRight: 20,
    }
});

const mapStateToProps = state => {
    return {
      colorValue: state.setting.colorValue,
    }
}
  
export default connect(mapStateToProps)(NoteDetails4Screen)
//export default NoteDetails4Screen;
