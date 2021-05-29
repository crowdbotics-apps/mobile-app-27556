import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09ba/bf81/6936287f839b1c8b194ea1d56f1db2b2"
        }}
        style={styles.ImageBackground_7_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d017/867c/2c73527193f40d2ee038f7ad746e7d3b"
        }}
        style={styles.ImageBackground_7_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0bc/b229/9a9fe3acf452594a28245789309d81bb"
        }}
        style={styles.ImageBackground_7_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/719e/1e57/7f1226d432da563e49753b2acf186c8c"
        }}
        style={styles.ImageBackground_7_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f47/60ff/edede92818505843dfbcd9b04fdcd7b5"
        }}
        style={styles.ImageBackground_7_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7adb/479a/ab34a183402b92d813e3a125a41f3e92"
        }}
        style={styles.ImageBackground_7_4}
      />
      <View style={styles.View_7_7} />
      <View style={styles.View_7_8}>
        <Text style={styles.Text_7_8}>Get starteed</Text>
      </View>
      <View style={styles.View_7_9}>
        <Text style={styles.Text_7_9}>Food for Everyone</Text>
      </View>
      <View style={styles.View_7_10}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/951b/3cd2/41563683994f648931521af9a5127ebb"
          }}
          style={styles.ImageBackground_7_11}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe4f/ecbd/c9bd661e10e62ecd77deba0dc323c087"
          }}
          style={styles.ImageBackground_7_12}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_7_13: {
    width: wp("17.632850241545896%"),
    minWidth: wp("17.632850241545896%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("7.650273224043716%")
  },
  ImageBackground_7_0: {
    width: wp("64.57974346363602%"),
    minWidth: wp("64.57974346363602%"),
    height: hp("44.91658445264473%"),
    minHeight: hp("44.91658445264473%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.56959187235809%"),
    top: hp("60.308420983820014%"),
    resizeMode: "cover"
  },
  ImageBackground_7_5: {
    width: wp("67.21133909363678%"),
    minWidth: wp("67.21133909363678%"),
    height: hp("24.63696380781997%"),
    minHeight: hp("24.63696380781997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.40629717693236%"),
    top: hp("88.75785785946039%")
  },
  ImageBackground_7_1: {
    width: wp("92.03797860997886%"),
    minWidth: wp("92.03797860997886%"),
    height: hp("61.89462630475153%"),
    minHeight: hp("61.89462630475153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.806763285024154%"),
    top: hp("47.404371584699454%"),
    resizeMode: "cover"
  },
  ImageBackground_7_3: {
    width: wp("95.16908212560386%"),
    minWidth: wp("95.16908212560386%"),
    height: hp("26.639344262295083%"),
    minHeight: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-18.024890549516908%"),
    top: hp("86.0655737704918%")
  },
  ImageBackground_7_4: {
    width: wp("86.23188405797102%"),
    minWidth: wp("86.23188405797102%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06280193236715%"),
    top: hp("107.24043715846993%")
  },
  View_7_7: {
    width: wp("75.84541062801932%"),
    minWidth: wp("75.84541062801932%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%"),
    top: hp("107.92349726775956%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_8: {
    width: wp("25.36231884057971%"),
    minWidth: wp("25.36231884057971%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.68115942028986%"),
    top: hp("111.33879781420765%")
  },
  Text_7_8: {
    color: "rgba(255, 70, 10, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_9: {
    width: wp("66.42512077294685%"),
    minWidth: wp("66.42512077294685%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%"),
    top: hp("21.85792349726776%")
  },
  Text_7_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 52,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.95,
    textTransform: "none"
  },
  View_7_10: {
    width: wp("11.078251272008039%"),
    minWidth: wp("11.078251272008039%"),
    height: hp("6.782685472665588%"),
    minHeight: hp("6.782685472665588%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.162695548384661%"),
    top: hp("9.259416757385587%")
  },
  ImageBackground_7_11: {
    width: wp("9.713985608971637%"),
    minWidth: wp("9.713985608971637%"),
    height: hp("6.782685472665588%"),
    minHeight: hp("6.782685472665588%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_12: {
    width: wp("4.42237116864338%"),
    minWidth: wp("4.42237116864338%"),
    height: hp("4.838100808565734%"),
    minHeight: hp("4.838100808565734%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.655869046271135%"),
    top: hp("1.537619001878415%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
