import React, { Component } from 'react'
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
export default class Game extends Component {

    static propTypes = {
        compNextCard: propTypes.number.isRequired, 
        userNextCard: propTypes.number.isRequired,
        flag: propTypes.bool.isRequired,  
        next: propTypes.func.isRequired
    }

    show = () => {
        if (this.props.flag === false){
            return(
                <button style={{backgroundColor:"purple", width:"150px", borderRadius: "15px"}} onClick={this.props.next}>Next</button>
            )
            }else{
                return(
                    <Link to="/end"><button style={{backgroundColor:"purple", width:"150px", borderRadius: "15px"}}>Next</button></Link>
                )
            }
        
    }

    render() {
        
        return (
            <div>
                <div className ="container" style=
                    {{border: "2px solid purple",
                    width: "700px", height: "700px",
                    marginTop: "40px" ,
                    textAlign: "center",
                    paddingTop: "10px"
                    }}>   
                    <h1>Start Game</h1><br></br>
                    <h3>Computer:</h3>
                    <div style={{width:"200px", height: "200px", backgroundColor:"grey", borderRadius: "10px", marginLeft:"35%", padding:"70px", fontSize:"40px"}}>{this.props.compNextCard}</div>
                    <h3>You:</h3>
                    <div style={{width:"200px", height: "200px", backgroundColor:"grey", borderRadius: "10px", marginLeft:"35%", padding:"70px", fontSize:"40px"}}>{this.props.userNextCard}</div>
                    
                    <br></br>
                    <div className="btnNext" >{this.show()}</div>
                </div>
            </div>
        )
    }
}
