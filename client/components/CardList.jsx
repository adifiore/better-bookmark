import React, { Component } from 'react';
import CardCard from './CardCard.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {orange500} from 'material-ui/styles/colors'
import {deepOrange500} from 'material-ui/styles/colors'


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: orange500,
    accent1Color: deepOrange500
  }
})

class CardList extends Component {
  constructor(props){
    super(props);
    // Right now, this component has:
    // this.props.CardList
    // this.props.populateCards
    // this.props.deleteCard
    // this.props.editCard
  }

  componentDidMount() {
    if (this.props.CardList.length===0) {
      $.ajax({
        url: 'http://localhost:3000/Cards',
        success: this.props.populateCards
      })
    }
  }

  render() {
    let CardCardArr = [];
    for (let i = 0; i < this.props.CardList.length; i++) {
      CardCardArr.push(<CardCard key={i} index={i} id={this.props.CardList[i]._id} name={this.props.CardList[i].name} liked={this.props.CardList[i].liked} notes={this.props.CardList[i].notes} CardList={this.props.CardList} deleteCard={this.props.deleteCard} likeCard={this.props.likeCard} editCard={this.props.editCard}/>)
    }

    return(
      <MuiThemeProvider muiTheme={muiTheme}>
        <div id="CardList" style={{textAlign: "center"}}>
          {CardCardArr}
        </div>
      </MuiThemeProvider>
    );
  }
}
export default CardList;