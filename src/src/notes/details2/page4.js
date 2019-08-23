import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page4Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 2}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            HOW IS IT INNOVATIVE?{'\n'}
                            It is Innovative because it uses an existing technology/design of a car and improves on its design by integrating new technologies to allow it to self-navigate.
                            {'\n'}INTELLECTUAL PROPERTY{'\n'}
                            It uses a patent to protect the device design and the process, design registration to protect the visual appearance of their company/ products and copyright to protect their website and all written/ graphic material.
                            {'\n'}AGENCIES THAT AFFECT INNOVATION{'\n'}
                            US Department of Transportation: Secretary Anthony Foxx unveiled Obama's 10 year, 4 billion dollar proposal to accelerate the development and adoption of safe vehicle automation. This large investment increased advancement in development through funding research and development.
                            {'\n'}National Highway Traffic Administration's preliminary policy statement on autonomous vehicles expressing the feasibility of autonomous vehicles eases implementation of the innovation through permitting use of fully autonomous vehicles.
                            {'\n'}United States Patent and Trademark Office play a vital role in protecting the intellectual property of Google including the self-driving technology and vehicle design.
                            {'\n'}IMPACT OF THE INNOVATION:{'\n'}
                            SOCIETY:{'\n'}
                            Positive Impacts:{'\n'}
                            Eliminates human error; increases road safety{'\n'}
                            Allows more efficient travelling and time usage{'\n'}
                            Addresses egalitarianism by providing equal opportunities of mobility for all citizens (i.e the blind) thus improving social inclusion
                            {'\n'}Negative impacts:{'\n'}
                            Depletion of driving skills (including decision making, multitasking, situation/ environmental awareness and responsibility){'\n'}
                            Makes jobs redundant i.e especially regarding public transport{'\n'}
                            ENVIRONMENT:{'\n'}
                            Positive Impacts:{'\n'}
                            Lower fuel consumption through efficiency of autonomous driving leads to a reduction in greenhouse gases produced by fuel consumption
                            {'\n'}Negative Impacts:{'\n'}
                            Increased landfill as previous generations of cars become obsolete
                        </Text>
                    </View>
                    <View style={{flex: 1.2}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details2_4.png')}/>
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
        height: Dimensions.get('window').width * 0.25 * 1.47,
    },
});