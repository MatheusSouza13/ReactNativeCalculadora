import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import styles from './style'

import NumericButton from '../../components/NumericButton';
import Visor from '../../components/Visor'
import { FontAwesome5 } from '@expo/vector-icons';

export default function Main() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Visor/>
            
            <Button 
                containerStyle={styles.backspaceContainer}
                title={<FontAwesome5
                        name="backspace"
                        size={26}
                        color="white"
                      />}
                type="outlined"
            />
            <View style={styles.gridContainer}>
                <View style={styles.gridNumericColumn}>
                    <NumericButton num='1'/>
                    <NumericButton num='4'/>
                    <NumericButton num='7'/>
                    <NumericButton num='.'/>
                </View>
                <View style={styles.gridNumericColumn}>
                    <NumericButton num='2'/>
                    <NumericButton num='5'/>
                    <NumericButton num='8'/>
                    <NumericButton num='0'/>
                </View>
                <View style={styles.gridNumericColumn}>
                    <NumericButton num='3'/>
                    <NumericButton num='6'/>
                    <NumericButton num='9'/>
                    <NumericButton num='='/>
                </View>
                <View style={styles.gridOperationColumn}>
                    <NumericButton num='C'/>
                    <NumericButton num='/'/>
                    <NumericButton num='*'/>
                    <NumericButton num='-'/>
                    <NumericButton num='+'/>
                </View>
            </View>
        </SafeAreaView>
    )
}