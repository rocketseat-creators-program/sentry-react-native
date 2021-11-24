import React from 'react';

import {TouchableOpacity, Text} from 'react-native';

import style from './style';

export default Button = () => {
  return (
    <TouchableOpacity style={style.button}>
      <Text style={style.buttonText}>COMPRAR INGRESSOS</Text>
    </TouchableOpacity>
  );
};
