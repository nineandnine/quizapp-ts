import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
const Button = () => {
  return (
    <RectButton style={[]}>
      <Text style={{ ...styles.label }}></Text>
    </RectButton>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    height: 43,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 14,
    paddingHorizontal: 13,
    borderRadius: 2,
    backgroundColor: ' #ffff',
  },
  label: {
    fontSize: 16,
    fontFamily: 'OpenSansRegular',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0000',
    textTransform: 'capitalize',
  },
})
