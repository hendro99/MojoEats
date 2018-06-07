import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Event extends React.Component {
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
                   Event Kuliner Surabaya
                </Text>
              </Body>
            </CardItem>
          </Card>
        <Card style={{flex: 0}}>
            <CardItem>
              <Left>
               
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>May 31, 2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://i.pinimg.com/750x/c5/23/e7/c523e7e5e46f486fe3b232d841e6330d.jpg'}} style={{height: 400, width: 390, flex: 1}}/>
                <Text>
                Yuk gabung bersama kita di acara Buko Bareng Doeloer, kita bakalan ngabuburit dan berbuka bersama saudara saudara kita yang membutuhkan.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
              <Button rounded>
            <Text>Readme</Text>
          </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
               
                <Body>
                  <Text>Surabaya BERDONASI</Text>
                  <Text note>June 06, 2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://i.pinimg.com/originals/21/4b/37/214b37f49c9a9a76fdbe13770efdcdb5.jpg'}} style={{height: 400, width: 400, flex: 1}}/>
                <Text>
                Berbuka Puasa dan Santunan Anak Yatim Piatu dan Fakir Miskin
Tempat : Masjid Sabilul Muttaqin Moro, Surabaya
MARI BERDONASI, Karena sebagian hartamu adalah milik mereka

                </Text>
              </Body>
            </CardItem>
            <CardItem>
              
              <Left>
              <Button rounded>
            <Text>Readme</Text>
          </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
