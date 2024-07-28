import React, { type ReactNode } from "react";


interface HintBoxProps {
    mode: 'hint'; 
    children: ReactNode; 
}


interface WarningBoxProps {
    mode: 'warning'; 
    severity: 'low' | 'medium' | 'high'; 
    children: ReactNode; 
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

interface State{}

export default class InfoBox extends React.Component< InfoBoxProps, State>{
    public constructor(props:InfoBoxProps){
        super(props);
        this.state ={};
}

public render(){
    if(this.props.mode === 'hint'){
        return(
            <aside className="infobox infobox-hint">
                <p>{this.props.children}</p>
            </aside>
        );
    }
    
    return(
        <aside className={`infobox infobox-warning warning--${this.props.severity}`}>
            <h2>Warning</h2>
            <p>{this.props.children}</p>
        </aside>
    )
}

}