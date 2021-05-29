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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a3c/c325/9e012e6870c36a2b792d05662e53ca3a"
        }}
        style={styles.ImageBackground_309_32}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffc2/1989/d8f7f8c83327588e4740567f429cee51"
        }}
        style={styles.ImageBackground_309_19}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0061/a7de/9274169a29e76f692d6ef28955aaedd6"
        }}
        style={styles.ImageBackground_309_30}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f238/e093/3faa835d32fcc135b6b02ddb7ce0a0ee"
        }}
        style={styles.ImageBackground_309_31}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f238/e093/3faa835d32fcc135b6b02ddb7ce0a0ee"
        }}
        style={styles.ImageBackground_309_34}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f238/e093/3faa835d32fcc135b6b02ddb7ce0a0ee"
        }}
        style={styles.ImageBackground_309_26}
      />
      <View style={styles.View_309_25}>
        <View style={styles.View_309_20} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06bd/a4f1/7147a6ea742921bd3b900ff0098a32c9"
          }}
          style={styles.ImageBackground_309_21}
        />
      </View>
      <View style={styles.View_309_27}>
        <View style={styles.View_309_28} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b6ce/1a5f/5b9cabe0787517b769221ffc2cc5d38a"
          }}
          style={styles.ImageBackground_309_29}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.95081967213115%") },
  ImageBackground_309_32: {
    width: wp("16.357142857142858%"),
    minWidth: wp("16.357142857142858%"),
    height: hp("66.12021857923497%"),
    minHeight: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.92857142857143%"),
    top: hp("41.39344262295082%"),
    resizeMode: "cover",
    borderColor: "rgba(232, 46, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_309_19: {
    width: wp("16.357142857142858%"),
    minWidth: wp("16.357142857142858%"),
    height: hp("66.12021857923497%"),
    minHeight: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.071428571428573%"),
    top: hp("15.573770491803279%"),
    resizeMode: "cover",
    borderColor: "rgba(232, 46, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_309_30: {
    width: wp("16.357142857142858%"),
    minWidth: wp("16.357142857142858%"),
    height: hp("66.12021857923497%"),
    minHeight: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.714285714285714%"),
    top: hp("65.84699453551912%"),
    resizeMode: "cover",
    borderColor: "rgba(232, 46, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_309_31: {
    width: wp("16.357142857142858%"),
    minWidth: wp("16.357142857142858%"),
    height: hp("66.12021857923497%"),
    minHeight: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.071428571428573%"),
    top: hp("93.16939890710383%"),
    resizeMode: "cover",
    borderColor: "rgba(232, 46, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_309_34: {
    width: wp("16.357142857142858%"),
    minWidth: wp("16.357142857142858%"),
    height: hp("66.12021857923497%"),
    minHeight: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.21428571428571%"),
    top: hp("-39.07103825136612%"),
    resizeMode: "cover",
    borderColor: "rgba(232, 46, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_309_26: {
    width: wp("16.357142857142858%"),
    minWidth: wp("16.357142857142858%"),
    height: hp("66.12021857923497%"),
    minHeight: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.5%"),
    top: hp("-17.48633879781421%"),
    resizeMode: "cover",
    borderColor: "rgba(232, 46, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_309_25: {
    width: wp("19.857142857142858%"),
    minWidth: wp("19.857142857142858%"),
    height: hp("67.89617486338798%"),
    minHeight: hp("67.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.714285714285714%"),
    top: hp("-8.879781420765028%")
  },
  View_309_20: {
    width: wp("15.357142857142858%"),
    minWidth: wp("15.357142857142858%"),
    height: hp("60.65573770491803%"),
    minHeight: hp("60.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5%"),
    top: hp("7.240437158469946%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_309_21: {
    width: wp("16.357142857142858%"),
    minWidth: wp("16.357142857142858%"),
    height: hp("66.12021857923497%"),
    minHeight: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_309_27: {
    width: wp("19.857142857142858%"),
    minWidth: wp("19.857142857142858%"),
    height: hp("67.89617486338798%"),
    minHeight: hp("67.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.5%"),
    top: hp("65.84699453551912%")
  },
  View_309_28: {
    width: wp("15.357142857142858%"),
    minWidth: wp("15.357142857142858%"),
    height: hp("60.65573770491803%"),
    minHeight: hp("60.65573770491803%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.499999999999993%"),
    top: hp("7.240437158469959%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_309_29: {
    width: wp("16.357142857142858%"),
    minWidth: wp("16.357142857142858%"),
    height: hp("66.12021857923497%"),
    minHeight: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
