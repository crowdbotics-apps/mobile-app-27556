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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf41/eb6f/d1556c78f7d9f92ac7f58c0282451792"
        }}
        style={styles.ImageBackground_11_27}
      />
      <View style={styles.View_11_40}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf63/f7cc/8a70d1e4a87c10d0b3469c8e247a24aa"
          }}
          style={styles.ImageBackground_11_28}
        />
        <View style={styles.View_11_37}>
          <Text style={styles.Text_11_37}>boujee_place</Text>
        </View>
        <View style={styles.View_11_39}>
          <Text style={styles.Text_11_39}>07055297762</Text>
        </View>
        <View style={styles.View_11_38}>
          <Text style={styles.Text_11_38}>boujee place </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0a1/f3e1/0023b7cc78371672c7d07d73c4ee37b4"
          }}
          style={styles.ImageBackground_11_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa03/5786/2b4fca3dac0230bb0ea20f98284eeabc"
          }}
          style={styles.ImageBackground_11_34}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  ImageBackground_11_27: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_11_40: {
    width: wp("30.599999999999998%"),
    minWidth: wp("30.599999999999998%"),
    height: hp("22.2%"),
    minHeight: hp("22.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.8%"),
    top: hp("70%")
  },
  ImageBackground_11_28: {
    width: wp("3.4000000000000004%"),
    height: hp("3.4000000000000004%"),
    top: hp("3.4000000000000057%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20000000000000284%")
  },
  View_11_37: {
    width: wp("23.799999999999997%"),
    minWidth: wp("23.799999999999997%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.800000000000004%"),
    top: hp("0%")
  },
  Text_11_37: {
    color: "rgba(227, 191, 120, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_39: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.800000000000004%"),
    top: hp("6.200000000000003%")
  },
  Text_11_39: {
    color: "rgba(228, 191, 121, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_38: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.800000000000004%"),
    top: hp("12.199999999999989%")
  },
  Text_11_38: {
    color: "rgba(227, 191, 120, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_11_32: {
    width: wp("3.5999999999999996%"),
    height: hp("3.5999999999999996%"),
    top: hp("15.399999999999991%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_34: {
    width: wp("3.4000000000000004%"),
    height: hp("3.4000000000000004%"),
    top: hp("9.600000000000009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20000000000000284%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
