import React from 'react';
import calculateBlock from './calculateBlock'

class LiftInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { command: '', result: '' };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        const allowedMethod = ['P', 'M', 'L'];
        let validMethd = true;
        this.state.command.split('').forEach(m => { if (!allowedMethod.includes(m.toUpperCase()) && validMethd) { alert('Robot only understand P, M, L command, please type in from these three command. Thank you ;)'); validMethd = false; } })
        if (validMethd) { this.setState({ result: 'The result :' + calculateBlock(this.state.command.toUpperCase()) }); }
        else {
            this.setState({ result: 'Please check the command above' });
        }

    }
    myChangeHandler = (event) => {
        // debugger;
        this.setState({ command: event.target.value });

    }
    // checkCommand = (e) => {
    //     console.log(e.key)

    //     if (!['P', 'M', 'L', 'p', 'm', 'l'].includes(e.key)) { alert('Robot only understand P, M, L command, please type in from these three command. Thank you ;)'); }
    // }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <p>Enter your command, and submit:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                // onKeyPress={this.checkCommand}
                />
                <input
                    type='submit'
                />
                <h4> {this.state.result}</h4>
            </form>
        );
    }
}


export default LiftInput;