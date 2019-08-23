import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page6Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    REGISTERED DESIGN{'\n'}
                    Protects designs which have an industrial/commercial use. Design refers to the features of shape, configuration, pattern or ornamentation which gives a product a unique appearance and must be: NEW and DISTINCTIVE. Designs are registered at IP Australia, where the designer must follow their application process and provide necessary evidence to complete, such as drawings of the design. Registered designs last for 5 years.
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            For example, looks and shape/style of Iphone X is new and distinctive. Apple registered all its phone designs to USPTO (America's IP Australia equivalent), so no other designer/developer can sell/design phones similar to this phone.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details1_6.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 0.65,
    },
});