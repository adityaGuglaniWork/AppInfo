/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { useState } from 'react'; 
import AppInfoItem from './ios/AppInfoItem';
import DeviceInfo from 'react-native-device-info';
 

export default function App() {
  const [sn, setSN] = useState();

  DeviceInfo.getSerialNumber()
    .then((serialNumber) => {
      setSN(serialNumber);
    })
    .catch((e) => {
      setSN("Couldnt fetch");
    });

  return (
    <SafeAreaView>
      <Text style={styles.header}>App Info</Text>
      <View style={styles.container}>
        <AppInfoItem label="Application Name" value={DeviceInfo.getApplicationName()} />
        <AppInfoItem label="Version number" value={DeviceInfo.getVersion()} />
        <AppInfoItem label="Build Number" value={DeviceInfo.getBuildNumber()} />
        <AppInfoItem label="Device Type" value={DeviceInfo.getDeviceType()} />
        <AppInfoItem label="Serial Number" value={ sn } />
      </View>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
  header: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  container: {
    marginHorizontal: 20,
    marginTop: 30
  }
});
