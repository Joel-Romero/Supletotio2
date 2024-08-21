
import React from 'react';
import {useCallback, useRef} from 'react';
import {TextInput,Text,TouchableOpacity,View, Alert,} from 'react-native';
import { styles } from '../../Theme/theme';

export const Screen2 = () => {
  const inputRef = useRef<TextInput>(null);
  const editText = useCallback(() => {
    inputRef.current?.setNativeProps({text: 'Edited Text'});
  }, []);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <TouchableOpacity onPress={editText}>
        <Text
        onPress={() => Alert.alert(
            'Espera!!!',
            'Agrege un nombre'
            )}>Ingrese el nombre</Text>
      </TouchableOpacity>

      <TextInput style={styles.input} />
      <TouchableOpacity onPress={editText}>
        <Text
        onPress={() => Alert.alert(
            'Espera!!!',
            'Agrege un Correo electronico'
        )}
        >Ingrese un Correo Electronico</Text>
        
      </TouchableOpacity>

      <TextInput style={styles.input} />
      <TouchableOpacity onPress={editText}>
        <Text
        onPress={() => Alert.alert(
            'Espera!!!',
            'Agrege un Comentario'
        )}
        >Ingrese Un comentario</Text>
      </TouchableOpacity> 
      
    </View>
    
    
  );
};

console