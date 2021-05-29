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
      <View style={styles.View_319_4}>
        <View style={styles.View_319_1}>
          <Text style={styles.Text_319_1}>Marvis </Text>
        </View>
        <View style={styles.View_319_2}>
          <Text style={styles.Text_319_2}>Product design</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19f0/ae70/4873706478d48abffaddbcb8691261a6"
          }}
          style={styles.ImageBackground_319_3}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("100%") },
  View_319_4: {
    width: wp("20.214285714285715%"),
    minWidth: wp("20.214285714285715%"),
    height: hp("16.08695652173913%"),
    minHeight: hp("16.08695652173913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.92857142857143%"),
    top: hp("42.173913043478265%")
  },
  View_319_1: {
    width: wp("4.857142857142857%"),
    minWidth: wp("4.857142857142857%"),
    minHeight: hp("16.08695652173913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_319_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_319_2: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("16.08695652173913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.214285714285715%"),
    top: hp("0%")
  },
  Text_319_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_319_3: {
    width: wp("0.6428571428571428%"),
    minWidth: wp("0.6428571428571428%"),
    height: hp("3.91304347826087%"),
    minHeight: hp("3.91304347826087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.714285714285708%"),
    top: hp("6.0869565217391255%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
