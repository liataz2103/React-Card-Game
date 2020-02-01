import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default class End extends Component {
    static propTypes = {
        userFinal: propTypes.number.isRequired,
        compFinal: propTypes.number.isRequired,
        divideCards: propTypes.func.isRequired  
    }

    render() {
        return (
            <div>
                <div>
                    <div className ="container" style=
                        {{border: "2px solid purple",
                        width: "700px", height: "700px",
                        marginTop: "40px" ,
                        textAlign: "center",
                        paddingTop: "100px"
                        }}> <br></br>
                        <h1>WIN/LOOSE</h1><br></br>
                        <h2 style={{color: "purple"}}>computer: {this.props.compFinal}</h2>
                        <h2 style={{color: "purple"}}>user: {this.props.userFinal}</h2> <br></br>
                        <Link to="/game"><button onClick = {this.props.divideCards.bind(this)} style={{backgroundColor:"purple", width:"150px", borderRadius: "15px"}}>Again?</button></Link>

                    </div>
                </div>
                
            </div>
        )
    }
}
