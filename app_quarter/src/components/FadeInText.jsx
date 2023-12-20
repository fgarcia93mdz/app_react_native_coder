import React, { useEffect, useRef } from 'react';
import { Animated, Text } from 'react-native';

const FadeInAndScaleText = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }
      ),
      Animated.timing(
        scaleAnim,
        {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }
      )
    ]).start();
  }, [fadeAnim, scaleAnim]);

  return (
    <Animated.Text style={{ opacity: fadeAnim, fontSize: 35, transform: [{ scale: scaleAnim }] }}>
      ¡Hola, bienvenido!
    </Animated.Text>
  );
};

export default FadeInAndScaleText;