import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './home'
import MainScreen from './main'
import LicenseScreen from './license'
import SettingScreen from './setting'
import CardScreen from './card'

import NoteMainScreen from'./notes/main'
import NoteDetails1Screen from'./notes/details1'
import NoteDetails2Screen from'./notes/details2'
import NoteDetails3Screen from'./notes/details3'
import NoteDetails4Screen from'./notes/details4'

import TipMainScreen from'./tips/main'

import QuizMainScreen from './quiz/main'
import QuizPageScreen from './quiz/page'
import ResultScreen from './quiz/result'

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Main: {
            screen: MainScreen
        },
        License: {
            screen: LicenseScreen
        },
        Setting: {
            screen: SettingScreen
        },
        Card: {
            screen: CardScreen
        },

        NoteMain: {
            screen: NoteMainScreen
        },
        NoteDetails1: {
            screen: NoteDetails1Screen
        },
        NoteDetails2: {
            screen: NoteDetails2Screen
        },
        NoteDetails3: {
            screen: NoteDetails3Screen
        },
        NoteDetails4: {
            screen: NoteDetails4Screen
        },

        TipMain: {
            screen: TipMainScreen
        },

        QuizMain: {
            screen: QuizMainScreen
        },
        QuizPage: {
            screen: QuizPageScreen
        },
        Result: {
            screen: ResultScreen
        },
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);