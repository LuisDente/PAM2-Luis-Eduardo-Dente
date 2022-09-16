import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Texto, Imagem} from './style';

export default function App() {
  return (
    <Container>
      <Texto>
        Teste de Customização!
      </Texto>
      <Imagem source={{ uri: 'https://lumiere-a.akamaihd.net/v1/images/cocorico_fundo_e30bfd0d.jpeg?region=0,2,2560,1438' }} style={styles.logo} />
      <TouchableOpacity
        onPress={() => alert('I LOVE YOU !')}
        style={{ backgroundColor: 'papayawhip'}}>
        <Texto id='teste'>Siles...!</Texto>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 200,
    marginBottom: 20,
  },

});
