import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page5Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    TRADEMARK{'\n'}
                    A way of identifying a unique product or service used to differentiate goods and services of one trade from those of another. Trademarks can be applied for at IP Australia (online), from where the designer follows multiple steps and pay submission fees for the trademark. Trademark last 10 year period.
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            For example, QANTAS name and the red and white kangaroo logo. QANTAS has trademarked the logo and name so no other company can do the same. This extremely important commercially but also economically for QANTAS to distinguish themselves from everyone else.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details1_5.png')}/>
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