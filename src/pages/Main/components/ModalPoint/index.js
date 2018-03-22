import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Creators as MapPointsCreators } from 'store/ducks/mapPoints'
import PropTypes from 'prop-types';

import { View, Modal, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'

class ModalPoint extends Component {
  static propTypes = {};

  static defaultProps = {};

  static state = {};

  componentWillUnmount() {
    this.props.toggleModal();
  }

  render() {
    console.tron.log(this.props.modalIsVisible);
    return (
      <Modal
        animationType="fade"
        visible={this.props.modalIsVisible}
        transparent={true}
        onRequestClose={() => this.props.toggleModal()}
      >
        <View style={styles.overlay}>
        </View>
          <View style={styles.container}>
            <Text style={styles.title}>Adicionar novo local</Text>
            <TextInput/>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton}>
                <Text>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({ modalIsVisible: state.mapPoints.addNewPoint })
const mapDispatchToProps = dispatch => bindActionCreators(MapPointsCreators, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ModalPoint);
