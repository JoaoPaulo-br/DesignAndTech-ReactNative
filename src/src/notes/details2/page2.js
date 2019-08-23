import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page2Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 2}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                        HOW IS IT INNOVATIVE? {'\n'}
                        It is innovative as it uses an existing material (corn) in a new way to develop a sustainable alternative to standard plastics. These standard plastics come from oil (a non-renewable resource) and never breaks down. They also require a large amount of energy to manufacture. Unlike plantic packaging comes from corn starch and is biodegradeable within 7 days and uses 40% less energy to manufacture.
                        {'\n'}INTELLECTUAL PROPERTY{'\n'}
                        It uses a patent to protect the process of transforming corn starch into a biodegradable plastic substitute material. It uses design registration to protect the visual appearance of their company/ products; copyright to protect their website and all written/ graphic material.
                        {'\n'}AGENCIES THAT AFFECT INNOVATION{'\n'}
                        Includes IP Australia who protect the process and identity of the design to ensure that no other company can use the same innovative process. Also, the Australian Taxation Office will ensure that all taxation requirements are met, as a poor taxation management can lead to company failure. Workcover Australia ensures all WHS requirements are met because if it doesn’t regulations could result in big fines and potential court action.
                        {'\n'}IMPACT OF THE INNOVATION:{'\n'}
                        Impact on the Individual:
                        Reduces individual carbon footprint; personal guilt reduction
                        Employs individuals for corn growing, production and transportation.
                        Impact on Society:
                        Increased employment - taxation revenue raised as well as employs income/ spending; financial stability
                        Social awareness increased regarding need for sustainable products; supported by exposure to material.
                        {'\n'}ETHICAL:{'\n'}
                        Ethical use of non-genetically modified corn which doesn't impact on ecosystem
                        Location of source materials
                        Ethical protection of intellectual property
                        Ethical use of water (a scarce resource in a dry country like Australia) and land which could be better used for growing.
                        {'\n'}ENVIRONMENTAL:{'\n'}
                        Preservation of non-renewable resources as 40% less energy used in production as well as non-petrochemical raw materials -> less contribution towards global warming
                        Decrease in landfill; petrochemical plastics never break down
                        Less impact on wildlife; is biodegradable and doesn't leave residue like crude oil plastic; won't be eaten by animals
                        </Text>
                    </View>
                    <View style={{flex: 1.2}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details2_2.png')}/>
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
        height: Dimensions.get('window').width * 0.25 * 1.5,
    },
});