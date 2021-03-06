import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
    Rain: {
        colors: ['#006C6F8', '#005BEA'],
        title: "Raining",
        subtitle: "For more info look outside",
        icon: 'weather-rainy'
    },
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: "Sunny",
        subtitle: "For more info look outside",
        icon: 'weather-sunny'
    },
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADF'],
        title: "Thunderstorm",
        subtitle: "For more info look outside",
        icon: 'weather-lightning'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: "Clouds",
        subtitle: "For more info look outside",
        icon: 'weather-cloudy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B986E5'],
        title: "Snowy",
        subtitle: "For more info look outside",
        icon: 'weather-snowy'
    },
    Drizzel: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "For more info look outside",
        icon: 'weather-hail'
    },
    Haze: {
        colors: ['#89F7FE', '#66A6FF'],
        title: "Drizzle",
        subtitle: "For more info look outside",
        icon: 'weather-windy'
    }
}

function Weather({ weatherName, temp }){
    return (
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temp}> {temp}º </Text>
            </View>

            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
             </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "transparent",
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10,

    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25,

    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300",

    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24,
    }



});
