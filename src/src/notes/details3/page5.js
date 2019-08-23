import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page5Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    FINANCE{'\n'}
                    Finance: Overall cost involved in designing, manufacturing and marketing product. The cost is estimated through research and communicated through finance plan.
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            For example, finance of a product isn't necessary relative to the size. A small shed designed by a house owner in comparison NIKE shoes, may cost more in materials however the shoes will have larger finances.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details3_5.png')}/>
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
        width: Dimensions.get('window').width * 0.3 ,
        height: Dimensions.get('window').width * 0.3 * 0.73,
    },
});