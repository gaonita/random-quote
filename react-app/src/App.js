import React from 'react';
import './App.css';


class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            visibility: false,
            options: 1,
            result : '',
            input:''
        };

        this.toggle = this.toggle.bind(this);
        this.add = this.add.bind(this);
        this.chooseOne = this.chooseOne.bind(this)
    }

    chooseOne(event){

    }


    toggle() {

        if (this.state.visibility) {
            this.setState({
                visibility: false
            })
        } else {
            this.setState({
                visibility: true
            })
        }
    };


    add(event){
        this.setState({
            options: this.state.options +1,
            input: event.target.value
        });
     };

    render() {
        const inputs = [];
        const values = [];
        for(let i = 0; i < this.state.options; i++){
            inputs.push(<input placeholder={"Enter option"} value={this.state.input} onChange={this.add} />);
            values.push(this.state.input)
        }
console.log(values);

        if (!this.state.visibility) {
            return (
                <>
                    <div className="title">
                        <h1>Choose between ... </h1>
                    </div>

                    <div className="inputSection">
                        <div className="inputs">
                            {inputs}
                        </div>
                        <button className="addOption" onClick={this.add}>Add option</button>

                    </div>

                    <button className="submit" onClick={this.toggle}>Randomize</button>
                </>
            )
        }else {
            return(
                <>
                    <div className={"title"}>
                        <h1>This is the one!</h1>
                    </div>
                    <div className="resultSection">Result</div>
                    <button className="submit">Go Back</button>
                </>
            )
        }
    }
    }

 export default App;
