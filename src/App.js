import React from 'react';
import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: false,
            options: 1,
            result: '',
            input: '',
            values: {}
        };

        this.add = this.add.bind(this);
        this.save = this.save.bind(this);
        this.reset = this.reset.bind(this);
    }


    toggle = () => {

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


    add() {
        this.setState({
            options: this.state.options + 1,
        });
    };

    save(event) {
        const id = event.target.getAttribute("data-id");
        this.state.values[id] = event.target.value;

        this.setState({
            values: this.state.values
        })
    }

    reset() {
        this.setState({
            visibility: false,
            options: 1,
            result: '',
            input: '',
            values: {}
        })
    }


    render() {
        const winner = this.state.values[Math.floor(Math.random() * Object.keys(this.state.values).length)];
        const inputs = [];
        for (let i = 0; i < this.state.options; i++) {
            inputs.push(<input data-id={i} key={i} placeholder={"Enter option"} onChange={this.save}/>);
        }

        if (!this.state.visibility) {
            return (
                <div className="background">
                    <div className="title">
                        <h2>Enter Options to Make a Random Choice </h2>
                    </div>

                    <div className="inputSection">
                        <div className="inputs">
                            {inputs}
                        </div>
                        <button className="addOption" onClick={this.add}>Add option</button>

                    </div>

                    <button className="submit" onClick={this.toggle}>Randomize</button>

                </div>
            )
        } else {
            return (
                <div>
                    <div className="title">
                        <h3>Congratulations</h3>
                    </div>

                    <div className="resultContainer">
                        <div className="resultSection">The winner is<br/>
                            {winner}</div>
                        <div className="congrats">
                            <img src="https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"/>
                        </div>

                    </div>
                    <button className="submit" onClick={this.reset}>Back</button>
                </div>
            )
        }
    }
}

export default App;
