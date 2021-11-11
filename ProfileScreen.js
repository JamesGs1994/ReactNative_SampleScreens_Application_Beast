import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
//import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Profile extends Component {
  render() {
    return (

      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.AllView}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Avatar.Image
                  source={{
                    uri: 'https://eastceylon.com/images/2021/07/26/IMG_20210316_131233_2.jpg',
                  }}
                  size={80}
                />
                <View style={{ marginLeft: 20 }}>
                  <Title style={[styles.title, {
                    marginTop: 15,
                    marginBottom: 5,
                  }]}>James Gs</Title>
                  <Caption style={styles.caption}>James14cena</Caption>
                </View>
              </View>
            </View>

            <View style={styles.userInfoSection}>
              <View style={styles.row}>
                <Icon name="map-marker-radius" color="red" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>Bangalore, India</Text>
              </View>
              <View style={styles.row}>
                <Icon name="phone" color="red" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>+91-9066052108</Text>
              </View>
              <View style={styles.row}>
                <Icon name="email" color="red" size={20} />
                <Text style={{ color: "#777777", marginLeft: 20 }}>James14cena@email.com</Text>
              </View>
            </View>

            <View style={styles.infoBoxWrapper}>
              <View style={[styles.infoBox, {
                borderRightColor: '#dddddd',
                borderRightWidth: 1
              }]}>
                <Title>₹143.15</Title>
                <Caption>Wallet</Caption>
              </View>
              <View style={styles.infoBox}>
                <Title>12</Title>
                <Caption>Orders</Caption>
              </View>
            </View>

            <View style={styles.menuWrapper}>

              <TouchableRipple onPress={() => { }}>
                <View style={styles.menuItem}>
                  <Icon name="heart-outline" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>Your Favorites</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => { }}>
                <View style={styles.menuItem}>
                  <Icon name="credit-card" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>Payment</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => { }}>
                <View style={styles.menuItem}>
                  <Icon name="share-outline" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>Tell Your Friends</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => { }}>
                <View style={styles.menuItem}>
                  <Icon name="account-check-outline" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>Support</Text>
                </View>
              </TouchableRipple>

              <TouchableRipple onPress={() => alert("Hai James")} rippleColor="green">
                <View style={styles.menuItem}>
                  <Icon name="fingerprint" color="#FF6347" size={25} />
                  <Text style={styles.menuItemText}>Settings</Text>
                </View>
              </TouchableRipple>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  AllView: {
    height: '70%', // 70% of height device screen
    width: '80%'   // 80% of width device screen
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  }
});