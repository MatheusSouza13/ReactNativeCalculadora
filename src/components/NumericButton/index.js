import React, { useContext } from 'react';
import { Button } from 'react-native-elements';

import AppContext from '../../context/AppContext'
import styles from './style'

export default ({ num }) => {

    const context = useContext(AppContext)
    const visor = context.visor

    
    const addNum = () => {
        if(visor === '0'){
            context.setVisor(num)
        }
        else{
            context.setVisor(visor + num)
        }
    }

    const addOp = () => {
        const lastChar = "teste"
        console.warn(lastChar[lastChar.length()])
    }

    const pressed = () => {
        if (num != 'C' && num != '='){
            addNum()
            //Como remover o ultimo caractere
            //console.warn(visor.slice(0, -1))
        }
        else{
            if (num === 'C'){
                context.setVisor('0')
            }
            if (num === '=') {
                //Remove zeros a direita e limita a 8 casas decimais.
                var result = parseFloat(eval(visor).toFixed(8))
                
                //Valida divisão por zero
                if (result == 'Infinity') {
                    result = 'Divisão por zero'
                }
                context.setVisor(result.toString())
            }
        }
    }
    
    return (
        <Button 
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitle}
            title={num}
            type="outlined"
            onPress={pressed}
        />
    )
}