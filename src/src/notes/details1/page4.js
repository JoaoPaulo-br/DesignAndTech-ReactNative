import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page4Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    COPYRIGHT{'\n'}
                    Protects the original expression of ideas not the idea themselves. Copyright lasts for 70 years and to apply for copyright a designer/owner must go to IP Australia and follow the application process.
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            For example, Game of Thrones (TV series) is copyrighted. The owners of Game of Thrones copyrighted their work, so no other company can recreate a similar TV series and take away some of Game of Thrones current fans.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details1_4.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 0.64,
    },
});