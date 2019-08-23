import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page1Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            APPROPRIATENESS{'\n'}
                            Design solution must be in context with the problem. 
                            {'\n'}{'\n'}
                            For example, a product designed for children, must not contain gang symbols or explicit words. Another example, queen wants a scarf, the scarf design shouldn't have explicit words or phrases on them. In general must be appropriate for the audience.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details3_1.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 0.75,
    },
});