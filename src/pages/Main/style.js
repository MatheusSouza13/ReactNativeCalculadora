import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202124',
        alignItems: 'flex-end',
    },
    gridContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    gridNumericColumn: {
        flex: 1,
        flexDirection: 'column',
        width: '25%',
        backgroundColor: '#636363',
    },
    gridOperationColumn: {
        flex: 1,
        flexDirection: 'column',
        width: '25%',
        backgroundColor: '#4a4a4a',
    },
    backspaceContainer: {
        width: '25%',
        marginTop: 40,
        borderRadius: 0,
    },    
})

export default style