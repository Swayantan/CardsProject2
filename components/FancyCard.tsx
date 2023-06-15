import React from 'react';

import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';

export default function FancyCard() {
  return (
    // style={{height:200,width:200,}} //inline style
    <View>
      <Text style={[styles.headingText]}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://www.pinkvilla.com/files/styles/large/public/eiffel-tower-best-place.jpg?itok=eBJlUzW1',
          }}
          //   accessibilityLabel="Eiffel Tower"
          //   alt="Eiffel Tower"
          //   blurRadius={10}
          //   fadeDuration={300}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={[{color: '#000000'}, styles.cardTitle]}>
            Eiffel Tower
          </Text>
          <Text style={[{color: '#000000'}, styles.cardLabel]}>
            Tokyo Japan
          </Text>
          <Text style={[{color: '#000000'}, styles.cardDescription]}>
            The Eiffel Tower is a wrought-iron lattice tower on the Champ de
            Mars in Paris, France.
          </Text>
          <Text style={[{color: '#000000'}, styles.cardFooter]}>
            906 ft tall
          </Text>
        </View>
      </View>
      <View style={[{height: 700}, styles.card, styles.elevatedCard]}>
        <Image
          source={{
            uri: 'https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Howrah_Bridge.jpg',
          }}
          //   accessibilityLabel="Eiffel Tower"
          //   alt="Eiffel Tower"
          //   blurRadius={10}
          //   fadeDuration={300}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={[styles.cardTitle]}>Howrah Bridge</Text>
          <Text style={[styles.cardLabel]}>Howrah,West Bengal,India</Text>
          <Text style={[styles.cardDescription]}>
            The Howrah Bridge is a balanced cantilever bridge over the Hooghly
            River in West Bengal. 
          </Text>
          <Text style={[styles.cardFooter]}>Total length 705 m</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 0,
    paddingVertical: 10,
    paddingHorizontal: 8,
  },

  card: {
    width: 400,
    height: 600,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },

  elevatedCard: {
    backgroundColor: '#FFFFFF',
    // color: '#000000',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    flexShrink: 20,
  },

  cardImage: {
    height: 450,
    marginBottom: 8,
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },
  cardBody: {
    margin: 8,
    flex: 1,
    felxGrow: 1, // describes how any space within a container should be distributed among its children along the main axis. After laying out its children, a container will distribute any remaining space according to the flex grow values specified by its children.
    flexShrink: 2,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    paddingBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    paddingBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    paddingTop: 6,
    paddingBottom: 12,
  },
  cardFooter: {
    color: '#000000',
    // paddingBottom: 4,
  },
});
