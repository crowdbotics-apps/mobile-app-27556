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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a73a/8be2/18e3732a0babc3c757632c01563ef236"
        }}
        style={styles.ImageBackground_309_5}
      />
      <View style={styles.View_309_6} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8167/c905/c6cae0cf6ec604c8f74409d218bf008c"
        }}
        style={styles.ImageBackground_309_7}
      />
      <View style={styles.View_309_8}>
        <Text style={styles.Text_309_8}>Main screens</Text>
      </View>
      <View style={styles.View_309_9}>
        <Text style={styles.Text_309_9}>
          Shop, categories, and search: colors, font sizes, and product listing
          layout were determined by running multiple A/B tests. For the listing,
          it turned out that a grid arrangement slightly increased the
          conversions, thanks to its professionally shot pictures.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.95081967213115%") },
  ImageBackground_309_5: {
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
  View_309_6: {
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
  ImageBackground_309_7: {
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
  View_309_8: {
    width: wp("14.499999999999998%"),
    minWidth: wp("14.499999999999998%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.785714285714285%"),
    top: hp("9.972677595628415%")
  },
  Text_309_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_309_9: {
    width: wp("84.21428571428572%"),
    minWidth: wp("84.21428571428572%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.928571428571428%"),
    top: hp("14.617486338797814%")
  },
  Text_309_9: {
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
