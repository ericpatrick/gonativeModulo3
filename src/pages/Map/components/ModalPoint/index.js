import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MapPointsCreators } from 'store/ducks/mapPoints';
import { colors } from 'styles';
import PropTypes from 'prop-types';

import {
  View,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';

import styles from './styles';

class ModalPoint extends Component {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
    requestUser: PropTypes.func.isRequired,
    modalIsVisible: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, null]).isRequired,
  };

  state = {
    username: '',
  };

  componentWillUnmount() {
    this.props.toggleModal();
  }

  cancelInput = () => {
    this.props.toggleModal();
    this.setState({ username: '' });
  };

  saveUser = () => {
    const { username } = this.state;
    console.tron.log(username);
    this.props.requestUser(username);
    this.setState({ username: '' });
    Keyboard.dismiss();
  };

  renderButtons() {
    return (
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => this.cancelInput()}
        >
          <Text style={styles.buttonLabel}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.saveButton]}
          onPress={() => this.saveUser()}
        >
          <Text style={styles.buttonLabel}>Salvar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    const {
      modalIsVisible, loading, error, toggleModal,
    } = this.props;

    return (
      <Modal
        animationType="fade"
        visible={modalIsVisible}
        transparent
        onRequestClose={() => toggleModal()}
      >
        <View style={styles.overlay} />
        <View style={styles.container}>
          <Text style={styles.title}>Adicionar novo local</Text>

          { error
            ? <Text style={styles.error}>{error}</Text>
            : null
          }

          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Usuário no Github"
            underlineColorAndroid="transparent"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
          />

          { loading
            ? <ActivityIndicator size="large" color={colors.black} />
            : this.renderButtons()
          }

        </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modalIsVisible: state.mapPoints.addNewPoint,
  loading: state.mapPoints.loading,
  error: state.mapPoints.error,
});
const mapDispatchToProps = dispatch => bindActionCreators(MapPointsCreators, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ModalPoint);
