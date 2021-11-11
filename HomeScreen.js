import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Linking,
  Vibration
} from 'react-native';
//import { WebView } from 'react-native-webview';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: "You", color: "#20B2AA", Notification: 8, image: "https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg" },
        { id: 2, title: "Game", color: "#008080", Notification: 13, image: "https://previews.123rf.com/images/ratoca/ratoca1109/ratoca110900181/10605662-icon-for-video-games.jpg" },
        { id: 3, title: "Email", color: "#87CEEB", Notification: 6, image: "https://icons.iconarchive.com/icons/marcus-roberto/google-play/256/Gmail-icon.png" },
        { id: 4, title: "YouTube", color: "#4682B4", Notification: 12, image: "https://icons.iconarchive.com/icons/wwalczyszyn/android-style-honeycomb/256/YouTube-icon.png" },
        { id: 5, title: "Facebook", color: "#6A5ACD", Notification: 5, image: "https://icons.iconarchive.com/icons/graphics-vibe/hot-burning-social/128/facebook-icon.png" },
        { id: 6, title: "Friends", color: "#FF69B4", Notification: 6, image: "https://wallpapercave.com/wp/wp3211529.jpg" },
        { id: 7, title: "School", color: "#00BFFF", Notification: 7, image: "https://www.iconshock.com/image/RealVista/Real_estate/school/" },
        { id: 8, title: "Things", color: "#FF4500", Notification: 8, image: "https://p.kindpng.com/picc/s/422-4228875_3d-icons-for-windows-download-hd-png-download.png" },
        { id: 9, title: "World", color: "#191970", Notification: 23, image: "https://media.istockphoto.com/vectors/worlds-best-symbol-with-3d-globe-icon-vector-id1278254951" },
        { id: 10, title: "Rate me", color: "#00FFFF", image: "https://styles.redditmedia.com/t5_2re84/styles/communityIcon_llwt8q640kx41.png?width=256&s=7cc8c0f5abc5149a16e544cc41ebf1c279e9f988" },
        { id: 11, title: "Test Screen", color: "#FF69B4", image: "https://lh4.ggpht.com/QRI6KTFWPWF7dSU3EawxXVtRqBu-qGNdZJIbWi1UHfvp3jKBN82P6kDq1qDz4AbaDfg=h300" },
      ]
    };
  }

  render() {
    const ONE_SECOND_IN_MS = 1000;

    const PATTERN = [
      1 * ONE_SECOND_IN_MS,
      2 * ONE_SECOND_IN_MS,
      3 * ONE_SECOND_IN_MS
    ];

    const PATTERN_DESC =
      Platform.OS === "android"
        ? "wait 1s, vibrate 2s, wait 3s"
        : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";

    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={[styles.card, { backgroundColor: item.color }]}
                onPress={() => {
                  if (item.id === 1) {
                    this.props.navigation.navigate('ProfileScreen')
                  }
                  else if (item.id === 2) {
                    this.props.navigation.navigate('LetsPlay')
                  }
                  else if (item.id === 3) {
                    Linking.openURL('https://mail.google.com/')
                  }
                  else if (item.id === 4) {
                    alert("Hai")
                    //<WebView source={{ uri: 'https://www.youtube.com/' }} />
                  }
                  else if (item.id === 5) {
                    Linking.openURL('https://www.facebook.com/')
                  }
                  else if (item.id === 6) {
                    this.props.navigation.navigate("Modal")
                  }
                  else if (item.id === 10) {
                    this.props.navigation.navigate('RateMe')
                  }
                  else if (item.id === 11) {
                    this.props.navigation.navigate('Test')
                  }
                  else if (item.id === 9) {
                    Vibration.vibrate(PATTERN)
                  }
                  else if (item.id === 8) {
                    Vibration.cancel()
                  }

                }
                }>
                <View style={styles.cardHeader} >
                  <Text style={styles.title} >{item.title}</Text>
                  <Image style={styles.icon} source={{ uri: "https://img.icons8.com/ios/40/000000/settings.png" }} />
                </View>
                <Image style={styles.cardImage} source={{ uri: item.image }} />
                <View style={styles.cardFooter}>
                  <Text style={styles.subTitle}>{item.Notification} Notification</Text>
                </View>
              </TouchableOpacity>
            )
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
    height: hp('100%'),
    width: wp('100%'),

  },
  listContainer: {
    alignItems: 'center',

  },
  /******** card **************/
  card: {
    marginHorizontal: 2,
    marginVertical: 2,
    flexBasis: '48%',
    borderRadius: 15,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: hp('7%'),
    width: wp('16%'),
    alignSelf: 'center'
  },
  title: {
    fontSize: hp('2%'),
    flex: 1,
    color: "#FFFFFF",
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 12,
    flex: 1,
    color: "#FFFFFF",
  },
  icon: {
    height: 20,
    width: 20,
  }
});