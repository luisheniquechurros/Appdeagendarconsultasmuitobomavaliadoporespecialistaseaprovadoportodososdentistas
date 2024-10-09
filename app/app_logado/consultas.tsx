import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.mc}>Minhas consultas</Text>
      <Link href="/app_logado/consultas" style={styles.botaoc}>Agendar outra consulta</Link>
      <Text style={styles.pconsultas}>Próximas consultas</Text>
      <View style={styles.retangulodr}>
        <View style={styles.sla}>
          <Image style={styles.imgdr} source={require('../../src/ruivaruiva.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.info}>Angiologista</Text>
            <Text style={styles.info}>03/03/2023</Text>
          </View>
        </View>
        <Link href="/app_logado/consultas" style={styles.botaoca}>Cancelar</Link>
      </View>
      <View style={styles.linha}></View>
      <Text style={styles.pconsultas}>Consultas passadas</Text>
      <View style={styles.retangulodrs}>
        <View style={styles.sla}>
          <Image style={styles.imgdr} source={require('../../src/ruivaruiva.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Dra. Ana Lúcia</Text>
            <Text style={styles.info}>Angiologista</Text>
            <Text style={styles.info}>01/02/2022</Text>
          </View>
        </View>
        <Link href="/app_logado/consultas" style={styles.botaoca}>Cancelar</Link>
      </View>
      <View style={styles.retangulodrs}>
        <View style={styles.sla}>
          <Image style={styles.imgdr} source={require('../../src/paulo.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Dr. Paulo Matos</Text>
            <Text style={styles.info}>Otorrinolaringologista</Text>
            <Text style={styles.info}>09/08/2022</Text>
          </View>
        </View>
        <Link href="/app_logado/consultas" style={styles.botaoca}>Cancelar</Link>
      </View>
      <View style={styles.retangulodrs}>
        <View style={styles.sla}>
          <Image style={styles.imgdr} source={require('../../src/mastologista.png')} />
          <View style={styles.textContainer}>
            <Text style={styles.nome}>Dra. Mariana Luz</Text>
            <Text style={styles.info}>Mastologista</Text>
            <Text style={styles.info}>07/10/2022</Text>
          </View>
        </View>
        <Link href="/app_logado/consultas" style={styles.botaoca}>Cancelar</Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imglogo: {
    marginTop: 0,
    marginLeft: 20,
  },
  mc: {
    color: "#339CFF",
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 24,
    marginTop: 5,
  },
  botaoc: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: "#0B3B60",
    padding: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    width: '80%',
    height: '10%',
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
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  pconsultas: {
    color: "#339CFF",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left', 
    alignSelf: 'flex-start', 
    marginLeft: 24, 
    marginBottom: 24,
  },
  retangulodr: {
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
  },
  retangulodrs: {
    width: 311,
    height: 148,
    backgroundColor: "#C2E1FF",
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 24,
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
  linha: {
    height: 1,
    backgroundColor: "#CCC",
    width: "100%",
    marginVertical: 10,
  },
});
