import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  val1: string;
}

export const Create = (props: Props) => (
  <View>
    <Text>{props.val1}</Text>
  </View>
);
