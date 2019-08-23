import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export class Page3Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    LOOK AT THE CRITERIA{'\n'}
                    I made this mistake, in almost all my assessment tasks. I only considered the question not the criteria. Believe me it is extremely important to consider the criteria. Believe or not the teacher has designed the criteria to be beneficial for you whilst studying for your exams and the questions you will be asked.
                    {'\n'}{'\n'}
                    THINK EMERGING TECHNOLOGIES, THINK IMPACT ENVIRONMENTALLY AND SOCIALLY{'\n'}
                    Based on your criteria this could be a necessity or maybe not. But in most exams, short answer or ext.responses, they will ask for an example of emerging technology. A perfect example of this is 3D printing and its recent application to construction. This also applies to environmental impacts and social impacts.
                    {'\n'}{'\n'}
                    LOOK AT THE NOTES SECTION{'\n'}
                    In the notes section there are four possible examples you could use for your case-study. They each have potential answers to areas you will asked about in your assessment.
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
        fontSize: 18,
    },
});