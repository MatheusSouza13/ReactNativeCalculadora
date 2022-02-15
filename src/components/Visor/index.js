import React, { useState, useContext } from 'react';
import { Input } from 'react-native-elements';

import AppContext from '../../context/AppContext'
import styles from './style'

export default () => {
    
    const context = useContext(AppContext)

    return(
        <Input
            inputStyle={styles.visor}
            inputContainerStyle={styles.inputContainer}
            caretHidden={false}
            onChangeText={(visor) => { context.setVisor(visor) }}
            value={context.visor}
            showSoftInputOnFocus={false}
            selectTextOnFocus={false}
        />
    )
}