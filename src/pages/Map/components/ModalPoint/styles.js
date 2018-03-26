import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.darkTransparent,
  },
  container: {
    position: 'absolute',
    top: (metrics.screenHeight / 2) - 100,
    left: 20,
    width: metrics.screenWidth - 40,
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },
  title: {
    fontSize: 18,
    color: colors.darker,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: metrics.baseMargin * 2,
  },
  input: {
    marginBottom: metrics.baseMargin,
    borderColor: colors.light,
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: metrics.baseRadius,
    height: 42,
    paddingVertical: metrics.basePadding / 2,
    flex: 1,
  },
  buttonLabel: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  saveButton: {
    marginLeft: 15,
    backgroundColor: colors.success,
  },
  cancelButton: {
    backgroundColor: colors.cancel,
  },
  error: {
    color: colors.danger,
  },
});

export default styles;
