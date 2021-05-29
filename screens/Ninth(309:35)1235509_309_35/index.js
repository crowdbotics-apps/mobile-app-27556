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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b8e/9c17/3311902230a414c0a2a8e7460e8d6155"
        }}
        style={styles.ImageBackground_309_36}
      />
      <View style={styles.View_309_37} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/983e/06c9/96c52e07c80388e891cc8b0da4df55dc"
        }}
        style={styles.ImageBackground_309_38}
      />
      <View style={styles.View_309_39}>
        <Text style={styles.Text_309_39}>Cart/payment Screen</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.95081967213115%") },
  ImageBackground_309_36: {
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
  View_309_37: {
    width: wp("20.857142857142858%"),
    minWidth: wp("20.857142857142858%"),
    height: hp("82.37704918032787%"),
    minHeight: hp("82.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.714285714285715%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_309_38: {
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
  View_309_39: {
    width: wp("23.714285714285715%"),
    minWidth: wp("23.714285714285715%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.142857142857146%"),
    top: hp("9.972677595628415%")
  },
  Text_309_39: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "600",
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
