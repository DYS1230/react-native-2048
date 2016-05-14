/*import React, {Component} from 'react';
import {
	StyleSheet,
	View,
	AppRegistry,
	Image,
	Text,
	TouchableOpacity
} from 'react-native';

var imgs = [
  'http://vczero.github.io/ctrip/hua2.png',
  'http://vczero.github.io/ctrip/nian2.png',
  'http://vczero.github.io/me/img/xiaoxue.png'
];

class MyImage extends Component {
	constructor(props) {
		super(props);
		var imgs= this.props.imgs;
		console.log(imgs);
		this.state = {
			imgs: imgs,
			count: 0
		};
	}
	goNext() {
		var count = this.state.count;
		count++;
		if(count < imgs.length) {
			this.setState({
				count: count
			});
		}
	}
	goPrevire() {
		var count = this.state.count;
		count--;
		if(count >= 0) {
			this.setState({
				count: count
			});
		}
	}
	render() {
		return(
			<View style={styles.flex}>
				<View style={styles.image}>
					<Image
						style={styles.img} source={{uri: this.state.imgs[this.state.count]}}
					/>
				</View>
				<View style={styles.btns}>
					<TouchableOpacity onPress={this.goPrevire.bind(this)}>
						<View style={styles.btn}>
							<Text>preview</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={this.goNext.bind(this)}>
						<View style={styles.btn}>
							<Text>Next</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
};

class myProject extends Component {
	render() {
		return (
			<View style={[styles.flex, {marginTop: 40}]}>
				<MyImage imgs={imgs}></MyImage>
			</View>
		)

	}
};

var styles = StyleSheet.create({
	flex:{
		flex: 1,
		alignItems: 'center'
	},
	image: {
		borderWidth: 1,
		width: 300,
		height: 200,
		borderRadius: 5,
		borderColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center'
	},
	img: {
		height: 150,
		width: 200
	},
	btns: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20
	},
	btn: {
		width: 60,
		height: 30,
		borderColor: '#0089ff',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 3,
		marginRight: 20
	}
});

AppRegistry.registerComponent('myProject', () => myProject);  */


/*
const myProject = () => {
  return <Container startTiles={2} size={4} />
}
*/

import React, {Component} from 'React';
import {AppRegistry} from 'react-native';
import Container from './2048/container.js';


class myProject extends Component {
	render() {
		return(
			<Container />
		) 
	}
}

AppRegistry.registerComponent('myProject', () => myProject);


/*
import React, {AppRegistry} from 'react-native'

import Container from './common/components/container'

const myProject = () => {
  return <Container startTiles={2} size={4} />
}

AppRegistry.registerComponent('myProject', () => myProject)
*/



/*
var React = require('react-native');
var {
  PanResponder,
  StyleSheet,
  View,
  processColor,
  AppRegistry,
} = React;

var CIRCLE_SIZE = 80;

var myProject = React.createClass({

  statics: {
    title: 'PanResponder Sample',
    description: 'Shows the use of PanResponder to provide basic gesture handling.',
  },

  _panResponder: {},
  _previousLeft: 0,
  _previousTop: 0,
  _circleStyles: {},
  circle: (null : ?{ setNativeProps(props: Object): void }),

  componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
    });
    this._previousLeft = 20;
    this._previousTop = 84;
    this._circleStyles = {
      style: {
        left: this._previousLeft,
        top: this._previousTop,
        backgroundColor: 'green',
      }
    };
  },

  componentDidMount: function() {
    this._updateNativeStyles();
  },

  render: function() {
    return (
      <View
        style={styles.container}>
        <View
          ref={(circle) => {
            this.circle = circle;
          }}
          style={styles.circle}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  },

  _highlight: function() {
    this._circleStyles.style.backgroundColor = 'blue';
    this._updateNativeStyles();
  },

  _unHighlight: function() {
    this._circleStyles.style.backgroundColor = 'green';
    this._updateNativeStyles();
  },

  _updateNativeStyles: function() {
    this.circle && this.circle.setNativeProps(this._circleStyles);
  },

  _handleStartShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user presses down on the circle?
    return true;
  },

  _handleMoveShouldSetPanResponder: function(e: Object, gestureState: Object): boolean {
    // Should we become active when the user moves a touch over the circle?
    return true;
  },

  _handlePanResponderGrant: function(e: Object, gestureState: Object) {
    this._highlight();
  },
  _handlePanResponderMove: function(e: Object, gestureState: Object) {
    this._circleStyles.style.left = this._previousLeft + gestureState.dx;
    this._circleStyles.style.top = this._previousTop + gestureState.dy;
    this._updateNativeStyles();
  },
  _handlePanResponderEnd: function(e: Object, gestureState: Object) {
    this._unHighlight();
    this._previousLeft += gestureState.dx;
    this._previousTop += gestureState.dy;
  },
});

var styles = StyleSheet.create({
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  container: {
    flex: 1,
    paddingTop: 64,
  },
});

AppRegistry.registerComponent('myProject', () => myProject)

*/