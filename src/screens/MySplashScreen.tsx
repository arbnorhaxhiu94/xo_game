import React, {Component} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Colors from '../assets/colors';

export class MySplashScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            progressBar: 0,
            timer: null
        }
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(() => {
                this.setState({
                    progressBar: this.state.progressBar + 0.3
                })
            }, 100)
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    render() {

        const styles = StyleSheet.create({
            screen: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.BLACK_3
            },
            progressBarContainer: {
                position: 'absolute',
                bottom: 50,
                flexDirection: 'row',
                width: '80%',
                alignSelf: 'center',
                borderWidth: 1,
                height: 10,
                borderRadius: 5,
                borderColor: Colors.LIGHTRED
            },
            progressBar: {
                flex: this.state.progressBar,
                backgroundColor: Colors.LIGHTRED,
                borderRadius: 5,
            }
        })

        return(
            <View style={styles.screen}>
                <Image 
                    source={require('../assets/images/launch_screen.png')}
                    style={{width: 300, height: 300}} />
                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBar} />
                    <View style={{flex: 5-this.state.progressBar}} />
                </View>
            </View>
        )
    }
}