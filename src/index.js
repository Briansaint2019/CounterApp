import React from 'react';
import ReactDOM from 'react-dom'

class CounterApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
       
    }

        handleIncrement(){
            this.setState({
                count: this.state.count + 1
            })
        }

        handleReset(){
           this.setState({count: 0});
        }

    render(){

    return(
            <div>
                <div>{this.state.count}</div> 
                
                <div>

                    <button onClick={() => this.handleIncrement()}>Count</button>
                    <button onClick= {() => this.handleReset()}>reset</button>
                </div> 
            </div>
    );
}

}

ReactDOM.render(
<CounterApp />,
document.querySelector('#root')
);