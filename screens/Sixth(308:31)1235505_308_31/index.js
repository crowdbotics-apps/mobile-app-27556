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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3775/c767/599350b60136dccf52354e6edd943056"
        }}
        style={styles.ImageBackground_309_2}
      />
      <View style={styles.View_308_42} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/baef/8916/33a97883cacbece6801bdaa8ce59e6bb"
        }}
        style={styles.ImageBackground_308_43}
      />
      <View style={styles.View_308_44}>
        <Text style={styles.Text_308_44}>Onboarding</Text>
      </View>
      <View style={styles.View_308_47}>
        <Text style={styles.Text_308_47}>
          Use of 3d free characters by a user on dribbble for the onboarrding
          screen and also after some research i found out that users are in need
          when coming to the app, making the login, sign up screen quick to use
          and less clickable.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.95081967213115%") },
  ImageBackground_309_2: {
    width: wp("22.285714285714285%"),
    minWidth: wp("22.285714285714285%"),
    height: hp("89.75409836065575%"),
    minHeight: hp("89.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.07142857142857%"),
    top: hp("25.683060109289617%"),
    resizeMode: "cover",
    borderColor: "rgba(232, 46, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_308_42: {
    width: wp("20.857142857142858%"),
    minWidth: wp("20.857142857142858%"),
    height: hp("82.37704918032787%"),
    minHeight: hp("82.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_308_43: {
    width: wp("22.285714285714285%"),
    minWidth: wp("22.285714285714285%"),
    height: hp("89.75409836065575%"),
    minHeight: hp("89.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.857142857142858%"),
    top: hp("25.683060109289617%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_308_44: {
    width: wp("13.214285714285715%"),
    minWidth: wp("13.214285714285715%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.42857142857143%"),
    top: hp("9.972677595628415%")
  },
  Text_308_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_308_47: {
    width: wp("84.21428571428572%"),
    minWidth: wp("84.21428571428572%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.928571428571428%"),
    top: hp("14.617486338797814%")
  },
  Text_308_47: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
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
