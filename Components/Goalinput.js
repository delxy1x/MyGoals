import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput({onAddGoal}){
    const[enteredGoalText, setEnteredGoalText]= useState('')
    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnteredGoalText(enteredText)

    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')

    }

    return(
        <View style={StyleSheet.inputContainer}>
            <TextInput
            style={StyleSheet.textInput}
            placeholder="your goal"
            onChangeText={handleInputGoal}
            value={enteredGoalText}
            />

            <Button
            title="Add Goal"
            color={'#A3FFd6'}
            onPress={addGoalHandler}
            />
        </View>
    )
}

export default GoalInput