import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

const _layout = () => {
  return (
  <>
  <StatusBar barStyle="light-content" backgroundColor="white" />
 <Stack>

    <Stack.Screen name="index" options={{
        headerShown: false,
animation: 'fade'
    }} />
    <Stack.Screen name="home/index" options={{
        headerShown: false, animation:'fade'
    }} />

 </Stack></>
  )
}

export default _layout

const styles = StyleSheet.create({})