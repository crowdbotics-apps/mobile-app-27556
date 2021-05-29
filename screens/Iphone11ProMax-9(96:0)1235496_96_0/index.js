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
      <View style={styles.View_96_1}>
        <Text style={styles.Text_96_1}>Checkout</Text>
      </View>
      <View style={styles.View_96_2}>
        <Text style={styles.Text_96_2}>Payment</Text>
      </View>
      <View style={styles.View_96_3} />
      <View style={styles.View_96_4}>
        <Text style={styles.Text_96_4}>Proceed to payment</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
        }}
        style={styles.ImageBackground_96_5}
      />
      <View style={styles.View_96_18}>
        <View style={styles.View_96_20}>
          <Text style={styles.Text_96_20}>Total</Text>
        </View>
        <View style={styles.View_96_21}>
          <Text style={styles.Text_96_21}>23,000</Text>
        </View>
      </View>
      <View style={styles.View_95_62}>
        <View style={styles.View_95_63}>
          <Text style={styles.Text_95_63}>Payment method</Text>
        </View>
        <View style={styles.View_95_64} />
        <View style={styles.View_95_65}>
          <View style={styles.View_95_66}>
            <Text style={styles.Text_95_66}>Card</Text>
          </View>
          <View style={styles.View_95_67} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46d0/8816/5402dfaee1a9614fcb37ed67917a77e5"
            }}
            style={styles.ImageBackground_95_68}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dff/cc2d/d7470e2a923379fcb9b03a3d4f72a108"
            }}
            style={styles.ImageBackground_95_69}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e537/2fb2/3b0c448c428e13b61d512f6a8df12ae3"
            }}
            style={styles.ImageBackground_95_70}
          />
        </View>
        <View style={styles.View_95_71}>
          <View style={styles.View_95_72}>
            <Text style={styles.Text_95_72}>Bank account</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1470/ed1b/60826432791b0f83450a6f331d94f7d7"
            }}
            style={styles.ImageBackground_95_73}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1033/7bd0/ab22bfdb424f43fd0ca76b4c1cf163ed"
            }}
            style={styles.ImageBackground_95_74}
          />
        </View>
        <View style={styles.View_95_75}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31d3/2f70/e945b6bab0f90149ef9938ce7eef224d"
            }}
            style={styles.ImageBackground_95_76}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2af9/79bf/df864e31fdd3121ff7253be5d0233612"
          }}
          style={styles.ImageBackground_95_78}
        />
      </View>
      <View style={styles.View_127_27}>
        <View style={styles.View_127_28}>
          <Text style={styles.Text_127_28}>Delivery method.</Text>
        </View>
        <View style={styles.View_127_31} />
        <View style={styles.View_127_32}>
          <View style={styles.View_127_33}>
            <Text style={styles.Text_127_33}>Door delivery</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46d0/8816/5402dfaee1a9614fcb37ed67917a77e5"
            }}
            style={styles.ImageBackground_127_34}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dff/cc2d/d7470e2a923379fcb9b03a3d4f72a108"
            }}
            style={styles.ImageBackground_127_35}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e537/2fb2/3b0c448c428e13b61d512f6a8df12ae3"
            }}
            style={styles.ImageBackground_127_36}
          />
        </View>
        <View style={styles.View_127_37}>
          <View style={styles.View_127_38}>
            <Text style={styles.Text_127_38}>Pick up</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1033/7bd0/ab22bfdb424f43fd0ca76b4c1cf163ed"
            }}
            style={styles.ImageBackground_127_39}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_96_1: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("8.333333333333332%")
  },
  Text_96_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_2: {
    width: wp("35.26570048309179%"),
    minWidth: wp("35.26570048309179%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("16.939890710382514%")
  },
  Text_96_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_3: {
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
  View_96_4: {
    width: wp("40.57971014492754%"),
    minWidth: wp("40.57971014492754%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.71014492753623%"),
    top: hp("110.65573770491804%")
  },
  Text_96_4: {
    color: "rgba(246, 246, 249, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_96_5: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%")
  },
  View_96_18: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("97.1311475409836%")
  },
  View_96_20: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_96_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_96_21: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.2463768115942%"),
    top: hp("0%")
  },
  Text_96_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_62: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("33.46994535519126%"),
    minHeight: hp("33.46994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.11111111111111%"),
    top: hp("29.098360655737704%")
  },
  View_95_63: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.72463768115942%"),
    top: hp("0%")
  },
  Text_95_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_64: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("28.005464480874316%"),
    minHeight: hp("28.005464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.464480874316937%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_95_65: {
    width: wp("63.28502415458937%"),
    minWidth: wp("63.28502415458937%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0724637681159415%"),
    top: hp("8.196721311475411%")
  },
  View_95_66: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304344%"),
    top: hp("1.3661202185792334%")
  },
  Text_95_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_67: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594207%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 123, 10, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_95_68: {
    width: wp("56.038647342995176%"),
    minWidth: wp("56.038647342995176%"),
    height: hp("0.0000027707768514303264%"),
    minHeight: hp("0.0000027707768514303264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594207%"),
    top: hp("7.513661202185794%")
  },
  ImageBackground_95_69: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%")
  },
  ImageBackground_95_70: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792278%"),
    top: hp("2.0491803278688536%")
  },
  View_95_71: {
    width: wp("45.893719806763286%"),
    minWidth: wp("45.893719806763286%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.0724637681159415%"),
    top: hp("17.75956284153006%")
  },
  View_95_72: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304344%"),
    top: hp("1.3661202185792334%")
  },
  Text_95_72: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_95_73: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594207%"),
    top: hp("0%")
  },
  ImageBackground_95_74: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%")
  },
  View_95_75: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067634%"),
    top: hp("9.699453551912566%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_95_76: {
    width: wp("3.864734299516908%"),
    height: hp("1.639344262295082%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_95_78: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908212%")
  },
  View_127_27: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.318840579710146%"),
    top: hp("65.1639344262295%")
  },
  View_127_28: {
    width: wp("34.54106280193236%"),
    minWidth: wp("34.54106280193236%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594182%"),
    top: hp("0%")
  },
  Text_127_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_127_31: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("21.311475409836063%"),
    minHeight: hp("21.311475409836063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.4644808743169335%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_127_32: {
    width: wp("63.28502415458937%"),
    minWidth: wp("63.28502415458937%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.07246376811594%"),
    top: hp("9.562841530054655%")
  },
  View_127_33: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("0%")
  },
  Text_127_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_127_34: {
    width: wp("56.038647342995176%"),
    minWidth: wp("56.038647342995176%"),
    height: hp("0.0000027707766029345067%"),
    minHeight: hp("0.0000027707766029345067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594207%"),
    top: hp("6.147540983606561%")
  },
  ImageBackground_127_35: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  },
  ImageBackground_127_36: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792278%"),
    top: hp("0.6830601092896131%")
  },
  View_127_37: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.07246376811594%"),
    top: hp("19.125683060109296%")
  },
  View_127_38: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("0%")
  },
  Text_127_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_127_39: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
