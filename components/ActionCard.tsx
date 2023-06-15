// import React from 'react';
// import {StyleSheet, Text, View, Linking,Image} from 'react-native';

// export default function Action() {
//   function openWebsite(websiteLink: string) {
//     Linking.openURL(websiteLink);
//   }
//   return (
//     <View>
//       <Text style={styles.headingText}>Blog Card</Text>
//       <View style={[styles.card, styles.elevatedCard]}>
//         <View style={styles.headingContainor}>
//           <Text style={styles.headingTitle}></Text>
//         </View>
//         <Image
//         source={{uri:''}}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   headingText: {},
//   card: {},
//   elevatedCard: {},
//   headingContainor: {},
//   headingTitle: {},
// });

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';

function ActionCards(): JSX.Element {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              What,s new in Javascript 21 - ES12
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1613294983676/841x71jGr.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
            }}
            style={styles.imageCard}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              Just like every year, Javascript brings in new features. This year
              javascript is bringing 4 new features, which are almost in
              production rollout. I won't be wasting much more time and directly
              jump to code with easy to understand examples.
            </Text>
          </View>
          <View
            style={styles.horizontalRule}
          />
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
                )
              }>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://www.instagram.com/_s.w.a.y.a.n.t.a.n_/')
              }>
              <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
          </View>
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
  card: {
    width: 400,
    height: 480,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#F4BE2C',
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  cardContainer: {
    padding: 0,
  },
  headerContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  imageCard: {
    width: '100%',
    height: 300,
  },
  bodyContainer: {
    padding: 10,
  },
  horizontalRule:{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // height:50,
    // width:'90%',
    // //backgroundColor:'#000',
    // marginLeft:20,
    // alignContent:'center',
    // borderRadius: 6,
  },
  socialLinks: {
    fontSize: 16,
    color: '#23C4ED',
    backgroundColor: '#000',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal:20,
    paddingVertical:10,
  },
});

export default ActionCards;
