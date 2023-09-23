import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

const index = ({Name}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInPutView} placeholder={Name} />
    </View>
  );
};

export default index;
