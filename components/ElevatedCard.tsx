import React from 'react';

import {View, ScrollView, Text, SafeAreaView, StyleSheet} from 'react-native';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      {/* horizontal scrollView */}
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.darkText}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.darkText}>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.darkText}>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.darkText}>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.darkText}>And</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.darkText}>FInd</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.darkText}>😎</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  conatiner: {
    padding: 8,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    Color: '#000000',
  },
  cardElevated: {
    margin: 8,
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  darkText:{
    color: '#000000',
  },
});
