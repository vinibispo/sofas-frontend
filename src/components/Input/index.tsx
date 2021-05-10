import React from 'react';
import {TextInput} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import {StyleSheet} from 'react-native';

interface InputProps extends Omit<TextInputProps, 'theme'> {}
export default function Input({
  label,
  value,
  onChangeText,
  onBlur,
  ...rest
}: InputProps) {
  return (
    <TextInput
      {...rest}
      style={styles.container}
      label={label}
      mode={'outlined'}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
