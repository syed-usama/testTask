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
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  streetView: {
    backgroundColor: 'green',
    height: hp(105),
    width: wp(100),
  },
  dynamicMap: {
    backgroundColor: 'rgba(255,255,255,0)',
    height: hp(105),
    width: wp(100),
    position: 'absolute',
    zIndex: 9999,
  },
  trasparentButton: {
    backgroundColor: 'rgba(255,255,255,0)',
    height: hp(50),
    width: wp(100),
    borderBottomWidth:5,
    borderColor:'white',
    alignItems:'center',
    justifyContent:'center'
  },
  fullScreen: {
    position: 'absolute',
    right: hp(2),
    top: hp(2),
    zIndex: 99,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  button:{
    position:'absolute',
    bottom:20,
    right:30,
    backgroundColor:'green',
    height:hp(7),
    width:wp(35),
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    color:'white',
    fontSize: 16,
    fontWeight:'600'
  },
  resultImage:{
    alignSelf:'center',
    height:wp(40),
    width:wp(40)
  },
  resultText:{
    marginTop:15,
    width:wp(80),
    alignSelf:'center',
    textAlign:'center',
    color:'white',
    fontSize: 18,
    fontWeight:'500'
  },
  mapButton:{
    height:80,
    width:80,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:40,
    position:'absolute',
    bottom:20,
    right:30
  },
  mapIcon:{
    height:70,
    width:69,
  },
  guessButton:{
    height:80,
    width:80,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:40,
    position:'absolute',
    bottom:20,
    right:30
  },
  guessIcon:{
    height:70,
    width:71,
  }
});
