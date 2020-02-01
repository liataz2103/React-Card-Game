import React, { Component } from 'react'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home.js';
import Game from './components/Game.js';
import End from './components/End.js';

export default class App extends Component {

  state = {
      playerName:"user",
      playerName: "computer",
      compCards: [],
      userCards: [],
      userScore: 0,
      userWins: 0,
      computerScore: 0,
      computerWins: 0,
      compNextCard: 0,
      userNextCard: 0,
      flag: false
    }
    




  divideCards = () => {
    // create a package of cards (1111, 2222 ........ 13131313)
    let cards =[];
    let shuffledCards = []
    for(let i=1; i<=13; i++){
      for(let j=1; j<=4; j++){
        cards.push(j);
      }
    }
    
    // Generate random card 
    // var item = items[Math.floor(Math.random()*items.length)];
    // Generate Shuffelled pacjage

    for(let i=0; i<52; i++) {
      let randCard = cards[Math.floor(Math.random() * cards.length)]
      shuffledCards.push(randCard);

    }

    // divide cards between computer and user
    let userPack = shuffledCards.slice(0,26);
    let compPack = shuffledCards.slice(26,52);

    console.log(userPack);
    console.log(compPack);
    
    this.setState({userCards: [userPack]})
    this.setState({compCards: [compPack]})
    let nextC = compPack.pop();
    let nextU = userPack.pop();

    this.setState({compNextCard: nextC});
    this.setState({userNextCard: nextU});
    if (nextC>nextU){
      this.setState({computerScore: 1 })
    }else if (nextU>nextC){
      this.setState({userScore: 1 })
    }
    
    
  }

  next = () => {
    let comp = [...this.state.compCards];
    let user = [...this.state.userCards];
    let compRoundScore = 0
    let userRoundScore = 0
    let compWin;
    let userWin;

    let nextComp = comp[0].pop();
    let nextUser = user[0].pop();

    
    if(nextComp>nextUser){
      compRoundScore = this.state.computerScore
      compRoundScore++
      this.setState({computerScore: compRoundScore })
    }else if(nextUser>nextComp){
      userRoundScore = this.state.userScore
      userRoundScore++
      this.setState({userScore: userRoundScore })
    }
    
    this.setState({compNextCard: nextComp});
    this.setState({userNextCard: nextUser});

    if(comp[0].length === 0){
      this.setState({flag:true})
      if(this.state.computerScore > this.state.userScore){
        this.setState({computerWins: 1})
      }else if( this.state.userScore > this.state.computerScore){
        this.setState({userWins: 1})
      }
    }
 
  }


  render() {
    return (
      <div className="App" style = {{display: "flex", justifyContent: "center", flexDirection: "column",alignItems: "center"}}>
      <Router>
      <Route exact path='/' component={() =>{return <Home divideCards={this.divideCards}/>}}/>
      <Route exact path='/game' component={() =>{return <Game compNextCard={this.state.compNextCard} userNextCard={this.state.userNextCard} flag={this.state.flag} next={this.next}/>}}/>
      <Route exact path='/end' component={() =>{return <End divideCards={this.divideCards} compFinal = {this.state.computerWins} userFinal = {this.state.userWins}/>}}/>
        <Switch>
        
      
        </Switch>
      </Router>
      
      
    </div>
    )
  }
}

// shuffleArray=(array)=>
//   {
//      const newArray = array.slice();
//      for (let i in newArray) {
//          const randomIndex = 52 - Math.floor(Math.random() * (52 - i));
//          [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
//      }
//      return newArray;
//   }

//   createPakage=()=>
//   {
//     for(let i=1;i<=13;i++)
//     {
//       for(let j=1;j<=4;j++)
//       {
//         this.setState({cards:[...this.state.card,i]});

//       }
//     }
//   }
//  cards_devision =() => {

//  }


//cards devition
  // divideCards=(name)=>
  // {
   
      
  //   for(let i=1;i<=13;i++){for(let j=1;j<=4;j++){cards=[...cards,i];}}
  //   for (let i in cards) 
  //   {
  //     const randomIndex = 52 - Math.floor(Math.random() * (52 - i));
  //     [cards[i], cards[randomIndex]] = [cards[randomIndex], cards[i]];
  //   }

  //   let computer= cards.slice(0, 27);
  //   let user= cards.slice(0, 27);
  //   this.setState({players:[...this.state.players,
  //     {playerType:computer,
  //       playerName:computer,
  //       playerWins:0,
  //       playerScore:0,
  //       playerCard:0,
  //       cards:[...computer]}]});
  //   this.setState({players:[...this.state.players,
  //         {playerType:user,
  //           playerName:name,
  //           playerWins:0,
  //           playerScore:0,
  //           playerCard:0,
  //           cards:[...user]}]});
    
  // }
