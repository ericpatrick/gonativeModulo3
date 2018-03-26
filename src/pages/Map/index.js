import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MapPointsCreators } from 'store/ducks/mapPoints';
import MapView from 'react-native-maps';
import { View, Image, Text } from 'react-native';

import ModalPoint from './components/ModalPoint';

import styles from './styles';

class Map extends Component {
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      bio: PropTypes.string,
      avatarUrl: PropTypes.string,
      coordinate: PropTypes.shape({
        longitude: PropTypes.number,
        latitude: PropTypes.number,
      }),
    })).isRequired,
    toggleModal: PropTypes.func.isRequired,
  };
  renderMarker = user => (
    <MapView.Marker key={user.id} coordinate={user.coordinate}>
      <Image
        style={styles.imageMarker}
        source={{ uri: user.avatarUrl }}
        onLoad={() => this.forceUpdate()}
      />
      <MapView.Callout>
        <View style={styles.mapPopup}>
          <Text style={styles.username}>{user.name}</Text>
          <Text style={styles.userBio}>{user.bio}</Text>
        </View>
      </MapView.Callout>
    </MapView.Marker>
  );

  render() {
    const { users, toggleModal } = this.props;
    console.tron.log('MAP RENDER');
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -27.2177659,
            longitude: -49.6451598,
            latitudeDelta: 0.0042,
            longitudeDelta: 0.0031,
          }}
          onLongPress={evt => toggleModal(evt.nativeEvent.coordinate)}
        >
          { !!users.length > 0
            ? users.map(this.renderMarker)
            : null
          }
        </MapView>
        <ModalPoint />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  users: state.mapPoints.users,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(MapPointsCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
