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
      <View style={styles.View_307_33}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/df24/7e6572068dbb9b9a1aa09c2be4399264"
          }}
          style={styles.ImageBackground_307_34}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7d0/880a/04782f08974811a28eabdffb4a1f5f97"
          }}
          style={styles.ImageBackground_307_35}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cff/cdb9/7f9db1f8ffd285789bfee0a888787dc2"
          }}
          style={styles.ImageBackground_307_36}
        />
        <View style={styles.View_307_37} />
      </View>
      <View style={styles.View_298_39}>
        <Text style={styles.Text_298_39}>About Bella Onojie Foods</Text>
      </View>
      <View style={styles.View_298_44}>
        <Text style={styles.Text_298_44}>Target and challenge</Text>
      </View>
      <View style={styles.View_298_40}>
        <Text style={styles.Text_298_40}>
          A client reached out to design and also develop a food app for her
          business (Bella Foods) delivery app. The MVP, designed and developed
          in three months, includes a shipment real-time tracking.The product
          was first directly launched on the market on google playstore , in
          order to test the traction and validate the idea before it was
          released in app store.
        </Text>
      </View>
      <View style={styles.View_298_45}>
        <Text style={styles.Text_298_45}>
          Bella foods has a very clear target, a target that needs an extremely
          easy and fast to use solution. The app looks professional while also
          looking beautiful which distances itself from the normal food delivery
          app usage. Reliability was another key point: the real-time shipment
          tracking solves the usual shipment-related anxiety and builds trust
          from the first checkout.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.95081967213115%") },
  View_307_33: {
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
  ImageBackground_307_34: {
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
  ImageBackground_307_35: {
    width: wp("102.0536847795759%"),
    minWidth: wp("102.0536847795759%"),
    height: hp("265.8587012786032%"),
    minHeight: hp("265.8587012786032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.86411830357142%"),
    top: hp("57.51958544788465%")
  },
  ImageBackground_307_36: {
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
  View_307_37: {
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
  View_298_39: {
    width: wp("30.357142857142854%"),
    minWidth: wp("30.357142857142854%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857142857142858%"),
    top: hp("19.262295081967213%")
  },
  Text_298_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_298_44: {
    width: wp("26.42857142857143%"),
    minWidth: wp("26.42857142857143%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857142857142858%"),
    top: hp("68.98907103825137%")
  },
  Text_298_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_298_40: {
    width: wp("77.14285714285715%"),
    minWidth: wp("77.14285714285715%"),
    minHeight: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857142857142858%"),
    top: hp("25%")
  },
  Text_298_40: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_298_45: {
    width: wp("77.28571428571429%"),
    minWidth: wp("77.28571428571429%"),
    minHeight: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857142857142858%"),
    top: hp("74.72677595628416%")
  },
  Text_298_45: {
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
