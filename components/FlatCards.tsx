import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    //flex:1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
    height:100,
    borderRadius: 4,
    margin:8,
    // borderColor:'#FFFFFF',
    // borderWidth:8, 
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: '#1e4f9e',
  },
  cardThree: {
    backgroundColor: '#188c41',
  },
});
