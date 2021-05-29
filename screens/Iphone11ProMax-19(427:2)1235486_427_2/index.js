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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/afc2/15d4/3d1581d121df8a66a72941d3d1a40d27"
        }}
        style={styles.ImageBackground_428_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2138/5b7d/7b92309b3c13f19d66e1813e48136fb9"
        }}
        style={styles.ImageBackground_427_13}
      />
      <View style={styles.View_427_11}>
        <Text style={styles.Text_427_11}>Food for Everyone</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/86fd/222f/608f29d49ff295a4a5cbb5feebe4e614"
        }}
        style={styles.ImageBackground_428_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2666/fc03/021c45467cd0d7050e4ba3f42eafe1c6"
        }}
        style={styles.ImageBackground_428_2}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_428_0: {
    width: wp("63.28502415458937%"),
    minWidth: wp("63.28502415458937%"),
    height: hp("35.79234972677596%"),
    minHeight: hp("35.79234972677596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.357487922705314%"),
    top: hp("43.30601092896175%")
  },
  ImageBackground_427_13: {
    width: wp("59.17874396135265%"),
    minWidth: wp("59.17874396135265%"),
    height: hp("41.12021857923497%"),
    minHeight: hp("41.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.28985507246377%"),
    top: hp("37.97814207650273%")
  },
  View_427_11: {
    width: wp("41.06280193236715%"),
    minWidth: wp("41.06280193236715%"),
    minHeight: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.468599033816425%"),
    top: hp("63.52459016393443%")
  },
  Text_427_11: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  ImageBackground_428_1: {
    width: wp("9.348657396104601%"),
    minWidth: wp("9.348657396104601%"),
    height: hp("5.2645990757342895%"),
    minHeight: hp("5.2645990757342895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.43985482920771%"),
    top: hp("68.3164419372225%")
  },
  ImageBackground_428_2: {
    width: wp("7.353574872592797%"),
    minWidth: wp("7.353574872592797%"),
    height: hp("4.09072083853633%"),
    minHeight: hp("4.09072083853633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.312939814323386%"),
    top: hp("68.37175713210809%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
