import React from 'react';

import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

// const App = () => {} //another way of writing function
 
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
