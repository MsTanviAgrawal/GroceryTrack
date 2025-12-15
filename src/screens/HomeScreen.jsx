import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import AllItems from './AllItems';
import CreateScreen from './CreateScreen';


const HomeScreen = () => {
  const [view, setView] = useState(0);
  const[data,setData]=useState([
  { id: 1, name: 'wheat', stock: 50, unit: 'kg' },
  { id: 2, name: 'rice', stock: 20, unit: 'kg' },
  { id: 3, name: 'pulses', stock: 10, unit: 'kg' },
  { id: 4, name: 'biscuits', stock: 5, unit: 'kg' },
  { id: 5, name: 'shampoo', stock: 16, unit: 'kg' },
  { id: 6, name: 'toffee', stock: 8, unit: 'kg' },
  { id: 7, name: 'soap', stock: 20, unit: 'kg' },
  { id: 8, name: 'spices', stock: 10, unit: 'kg' },
  { id: 9, name: 'sugar', stock: 30, unit: 'kg' },
  { id: 10, name: 'salt', stock: 6, unit: 'kg' },
  
]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? { backgroundColor: 'blue' } : null,
          ]}
          onPress={() => setView(0)}
        >
          <Text
            style={[styles.btnText, view === 0 ? { color: 'white' } : null]}
          >
            All Items
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.button,
            view === 1 ? { backgroundColor: 'red' } : null,
          ]}
          onPress={() => setView(1)}
        >
          <Text
            style={[styles.btnText, view === 1 ? { color: 'white' } : null]}
          >
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 2 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setView(2)}
        >
          <Text
            style={[styles.btnText, view === 2 ? { color: 'white' } : null]}
          >
            Create
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data={data.filter((item)=> item.stock < 10)} />}
      {view === 2 && <CreateScreen data={data} setData={setData} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"#808080",
    width: '100%',
    height: '100%',
    padding: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 20,
  },
  button: {
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'purple',
  },
  btnText: {
    color:"purple",
    fontSize: 14,
    fontWeight:'bold',
  },
});
