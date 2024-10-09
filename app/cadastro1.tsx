import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import Checkbox from 'expo-checkbox';
import { useUsuariosDatabase, UsuariosDatabase } from './database/useUsuariosDatabase';

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [telefone, setTelefone] = useState("");
  const [planos, setPlanos] = useState(" ");
  const [isCheckedSulamerica, setCheckedSulamerica] = useState(false);
  const [isCheckedUnimed, setCheckedUnimed] = useState(false);
  const [isCheckedBradesco, setCheckedBradesco] = useState(false);
  const [isCheckedAmil, setCheckedAmil] = useState(false);
  const [isCheckedBiosaude, setCheckedBiosaude] = useState(false);
  const [isCheckedBiovida, setCheckedBiovida] = useState(false);
  const [isCheckedOutros, setCheckedOutros] = useState(false);
  const [isCheckedSemPlano, setCheckedSemPlano] = useState(false);
  const [etapa, setEtapa] = useState(1);
  const controleUsuario = useUsuariosDatabase();

  const router = useRouter();


  const avancar = () => {
    if (etapa === 1) {
      if (!nome || !email || !senha || !confirmarSenha) {
        Alert.alert("Erro", "Todos os campos da primeira etapa devem ser preenchidos!");
        return;
      }
      if (senha !== confirmarSenha) {
        Alert.alert("Erro", "As senhas não coincidem!");
        return;
      }
    }


    if (etapa < 3) {
      setEtapa(etapa + 1);
    }
    else {
      handleCadastrar();
    }
  };

  const voltar = () => {
    if (etapa > 1) {
      setEtapa(etapa - 1);
    }
  };

  const handleCadastrar = async () => {
    let planosSelecionados = [];
    if (isCheckedSulamerica) planosSelecionados.push("Sulamérica");
    if (isCheckedUnimed) planosSelecionados.push("Unimed");
    if (isCheckedBradesco) planosSelecionados.push("Bradesco");
    if (isCheckedAmil) planosSelecionados.push("Amil");
    if (isCheckedBiosaude) planosSelecionados.push("Biosaúde");
    if (isCheckedBiovida) planosSelecionados.push("Biovida");
    if (isCheckedOutros) planosSelecionados.push("Outros");
    if (isCheckedSemPlano) planosSelecionados.push("Não tenho plano");
    
    console.log("NOVO USUÀRIO:",
      "Nome:", nome,
      "Email:", email,
      "Senha:", senha,
      "CEP:", cep,
      "Endereço:", endereco,
      "Número:", numero,
      "Complemento:", complemento,
      "Telefone:", telefone,
      "Planos:", planos
    );

    try {
      await controleUsuario.create(email, senha,nome, cep, endereco, numero, complemento, telefone, planos);  
      Alert.alert("Cadastro Realizado!", "Seu cadastro foi realizado com sucesso!!");
      router.push('/')
    } catch (error) {
      Alert.alert("Erro", "Ocorreu um erro ao cadastrar o usuário.");
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <Image style={styles.imglogo} source={require('../src/logo.png')} />
      <Text style={styles.pedirdados}>Insira alguns dados</Text>
      <Text style={styles.pedirdadosb}>básicos</Text>

      {etapa === 1 && (
        <>
          <Text style={styles.campo}>Nome</Text>
          <TextInput
            style={styles.inputnome}
            placeholder="Digite seu nome completo"
            placeholderTextColor="#A9A9A9"
            value={nome}
            onChangeText={setNome}
          />
          <Text style={styles.campo}>Email</Text>
          <TextInput
            style={styles.inputemail}
            placeholder="Insira seu endereço de email"
            placeholderTextColor="#A9A9A9"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.campo}>Crie uma Senha</Text>
          <TextInput
            style={styles.inputsenha}
            placeholder="Insira sua senha"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />
          <Text style={styles.campo}>Repita a senha</Text>
          <TextInput
            style={styles.inputsenha}
            placeholder="Insira sua senha"
            placeholderTextColor="#A9A9A9"
            secureTextEntry={true}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          <TouchableOpacity onPress={avancar} style={styles.botao}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Avançar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/')} style={[styles.botao, { backgroundColor: '#cccccc' }]}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Voltar</Text>
          </TouchableOpacity>

        </>
      )}

      {etapa === 2 && (
        <>
          <Text style={styles.pedirdados}>Agora, mais alguns dados</Text>
          <Text style={styles.pedirdadosv}>sobre você</Text>
          <Text style={styles.campo}>CEP</Text>
          <TextInput
           style={styles.inputcep} 
           placeholder="Digite seu CEP" 
           placeholderTextColor="#A9A9A9"
           value={cep} onChangeText={setCep} />
          <Text style={styles.campo}>Endereço</Text>
          <TextInput 
          style={styles.inputendereco}
          placeholder="Insira seu endereço" 
          placeholderTextColor="#A9A9A9"
          value={endereco}
          onChangeText={setEndereco} />
          <Text style={styles.campo}>Número</Text>
          <TextInput
           style={styles.inputnumero} 
           placeholder="Insira seu número" 
           placeholderTextColor="#A9A9A9"
           value={numero} 
           onChangeText={setNumero}/>
          <Text style={styles.campo}>Complemento</Text>
          <TextInput 
          style={styles.inputcomplemento} 
          placeholder="Insira sua complemento" 
          placeholderTextColor="#A9A9A9"
          value={complemento}
          onChangeText={setComplemento} />

          <TouchableOpacity onPress={() => setEtapa(3)} style={styles.botao}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Avançar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEtapa(1)} style={[styles.botao, { backgroundColor: '#cccccc' }]}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Voltar</Text>
          </TouchableOpacity>

        </>
      )}

      {etapa === 3 && (
        <>
          <Text style={styles.finalizar}>Pra finalizar, qual seu</Text>
          <Text style={styles.finalizando}>plano de saúde?</Text>
          <Text style={styles.campo}>Selecione os planos:</Text>

          <View style={styles.linha}>
            <Checkbox style={styles.checkbox} value={isCheckedSulamerica} onValueChange={setCheckedSulamerica} color={isCheckedSulamerica ? '#0B3B60' : undefined} />
            <Text style={styles.planos}>Sulamérica</Text>
          </View>

          <View style={styles.linha}>
            <Checkbox style={styles.checkbox} value={isCheckedUnimed} onValueChange={setCheckedUnimed} color={isCheckedUnimed ? '#0B3B60' : undefined} />
            <Text style={styles.planos}>Unimed</Text>
          </View>

          <View style={styles.linha}>
            <Checkbox style={styles.checkbox} value={isCheckedBradesco} onValueChange={setCheckedBradesco} color={isCheckedBradesco ? '#0B3B60' : undefined} />
            <Text style={styles.planos}>Bradesco</Text>
          </View>

          <View style={styles.linha}>
            <Checkbox style={styles.checkbox} value={isCheckedAmil} onValueChange={setCheckedAmil} color={isCheckedAmil ? '#0B3B60' : undefined} />
            <Text style={styles.planos}>Amil</Text>
          </View>

          <View style={styles.linha}>
            <Checkbox style={styles.checkbox} value={isCheckedBiosaude} onValueChange={setCheckedBiosaude} color={isCheckedBiosaude ? '#0B3B60' : undefined} />
            <Text style={styles.planos}>Biosaúde</Text>
          </View>

          <View style={styles.linha}>
            <Checkbox style={styles.checkbox} value={isCheckedBiovida} onValueChange={setCheckedBiovida} color={isCheckedBiovida ? '#0B3B60' : undefined} />
            <Text style={styles.planos}>Biovida</Text>
          </View>

          <View style={styles.linha}>
            <Checkbox style={styles.checkbox} value={isCheckedOutros} onValueChange={setCheckedOutros} color={isCheckedOutros ? '#0B3B60' : undefined} />
            <Text style={styles.planos}>Outros</Text>
          </View>

          <View style={styles.linha}>
            <Checkbox style={styles.checkbox} value={isCheckedSemPlano} onValueChange={setCheckedSemPlano} color={isCheckedSemPlano ? '#0B3B60' : undefined} />
            <Text style={styles.planos}>Não tenho plano</Text>
          </View>

          <TouchableOpacity onPress={() => handleCadastrar()} style={styles.botao}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setEtapa(2)} style={[styles.botao, { backgroundColor: '#cccccc' }]}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Voltar</Text>
          </TouchableOpacity>
        </>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imglogo: {
    marginBottom: 72,
  },
  pedirdadosv: {
    color: '#6B6E71',
    marginBottom: 48,
    fontSize: 24,
    fontWeight: 'bold',
  },
  finalizar: {
    color: '#6B6E71',
    fontSize: 24,
    fontWeight: 'bold',
  },
  finalizando: {
    color: '#6B6E71',
    marginBottom: 48,
    fontSize: 24,
    fontWeight: 'bold',
  },
  checkbox: {
    marginRight: 10,
  },
  planos: {
    fontSize: 16,
    color: '#0B3B60',
    minWidth: 300,
  },
  inputcep: {
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
  inputendereco: {
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
  inputnumero: {
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

  inputcomplemento: {
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

  pedirdados: {
    color: '#6B6E71',
    fontSize: 24,
    fontWeight: 'bold',
  },
  pedirdadosb: {
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
  inputnome: {
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
    backgroundColor: "#0B3B60",
    paddingVertical: 15,
    borderRadius: 10,
    width: 312,
    height: 48,
  },

  botaotexto: {
    color: '#FFF',
    textAlign: 'center',
  },

  esqueceuasenha: {
    fontSize: 16,
    color: '#0B3B60',
    textDecorationLine: 'underline',
    marginBottom: 40,
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
  },


});
