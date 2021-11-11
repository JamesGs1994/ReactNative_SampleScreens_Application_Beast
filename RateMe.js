// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

const App = () => {
    // To set the default Star Selected
    const [defaultRating, setDefaultRating] = useState(3);
    // To set the max number of Stars
    const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

    // Filled Star. You can also give the path from local
    const starImageFilled =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
    // Empty Star. You can also give the path from local
    const starImageCorner =
        'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    const CustomRatingBar = () => {
        return (
            <View style={styles.customRatingBarStyle}>
                {maxRating.map((item, key) => {
                    return (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            key={item}
                            onPress={() => setDefaultRating(item)}>
                            <Image
                                style={styles.starImageStyle}
                                source={
                                    item <= defaultRating
                                        ? { uri: starImageFilled }
                                        : { uri: starImageCorner }
                                }
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>


                <CustomRatingBar />
                <Text style={styles.textStyle}>
                    {defaultRating} / {Math.max.apply(null, maxRating)}
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.buttonStyle}
                    onPress={() => alert(defaultRating)}>
                    <Text style={styles.buttonTextStyle}>
                        Get Selected Value
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        textAlign: 'center',
    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 23,
        color: '#000',
        marginTop: 15,
    },
    textStyleSmall: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
        marginTop: 15,
    },
    buttonStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        padding: 15,
        backgroundColor: '#8ad24e',
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
    },
    starImageStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
});