import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MapPointsCreators } from 'store/ducks/mapPoints';
import MapView from 'react-native-maps';
import { View } from 'react-native';

import ModalPoint from './components/ModalPoint';

import styles from './styles';

class Map extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onLongPress={() => this.props.toggleModal()}
        />
        <ModalPoint />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(MapPointsCreators, dispatch);

export default connect(null, mapDispatchToProps)(Map);
