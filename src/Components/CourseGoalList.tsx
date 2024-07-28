import React, { type ReactNode } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoalType } from "../App.tsx";
import InfoBox from "./InfoBox.tsx";

interface Props {
  goals: Array<CourseGoalType>;
  onDeleteGoal: (id: number) => void;
}

export default class CourseGoalList extends React.Component<Props> {
  render() {
    if (this.props.goals.length === 0) {
      return (
        <InfoBox mode="hint" >
          You have no course goals yet. Start Adding Some
        </InfoBox>
      );
    }

    let warningBox: ReactNode;

    if (this.props.goals.length >= 4 && this.props.goals.length <=8) {
      warningBox = (
        <InfoBox mode="warning" severity="medium">
          Yo're collecting a lot of goals. Don't put too much on your plate
        </InfoBox>
      );
    }

    if (this.props.goals.length > 8 ) {
        warningBox = (
          <InfoBox mode="warning" severity="high">
            This is too much
          </InfoBox>
        );
      }

    return (
      <>
        {warningBox}
        <ul>
          {this.props.goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal
                id={goal.id}
                title={goal.title}
                onDelete={this.props.onDeleteGoal}
              >
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
