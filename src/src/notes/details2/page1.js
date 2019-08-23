import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page1Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 2}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                        HOW IS IT INNOVATIVE?{'\n'}
                        It is Innovative because it uses an existing technology/design of 3D printing and applying this emerging technology to construction.
                        {'\n'}INTELLECTUAL PROPERTY{'\n'}
                        It uses a patent to protect the device design and the process of applying 3D printing to housing, design registration to protect the visual appearance of their company/ products.
                        {'\n'}AGENCIES THAT AFFECT INNOVATION{'\n'}
                        IP Australia, patent and design registration are provided to prevent stealing and using of such technology by other businesses.
                        {'\n'}IMPACT OF THE INNOVATION:{'\n'}
                        SOCIETY:{'\n'}
                        Positive Impacts:{'\n'}
                        Decreasing the amount of injuries caused in construction.{'\n'}
                        Increasing the number of house -> leads to decrease in homelessness and poverty. This could also be applied to places such as Africa, where mass housing could be beneficial.
                        {'\n'}Negative impacts:{'\n'}
                        Depletion of construction skills{'\n'}
                        Decrease in employment 
                        {'\n'}ENVIRONMENT:{'\n'}
                        Positive Impacts:{'\n'}
                        Less waste of non-renewable materials due to higher efficiency and less wasting.
                        Less space taken up -> increase amount of land used for farming.
                        {'\n'}Negative Impacts:{'\n'}
                        Heavily reliant on specific materials increasing demand for these specific materials.
                        </Text>
                    </View>
                    <View style={{flex: 1.2}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details2_1.png')}/>
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
        fontSize: 12,
    },
    scaledImg: {
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25 * 1.25,
    },
});