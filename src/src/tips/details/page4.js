import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Linking} from 'react-native'

export class Page4Screen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{ Linking.openURL('https://www.youtube.com/channel/UCxyQKi7ipjA3Cz-VQUYanNQ')}}>
                    <Text style={{...styles.contectText, color: this.props.textColor}}>
                        producttank - youtube channel has an amazing series where he shows evolution of designs and advice related to sketching and presentations.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ Linking.openURL('https://www.youtube.com/watch?v=XIAzRPyaNy8')}}>
                    <Text style={{...styles.contectText, color: this.props.textColor}}>
                        Factors Affecting Design - Design and Technology NSW syllabus (video){'\n'}
                        A simple video showing all factors that affect design and visual example of its effect.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ Linking.openURL('https://educationstandards.nsw.edu.au/wps/portal/nesa/11-12/stage-6-learning-areas/technologies/design-And-technology-syllabus/project-advice')}}>
                    <Text style={{...styles.contectText, color: this.props.textColor}}>
                        Design and Technology project advice (NESA){'\n'}
                        Important site, which revises all requirements and specific advice and improvements that can be made to project.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ Linking.openURL('https://arc.nesa.nsw.edu.au/standards-packs/SP02_15080/')}}>
                    <Text style={{...styles.contectText, color: this.props.textColor}}>
                        Design and Technology Sample Papers{'\n'}
                        These are extremely important, to both practise answering questions and essays etc. But also to simulate pressure that students face during the exam.
                    </Text>
                </TouchableOpacity>
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
        marginTop: 10,
        marginBottom: 10,
    },
});