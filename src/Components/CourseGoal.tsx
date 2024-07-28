import * as React from "react";
import { type ReactNode } from "react";

interface Props {
  id:number  
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

interface State {}

export default class CourseGoal extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <article>
        <div>
          <h1>My Object class</h1>
          <h2>{this.props.title}</h2>
          <h3>{this.props.children}</h3>
          <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
        </div>
      </article>
    );
  }
}
