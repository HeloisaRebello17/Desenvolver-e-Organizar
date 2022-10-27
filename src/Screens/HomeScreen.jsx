import { Button, Text, View } from "react-native"
import { Styles } from "../lib/styles";


export const HomeScreen = ({navigation}) => {
    return (
        <View style= {Styles.container}>
           <Text>Oi eu sou a Home Screen</Text>
           <Button
        title="Ir para Sobre"
        //Realiza a ação de enviar para tela Sobre
        onPress={() => navigation.navigate("Sobre")}
      />
        </View>
    );
};