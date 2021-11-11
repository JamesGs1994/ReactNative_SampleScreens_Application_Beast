import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNCountry from "react-native-countries";
import DropDownPicker from 'react-native-dropdown-picker';

export default class VideoPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryCode: "TR"
        }
    }

    componentWillMount() {
        let countryNamesWithCodes = RNCountry.getCountryNamesWithCodes;
        countryNamesWithCodes.sort((a, b) => a.name.localeCompare(b.name));
        this.setState({
            countryNameListWithCode: countryNamesWithCodes
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <DropDownPicker
                    selectedValue={this.state.countryCode}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => this.setState({ countryCode: itemValue })}>
                    {this.state.countryNameListWithCode.map((val) => {
                        return <Picker.Item key={'country-item-' + val.code} label={val.name} value={val.code} />
                    })}
                </DropDownPicker>
                <Text>Selected Country Code: {this.state.countryCode}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    picker: {
        height: 50,
        width: 200
    }
});
