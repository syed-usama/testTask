import {StyleSheet} from 'react-native';
import colors from '../../assets/colors/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Fonts from '../../global/constants';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
