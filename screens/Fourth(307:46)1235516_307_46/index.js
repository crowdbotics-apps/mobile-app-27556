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
      <View style={styles.View_307_50}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/df24/7e6572068dbb9b9a1aa09c2be4399264"
          }}
          style={styles.ImageBackground_307_51}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7d0/880a/04782f08974811a28eabdffb4a1f5f97"
          }}
          style={styles.ImageBackground_307_52}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cff/cdb9/7f9db1f8ffd285789bfee0a888787dc2"
          }}
          style={styles.ImageBackground_307_53}
        />
        <View style={styles.View_307_54} />
      </View>
      <View style={styles.View_298_66}>
        <Text style={styles.Text_298_66}>Problem solved</Text>
      </View>
      <View style={styles.View_298_67}>
        <Text style={styles.Text_298_67}>Out come and achievements</Text>
      </View>
      <View style={styles.View_298_68}>
        <Text style={styles.Text_298_68}>
          After so many iterations and research covered, through my designs i
          was able to help customers get acquainted with the app and order as
          fast as they can while enjoying the process as they doing it.
        </Text>
      </View>
      <View style={styles.View_298_69}>
        <Text style={styles.Text_298_69}>
          Considering how rapidly the medical cannabis market segment is
          evolving, Cancare required a fast turn around. The app got to the
          market in just three months, and it was already winning over most
          competitors thanks to its usability and reliability. After a quick
          marketing campaign, the founders have been able to generate revenues
          from day one.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.95081967213115%") },
  View_307_50: {
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
  ImageBackground_307_51: {
    width: wp("129.97856794084822%"),
    minWidth: wp("129.97856794084822%"),
    height: hp("211.24999666474557%"),
    minHeight: hp("211.24999666474557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000016676272196036734%")
  },
  ImageBackground_307_52: {
    width: wp("102.0536847795759%"),
    minWidth: wp("102.0536847795759%"),
    height: hp("265.8587012786032%"),
    minHeight: hp("265.8587012786032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.86411830357142%"),
    top: hp("57.519597955088805%")
  },
  ImageBackground_307_53: {
    width: wp("175.7752162388393%"),
    minWidth: wp("175.7752162388393%"),
    height: hp("273.94015619663594%"),
    minHeight: hp("273.94015619663594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.40665108816964%"),
    top: hp("122.41441070056354%")
  },
  View_307_54: {
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
  View_298_66: {
    width: wp("19.071428571428573%"),
    minWidth: wp("19.071428571428573%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857142857142858%"),
    top: hp("26.912568306010932%")
  },
  Text_298_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_298_67: {
    width: wp("35.92857142857142%"),
    minWidth: wp("35.92857142857142%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857142857142858%"),
    top: hp("62.97814207650273%")
  },
  Text_298_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_298_68: {
    width: wp("77.14285714285715%"),
    minWidth: wp("77.14285714285715%"),
    minHeight: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857142857142858%"),
    top: hp("32.650273224043715%")
  },
  Text_298_68: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_298_69: {
    width: wp("77.28571428571429%"),
    minWidth: wp("77.28571428571429%"),
    minHeight: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857142857142858%"),
    top: hp("68.71584699453553%")
  },
  Text_298_69: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
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
