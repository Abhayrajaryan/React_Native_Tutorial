declare module 'react-native-vector-icons/MaterialCommunityIcons' {
  import type React from 'react';
  import type { ColorValue, TextProps } from 'react-native';

  type MaterialCommunityIconProps = TextProps & {
    name: string;
    size?: number;
    color?: ColorValue;
  };

  const MaterialCommunityIcons: React.ComponentType<MaterialCommunityIconProps>;
  export default MaterialCommunityIcons;
}
