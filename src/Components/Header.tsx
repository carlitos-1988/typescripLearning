import React from "react";
import { type ReactNode } from "react";

interface ImageProp {
  src: string;
  alt: string;
}

interface Props {
  image: ImageProp;
  image2: ImageProp
  children: ReactNode;
}

interface State {}

export default class Header extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <>
        <header>
          <img {...this.props.image2}></img>  
          <img {...this.props.image}></img>
          {this.props.children}
        </header>
      </>
    );
  }
}
