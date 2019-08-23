import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page3Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            FUNCTION{'\n'}
                            Determines how a product works, not just it’s obvious function, but its function as a proper design in general.
                            {'\n'}{'\n'}
                            For example, construction workers hard-hat, its main function is to protect the head from falling objects. It doesn't look great nor is it comfortable. But it performs its function regardless.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details3_3.png')}/>
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