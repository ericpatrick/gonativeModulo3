import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  imageContainer: {
    borderRadius: 20,
    padding: 2,
    backgroundColor: colors.white,
  },
  imageMarker: {
    borderRadius: 16,
    height: 32,
    width: 32,
  },
  mapPopup: {
    width: 200,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userBio: {
    lineHeight: 21,
    fontSize: 14,
  },
});

export default styles;
