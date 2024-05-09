import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/Goalinput';

export default function App() {
  const [goals, setGoals] = useState([])


  function handleAddGoal(enteredGoalText) {
    // console.log(enteredGoalText)
    // console.log('Hello You')
    setGoals(() => [...goals, {text: enteredGoalText, key: Math.random().toString()}])
    console.log('goals', goals)
    console.log('handleAddGoal')
  }

  function handleDeleteGoal(){
    console.log('DELETE')
    const deleteGoal = goals.filter((goal) => {return goal.key !== id} )
    setGoals(deleteGoal)
  }

  
  return (
    <View style={styles.container}>
      {/* <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder='Your Goal!'
          onChangeText={handleInputGoal}
        />
        <Button 
          title="Add Goal" 
          color={'#A3FFD6'}
          onPress={handleAddGoal}
        />
      </View> */}
      <GoalInput
        onAddGoal={handleAddGoal}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={ (itemData) => {
            return(
             
              <GoalItem 
                itemData={itemData}
                onDeleteItem={handleDeleteGoal} 
              />
            )
          }}
          keyExtractor={(item) => {
            return item.id
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  goalsContainer: {
    flex: 5
  },
});