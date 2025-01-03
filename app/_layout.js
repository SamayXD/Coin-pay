import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../src/utils/constants'
const _layout = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'fade',
            contentStyle: { backgroundColor: 'black' }
          }}
        >
          <Stack.Screen name="registration/createAc" />
          <Stack.Screen name="registration/verifyPhone" />
          <Stack.Screen name="registration/index" />
          <Stack.Screen name="onboarding/index" />
          <Stack.Screen name="index" />
          <Stack.Screen name="home/index" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default _layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  }
})