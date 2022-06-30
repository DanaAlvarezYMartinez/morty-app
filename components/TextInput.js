import React from 'react'
import {StyleSheet, TextInput} from 'react-native'

const Input = (props) => {

    const { placeholder } = props

    return (
        <TextInput
        style={styles.input}
        // onChangeText={onChangeText}
        placeholder= {placeholder}
        placeholderTextColor="#fff"
      />
    )

}

export default Input

const styles = StyleSheet.create({
    input: {
      width:250,
      height: 40,
      margin: 12,
      borderBottomWidth: 1,
      borderBottomColor:'#fff',
      padding: 10,
      color:'#fff',
    },
  });
