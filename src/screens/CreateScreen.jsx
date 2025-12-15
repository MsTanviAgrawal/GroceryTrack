import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';

const CreateScreen = ({data,setData}) => {
  const [itemName, setItemName] = useState('');
  const [stockAmount, setStockAmount] = useState('');
  const [isEdit,setIsEdit]=useState(false);
  const [editItemId,setEditItemId]=useState(null);

  const addItemHandler=()=>{
     if (!itemName || !stockAmount) return;

    const newItem={
      id: Date.now().toString(),
      name: itemName,
      stock: Number(stockAmount)
,
      // unit: 'kg',
    }
    // setData([...data, newItem ])
    setData(prev => [...prev, newItem]);
    setItemName('');
    setStockAmount('');
    setIsEdit(false);
  }

 const deleteItemHandler=(id)=>{
    // setData(data.filter(item => item.id !== item.id) );
    setData(prev => prev.filter(item => item.id !== id));

  }

  const editItemHandler=(item)=>{
    setIsEdit(true);
    setItemName(item.name);
    setStockAmount(item.stock.toString());
    setEditItemId(item.id);
  }

   const updateItemHandler = () => {
    if (!itemName || !stockAmount) return;

    setData(prev =>
      prev.map(item =>
        item.id === editItemId
          ? { ...item, name: itemName, stock: Number(stockAmount) }
          : item
      )
    );

    setItemName('');
    setStockAmount('');
    setIsEdit(false);
    setEditItemId(null);
  };


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name..."
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setItemName(item)}
      />

      <TextInput
        placeholder="Enter a stock amount..."
        placeholderTextColor="#999"
        style={styles.input}
        value={stockAmount}
        onChangeText={item => setStockAmount(item)}
         keyboardType="numeric"
      />

      <Pressable style={styles.button} onPress={()=> isEdit ? updateItemHandler() : addItemHandler()}>
        <Text style={styles.btnText}>{isEdit ? 'EDIT ITEM IN STOCK' : 'ADD ITEM IN STOCK'} </Text>
      </Pressable>

      <View style={{ marginTop: 10,flex: 1}}>
        <Text style={styles.headingText}>All Items in the Stock</Text>
          
        <FlatList
          data={data}
          keyExtractor={item => item.id}
           contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F6BFFF' },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              

              <View style={{flexDirection:'row', gap:25, marginLeft: 'auto'}}>
                <Text style={styles.itemText}>{item.stock}</Text>
             
             <Pressable onPress={()=>editItemHandler(item)}>
               <Text style={styles.itemText}>Edit</Text>
             </Pressable>

              <Pressable onPress={() => deleteItemHandler(item.id)} >
                <Text style={styles.itemText}>Delete</Text>
              </Pressable>
              
              </View>
            </View>
            
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '4%',
    gap: 15,
  },
  input: {
    borderWidth: 1.5,
    borderColor: 'green',
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: 'black',
  },
  button: {
    backgroundColor: 'purple',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
   headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical:10,
  },
  itemContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderRadius: 7,
  },
  itemText: {
    fontSize: 15,
    fontWeight: '500',
  },

});
