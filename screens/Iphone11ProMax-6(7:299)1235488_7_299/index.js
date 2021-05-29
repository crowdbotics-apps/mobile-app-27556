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
      <View style={styles.View_7_304}>
        <Text style={styles.Text_7_304}>Payment Method</Text>
      </View>
      <View style={styles.View_7_328}>
        <Text style={styles.Text_7_328}>Information</Text>
      </View>
      <View style={styles.View_7_329} />
      <View style={styles.View_7_330} />
      <View style={styles.View_7_318}>
        <Text style={styles.Text_7_318}>My profile</Text>
      </View>
      <View style={styles.View_7_322}>
        <Text style={styles.Text_7_322}>Marvis Ighedosa</Text>
      </View>
      <View style={styles.View_7_323}>
        <Text style={styles.Text_7_323}>dosamarvis@gmail.com</Text>
      </View>
      <View style={styles.View_7_324}>
        <Text style={styles.Text_7_324}>
          No 15 uti street off ovie palace road effurun delta state
        </Text>
      </View>
      <View style={styles.View_7_315} />
      <View style={styles.View_7_316}>
        <Text style={styles.Text_7_316}>Updatet</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
        }}
        style={styles.ImageBackground_7_319}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3ba/cd5f/b75a682529bb42853297393b961055b4"
        }}
        style={styles.ImageBackground_7_321}
      />
      <View style={styles.View_7_341}>
        <View style={styles.View_7_331}>
          <Text style={styles.Text_7_331}>Card</Text>
        </View>
        <View style={styles.View_7_334} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46d0/8816/5402dfaee1a9614fcb37ed67917a77e5"
          }}
          style={styles.ImageBackground_7_336}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dff/cc2d/d7470e2a923379fcb9b03a3d4f72a108"
          }}
          style={styles.ImageBackground_7_339}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e537/2fb2/3b0c448c428e13b61d512f6a8df12ae3"
          }}
          style={styles.ImageBackground_7_340}
        />
      </View>
      <View style={styles.View_7_342}>
        <View style={styles.View_7_343}>
          <Text style={styles.Text_7_343}>Bank account</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1470/ed1b/60826432791b0f83450a6f331d94f7d7"
          }}
          style={styles.ImageBackground_7_344}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46d0/8816/5402dfaee1a9614fcb37ed67917a77e5"
          }}
          style={styles.ImageBackground_7_345}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1033/7bd0/ab22bfdb424f43fd0ca76b4c1cf163ed"
          }}
          style={styles.ImageBackground_7_346}
        />
      </View>
      <View style={styles.View_7_348}>
        <View style={styles.View_7_349}>
          <Text style={styles.Text_7_349}>Paypal</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fc7/eaae/e52d5b7c5d91213b4488e14c64cebebd"
          }}
          style={styles.ImageBackground_7_350}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1033/7bd0/ab22bfdb424f43fd0ca76b4c1cf163ed"
          }}
          style={styles.ImageBackground_7_352}
        />
      </View>
      <View style={styles.View_7_354}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31d3/2f70/e945b6bab0f90149ef9938ce7eef224d"
          }}
          style={styles.ImageBackground_7_355}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2af9/79bf/df864e31fdd3121ff7253be5d0233612"
        }}
        style={styles.ImageBackground_7_357}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fe5/09c3/e47dd325df2955c5f071d23e64bfa1f5"
        }}
        style={styles.ImageBackground_7_359}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_7_304: {
    width: wp("34.29951690821256%"),
    minWidth: wp("34.29951690821256%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("47.950819672131146%")
  },
  Text_7_304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_328: {
    width: wp("23.42995169082126%"),
    minWidth: wp("23.42995169082126%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.80193236714976%"),
    top: hp("18.852459016393443%")
  },
  Text_7_328: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_329: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("23.224043715846996%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_330: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("31.557377049180328%"),
    minHeight: hp("31.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("53.551912568306015%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_7_318: {
    width: wp("21.497584541062803%"),
    minWidth: wp("21.497584541062803%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.88888888888889%"),
    top: hp("8.333333333333332%")
  },
  Text_7_318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_322: {
    width: wp("35.26570048309179%"),
    minWidth: wp("35.26570048309179%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.05797101449276%"),
    top: hp("25.956284153005466%")
  },
  Text_7_322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_323: {
    width: wp("35.02415458937198%"),
    minWidth: wp("35.02415458937198%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.05797101449276%"),
    top: hp("30.05464480874317%")
  },
  Text_7_323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_324: {
    width: wp("46.13526570048309%"),
    minWidth: wp("46.13526570048309%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.05797101449276%"),
    top: hp("33.46994535519126%")
  },
  Text_7_324: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_315: {
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
  View_7_316: {
    width: wp("16.425120772946862%"),
    minWidth: wp("16.425120772946862%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.78743961352657%"),
    top: hp("110.65573770491804%")
  },
  Text_7_316: {
    color: "rgba(246, 246, 249, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_319: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%")
  },
  ImageBackground_7_321: {
    width: wp("14.492753623188406%"),
    minWidth: wp("14.492753623188406%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.942028985507244%"),
    top: hp("25.956284153005466%")
  },
  View_7_341: {
    width: wp("63.28502415458937%"),
    minWidth: wp("63.28502415458937%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.14975845410628%"),
    top: hp("56.284153005464475%")
  },
  View_7_331: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304348%"),
    top: hp("1.3661202185792405%")
  },
  Text_7_331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_334: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("0%"),
    backgroundColor: "rgba(244, 123, 10, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_7_336: {
    width: wp("56.038647342995176%"),
    minWidth: wp("56.038647342995176%"),
    height: hp("0.0000027707768514303264%"),
    minHeight: hp("0.0000027707768514303264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("7.513661202185794%")
  },
  ImageBackground_7_339: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371688%")
  },
  ImageBackground_7_340: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    height: hp("0.9562841530054645%"),
    minHeight: hp("0.9562841530054645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9661835748792278%"),
    top: hp("2.0491803278688607%")
  },
  View_7_342: {
    width: wp("63.28502415458937%"),
    minWidth: wp("63.28502415458937%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.14975845410628%"),
    top: hp("65.84699453551912%")
  },
  View_7_343: {
    width: wp("26.32850241545894%"),
    minWidth: wp("26.32850241545894%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304348%"),
    top: hp("1.3661202185792405%")
  },
  Text_7_343: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_344: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("0%")
  },
  ImageBackground_7_345: {
    width: wp("56.038647342995176%"),
    minWidth: wp("56.038647342995176%"),
    height: hp("0.0000027707768514303264%"),
    minHeight: hp("0.0000027707768514303264%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("7.513661202185801%")
  },
  ImageBackground_7_346: {
    width: wp("3.6231884057971016%"),
    minWidth: wp("3.6231884057971016%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371688%")
  },
  View_7_348: {
    width: wp("32.367149758454104%"),
    minWidth: wp("32.367149758454104%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.14975845410628%"),
    top: hp("75.40983606557377%")
  },
  View_7_349: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.565217391304348%"),
    top: hp("1.3661202185792263%")
  },
  Text_7_349: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_350: {
    width: wp("9.66183574879227%"),
    minWidth: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.246376811594203%"),
    top: hp("0%")
  },
  ImageBackground_7_352: {
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
  View_7_354: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057973%"),
    top: hp("57.786885245901644%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_7_355: {
    width: wp("3.864734299516908%"),
    height: hp("1.639344262295082%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_7_357: {
    width: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    top: hp("67.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.811594202898554%")
  },
  ImageBackground_7_359: {
    width: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    top: hp("77.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.294685990338163%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
