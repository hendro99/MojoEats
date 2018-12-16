import React, { Component } from 'react';
import { AppRegistry, View, Image, RefreshControl, ListView } from 'react-native';
import { TabNavigator } from "react-navigation";
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';

export default class Home extends React.Component {

  render() {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var tanggal = date + '/' + month + '/' + year;

    return (

      <Container style={{ backgroundColor: '#E0E0E0' }}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>MojoEat</Title>
          </Body>
        </Header>
        <Content style={{ backgroundColor: '#E0E0E0' }}>

<Card>
            <CardItem>
              <Body>
                <Text>
                  Welcome MojoEat APPS
                </Text>
              </Body>
            </CardItem>
          </Card>

                <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Street Food</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.nirvanade.com/wp-content/uploads/2018/04/streetfood-surabaya.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text note>{tanggal}</Text>
              </Right>
            </CardItem>
          </Card>

        <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Food LifeStyle</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.pinimg.com/originals/cb/29/3a/cb293aa1fd30aacadc6c23aeda2ecc7c.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Comments</Text>
                </Button>
              </Body>
              <Right>
            <Text note>{tanggal}</Text>
              </Right>
            </CardItem>
          </Card>

        </Content>
      </Container>
    );
  }

}
