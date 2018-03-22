import { StyleSheet } from 'react-native';
// import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#333',
    opacity: 0.8,
  },
  container: {
    position: 'absolute',
    top: 250,
    right: 40,
    height: 120,
    width: 300,
    backgroundColor: '#FFF',
    opacity: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButton: {
    marginLeft: 20,
  },
});

export default styles;
