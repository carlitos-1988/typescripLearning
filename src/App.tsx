import "./App.css";
import React, { Component } from "react";
import CourseGoalList from "./Components/CourseGoalList";
import Header from "./Components/Header";
import easy_name from "./assets/easy_name.jpg";
import banner from "./assets/notes2.jpg"
import NewGoal from "./Components/NewGoalForm";

export type CourseGoalType = {
  title: string; 
  description: string; 
  id: number; 
};

interface State {
  goals: Array<CourseGoalType>; 
}


class App extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      goals: [],
    };
    // Bind the handleAddGoal method to ensure 'this' refers to the class instance
    this.handleAddGoal = this.handleAddGoal.bind(this);
    this.handleDeleteGoal = this.handleDeleteGoal.bind(this);
  }

  // Method to handle adding a new goal
  handleAddGoal(goal:string, summary:string) {
    // Update the state with a new goal
    this.setState((prevState) => {
      const newGoal: CourseGoalType = {
        id: Math.random(), 
        title: goal,
        description: summary,
      };
      // Return a new state object with the new goal added to the goals array
      return { goals: [...prevState.goals, newGoal] };
    });
  }

  handleDeleteGoal(id:number){
    this.setState((prevState)=> ({
      goals: prevState.goals.filter(goal => goal.id !== id)
    }))
  }

  
  render() {
    return (
      <>
        {/* Header component with an image and children */}
        <Header image={{ src: easy_name, alt: "list of goals" }} image2={{src: banner, alt: "banner picture"}}>
        
        <h1>Your Course Goals</h1>
        </Header>

        <NewGoal onAddGoal={this.handleAddGoal}/>
        
        <CourseGoalList goals={this.state.goals} onDeleteGoal={this.handleDeleteGoal}/>
      </>
    );
  }
}

export default App;
