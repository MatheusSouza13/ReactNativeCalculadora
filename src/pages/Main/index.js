import React from 'react';
import { Text } from 'react-native';
import { Input, Button } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import styles from './style'
import { useState } from 'react';

export default function Main() {

    const [visor, setVisor] = useState('')

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Input 
                placeholder='Teste'
                inputStyle={styles.visor}
                onChangeText={(visor) => {setVisor(visor)}}
                value={visor}
                />
                {console.log(visor)}
        </SafeAreaView>
    )
}