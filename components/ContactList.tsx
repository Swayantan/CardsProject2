import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Swayantan Maji',
      status: 'Best Coder u can find',
      imageUrl:
        'https://avatars.githubusercontent.com/u/93051496?s=400&u=77d52a0e7d88b406370b5a3604647f016f3119f2&v=4',
      gitLink: 'https://github.com/Swayantan',
      gitImg:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
      uid: 2,
      name: 'Sanchaita Maji',
      status: 'Doctor to be',
      imageUrl:
        'https://hips.hearstapps.com/clv.h-cdn.co/assets/17/26/1600x1040/gallery-1498838810-gettyimages-461493851.jpg?resize=1200:*',
      gitLink:
        'https://www.countryliving.com/life/g4569/full-moon-names-meaning/',
      gitImg:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
      uid: 3,
      name: 'Promit Dey',
      status: 'Final year B.tech, pro gamer',
      imageUrl: 'https://avatars.githubusercontent.com/u/78090861?v=4',
      gitLink: 'https://github.com/PromitDey',
      gitImg:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
      uid: 4,
      name: 'Archishman Sengupta',
      status: 'Recruiter, Influecer banda',
      imageUrl: 'https://avatars.githubusercontent.com/u/71402528?v=4',
      gitLink: 'https://github.com/ArchishmanSengupta',
      gitImg:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
      uid: 5,
      name: 'Abir Pal',
      status: 'Best Developer #targettech',
      imageUrl: 'https://avatars.githubusercontent.com/u/74393266?v=4',
      gitLink: 'https://github.com/Abirpal202049',
      gitImg:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
      uid: 6,
      name: 'Soumya Banerjee',
      status: 'Best Developer #targettech',
      imageUrl: 'https://avatars.githubusercontent.com/u/72242299?v=4',
      gitLink: 'https://github.com/soumya495',
      gitImg:
        'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
  ];
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl, gitLink, gitImg}) => (
          <View key={uid} style={styles.userCard}>
            <View style={styles.userInfo}>
              <Image source={{uri: imageUrl}} style={styles.userImage} />
              <View style={styles.userText}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => openWebsite(gitLink)}>
              <Image
                source={{
                  uri: gitImg,
                }}
                style={styles.socialLink}
              />
            </TouchableOpacity>
          </View>
        ))}
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
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'space-evenly',
    marginBottom: 5,
    backgroundColor: '#8D3DAF',
    borderRadius: 14,
    padding: 8,
    borderColor: '#4f2063',
    borderWidth: 2,
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    borderColor: '#000',
    borderWidth: 2,
  },
  userText: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  userStatus: {
    fontSize: 12,
  },
  socialLink: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    borderColor: '#000',
    borderWidth: 2,
  },
});
