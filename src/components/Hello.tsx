import * as React from 'react';

export interface IProps{
    name: string;
    enthusiasmLevel?: number;
}

export interface IState{
    currentEnthusiasmLevel: number;
}

class Hello extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            currentEnthusiasmLevel: props.enthusiasmLevel || 1
        }
    }
    onDecrement = () => {this.updateEnthusisasm(this.state.currentEnthusiasmLevel - 1)}
    onIncrement = () => {this.updateEnthusisasm(this.state.currentEnthusiasmLevel + 1)}
    
    render(){
const {name, enthusiasmLevel} = this.props;
        if(enthusiasmLevel < 0 ){
            throw new Error('You could be a little more enthusiastic :D');
            
        }
        return(<div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasmLevel)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>);
    }
    updateEnthusisasm(currentEnthusiasmLevel: number){
        this.setState({currentEnthusiasmLevel});
    }
    
}

export function getExclamationMarks(noOfTimes:number){
    return noOfTimes > 0 ? Array(noOfTimes + 1).join('!'):'!';
}
export default Hello