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
      <View style={styles.View_384_0} />
      <View style={styles.View_384_13} />
      <View style={styles.View_384_16} />
      <View style={styles.View_384_1}>
        <Text style={styles.Text_384_1}>Christ Untouchable Bible Assembly</Text>
      </View>
      <View style={styles.View_384_14}>
        <Text style={styles.Text_384_14}>
          Church Auditorium No 10 Godwin Ayemi Street opp the parked aeroplane ,
          okuokoko delta state.
        </Text>
      </View>
      <View style={styles.View_384_11}>
        <Text style={styles.Text_384_11}>Rev. Tina Dumebi Smart</Text>
      </View>
      <View style={styles.View_384_17}>
        <Text style={styles.Text_384_17}>Month of</Text>
      </View>
      <View style={styles.View_384_12}>
        <Text style={styles.Text_384_12}>Host </Text>
      </View>
      <View style={styles.View_384_3}>
        <Text style={styles.Text_384_3}>A.K.A TRANSFORMING SOULS</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("204.91803278688522%") },
  View_384_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("204.91803278688522%"),
    minHeight: hp("204.91803278688522%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_384_13: {
    width: wp("24.933333333333334%"),
    minWidth: wp("24.933333333333334%"),
    height: hp("12.704918032786885%"),
    minHeight: hp("12.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%"),
    top: hp("51.229508196721305%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_384_16: {
    width: wp("25.8%"),
    minWidth: wp("25.8%"),
    height: hp("14.617486338797814%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.2%"),
    top: hp("113.66120218579235%"),
    backgroundColor: "rgba(252, 236, 199, 1)"
  },
  View_384_1: {
    width: wp("26.6%"),
    minWidth: wp("26.6%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.466666666666665%"),
    top: hp("12.295081967213115%")
  },
  Text_384_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 28,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_384_14: {
    width: wp("61.266666666666666%"),
    minWidth: wp("61.266666666666666%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.866666666666667%"),
    top: hp("187.43169398907105%")
  },
  Text_384_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_384_11: {
    width: wp("20.666666666666668%"),
    minWidth: wp("20.666666666666668%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.46666666666667%"),
    top: hp("52.322404371584696%")
  },
  Text_384_11: {
    color: "rgba(24, 12, 8, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_384_17: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.93333333333334%"),
    top: hp("116.66666666666667%")
  },
  Text_384_17: {
    color: "rgba(24, 12, 8, 1)",
    fontSize: 44,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_384_12: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.53333333333333%"),
    top: hp("57.650273224043715%")
  },
  Text_384_12: {
    color: "rgba(255, 37, 103, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_384_3: {
    width: wp("23.666666666666668%"),
    minWidth: wp("23.666666666666668%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.466666666666665%"),
    top: hp("27.322404371584703%")
  },
  Text_384_3: {
    color: "rgba(255, 115, 115, 1)",
    fontSize: 20,
    fontWeight: "700",
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
