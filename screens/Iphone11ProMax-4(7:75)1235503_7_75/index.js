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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
        }}
        style={styles.ImageBackground_7_114}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec75/5288/5b5d7f3ce5eff7541a71cff17fddd411"
        }}
        style={styles.ImageBackground_7_116}
      />
      <View style={styles.View_7_120}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28a2/0d2a/89663e30a9ec9f65a29862cc98c616c4"
          }}
          style={styles.ImageBackground_7_121}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/545c/3a58/79f3efbe31a1cd9384493341dd683b04"
          }}
          style={styles.ImageBackground_7_122}
        />
      </View>
      <View style={styles.View_7_123}>
        <Text style={styles.Text_7_123}>Veggie tomato mix</Text>
      </View>
      <View style={styles.View_7_132}>
        <Text style={styles.Text_7_132}>Delivery info</Text>
      </View>
      <View style={styles.View_7_134}>
        <Text style={styles.Text_7_134}>Return policy</Text>
      </View>
      <View style={styles.View_7_133}>
        <Text style={styles.Text_7_133}>
          Delivered between monday aug and thursday 20 from 8pm to 91:32 pm
        </Text>
      </View>
      <View style={styles.View_7_135}>
        <Text style={styles.Text_7_135}>
          All our foods are double checked before leaving our stores so by any
          case you found a broken food please contact our hotline immediately.
        </Text>
      </View>
      <View style={styles.View_7_124}>
        <Text style={styles.Text_7_124}>N1,900</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e51f/e377/51fdbeeebf55dd663b186200ed0e30ef"
        }}
        style={styles.ImageBackground_7_129}
      />
      <View style={styles.View_7_130} />
      <View style={styles.View_7_131}>
        <Text style={styles.Text_7_131}>Add to cart</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_7_114: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%")
  },
  ImageBackground_7_116: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.1256038647343%")
  },
  View_7_120: {
    width: wp("58.262590048969656%"),
    minWidth: wp("58.262590048969656%"),
    height: hp("32.95179273261399%"),
    minHeight: hp("32.95179273261399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.77294685990338%"),
    top: hp("12.841530054644808%")
  },
  ImageBackground_7_121: {
    width: wp("58.262590048969656%"),
    minWidth: wp("58.262590048969656%"),
    height: hp("32.95179273261399%"),
    minHeight: hp("32.95179273261399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_122: {
    width: wp("58.262590048969656%"),
    minWidth: wp("58.262590048969656%"),
    height: hp("32.95179273261399%"),
    minHeight: hp("32.95179273261399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_123: {
    width: wp("76.81159420289855%"),
    minWidth: wp("76.81159420289855%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550725%"),
    top: hp("58.19672131147541%")
  },
  Text_7_123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_132: {
    width: wp("22.463768115942027%"),
    minWidth: wp("22.463768115942027%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("72.81420765027322%")
  },
  Text_7_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_134: {
    width: wp("23.91304347826087%"),
    minWidth: wp("23.91304347826087%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("87.8415300546448%")
  },
  Text_7_134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_133: {
    width: wp("71.73913043478261%"),
    minWidth: wp("71.73913043478261%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("76.50273224043715%")
  },
  Text_7_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_7_135: {
    width: wp("71.73913043478261%"),
    minWidth: wp("71.73913043478261%"),
    minHeight: hp("21.584699453551913%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("90.98360655737704%")
  },
  Text_7_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "none"
  },
  View_7_124: {
    width: wp("41.54589371980676%"),
    minWidth: wp("41.54589371980676%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.227053140096622%"),
    top: hp("64.34426229508196%")
  },
  Text_7_124: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_129: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.54589371980676%"),
    top: hp("50.95628415300546%")
  },
  View_7_130: {
    width: wp("75.84541062801932%"),
    minWidth: wp("75.84541062801932%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("107.24043715846993%"),
    backgroundColor: "rgba(250, 74, 12, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_131: {
    width: wp("22.705314009661837%"),
    minWidth: wp("22.705314009661837%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.64734299516908%"),
    top: hp("110.65573770491804%")
  },
  Text_7_131: {
    color: "rgba(246, 246, 249, 1)",
    fontSize: 14,
    fontWeight: "600",
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
