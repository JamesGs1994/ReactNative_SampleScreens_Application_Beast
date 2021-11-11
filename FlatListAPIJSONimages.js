import React, { Component } from 'react';

import { StyleSheet, View, ActivityIndicator, FlatList, Text, Image, Alert } from 'react-native';

export default class Project extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isLoading: true

        }


    }

    GetItem(Girl_name) {

        Alert.alert(Girl_name);

    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 2,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    webCall = () => {

        return fetch('https://mocki.io/v1/8801fb36-5e2b-4a36-9944-e03b50798c17')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.GirlImages
                }, function () {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }

    componentDidMount() {

        this.webCall();

    }

    render() {

        if (this.state.isLoading) {
            return (

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <ActivityIndicator size="large" />

                </View>

            );

        }

        return (

            <View style={styles.MainContainer}>

                <FlatList

                    data={this.state.dataSource}

                    ItemSeparatorComponent={this.FlatListItemSeparator}

                    renderItem={({ item }) =>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <Image source={{ uri: item.image }} style={styles.imageView} />

                            <Text onPress={this.GetItem.bind(this, item.description)} style={styles.textView} >{item.description}</Text>

                        </View>

                    }

                    keyExtractor={(item, index) => index.toString()}

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 5,
    },

    imageView: {

        width: '50%',
        height: 200,
        margin: 7,
        borderRadius: 7

    },

    textView: {

        width: '50%',
        textAlignVertical: 'center',
        padding: 10,
        color: '#000'

    }

});