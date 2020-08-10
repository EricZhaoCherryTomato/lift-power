import React from 'react';
import calculateBlock from './calculateBlock'

class LiftInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { command: '', result: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        this.setState({ result: calculateBlock(this.state.command) });
    }
    myChangeHandler = (event) => {
        this.setState({ command: event.target.value });
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <p>Enter your command, and submit:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                />
                <input
                    type='submit'
                />
                <h4> The result :{this.state.result}</h4>
            </form>
        );
    }
}


export default LiftInput;