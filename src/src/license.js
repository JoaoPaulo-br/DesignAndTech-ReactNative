/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

class LicenseScreen extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
    }

    goToBack = () => {
      this.props.navigation.goBack(null);
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.sectionTitle}>END USER LICENSE AGREEMENT(EULA)
                    </Text>
                </View>
                <ScrollView style={{flex: 1}}>
                  <Text style={styles.helpTitle}>
                    Last Updated: 25/07/19{'\n'}
                    Please read this End-User License Agreement carefully before using the Design and Technology Study Application.{'\n'}
                    By using the application, you are agreeing to be bound by the terms and conditions of this agreement.{'\n'}
                    If you do not agree to the terms of this agreement, do not use the application.{'\n'}
                    License.{'\n'}
                    KK productions grants you a revocable, non-exclusive, non-transferable, limited license to download install and use the application solely for your personal, non-commercial purposes strictly in accordance with the terms of this agreement.{'\n'}
                    Restrictions.{'\n'}
                    All rights remain with the owner and Microsoft (such as rights under intellectual property laws) not expressly granted in this agreement.{'\n'}
                    This license doesn't give right to:{'\n'}
                    (i) use/virtualise features of the software separately.{'\n'}
                    (ii) publish, copy, rent, lease or lend the software.{'\n'}
                    (iii) transfer the software{'\n'}
                    (iv) work around any technincal restricitions or limitations of software.{'\n'}
                    (v) reverse engineer, decompile or disassemble software.{'\n'}
                    Modifications to Application reserves the right to modify, suspend or discontinue, temporarily or permanently, the application or any service to which it connects, with or without notice and without liability to you.
                  </Text>
                </ScrollView>
                <TouchableOpacity onPress={this.goToBack} style={{width: 200, margin: 10}}>
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>Go Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  helpTitle: {
    margin: 10,
    fontSize: 16,
  }, 
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1
  },
  buttonText: {
    fontSize: 18,
    padding: 10,
    color: 'black'
  }
});

export default LicenseScreen;
