import {StyleSheet,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../assets/colors/colors';
import Fonts from '../../global/constants';
export default StyleSheet.create({
  compCard:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
      text:{
        fontSize:10,
        color:'black',
      },
      itemImage:{
        height:100,
        width:100,
      },
      favourite:{
        flexDirection:'row'
      },
      itemText1:{
        fontSize:12,
        fontWeight:'400',
        color:'black'
      },
      itemText:{
        fontSize:16,
        fontWeight:'500',
        color:'black'
      },
      itemText2:{
        fontSize:14,
        fontWeight:'400',
        color:'black'
      },
      
});
