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
      <View style={styles.View_298_1}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/df24/7e6572068dbb9b9a1aa09c2be4399264"
          }}
          style={styles.ImageBackground_298_2}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7d0/880a/04782f08974811a28eabdffb4a1f5f97"
          }}
          style={styles.ImageBackground_298_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cff/cdb9/7f9db1f8ffd285789bfee0a888787dc2"
          }}
          style={styles.ImageBackground_298_4}
        />
        <View style={styles.View_298_5} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ac8/e2ee/c9a40375705151f2d439da519ec3830b"
        }}
        style={styles.ImageBackground_298_16}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28fc/bc0d/b6fd73ed9d1937716cd9f91af202d6ad"
        }}
        style={styles.ImageBackground_298_17}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb8b/0bd2/a100db63cd11190d0300c0811942f51f"
        }}
        style={styles.ImageBackground_298_18}
      />
      <View style={styles.View_298_19} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc37/aef8/2113d9c5c68acc66842f87038105c540"
        }}
        style={styles.ImageBackground_298_20}
      />
      <View style={styles.View_298_21}>
        <Text style={styles.Text_298_21}>Order delicious Foods</Text>
      </View>
      <View style={styles.View_298_22}>
        <Text style={styles.Text_298_22}>bella Onojie mobile app</Text>
      </View>
      <View style={styles.View_298_23}>
        <Text style={styles.Text_298_23}>Ui Ux | 2020</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.95081967213115%") },
  View_298_1: {
    width: wp("218.181884765625%"),
    minWidth: wp("218.181884765625%"),
    height: hp("396.35456689719945%"),
    minHeight: hp("396.35456689719945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-57.64285714285714%"),
    top: hp("-83.19672131147541%")
  },
  ImageBackground_298_2: {
    width: wp("129.97856794084822%"),
    minWidth: wp("129.97856794084822%"),
    height: hp("211.24999666474557%"),
    minHeight: hp("211.24999666474557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_298_3: {
    width: wp("102.0536847795759%"),
    minWidth: wp("102.0536847795759%"),
    height: hp("265.8587012786032%"),
    minHeight: hp("265.8587012786032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.86411830357142%"),
    top: hp("57.5195812788166%")
  },
  ImageBackground_298_4: {
    width: wp("175.7752162388393%"),
    minWidth: wp("175.7752162388393%"),
    height: hp("273.94015619663594%"),
    minHeight: hp("273.94015619663594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.40665108816964%"),
    top: hp("122.41440236242744%")
  },
  View_298_5: {
    width: wp("114.99999999999999%"),
    minWidth: wp("114.99999999999999%"),
    height: hp("169.80874316939892%"),
    minHeight: hp("169.80874316939892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.61648995535714%"),
    top: hp("74.774670210041%"),
    backgroundColor: "rgba(246, 211, 230, 1)",
    opacity: 0.699999988079071
  },
  ImageBackground_298_16: {
    width: wp("18.21428571428571%"),
    minWidth: wp("18.21428571428571%"),
    height: hp("78.68852459016394%"),
    minHeight: hp("78.68852459016394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.71428571428571%"),
    top: hp("61.20218579234973%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_298_17: {
    width: wp("18.142857142857142%"),
    minWidth: wp("18.142857142857142%"),
    height: hp("78.55191256830601%"),
    minHeight: hp("78.55191256830601%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.5%"),
    top: hp("64.34426229508196%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_298_18: {
    width: wp("19.5%"),
    minWidth: wp("19.5%"),
    height: hp("79.09836065573771%"),
    minHeight: hp("79.09836065573771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.785714285714285%"),
    top: hp("53.14207650273224%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_298_19: {
    width: wp("18.285714285714285%"),
    minWidth: wp("18.285714285714285%"),
    height: hp("75.40983606557377%"),
    minHeight: hp("75.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.78571428571429%"),
    top: hp("58.879781420765035%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_298_20: {
    width: wp("19.5%"),
    minWidth: wp("19.5%"),
    height: hp("79.09836065573771%"),
    minHeight: hp("79.09836065573771%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.928571428571427%"),
    top: hp("46.72131147540984%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_298_21: {
    width: wp("42.214285714285715%"),
    minWidth: wp("42.214285714285715%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.071428571428573%"),
    top: hp("20.901639344262296%")
  },
  Text_298_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 43,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_298_22: {
    width: wp("20.357142857142858%"),
    minWidth: wp("20.357142857142858%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.92857142857143%"),
    top: hp("27.732240437158467%")
  },
  Text_298_22: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_298_23: {
    width: wp("6.571428571428571%"),
    minWidth: wp("6.571428571428571%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.857142857142854%"),
    top: hp("31.830601092896178%")
  },
  Text_298_23: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
