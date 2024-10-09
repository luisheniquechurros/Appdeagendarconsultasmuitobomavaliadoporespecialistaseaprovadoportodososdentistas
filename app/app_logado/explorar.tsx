import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.retangulolegal}>
        <TextInput style={styles.inputespecialidade} placeholder="Digite a especialidade" placeholderTextColor="#A9A9A9" />
        <TextInput style={styles.inputlocalizacao} placeholder="Digite sua localização" placeholderTextColor="#A9A9A9" />
        <Link href="/app_logado/" style={styles.botao}>Buscar</Link>
      </View>
      <Text style={styles.rb}>Resultado da busca</Text>
      <View style={styles.retangulodrs}>
        <View style={styles.sla}>
          <Image style={styles.imgdr} source={require('../../src/ruivaruiva.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.info}>Angiologista</Text>
          </View>
        </View>
        <Link href="/app_logado/consultas" style={styles.botaoca}>Cancelar</Link>
      </View>
      <View style={styles.retangulodrs}>
        <View style={styles.sla}>
          <Image style={styles.imgdr} source={require('../../src/ruivaruiva.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.info}>Angiologista</Text>
          </View>
        </View>
        <Link href="/app_logado/consultas" style={styles.botaoca}>Cancelar</Link>
      </View>
      <View style={styles.retangulodrs}>
        <View style={styles.sla}>
          <Image style={styles.imgdr} source={require('../../src/ruivaruiva.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.info}>Angiologista</Text>
          </View>
        </View>
        <Link href="/app_logado/consultas" style={styles.botaoca}>Cancelar</Link>
      </View>
      <View style={styles.retangulodrs}>
        <View style={styles.sla}>
          <Image style={styles.imgdr} source={require('../../src/ruivaruiva.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.info}>Angiologista</Text>
          </View>
        </View>
        <Link href="/app_logado/consultas" style={styles.botaoca}>Cancelar</Link>
      </View>
      <View style={styles.retangulodrs}>
        <View style={styles.sla}>
          <Image style={styles.imgdr} source={require('../../src/ruivaruiva.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.info}>Angiologista</Text>
          </View>
        </View>
        <Link href="/app_logado/consultas" style={styles.botaoca}>Cancelar</Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  rb: {
    color: "#339CFF",
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 24,
    marginTop: 25,
    marginBottom: 24,
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
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  sla: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgdr: {
    width: 60,
    height: 60,
    marginRight: 10,
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
  retangulodrs: {
    width: 311,
    height: 148,
    backgroundColor: "#FFF",
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 24,
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
});
