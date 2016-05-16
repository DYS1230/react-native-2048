import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions

} from 'react-native';

import Layout from './layout.js';
import Data from './data'

export default class Box extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	componentWillMount() {
		//console.log(this.props.tiles);
	}
	render() {
		return(
			<View style={styles.box}>
				<Data tiles={this.props.tiles} style={styles.data}></Data>
		             NNB		<Layout style={styles.layout}></Layout>
			</View>
		)
	}
}

const {height, width} = Dimensions.get('window');

var styles = StyleSheet.create({
	box: {
		height: width - 40,
		width: width - 40,
		backgroundColor: '#bbada0',
		borderRadius: 4,
		marginTop: 30,
		marginLeft: 20,
	},

})