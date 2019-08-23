import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page10Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            OBSOLESCENCE{'\n'}
                            Is loss of value or usefulness usually over a period of time, because of wear, changing technology or user preference. 
                            {'\n'}{'\n'}
                            For example, Nokia 210, was a popular mobile phone whoever due to the introduction of touch screen and more advanced technologies other phones, such as, iPhone and Samsung S10, have overtaken causing Nokia 210 to become obsolete.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details3_10.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 0.9,
    },
});