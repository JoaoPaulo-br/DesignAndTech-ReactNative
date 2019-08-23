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

import { Page1Screen } from './details1/page1'
import { Page2Screen } from './details1/page2'
import { Page3Screen } from './details1/page3'
import { Page4Screen } from './details1/page4'
import { Page5Screen } from './details1/page5'
import { Page6Screen } from './details1/page6'
import { Page7Screen } from './details1/page7'
import { Page8Screen } from './details1/page8'
import { Page9Screen } from './details1/page9'

import { connect } from 'react-redux';

class NoteDetails1Screen extends React.Component {

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
        {
            title: 'SUSTAINABLE DESIGN PRACTICE'
        },
        {
            title: 'INNOVATION'
        },
        {
            title: 'ENTREPRENEUR'
        },
        {
            title: 'COPYRIGHT'
        },
        {
            title: 'TRADEMARK'
        },
        {
            title: 'REGISTERED DESIGN'
        },
        {
            title: 'PLANT BREEDER\'S RIGHT'
        },
        {
            title: 'RENEWABLE AND NON-RENEWABLE RESOURCES'
        },
        {
            title: 'PATENT'
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
            case 0:
                return (
                    <Page1Screen textColor={this.props.colorValue} />
                );

            case 1:
                return (
                    <Page2Screen textColor={this.props.colorValue} />
                );
            case 2:
                return (
                    <Page3Screen textColor={this.props.colorValue} />
                );
            case 3:
                return (
                    <Page4Screen textColor={this.props.colorValue} />
                );
            case 4:
                return (
                    <Page5Screen textColor={this.props.colorValue} />
                );
            case 5:
                return (
                    <Page6Screen textColor={this.props.colorValue} />
                );
            case 6:
                return (
                    <Page7Screen textColor={this.props.colorValue}/>
                );
            case 7:
                return (
                    <Page8Screen textColor={this.props.colorValue}/>
                );
            case 8:
                return (
                    <Page9Screen textColor={this.props.colorValue}/>
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
                        <Text style={{...styles.headerTitle, color: this.props.colorValue, flex:10}}>DEFINITIONS</Text>
                        <TouchableOpacity activeOpacity = { .5 } onPress={ this.goToHome }>    
                            <Image source={require('../../images/home_2_black.png')} style={{flex: 0.6}}/>
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
  
export default connect(mapStateToProps)(NoteDetails1Screen)
//export default NoteDetails1Screen;
