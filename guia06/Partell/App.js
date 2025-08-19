import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  Modal,
  Button,
  TouchableHighlight,
} from "react-native";
const App = () => {
  const [modalVisibleplaya, setModalVisibleplaya] = React.useState(false);
  return (
    <>
      <ScrollView style={{ flexDirection: "row" }}>
        <Image style={styles.banner} source={require("./src/img/bg.jpg")} />
      </ScrollView>

      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisibleplaya}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la Playa</Text>
              <Text>
                El Salvador cuenta con hermosas playas a nivel CentroAmerica
              </Text>

              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisibleplaya(!modalVisibleplaya);
                }}
              ></Button>
            </View>
          </View>
        </Modal>
      </ScrollView>

      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Que hacer en el Salvador</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleplaya(!modalVisibleplaya);
              }}
            >
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad1.jpg")}
              />
            </TouchableHighlight>
          </View>

          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/actividad2.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/actividad3.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/actividad4.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/actividad5.jpg")}
            />
          </View>
        </ScrollView>
        <Text style={styles.titulo}>Platillos Salvadoreños</Text>
        <View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/platillo1.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/platillo2.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./src/img/platillo3.jpg")}
            />
          </View>
        </View>

        <Text style={styles.titulo}>Rutas Turisticas</Text>

        <View style={styles.listado}>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require("./src/img/ruta1.jpg")}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require("./src/img/ruta2.jpg")}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require("./src/img/ruta3.jpg")}
            />
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require("./src/img/ruta4.jpg")}
            />
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: "49%",
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
export default App;
