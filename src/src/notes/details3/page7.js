import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page7Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            WORK HEALTH AND SAFETY{'\n'}
                            Health and Safety: wide spectrum of policies, guidelines and activites that focus on promoting and managing health and safety at work; design should not pose any health hazards throughout its life-cycle.
                            {'\n'}{'\n'}
                            For example, PPE is worn to ensure safety of workers and prevent injuries. Also a safety feature could be incorporated to prevent injuries, such as filleted edges.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details3_7.png')}/>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    contectText: {
        fontSize: 18,
    },
    scaledImg: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
    },
});