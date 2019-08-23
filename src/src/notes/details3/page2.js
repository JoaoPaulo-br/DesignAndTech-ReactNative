import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page2Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            NEEDS OF USER{'\n'}
                            Is something that is wanted or required to increase a person's quality of life, wellbeing or happiness
                            {'\n'}{'\n'}
                            For example, a fridge was designed to preserve food for longer and more efficiently. It was the need of not being able to preserve food without adding salt that cause the designing of the fridge.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details3_2.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 1.13,
    },
});