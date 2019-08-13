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
        // this.save = this.save.bind(this)
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


    add(){
        this.setState({
            options: this.state.options +1,
        });
     };
    //
    // save(event){
    //     this.setState({
    //         input: event.target.value
    //     });
    //     const values = [];
    //     values.push(this.state.input);
    //     console.log(values);
    //
    // }


    render() {
        const inputs = [];
        for(let i = 0; i < this.state.options; i++){
            inputs.push(<input placeholder={"Enter option"} />);
        }

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


{/*<script>*/}
    {/*$(function () {*/}
    {/*$('.resultSection').hide();*/}

    {/*var add_option = function () {*/}
    {/*$('.inputs').append('<input/>')*/}
{/*};*/}
    {/*$('.addOption').click(add_option);*/}

    {/*var options = [];*/}

    {/*var submit = function() {*/}
    {/*$('.inputSection').hide();*/}
    {/*$('.resultSection').css('display', 'flex');*/}
    {/*$('input').each(function () {*/}
    {/*options.push($(this).val())*/}
{/*})*/}

    {/*var winner = options[Math.floor(Math.random() * options.length)];*/}
    {/*$('.resultSection').text(winner)*/}
{/*};*/}
    {/*$('.submit').click(submit)*/}
{/*})*/}
{/*</script>*/}
