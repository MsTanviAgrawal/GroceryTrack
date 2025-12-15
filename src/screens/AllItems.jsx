
import { StyleSheet, Text, View, FlatList } from 'react-native';

const AllItems = ({ data }) => {
  return (
    <View>

      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, {backgroundColor: item.stock<10 ? "#FFCCCC": "#D7F6BFFF"}]}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.stock}</Text>
          </View>
        )}

        contentContainerStyle={{gap:10}}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 14,
    fontWeight: '600',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
