import React, { Component } from 'react';
import { AppRegistry, View, Image, Alert } from 'react-native';
import { TabNavigator } from "react-navigation";
import {
    Container, Header, Drawer, Content, List, ListItem, ListView, Left, Body, Card, CardItem,
    Thumbnail, Right, Button, Icon, Title, Text, Tab, Footer, FooterTab, Form, Item, Input, Label
} from 'native-base';
export default class input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: "",
            alamat: "",
            fasilitas: "",
            wahana: "",
            harga_masuk: 0,
            refreshing: false,
        };
    }

    handleDone() {
        const {navigate} = this.props.navigation;
        let nama = (this.state.nama);
        let alamat = (this.state.alamat);
        let fasilitas = (this.state.fasilitas);
        let wahana = (this.state.wahana);
        let harga_masuk = parseInt(this.state.harga_masuk);

        var axios = require('axios');
        var data = new FormData();
        var obj = {
            nama: nama,
            alamat: alamat,
            fasilitas: fasilitas,
            wahana: wahana,
            harga_masuk: harga_masuk
        };

        var myJson = JSON.stringify(obj)
        axios.post('https://rimba.000webhostapp.com/itats_wisata.php', (myJson))
            .then(function (response) {
                Alert.alert('Sukses', 'Data sudah diinput',
                [
                    {text: 'OK', onPress: () => navigate('Tempat')},
                  ],
            );
            
            })
            .catch(function (error) {
               Alert.alert('Error', error);
            })
    }


    render() {
        const {navigate} = this.props.navigation;
        return (

            <Container style={{ backgroundColor: '#E0E0E0' }}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
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
                   Culinary Comumunity Registration Form
                </Text>
              </Body>
            </CardItem>
          </Card>
                <Card style={{flex: 0}}>
                <CardItem style={{ backgroundColor: '#FAFAFA' }}>
                <Content style={{ backgroundColor: '#FAFAFA' }}>
                  
                  
                <Form>
            <Item>
              <Input placeholder='Nama Komunitas' onChangeText={(nama) => this.setState({ nama })} />
              <Icon active name='person' />
            </Item>
            <Item>
              <Input placeholder='Wilayah komunitas' onChangeText={(alamat) => this.setState({ alamat })} />
              <Icon active name='beer' />
            </Item>
            <Item>
              <Input placeholder='Sejak tahun ' onChangeText={(fasilitas) => this.setState({ fasilitas })} />
              <Icon active name='alarm' />
            </Item>
            <Item>
              <Input placeholder='Nomor handphone' onChangeText={(alamat) => this.setState({ alamat })} />
              <Icon active name='keypad' />
            </Item>
            <Item>
              <Input placeholder='List restauran / kedai ' onChangeText={(wahana) => this.setState({ wahana })} />
              <Icon active name='cart' />
            </Item>
            <Item>
              <Input placeholder='Makanan Terfavorit' onChangeText={(harga_masuk) => this.setState({ harga_masuk })} />
              <Icon active name='navigate' />
            </Item>
            <Button full onPress={() => this.handleDone({})}>
            <Text>Save</Text>
          </Button>
          </Form>
                       
                   
                </Content>
                </CardItem>
                </Card>
                </Content>
            </Container>
        );
    }
}
