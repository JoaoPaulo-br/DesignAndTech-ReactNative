import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page3Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            CULTURAL FACTORS{'\n'}
                            Insitutions that affect society's basic values, perceptions, preferences and behaviour.
                            {'\n'}For example, a Burqini, was designed to allow muslim women to participate in swimming. However for the success of the innovation it need to abide by Islam's rules.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details4_3.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 0.77,
    },
});