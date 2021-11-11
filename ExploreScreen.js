import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Vibration, Share, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-paper';


class ExploreScreen extends Component {
  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Share the Message',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    const ONE_SECOND_IN_MS = 5000;

    const PATTERN = [
      1 * ONE_SECOND_IN_MS,
      2 * ONE_SECOND_IN_MS,
      3 * ONE_SECOND_IN_MS
    ];
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.menuWrapper}>
          <View style={styles.column}>
            <View>
              <Text style={{ fontSize: 40 }} >ExploreScreen</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Button
              onPress={() => alert("Hello World")}>
              Touch me</Button>
          </View>
          <View style={styles.infoBoxWrapper}>
            <TouchableHighlight style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]} onPress={() => this.props.navigation.navigate('ProfileScreen')} underlayColor={"orange"}>
              <Text > Go to Profile</Text>
            </TouchableHighlight>
            <View style={styles.infoBox}>
              <Button
                onPress={() => this.props.navigation.navigate('HomeScreen')}>
                Go to Home Screen</Button>
            </View>
          </View>
          <View style={styles.infoBox2}>
            <Button
              onPress={this.onShare}>
              Share</Button>
          </View>
          <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>

              <Button
                onPress={() => Vibration.vibrate(50 * ONE_SECOND_IN_MS)}>
                Touch to Vibrate</Button>
            </View>
            <View style={styles.infoBox}>
              <Button
                onPress={() => Vibration.cancel()}>
                Turn Off Vibrate</Button>
            </View>
          </View>
          <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Button
                onPress={() => this.props.navigation.navigate('FlatListLocalJSON')}>
                Open Local JSON</Button>

            </View>
            <View style={styles.infoBox}>
              <Button
                onPress={() => this.props.navigation.navigate('FlatListAPIJSON')}>
                Open API JSON</Button>

            </View>
          </View>
          <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Button
                onPress={() => this.props.navigation.navigate('FlatListAPIJSONimages')}>
                Open API JSON Images</Button>

            </View>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Button
                onPress={() => this.props.navigation.navigate('CoutryCodePicker')}>
                Coutry Code Picker</Button>

            </View>
          </View>

          <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Button
                onPress={() => this.props.navigation.navigate('VideoPlayers')}>
                Test</Button>

            </View>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Button
                onPress={() => this.props.navigation.navigate('CoutryCodePicker')}>
                Test</Button>

            </View>
          </View>
        </View>
      </SafeAreaView >
    );
  };
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  column: {
    width: '100%',
    marginTop: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'center',
  },
  menuWrapper: {
    width: '100%',
    marginTop: 10,
    alignItems: "center",
    flexDirection: "column"
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
    backgroundColor: "#67baf6"
  },
  infoBox2: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#67baf6",
    height: 100,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
  }
});
