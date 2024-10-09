import { Link, router } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useUsuariosDatabase, UsuariosDatabase } from './database/useUsuariosDatabase';
import { useEffect, useState } from 'react'


export default function App() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const funcUsuariosDatabase = useUsuariosDatabase()

    async function login() {
        try {
          const resultado = await funcUsuariosDatabase.login(email, senha);

          if (resultado) {
         
            router.push("/app_logado")
          }
          else {
            Alert.alert("Erro de acesso", "Verifique o usuário e senha digitado!")
          }
        } catch (error) {
          Alert.alert("Erro BD", error.message);
        }
      }

      async function  listarTudo() {
        try {
          const resultado = await funcUsuariosDatabase.listar();
          console.log(resultado);
        }catch(error)
        {
          Alert.alert("Erro", error.message);
       }
        
      }

      useEffect(() => {
        listarTudo()
      },[])

  
  return (
    <View style={styles.container}>
      <Image style={styles.imglogo} source={require('../src/logo.png')} />
      <Text style={styles.facalogin}>Faça login em sua conta</Text>
      <Text style={styles.campo}>Email</Text>
      <TextInput style={styles.inputemail} placeholder="Insira seu endereço de email" onChangeText={text => setEmail(text)} value={email}  placeholderTextColor="#A9A9A9"/>
      <Text style={styles.campo}>Senha</Text>
      <TextInput style={styles.inputsenha} placeholder="Insira sua senha" onChangeText={text => setSenha(text)} value={senha}  placeholderTextColor="#A9A9A9"/>
      <Text style={styles.campo}>Senha</Text>
      <TouchableOpacity style={styles.botao} onPress={login}>
        <Text style={styles.botaotexto}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.esqueceuasenha}>Esqueceu a senha?</Text>

      <View style={styles.linha}>
        <Text style={styles.cadastre}>Ainda não tem conta? </Text>
        <Link href="/cadastro1" style={styles.cadastrar}>Faça seu cadastro!</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imglogo: {
    marginBottom: 72,
  },
  botaotexto: {
    color: "#FFF"
  },
  facalogin: {
    color: '#6B6E71',
    marginBottom: 48,
    fontSize: 24,  
    fontWeight: 'bold',
  },
  campo: {
    color: '#0B3B60',
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginBottom: 5,
    fontSize: 16,
  },
  inputemail: {
    width: 311,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 24,
  },
  inputsenha: {
    width: 311,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 24,
  },
  botao: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor:"#0B3B60",
    padding: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    width: '80%',
    height: '7%',
  },
  esqueceuasenha: {
    fontSize: 16,
    color: '#0B3B60',
    textDecorationLine: 'underline',
    marginBottom:40,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  cadastre: {
    color: "#6B6E71",
    fontSize: 16,
  },
  cadastrar: {
    color: "#339CFF",
    fontSize: 16,
  }
});
