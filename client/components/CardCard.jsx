import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import {orange500, amber500, cyan500} from 'material-ui/styles/colors';

const style = {
  // height: 350,
  width: 350,
  margin: 20,
  backgroundColor: '#F44336',
  textAlign: 'center',
  display: 'inline-block',
  verticalAlign: 'top'
}

const CardCard = props => {
  let image;
  if (props.liked === true){
    image = <img id="filledStar" onClick={() => {props.likeCard(props.id)}} src="http://simpleicon.com/wp-content/uploads/star.png" width="60"/>
  } else {
    image = <img id="star" onClick={() => {props.likeCard(props.id)}} src="https://png.icons8.com/metro/1600/star.png" width="60"/>
  }

  return (
    <Card style={style} zDepth={3}>
      <p id="CardTitle">{props.CardList[props.index].name}</p>
      <p><label>Category: </label>{props.CardList[props.index].category}</p>
      <p><a href={props.CardList[props.index].url}>Click to View Card</a></p>

      {image}
    
      <RaisedButton
        label="remove"
        style={{display:'inline-block', width:120, margin:5, marginTop:20, backgroundColor:amber500}}
        onClick={() => props.deleteCard(props.id)}/>
      {/* <RaisedButton
        label="edit"
        style={{display:'inline-block', width:120, margin:5, marginTop:20, backgroundColor:amber500}}
        onClick={() => props.editCard(props.id)}/> */}

      <CardHeader
        title="Card Notes"
        actAsExpander={true}
        // showExpandableButton={true}
        style={{display:'block', margin:'auto', width:80, textAlign:'center'}}
      />



      <CardText expandable={true}>
        {props.notes}
      </CardText>
    </Card>
    )
} 

export default CardCard;