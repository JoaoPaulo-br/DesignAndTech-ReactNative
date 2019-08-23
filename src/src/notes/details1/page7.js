import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page7Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    PLANT BREEDER'S RIGHT{'\n'}
                    Plant breeder's rights protect the commercial rights of new plant varieties. This enables a plant breeder to protect their new plant variety. The plant breeder's right lasts for 20 years, however they can last 25 years in cases of trees and vines. To apply for plant breeder's right a breeder must go to IP Australia where the follow a unique application process, which requires an initial application followed by growing trials and then a final application.
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            For example, a cotton plant that is insect and disease resistant. If a plant breeder applied/got PBR then other breeders/growers cannot use the variety without permission from the breeder himself.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details1_7.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 0.82,
    },
});