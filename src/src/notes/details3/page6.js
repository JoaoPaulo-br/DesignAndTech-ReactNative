import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page6Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            ERGONOMICS{'\n'}
                            Ergonomics: Relationship between people and the environment. Application of design to all aspects of the targeted environment. Really the way people interact with the environment.
                            {'\n'}{'\n'}
                            For example, an ergonomic chair prevents back injury and soreness, promoting good posture and comfort.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details3_6.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 1.07,
    },
});