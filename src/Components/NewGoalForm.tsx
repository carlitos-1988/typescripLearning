import React, { createRef, RefObject, type FormEvent } from "react";

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}
interface State {}

export default class NewGoalForm extends React.Component<NewGoalProps, State> {
  private goalRef: RefObject<HTMLInputElement>;
  private summaryRef: RefObject<HTMLInputElement>;

  constructor(props: NewGoalProps) {
    super(props);
    this.state = {};

    this.goalRef = createRef();
    this.summaryRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    //will prevent the whole pae from loading
    event.preventDefault();
    const enteredGoal = this.goalRef.current?.value || "";
    const summary = this.summaryRef.current?.value || "";

    this.props.onAddGoal(enteredGoal, summary);

    // resets the current target input values
    event.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label htmlFor="goal">Your Goal</label>
          <input id="goal" type="text" ref={this.goalRef} />
        </p>
        <p>
          <label htmlFor="summary">Short Summary</label>
          <input id="summary" type="text" ref={this.summaryRef} />
        </p>
        <p>
          <button>Add Goal</button>
        </p>
      </form>
    );
  }
}
