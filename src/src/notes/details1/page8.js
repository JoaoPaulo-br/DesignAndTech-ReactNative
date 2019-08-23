import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page8Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    RENEWABLE RESOURCES{'\n'}
                    Resources that can be replaced by natural processes in a relatively short-period of time.
                    NON-RENEWABLE RESOURCES{'\n'}
                    Resources that cannot be replaced within a time-span relevant to humans.
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            For example, a renewable resource is wood as it is regrows in a short period of time. Fossil fuels are a non-renewable source as it takes millions of years.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details1_8.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 0.585,
    },
});