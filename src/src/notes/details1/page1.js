import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page1Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>SUSTAINABLE DESIGN PRACTICE{'\n'}
                Is designing in a way to preserve non-renewable resources, reducing consumption of energy, raw materials and resources as well as minimising environmental impact of the product.</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                        For example, turning off equipment to minimise electricity used or using online designing tools over paper. By doing so the designer reduces the carbon-footprint and the amount of energy needed. Hence designing sustainably.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details1_1.png')}/>
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
        width: Dimensions.get('window').width * 0.3 ,
        height: Dimensions.get('window').width * 0.3 * 0.85,
    },
});