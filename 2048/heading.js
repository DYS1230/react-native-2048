import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions

} from 'react-native';

export default class Heading extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return(
			<View style={styles.heading}>
				<View style={styles.fontGroup}>
					<Text style={styles.font}>2048</Text>
				</View>
				<View style={styles.btnGroup}>
					<View style={styles.btn}>
						<Text style={styles.title}>SCORE</Text>
						<Text style={styles.score}>{this.props.score}</Text>
					</View>
					<View style={styles.btn}>
						<Text style={styles.title}>BEST</Text>
						<Text style={styles.score}>{this.props.score}</Text>
					</View>
				</View>
			</View>
		)
	}
}

const {height, width} = Dimensions.get('window');

var styles = StyleSheet.create({
	heading: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center', 
		marginTop: 50,
		marginLeft: 10,
		marginRight: 10,
	},
	fontGroup: {
		flex: 1.5,
	},
	font: {
		fontSize: 50,
		color: '#776E65',
	},
	btnGroup: {
		flexDirection: 'row',
		flex: 1,
	},
	btn: {
		backgroundColor: '#bbada0',
		height: 60,
		width: 60,
		borderRadius: 4,
		marginLeft: 5
	},
	title: {
		textAlign: 'center',
		color: '#fff',
	},
	score: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 30
	},
})