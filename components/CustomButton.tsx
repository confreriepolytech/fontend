import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants/theme';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  icon?: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  width?: number | string;
  height?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({ 
  title, 
  onPress, 
  icon, 
  backgroundColor = COLORS.button, 
  textColor = '#fff',
  width = "87%",
  height = 60,
}) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor, width: typeof width === 'number' ? width : Number(width), height }]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.textContainer}>
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </View>
      {icon && <View style={styles.iconContainer}>{icon}</View>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 7,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontFamily: 'jost-semibold',
    textAlign: 'center',
  },
  iconContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomButton;
