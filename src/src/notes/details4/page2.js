import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page2Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            AVALIABLE AND EMERGING TECHNOLOGIES{'\n'}
                            A technological discovery or invention can provide the stimulus to initiate the innovation process. Market Pull and Technology Push.
                            {'\n'}An example of avaliable/emerging technology is 3D printing. Since 3D printing was introduced their have become multiple different applications of one technology. It is great example of using emerging technology to create new process.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details4_2.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 1.02,
    },
});