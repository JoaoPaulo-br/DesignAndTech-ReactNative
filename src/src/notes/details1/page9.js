import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page9Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    PATENT{'\n'}
                    A right grated for any device, substance, method of process that is new, inventive and useful. Gives the owner exclusive rights to commercially exploit the invention for the life of the patent. A patent lasts for 20 years. To apply for a patent a designer must go to IP Australia and follow their application process.
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            For example, Coca Cola recipe is a great example of a patented design. Coca Cola patented their recipe to prevent other companines selling the same drink for a lower prices.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details1_9.png')}/>
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