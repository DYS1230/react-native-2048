import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions

} from 'react-native';

export default class Nav extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return(
			<View style={styles.nav}>
				<View style={styles.navTitle}>
					<Text style={styles.navTitleText}>Join the numbers and get to the 2048 title</Text>
				</View>
				<View style={styles.navBtn}>
					<Text style={styles.navBtnText}>New Game</Text>
				</View>
			</View>
		)
	}
}

const {height, width} = Dimensions.get('window');

var styles = StyleSheet.create({
	nav: {
		marginTop: 20,
		flexDirection: 'row',
		marginLeft: 10,
		marginRight: 10
	},
	navTitle: {
		flex: 2
	},
	navTitleText: {
		fontSize: 17
	},
	navBtn: {
		flex: 1,
		borderRadius: 4,
		height: 50,
		width: 50,
		backgroundColor: '#8f7a66',
		justifyContent: 'center'
	},
	navBtnText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 20
	},
})