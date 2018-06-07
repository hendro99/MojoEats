import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
const screens = ["Home", "Event", "Kupon","About"];

export default class MenuSamping extends React.Component {
  render() {
    return (
      <Content style={{ backgroundColor: '#FFFFFF' }}>
        <Card style={{ flex: 2 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://i.pinimg.com/564x/b7/48/51/b7485183674bfd3f90bb5b292c79cd2f.jpg' }} style={{ marginLeft: 20, marginBottom: 10 }} />
              <Body>
                <Text style={{ margin: 10, marginBottom: 20 }}>MojoEat</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
        <List>
          <ListItem avatar
            button
            onPress={() => this.props.navigation.navigate(screens[0])}
          >
            <Left>
              <Thumbnail source={{ uri: 'https://png.icons8.com/color/2x/home.png' }} />
            </Left>
            <Body>
              <Text>Home</Text>
              <Text note></Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem avatar
            button
            onPress={() => this.props.navigation.navigate(screens[1])}
          >
            <Left>
              <Thumbnail source={{ uri: 'https://png.icons8.com/color/2x/calendar.png' }} />
            </Left>
            <Body>
              <Text>Event</Text>
              <Text note></Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem avatar
            button
            onPress={() => this.props.navigation.navigate(screens[2])}
          >
            <Left>
              <Thumbnail source={{ uri: 'https://png.icons8.com/color/2x/ticket.png' }} />
            </Left>
            <Body>
              <Text>Kupon</Text>
              <Text note></Text>
            </Body>
          </ListItem>
        </List>
        <List>
          <ListItem avatar
            button
            onPress={() => this.props.navigation.navigate(screens[3])}
          >
            <Left>
              <Thumbnail source={{ uri: 'https://png.icons8.com/color/540/about.png' }} />
            </Left>
            <Body>
              <Text>About</Text>
              <Text note></Text>
            </Body>
          </ListItem>
        </List>
      </Content>

    );
  }
}
