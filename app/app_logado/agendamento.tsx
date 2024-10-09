import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { MedicosDatabase, useUsuariosDatabase, UsuariosDatabase } from '../database/useUsuariosDatabase';
import { useState } from 'react';

export default function App() {
    const [medicos, setmedicos] = useState<MedicosDatabase[]>([]);
  
    const funcUsuariosDatabase = useUsuariosDatabase()

  return (
    <View>
        <Text style={styles.textc}>Detalhes da consulta</Text>
    <Text style={styles.vs}>Você selecionou este especialista</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  imglogo: {
    marginTop: 0,
    marginLeft: 0,
  },
  textc: {
    color: "#339CFF",
    fontWeight: "bold",
  },
  vs: {
    color: "#0B3B60",
    fontWeight: "bold",
  },
  bemvindus: {
    alignSelf: 'flex-start',
    marginLeft: 0,
  },
  botaotxt: {
    color: "#FFF",
    fontWeight: "bold",
  },
  botaoca: {
    marginBottom: 3,
    fontSize: 13,
    textAlign: 'center',
    color: 'white',
    backgroundColor: "#0B3B60",
    padding: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    width: '100%',
    paddingVertical: 12,
  },
  sla: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vinda: {
    color: "#339CFF",
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 24,
    marginTop: 5,
    marginBottom: 32,
  },
  imgdr: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  retangulodrs: {
    width: 311,
    height: 148,
    backgroundColor: "#FFFFFF",
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 24,
    marginTop: 20,
  },
  textContainer: {
    flexDirection: 'column',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  item: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textoItem: {
    fontSize: 16,
    color: '#333',
  },
  inputespecialidade: {
    width: 280,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 16,
    marginTop: 26,
  },
  inputlocalizacao: {
    width: 280,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  retangulolegal: {
    width: 311,
    height: 208,
    backgroundColor: "#FFFFFF",
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  botao: {
    marginBottom: 16,
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: "#0B3B60",
    padding: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    width: '80%',
    height: 59,
  },
  depoimentos: {
    color: '#0B3B60',
    marginBottom: 48,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 32,
    textAlign: 'center',
  },
  linha: {
    height: 1,
    backgroundColor: "#CCC",
    width: "100%",
    marginVertical: 10,
  },
  depoimento: {
    color: "#333",
    fontSize: 16,
    textAlign: "justify",
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  autor: {
    color: "#6B6E71",
    fontSize: 20,
    fontWeight: 'bold',
  },
});
