import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'

export class Page3Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 20}}>
                    <View style={{flex: 2}}>
                        <Text style={{...styles.contectText, color: this.props.textColor}}>
                            How is it innovative?{'\n'}
                            It is innovative as it uses an already existing idea of solar cells and improves efficiency by implementing a new four band structure that functions by splitting incoming sunlight into four bands via a prism.
                            Intellectual property
                            {'\n'}It uses a patent to protect the four-junction device idea/ structure. It uses design registration to protect the visual appearance of their design and copyright to protect their website and all written/ graphic material.
                            {'\n'}Agencies that affect innovation: {'\n'}
                            IP Australia who protect the process/ device to ensure that no other company can use the same innovative design. Workcover Australia ensures that all WHS requirements are met in production and manufacturing if not Workcover regulations could result in big fines and potential court action
                            {'\n'}Impact of the Innovation:{'\n'}
                            Society:{'\n'}
                            Positive impacts:{'\n'}
                            Creates jobs in regions where development occurs{'\n'}
                            Viable and cost-competitive energy to fossil fuel sources{'\n'}
                            New cells cover less surface area and therefore are also cheaper{'\n'}
                            Negative impacts:{'\n'}
                            Harder to maintain and initially more expensive to install than the standard single-junction solar cells
                            {'\n'}Creates a visual impact{'\n'}
                            Possible disturbance of cultural landscapes{'\n'}
                            Environment: {'\n'}
                            Positive Impacts:{'\n'}
                            Solar facilities have low air emissions of air pollutants; provides a cleaner alternative of producing electricity{'\n'}
                            Minimises contribution to global warming by comparison to fossil fuel/ current energy extraction processes
                            {'\n'}Negative Impacts:{'\n'}
                            Requires large areas for solar collections; land occupation, land degradation and habitat loss; interference with rainfall and drainage
                            {'\n'}Construction of solar facilities requires clearing and grading resulting in soil compaction, alteration of drainage channels and increased erosion
                            {'\n'}Consumes water for cooling; demand in water resource; contamination of ground water/ ground surface due to chemical spills from facilities
                        </Text>
                    </View>
                    <View style={{flex: 1.2}}>
                        <Image
                            style={styles.scaledImg}
                            source={require('../../../images/details2_3.png')}/>
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
        fontSize: 12,
    },
    scaledImg: {
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25 * 1.66,
    },
});