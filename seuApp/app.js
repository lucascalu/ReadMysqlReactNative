import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://192.168.0.103:3000/dados'); // trocar por ip correto
        setDados(response.data);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <View>
      <Text>Dados do Banco de Dados:</Text>
      {dados.map((item) => (
        <Text key={item.id}>{item.nome}</Text>
      ))}
    </View>
  );
}
