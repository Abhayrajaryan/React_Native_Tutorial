import { Text as RNText, TextProps, useColorScheme } from 'react-native';
import React from 'react';

const AppText = (props: TextProps) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <RNText
      {...props}
      style={[
        {
          color: isDarkMode ? '#FFFFFF' : '#000000',
        },
        props.style,
      ]}
    />
  );
};

export default AppText;
