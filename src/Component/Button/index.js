import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const index = ({Name}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>{Name}</Text>
    </View>
  );
};

export default index;
