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

          <Stack.Screen name="account-setup" />
          <Stack.Screen name="account-setup/AddressPage" />
          <Stack.Screen name="account-setup/PersonalInfo" />
          <Stack.Screen name="account-setup/CountryPick" />

          <Stack.Screen name="account-verification" />
          <Stack.Screen name="account-verification/pin-setup" />

          <Stack.Screen name="onboarding/index" />


          <Stack.Screen name="index" />
          
          
          <Stack.Screen name="home" />
          {/* <Stack.Screen name="home/main-home" />
          <Stack.Screen name="home/chat" />
          <Stack.Screen name="home/scan" />
          <Stack.Screen name="home/profile" />
          <Stack.Screen name="home/stats" /> */}
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