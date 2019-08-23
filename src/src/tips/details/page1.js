import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export class Page1Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    In Design and Technology extended response questions, it extremely important to talk about: {'\n'}
                    IMPACT IMPACT IMPACT{'\n'}
                    When writing the response remember cause and effect. What is the advantage/disadvantage and what is the result of it?
                    {'\n'}{'\n'}
                    Go to advantages:{'\n'}
                    Creation of job opportunity --> increased employment --> results in an increase of tax revenue --> government has increased budget to spend on benefiting the country i.e allows investment into areas such as infrastructure or further innovation
                    {'\n'}{'\n'}
                    Creation of job opportunity --> Increase in employment --> influx of income on an individual level --> allows more spending and financial stability --> increased standard of living
                    {'\n'}{'\n'}
                    Creation of luxury items, entertainment, technology --> increased standard of living --> more efficient lifestyle --> less stress on individuals
                    {'\n'}{'\n'}
                    Sustainable design practice --> innovative designs which are more environmentally friendly or may be recyclable raises awareness of contemporary issues such as global warming --> decrease in landfill --> reduction of carbon footprint --> reduction of personal guilt
                    {'\n'}{'\n'}
                    Go to disadvantages:{'\n'}
                    Loss of jobs (the opposite of creation of jobs){'\n'}
                    Often innovative designs create issues about being equal--> expensive, luxurious products that are not accessible to individuals of differing economical status --> poses ethical issues: is it fair?
                    {'\n'}{'\n'}
                    Creation of technology --> promotes anti-social behaviours --> increased time spent indoors --> generation/exponential increase of health issues such as social anxiety and obesity
                </Text>
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
});