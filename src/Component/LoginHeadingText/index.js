import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const index = ({Name}) => {
  return (
    <View>
      <Text style={styles.headingText}>{Name}</Text>
    </View>
  );
};

export default index;
