import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page3Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    ENTREPRENUER{'\n'}
                    A person who organises and manages any enterprise, especially a business usually with considerable initiative and risk in hope of profit.
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            For example, Elon Musk began X.com, SpaceX, Tesla, Open AI etc. Elon Musk to a large risk, by dropping out of school/college to pursue the once emerging technology of the internet, to develop his own business.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details1_3.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 0.66,
    },
});