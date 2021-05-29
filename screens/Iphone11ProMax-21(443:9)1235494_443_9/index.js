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
      <View style={styles.View_443_11}>
        <Text style={styles.Text_443_11}>My offers</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
        }}
        style={styles.ImageBackground_443_14}
      />
      <View style={styles.View_443_40}>
        <Text style={styles.Text_443_40}>ohh snap! No offers yet</Text>
      </View>
      <View style={styles.View_443_41}>
        <Text style={styles.Text_443_41}>
          Bella dose’t have any offers yet please check again.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_443_11: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("16.939890710382514%")
  },
  Text_443_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1.7000000000000002,
    textTransform: "none"
  },
  ImageBackground_443_14: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%")
  },
  View_443_40: {
    width: wp("77.29468599033817%"),
    minWidth: wp("77.29468599033817%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.352657004830919%"),
    top: hp("66.66666666666666%")
  },
  Text_443_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.56,
    textTransform: "none"
  },
  View_443_41: {
    width: wp("56.28019323671497%"),
    minWidth: wp("56.28019323671497%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.980676328502415%"),
    top: hp("73.49726775956285%")
  },
  Text_443_41: {
    color: "rgba(0, 0, 0, 1)",
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
