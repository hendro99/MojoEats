import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';
import { Container, Header, Drawer, Content, List, ListItem, Left, Body, Card, CardItem, Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Place extends React.Component {
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
                   Tempat Kuliner Di Surabaya
                </Text>
              </Body>
            </CardItem>
          </Card>
          
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Hanamasa Gubeng </Text>
              
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://www.hanamasaresto.com/img/1.jpg'}} style={{height: 300, width: 400, flex: 1}}/>
                <Text>
                Alamat : Jl. Gubeng Pojok No.31, Ketabang, 
Genteng, Kota SBY, Jawa Timur 60281

                </Text>
                <Text>Jam Buka : 11.00 - 22.00</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="star-half" />
                  <Text>1,000 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
            
                <Body>
                  <Text>Warung sop kaki bang oya</Text>
                 
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'http://1.bp.blogspot.com/-UqAKiIevWMQ/T3F5Og03lHI/AAAAAAAAAU4/Dgay8IugoOM/s1600/DSC01435.JPG'}} style={{height: 300, width: 400, flex: 1}}/>
                <Text>
                Jl. Arif Rahman Hakim No.207, Klampis Ngasem, 
Sukolilo, Kota SBY, Jawa Timur 60297

                </Text><Text>
               Buka jam : 17.00 - 00.00
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="star-half" />
                  <Text>926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
            
                <Body>
                  <Text>Serabi solo papa oyot </Text>
                 
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://igx.4sqi.net/img/general/600x600/24153925_XIXtcFhy1ATFRPlqEmZeabsfmhXKMuE7KQZmHBxjVJs.jpg'}} style={{height: 300, width: 400, flex: 1}}/>
                <Text>
                Jl. Jemursari XI No.43, Jemur Wonosari, 
Wonocolo, Kota SBY, Jawa Timur 60237


                </Text><Text>
                Buka jam : 08.00-21.00
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="star-half" />
                  <Text>926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

           <Card style={{flex: 0}}>
            <CardItem>
              <Left>
            
                <Body>
                  <Text>Warung sego sambel mak yeye</Text>
                 
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/09/c6/a8/6f/sego-sambel-mak-yeye.jpg'}} style={{height: 300, width: 400, flex: 1}}/>
                <Text>
                Jl. Jagir Wonokromo Wetan No.12, Jagir, 
Wonokromo, Kota SBY, Jawa Timur 60244


                </Text><Text>
                Buka jam :21.00-04.00
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="star-half" />
                  <Text>926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
    );
  }
}
