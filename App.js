// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ErrorBoundary, Touchable } from 'react-native';
import React from 'react';
import MyCard from './components/newComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <Text style={styles.titleTxt}>
          Kagaz Patra
        </Text>
      </View>

      <View>
        <MyCard />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fad8b9',
  },
  navContainer: { backgroundColor: 'orange', borderBottomEndRadius: 16, borderBottomStartRadius: 16 },
  titleTxt: { fontSize: 21, padding: 12, letterSpacing: 0.7, fontFamily: 'sans-serif-condensed', fontWeight: '700', color: '#242323' },

  bodyContainer: { flex: 0, flexDirection: 'column', backgroundColor: '#fad8b9', margin: 4, alignItems: 'center', marginBottom: 60 },

  plusIcon: {
    width: 60, height: 60
  },
  touchablePlus: { position: 'absolute', bottom: 70, right: 28, backgroundColor: '#8bf5fc', borderRadius: 60, elevation: 10 }

});