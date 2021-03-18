import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import styles from './src/styles';


const Counter = () => {
    return (
        <View style= {styles.container}>
          <Button  title="Add" style={styles.button} />  
          <Text>Counter</Text>
          <Button title="Subtract"/>
        </View>
    );
}
export default Counter;

/**const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        //colors: "#5c502c",
        //backgroundColor: "#ffff",
    }
});**/


