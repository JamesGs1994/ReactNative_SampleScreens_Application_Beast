import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, ActivityIndicator } from 'react-native';
import customData from './data.json'

//console.log(customData.d.results)
const ItemView = ({ item }) => {
    return (
        // Flat List Item

        <View style={styles.Txt}>
            <Text>
                {item.Description.toUpperCase()}
            </Text>
        </View>
    );
};

class FlatListLocalJSON extends Component {
    constructor(props) {

        super(props);
        this.state = {
            isLoading: true,
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={styles.Header}>
                        <Text style={styles.Headertxt}>API fetch DATA From URL</Text>
                    </View>
                    <FlatList
                        style={styles.FlatList}
                        data={customData.d.results}
                        renderItem={ItemView}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#67baf6"
    },
    FlatList: {
        backgroundColor: "gray",
    },
    Txt: {

        backgroundColor: 'white',
        borderRadius: 1,
        marginBottom: 1,
        paddingLeft: 8,
        height: 50,
        justifyContent: "center"
    },
    Header: {
        backgroundColor: "gray",
        height: 50,
        fontSize: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    Headertxt: {
        fontSize: 25,
    },
});

export default FlatListLocalJSON;