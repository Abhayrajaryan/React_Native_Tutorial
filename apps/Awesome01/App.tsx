import React, { useState } from 'react';

import { View, Text, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const [title, setTitle] = useState('Hello World');
  function changeTitle() {
    if (title === 'Hello World') {
      setTitle('Hello Universe');
    } else {
      setTitle('Hello World');
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>{title}</Text>
          <Button onPress={changeTitle} title="Change Title" color="#841584" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
