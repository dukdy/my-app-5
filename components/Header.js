import React from 'react'
import { StyleSheet, Text } from 'react-native'


export default function Header(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold'
  },
})
