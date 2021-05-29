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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
        }}
        style={styles.ImageBackground_412_11}
      />
      <View style={styles.View_412_13}>
        <Text style={styles.Text_412_13}>Spicy chieckns</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e7/255f/a5674dadca74d0a3561817162d7f737e"
        }}
        style={styles.ImageBackground_412_14}
      />
      <View style={styles.View_412_57}>
        <Text style={styles.Text_412_57}>Item not found</Text>
      </View>
      <View style={styles.View_412_58}>
        <Text style={styles.Text_412_58}>
          Try searching the item with a different keyword.
        </Text>
      </View>
      <View style={styles.View_430_18}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f51/2d8f/caea752ad04f50a8e654dade2bae22c5"
          }}
          style={styles.ImageBackground_430_19}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_412_11: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231885%")
  },
  View_412_13: {
    width: wp("27.294685990338163%"),
    minWidth: wp("27.294685990338163%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.396135265700483%"),
    top: hp("9.836065573770492%")
  },
  Text_412_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_412_14: {
    width: wp("2.745160371698394e-7%"),
    minWidth: wp("2.745160371698394e-7%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.41545893719807%"),
    top: hp("9.426229508196721%")
  },
  View_412_57: {
    width: wp("48.55072463768116%"),
    minWidth: wp("48.55072463768116%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.845410628019323%"),
    top: hp("60.79234972677595%")
  },
  Text_412_57: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_412_58: {
    width: wp("52.65700483091788%"),
    minWidth: wp("52.65700483091788%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.67149758454106%"),
    top: hp("67.62295081967213%")
  },
  Text_412_58: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_430_18: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.642512077294686%"),
    top: hp("38.9344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_430_19: {
    width: wp("22.10144927536232%"),
    height: hp("12.5%"),
    top: hp("2.0833333333333357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6835748792270557%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
