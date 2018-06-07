import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Kupon extends React.Component {
  render() {
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
                  Kuopon Diskon
                </Text>
              </Body>
            </CardItem>
          </Card>
        
        <Card>
            <CardItem>
              <Left>
            
                <Body>
                  <Text>Coffe Toffe</Text>
                  <Text note>Get 50%</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.pinimg.com/736x/06/59/3c/06593c002dd384d890e2b20de3a52319--ux-design-design-branding.jpg'}} style={{height: 200, width: 200, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Button rounded light button onPress={() => alert("This is Card Body")}>
            <Text>Claim</Text>
          </Button>
              </Left>
              
              <Right>
              <Text>Berlaku</Text>
                  <Text note>20 Agustus 2018</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
