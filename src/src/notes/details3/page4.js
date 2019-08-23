import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page4Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            AESTHETICS{'\n'}
                            Refers to beauty and physical appearance of a design. Beauty is in the eye of the beholder.
                            {'\n'}{'\n'}
                            For example, aesthetics of iPhone is pleasing and entices customers to purchase the iPhone. 
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details3_4.png')}/>
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