import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page8Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            QUALITY{'\n'}
                            Design solutions that are not only good now, but also good in the future in terms of durability and quality.
                            {'\n'}{'\n'}
                            For example, Ford's Edsel was colossal faliure due to ther poor quality and unreliable features.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details3_8.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 0.76,
    },
});