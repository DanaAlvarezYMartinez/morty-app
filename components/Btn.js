import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const Btn = (props) => {

    const { onPress, text} = props


    return (
        <TouchableOpacity style = { styles.btnContainer}
        onPress =  {onPress} 
        >
            <Text style = { styles.btnText }>
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export default Btn

const styles = StyleSheet.create({
    btnContainer: {
      maxWidth:'50%',
      backgroundColor: '#a3f92f',
      paddingVertical:10,
      paddingHorizontal:20,
      borderRadius: 30,
      borderColor: '#2eaa35',
      borderWidth:1,
      marginVertical:10
    },
    btnText:{
        color:'#000',
        textAlign:'center',
    }
  });
  