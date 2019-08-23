import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export class Page2Screen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{...styles.contectText, color: this.props.textColor}}>
                    SIMIPLICITY IS KEY{'\n'}
                    Don't over-complicate your Major Design Project (MDP), take into consideration you have 4 terms to create a design situation, solution and evaluation. 
                    {'\n'}{'\n'}
                    SUSTAINABILITY IS IMPORTANT{'\n'}
                    Sustainability in the modern day is extremely important especially when designing and producing products. It is essential to keep in mind whilst creating a design solution to maximise the sustainability of the product.
                    {'\n'}{'\n'}
                    DON'T DELAY{'\n'} 
                    NEVER EVER DELAY do something. When you have the chance to work on your MDP or something needs to get done to further progress get it done. Following your action and time plan will greatly assist with this.
                    {'\n'}{'\n'}
                    PROJECT MANAGEMENT IS KEY{'\n'}
                    Manage your finances and time well is extremely important when creating MDP. Designer's use gantt charts and other methods to manage their time. Designer uses finance plan to manage the budget and the areas where finances will be used.
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