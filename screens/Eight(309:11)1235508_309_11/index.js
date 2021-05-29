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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/457e/47a3/578e5c44577d55067c1410646a7faeb2"
        }}
        style={styles.ImageBackground_309_12}
      />
      <View style={styles.View_309_13} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9623/b5ed/c038e38f1a5362a3a0b3f481e4e580d7"
        }}
        style={styles.ImageBackground_309_14}
      />
      <View style={styles.View_309_15}>
        <Text style={styles.Text_309_15}>Search/Menu Screen</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.95081967213115%") },
  ImageBackground_309_12: {
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
  View_309_13: {
    width: wp("20.857142857142858%"),
    minWidth: wp("20.857142857142858%"),
    height: hp("82.37704918032787%"),
    minHeight: hp("82.37704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.42857142857142%"),
    top: hp("35.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_309_14: {
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
  View_309_15: {
    width: wp("22.642857142857142%"),
    minWidth: wp("22.642857142857142%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.714285714285715%"),
    top: hp("9.972677595628415%")
  },
  Text_309_15: {
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
