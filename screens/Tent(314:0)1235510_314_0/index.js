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
      <View style={styles.View_314_4}>
        <Text style={styles.Text_314_4}>Thank you for sticking to the end</Text>
      </View>
      <View style={styles.View_315_11}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/beda/2c6a/80293729e8aafcf0111007fcdeae5c89"
          }}
          style={styles.ImageBackground_315_10}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fed/0e7d/7cd28ef3ffeb0eecfb21890583584284"
          }}
          style={styles.ImageBackground_315_2}
        />
      </View>
      <View style={styles.View_315_12}>
        <Text style={styles.Text_315_12}>
          Shot me a mail at dosamarvis@gmail.com
        </Text>
      </View>
      <View style={styles.View_315_13}>
        <Text style={styles.Text_315_13}>Lets work together</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.95081967213115%") },
  View_314_4: {
    width: wp("35.214285714285715%"),
    minWidth: wp("35.214285714285715%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.428571428571427%"),
    top: hp("9.972677595628415%")
  },
  Text_314_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_315_11: {
    width: wp("20.142857142857142%"),
    minWidth: wp("20.142857142857142%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("22.950819672131146%")
  },
  ImageBackground_315_10: {
    width: wp("20.142857142857142%"),
    minWidth: wp("20.142857142857142%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_315_2: {
    width: wp("20.142857142857142%"),
    minWidth: wp("20.142857142857142%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_315_12: {
    width: wp("27.357142857142858%"),
    minWidth: wp("27.357142857142858%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35714285714286%"),
    top: hp("85.10928961748634%")
  },
  Text_315_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_315_13: {
    width: wp("19.071428571428573%"),
    minWidth: wp("19.071428571428573%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.5%"),
    top: hp("71.17486338797814%")
  },
  Text_315_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "700",
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
