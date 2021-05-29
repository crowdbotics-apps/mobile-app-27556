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
      <View style={styles.View_349_1}>
        <Text style={styles.Text_349_1}>Checkout</Text>
      </View>
      <View style={styles.View_349_2}>
        <Text style={styles.Text_349_2}>Payment</Text>
      </View>
      <View style={styles.View_349_3} />
      <View style={styles.View_349_4}>
        <Text style={styles.Text_349_4}>Proceed to payment</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
        }}
        style={styles.ImageBackground_349_5}
      />
      <View style={styles.View_349_7}>
        <View style={styles.View_349_8}>
          <Text style={styles.Text_349_8}>Total</Text>
        </View>
        <View style={styles.View_349_9}>
          <Text style={styles.Text_349_9}>23,000</Text>
        </View>
      </View>
      <View style={styles.View_349_10}>
        <View style={styles.View_349_11}>
          <Text style={styles.Text_349_11}>Payment method</Text>
        </View>
        <View style={styles.View_349_12} />
        <View style={styles.View_349_13}>
          <View style={styles.View_349_14}>
            <Text style={styles.Text_349_14}>Card</Text>
          </View>
          <View style={styles.View_349_15} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46d0/8816/5402dfaee1a9614fcb37ed67917a77e5"
            }}
            style={styles.ImageBackground_349_16}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dff/cc2d/d7470e2a923379fcb9b03a3d4f72a108"
            }}
            style={styles.ImageBackground_349_17}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e537/2fb2/3b0c448c428e13b61d512f6a8df12ae3"
            }}
            style={styles.ImageBackground_349_18}
          />
        </View>
        <View style={styles.View_349_19}>
          <View style={styles.View_349_20}>
            <Text style={styles.Text_349_20}>Bank account</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1470/ed1b/60826432791b0f83450a6f331d94f7d7"
            }}
            style={styles.ImageBackground_349_21}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1033/7bd0/ab22bfdb424f43fd0ca76b4c1cf163ed"
            }}
            style={styles.ImageBackground_349_22}
          />
        </View>
        <View style={styles.View_349_23}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31d3/2f70/e945b6bab0f90149ef9938ce7eef224d"
            }}
            style={styles.ImageBackground_349_24}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2af9/79bf/df864e31fdd3121ff7253be5d0233612"
          }}
          style={styles.ImageBackground_349_26}
        />
      </View>
      <View style={styles.View_349_28}>
        <View style={styles.View_349_29}>
          <Text style={styles.Text_349_29}>Delivery method.</Text>
        </View>
        <View style={styles.View_349_30} />
        <View style={styles.View_349_31}>
          <View style={styles.View_349_32}>
            <Text style={styles.Text_349_32}>Door delivery</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46d0/8816/5402dfaee1a9614fcb37ed67917a77e5"
            }}
            style={styles.ImageBackground_349_33}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dff/cc2d/d7470e2a923379fcb9b03a3d4f72a108"
            }}
            style={styles.ImageBackground_349_34}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e537/2fb2/3b0c448c428e13b61d512f6a8df12ae3"
            }}
            style={styles.ImageBackground_349_35}
          />
        </View>
        <View style={styles.View_349_36}>
          <View style={styles.View_349_37}>
            <Text style={styles.Text_349_37}>Pick up</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1033/7bd0/ab22bfdb424f43fd0ca76b4c1cf163ed"
            }}
            style={styles.ImageBackground_349_38}
          />
        </View>
      </View>
      <View style={styles.View_349_39} />
      <View style={styles.View_349_40} />
      <View style={styles.View_350_3} />
      <View style={styles.View_349_42}>
        <Text style={styles.Text_349_42}>Please note</Text>
      </View>
      <View style={styles.View_349_46}>
        <Text style={styles.Text_349_46}> N1000 - N2000</Text>
      </View>
      <View style={styles.View_350_0}>
        <Text style={styles.Text_350_0}>Delivery to Mainland</Text>
      </View>
      <View style={styles.View_350_1}>
        <Text style={styles.Text_350_1}>Delivery to island</Text>
      </View>
      <View style={styles.View_349_48}>
        <Text style={styles.Text_349_48}>N2000 - N3000</Text>
      </View>
      <View style={styles.View_349_45} />
      <View style={styles.View_349_43}>
        <Text style={styles.Text_349_43}>Proceed</Text>
      </View>
      <View style={styles.View_349_44}>
        <Text style={styles.Text_349_44}>Cancel</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e701/c6e7/15d295521dc80f70d7764e0d12c85ac9"
        }}
        style={styles.ImageBackground_350_2}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_349_1: {
    width: wp("20.531400966183575%"),
    minWidth: wp("20.531400966183575%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("8.333333333333332%")
  },
  Text_349_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_2: {
    width: wp("35.26570048309179%"),
    minWidth: wp("35.26570048309179%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("16.939890710382514%")
  },
  Text_349_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_3: {
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
  View_349_4: {
    width: wp("40.57971014492754%"),
    minWidth: wp("40.57971014492754%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.71014492753623%"),
    top: hp("110.65573770491804%")
  },
  Text_349_4: {
    color: "rgba(246, 246, 249, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_5: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%")
  },
  View_349_7: {
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
  View_349_8: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737707%")
  },
  Text_349_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_9: {
    width: wp("18.84057971014493%"),
    minWidth: wp("18.84057971014493%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.2463768115942%"),
    top: hp("0%")
  },
  Text_349_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_10: {
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
  View_349_11: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.72463768115942%"),
    top: hp("0%")
  },
  Text_349_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_12: {
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
  View_349_13: {
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
  View_349_14: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304344%"),
    top: hp("1.3661202185792334%")
  },
  Text_349_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_15: {
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
  ImageBackground_349_16: {
    width: wp("56.038647342995176%"),
    minWidth: wp("56.038647342995176%"),
    height: hp("0.0000027707766029345067%"),
    minHeight: hp("0.0000027707766029345067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594207%"),
    top: hp("7.513661202185794%")
  },
  ImageBackground_349_17: {
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
  ImageBackground_349_18: {
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
  View_349_19: {
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
  View_349_20: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304344%"),
    top: hp("1.3661202185792334%")
  },
  Text_349_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_21: {
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
  ImageBackground_349_22: {
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
  View_349_23: {
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
  ImageBackground_349_24: {
    width: wp("3.864734299516908%"),
    height: hp("1.639344262295082%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_349_26: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("18.989071038251364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.734299516908212%")
  },
  View_349_28: {
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
  View_349_29: {
    width: wp("34.54106280193236%"),
    minWidth: wp("34.54106280193236%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594182%"),
    top: hp("0%")
  },
  Text_349_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_30: {
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
  View_349_31: {
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
  View_349_32: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("0%")
  },
  Text_349_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_33: {
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
  ImageBackground_349_34: {
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
  ImageBackground_349_35: {
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
  View_349_36: {
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
  View_349_37: {
    width: wp("14.251207729468598%"),
    minWidth: wp("14.251207729468598%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("0%")
  },
  Text_349_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_349_38: {
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
  View_349_39: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_349_40: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("43.98907103825137%"),
    minHeight: hp("43.98907103825137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("41.80327868852459%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_350_3: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("9.01639344262295%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.83574879227053%"),
    top: hp("41.80327868852459%"),
    backgroundColor: "rgba(237, 237, 237, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_349_42: {
    width: wp("28.26086956521739%"),
    minWidth: wp("28.26086956521739%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("44.12568306010929%")
  },
  Text_349_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_46: {
    width: wp("29.468599033816425%"),
    minWidth: wp("29.468599033816425%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.73913043478261%"),
    top: hp("56.01092896174863%")
  },
  Text_349_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_350_0: {
    width: wp("40.09661835748793%"),
    minWidth: wp("40.09661835748793%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("53.278688524590166%")
  },
  Text_350_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_350_1: {
    width: wp("34.05797101449276%"),
    minWidth: wp("34.05797101449276%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("64.20765027322405%")
  },
  Text_350_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_349_48: {
    width: wp("29.71014492753623%"),
    minWidth: wp("29.71014492753623%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("67.07650273224044%")
  },
  Text_349_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_45: {
    width: wp("38.405797101449274%"),
    minWidth: wp("38.405797101449274%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.169082125603865%"),
    top: hp("75.27322404371584%"),
    backgroundColor: "rgba(250, 74, 12, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_349_43: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.79710144927537%"),
    top: hp("77.59562841530054%")
  },
  Text_349_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_349_44: {
    width: wp("14.975845410628018%"),
    minWidth: wp("14.975845410628018%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("77.59562841530054%")
  },
  Text_349_44: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_350_2: {
    width: wp("57.971014492753625%"),
    minWidth: wp("57.971014492753625%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.705314009661837%"),
    top: hp("61.885245901639344%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
