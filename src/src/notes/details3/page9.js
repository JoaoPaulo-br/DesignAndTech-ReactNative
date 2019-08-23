import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page9Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    SUSTAINABILITY{'\n'}
                    Related to the use of resources that are derived from renewable sources.{'\n'}
                    Ethics involved in use of resource and material: {'\n'}
                    - Use for future generations {'\n'}
                    - Environmental Impacts{'\n'}
                    - Costumer preference {'\n'}
                    Sustainable development:{'\n'}
                    Development that improves the total quality of the life-span.{'\n'}
                    Sustained for the present and future.
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 3}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            For example, a product that uses timber over steel for their design is considered more sustainable. However during the manufacturing process, sustainable development is equally as important.
                        </Text>
                    </View>
                    <View style={{flex: 2.5}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details3_9.png')}/>
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
        height: Dimensions.get('window').width * 0.3 * 0.53,
    },
});