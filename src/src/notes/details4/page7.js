import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page7Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, marginTop: 20}}>
                    <Text style={{...styles.contectText, color: this.props.textColor}}>
                        ROLES OF AGENCIES{'\n'}
                        Patents Office/IP Australia: Where applications for patents are filed and where intellectual property is created. The office assess whether an invention is new and if it meets the legislative requirements. It protects designers intellectual property which prevent copying of their work. 
                        {'\n'}Standards Australia: A company that promotes, publicises and develops standards. These standards help to improve efficiency and enhance quality of products.
                        {'\n'}Small Business Council: Represents small and medium enterprises. Aims to assist their development by initiating, participating in or overseeing projects that may benefit small business.
                    </Text>
                    <Image
                        style={styles.scaledImg}
                        source={require('../../../images/details4_7.png')}/>
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
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6 * 0.17,
    },
});