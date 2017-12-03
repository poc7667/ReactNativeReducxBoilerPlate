import React, {Component} from 'react';
import {Text, View, StatusBar, Image, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Button, Header} from 'react-native-elements';
import {loginUser} from "../actions/AuthAction";

const initState = {}

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = initState
    }

    render() {
        return (
            <ScrollView style={{flex:1}}>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {} = auth;
    return {};
};

export default connect(mapStateToProps, {
    loginUser
})(LoginForm);