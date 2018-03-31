import React, { Component } from 'react';
// import child components...
import CardCreator from '../components/CardCreator.jsx'
import CardList from '../components/CardList.jsx'
import EditCard from '../components/EditCard.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import RaisedButton from 'material-ui/RaisedButton';
import {orange500, amber500, cyan500} from 'material-ui/styles/colors';


const muiTheme = getMuiTheme({
  // palette: {
  //   primary1Color: orange500,
  // }
})

class ContentContainer extends Component {
  constructor(){
    super();

    this.state={
      CardList: [],
    };

    this.dbList; // So that when I click 'starred only', I can go back.
    this.starOn = false; // Initially, the list is not filtered by stars.

    this.populateCards = this.populateCards.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.addCard = this.addCard.bind(this);
    this.editCard = this.editCard.bind(this);
    this.likeCard = this.likeCard.bind(this);
    this.viewStarred = this.viewStarred.bind(this);
  }

  populateCards(data){
    const stateCopy = {};
    stateCopy.CardList = data;
    this.dbList = data; // So that 'starred only' can be undone.
    this.setState({ CardList: stateCopy.CardList });
  }

  deleteCard(id){
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:3000/' + id,
      success: this.populateCards //reset state
    })
  }

  addCard(data){
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/',
      data: data,
      success: this.populateCards
    })
  }

  editCard(data){
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:3000/',
      data: data,
      success: this.populateCards
    })

  }

  likeCard(id){
    // Send a put request to update the "liked" property
    $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/' + id,
      success: this.populateCards
    })
    // On success, come back here and change the display
  }

  viewStarred(){
    if (this.starOn === false) {
      this.starOn = true;
      let CardsArr = this.state.CardList.slice();
      CardsArr = CardsArr.filter((Card) => {
        return Card.liked;
      })
      this.setState({ CardList: CardsArr});
    } else {
      this.starOn = false;
      this.setState({CardList: this.dbList});
    }
  }

  render() {
    let editCard;
  
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id="mainWrapper">
          <RaisedButton 
            label="Starred Only"
            style={{display:'block', width:180, margin:'auto', marginTop:20, backgroundColor:amber500}}
            onClick={() => this.viewStarred()}/>
          <CardList
            CardList={this.state.CardList}
            populateCards={this.populateCards}
            deleteCard={this.deleteCard}
            likeCard={this.likeCard}/>
          <CardCreator
            addCard={this.addCard}
            onChange={this.handleChange}
            CardList={this.state.CardList}/>
          <EditCard
            addCard={this.addCard}
            onChange={this.handleChange}
            CardList={this.state.CardList}
            editCard={this.editCard}/>            
        </div>
      </MuiThemeProvider>
    );
  }
}
export default ContentContainer;


