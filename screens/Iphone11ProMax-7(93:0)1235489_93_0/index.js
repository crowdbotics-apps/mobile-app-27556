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
      <View style={styles.View_95_36}>
        <View style={styles.View_93_4} />
        <View style={styles.View_93_29}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31d3/2f70/e945b6bab0f90149ef9938ce7eef224d"
            }}
            style={styles.ImageBackground_93_30}
          />
        </View>
        <View style={styles.View_93_83}>
          <Text style={styles.Text_93_83}>Veggie tomato mix</Text>
        </View>
        <View style={styles.View_93_84}>
          <Text style={styles.Text_93_84}>#1,900</Text>
        </View>
        <View style={styles.View_93_79}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a233/1413/b993067a4aa9705df51de94197b1f6bf"
            }}
            style={styles.ImageBackground_93_80}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f49/7fb8/9eb9f0088c9f7720438e8af3be263930"
            }}
            style={styles.ImageBackground_93_81}
          />
        </View>
      </View>
      <View style={styles.View_95_34}>
        <View style={styles.View_95_19} />
        <View style={styles.View_95_20}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31d3/2f70/e945b6bab0f90149ef9938ce7eef224d"
            }}
            style={styles.ImageBackground_95_21}
          />
        </View>
        <View style={styles.View_95_23}>
          <Text style={styles.Text_95_23}>Veggie tomato mix</Text>
        </View>
        <View style={styles.View_95_24}>
          <Text style={styles.Text_95_24}>#1,900</Text>
        </View>
        <View style={styles.View_95_31}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a233/1413/b993067a4aa9705df51de94197b1f6bf"
            }}
            style={styles.ImageBackground_95_32}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f49/7fb8/9eb9f0088c9f7720438e8af3be263930"
            }}
            style={styles.ImageBackground_95_33}
          />
        </View>
      </View>
      <View style={styles.View_95_35}>
        <View style={styles.View_95_3} />
        <View style={styles.View_95_4}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31d3/2f70/e945b6bab0f90149ef9938ce7eef224d"
            }}
            style={styles.ImageBackground_95_5}
          />
        </View>
        <View style={styles.View_95_7}>
          <Text style={styles.Text_95_7}>Fishwith mix orange....</Text>
        </View>
        <View style={styles.View_95_8}>
          <Text style={styles.Text_95_8}>#1,900</Text>
        </View>
        <View style={styles.View_95_9}>
          <View style={styles.View_95_50} />
          <View style={styles.View_95_10}>
            <Text style={styles.Text_95_10}>1</Text>
          </View>
          <View style={styles.View_95_13}>
            <Text style={styles.Text_95_13}>-</Text>
          </View>
          <View style={styles.View_95_14}>
            <Text style={styles.Text_95_14}>+</Text>
          </View>
        </View>
        <View style={styles.View_95_51}>
          <View style={styles.View_95_52} />
          <View style={styles.View_95_53}>
            <Text style={styles.Text_95_53}>1</Text>
          </View>
          <View style={styles.View_95_54}>
            <Text style={styles.Text_95_54}>-</Text>
          </View>
          <View style={styles.View_95_55}>
            <Text style={styles.Text_95_55}>+</Text>
          </View>
        </View>
        <View style={styles.View_95_56}>
          <View style={styles.View_95_57} />
          <View style={styles.View_95_58}>
            <Text style={styles.Text_95_58}>1</Text>
          </View>
          <View style={styles.View_95_59}>
            <Text style={styles.Text_95_59}>-</Text>
          </View>
          <View style={styles.View_95_60}>
            <Text style={styles.Text_95_60}>+</Text>
          </View>
        </View>
        <View style={styles.View_95_15}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a233/1413/b993067a4aa9705df51de94197b1f6bf"
            }}
            style={styles.ImageBackground_95_16}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f49/7fb8/9eb9f0088c9f7720438e8af3be263930"
            }}
            style={styles.ImageBackground_95_17}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/389e/6095/a950714c154397a94cfc6a02d28e0fed"
            }}
            style={styles.ImageBackground_95_18}
          />
        </View>
      </View>
      <View style={styles.View_93_5}>
        <Text style={styles.Text_93_5}>Cart</Text>
      </View>
      <View style={styles.View_93_9} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/981d/488c/18050cfe5a30b88c29273a8021ebe492"
        }}
        style={styles.ImageBackground_95_49}
      />
      <View style={styles.View_93_10}>
        <Text style={styles.Text_93_10}>Complete order</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
        }}
        style={styles.ImageBackground_93_11}
      />
      <View style={styles.View_95_2}>
        <View style={styles.View_93_91}>
          <Text style={styles.Text_93_91}>swipe on an item to delete</Text>
        </View>
        <View style={styles.View_93_92}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e10/dff6/7be6eabe9ece3d4aa8201e0187b56f98"
            }}
            style={styles.ImageBackground_93_93}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9674/8fc5/cdc3fa54333c9c30011bb3e36412e545"
            }}
            style={styles.ImageBackground_93_94}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb57/dcb3/e280fa3e658141b5b5c061093c4549bc"
            }}
            style={styles.ImageBackground_93_95}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da34/22a2/8dc1079cb25ac4a8d36564df10453e33"
            }}
            style={styles.ImageBackground_93_98}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4184/a989/0438b137d41f1941e9cbf1c34afc0ba0"
        }}
        style={styles.ImageBackground_95_46}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/981d/488c/18050cfe5a30b88c29273a8021ebe492"
        }}
        style={styles.ImageBackground_95_48}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_95_36: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("24.316939890710383%")
  },
  View_93_4: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_93_29: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067634%"),
    top: hp("5.874316939890711%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_93_30: {
    width: wp("3.864734299516908%"),
    height: hp("1.639344262295082%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_93_83: {
    width: wp("33.57487922705314%"),
    minWidth: wp("33.57487922705314%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.63768115942029%"),
    top: hp("3.688524590163933%")
  },
  Text_93_83: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_93_84: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.87922705314009%"),
    top: hp("7.923497267759561%")
  },
  Text_93_84: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_93_79: {
    width: wp("16.716696329162893%"),
    minWidth: wp("16.716696329162893%"),
    height: hp("9.454524973051145%"),
    minHeight: hp("9.454524973051145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("2.1857923497267784%")
  },
  ImageBackground_93_80: {
    width: wp("16.716696329162893%"),
    minWidth: wp("16.716696329162893%"),
    height: hp("9.454524973051145%"),
    minHeight: hp("9.454524973051145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_93_81: {
    width: wp("16.716696329162893%"),
    minWidth: wp("16.716696329162893%"),
    height: hp("9.454524973051145%"),
    minHeight: hp("9.454524973051145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_95_34: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.565217391304348%"),
    top: hp("56.4207650273224%")
  },
  View_95_19: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_95_20: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067632%"),
    top: hp("5.874316939890711%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_95_21: {
    width: wp("3.864734299516908%"),
    height: hp("1.639344262295082%"),
    top: hp("0.2732240437158495%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_95_23: {
    width: wp("33.57487922705314%"),
    minWidth: wp("33.57487922705314%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.63768115942029%"),
    top: hp("3.6885245901639365%")
  },
  Text_95_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_24: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.879227053140095%"),
    top: hp("7.923497267759558%")
  },
  Text_95_24: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_31: {
    width: wp("16.716696329162893%"),
    minWidth: wp("16.716696329162893%"),
    height: hp("9.454524973051145%"),
    minHeight: hp("9.454524973051145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1062801932367154%"),
    top: hp("2.185792349726782%")
  },
  ImageBackground_95_32: {
    width: wp("16.716696329162893%"),
    minWidth: wp("16.716696329162893%"),
    height: hp("9.454524973051145%"),
    minHeight: hp("9.454524973051145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_95_33: {
    width: wp("16.716696329162893%"),
    minWidth: wp("16.716696329162893%"),
    height: hp("9.454524973051145%"),
    minHeight: hp("9.454524973051145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_95_35: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("34.56284153005464%"),
    minHeight: hp("34.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("33.060109289617486%")
  },
  View_95_3: {
    width: wp("76.08695652173914%"),
    minWidth: wp("76.08695652173914%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.1038251366120235%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_95_4: {
    width: wp("3.864734299516908%"),
    minWidth: wp("3.864734299516908%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067634%"),
    top: hp("12.978142076502735%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_95_5: {
    width: wp("3.864734299516908%"),
    height: hp("1.639344262295082%"),
    top: hp("0.2732240437158424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_95_7: {
    width: wp("42.270531400966185%"),
    minWidth: wp("42.270531400966185%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.87922705314009%"),
    top: hp("11.338797814207652%")
  },
  Text_95_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_8: {
    width: wp("11.83574879227053%"),
    minWidth: wp("11.83574879227053%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.87922705314009%"),
    top: hp("15.027322404371581%")
  },
  Text_95_8: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_9: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.72946859903381%"),
    top: hp("15.983606557377051%")
  },
  View_95_50: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 74, 12, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_95_10: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275374%"),
    top: hp("0.2732240437158424%")
  },
  Text_95_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_13: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478265%"),
    top: hp("0.1366120218579212%")
  },
  Text_95_13: {
    color: "rgba(244, 244, 247, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_14: {
    width: wp("1.2077294685990339%"),
    minWidth: wp("1.2077294685990339%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072468%"),
    top: hp("0.5464480874316919%")
  },
  Text_95_14: {
    color: "rgba(244, 244, 247, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_51: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.72946859903381%"),
    top: hp("0%")
  },
  View_95_52: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 74, 12, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_95_53: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275374%"),
    top: hp("0.2732240437158424%")
  },
  Text_95_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_54: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478265%"),
    top: hp("0.1366120218579212%")
  },
  Text_95_54: {
    color: "rgba(244, 244, 247, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_55: {
    width: wp("1.2077294685990339%"),
    minWidth: wp("1.2077294685990339%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072468%"),
    top: hp("0.5464480874316919%")
  },
  Text_95_55: {
    color: "rgba(244, 244, 247, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_56: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.87922705314009%"),
    top: hp("31.830601092896174%")
  },
  View_95_57: {
    width: wp("12.560386473429952%"),
    minWidth: wp("12.560386473429952%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 74, 12, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_95_58: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275367%"),
    top: hp("0.2732240437158424%")
  },
  Text_95_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_59: {
    width: wp("1.6908212560386473%"),
    minWidth: wp("1.6908212560386473%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478265%"),
    top: hp("0.1366120218579141%")
  },
  Text_95_59: {
    color: "rgba(244, 244, 247, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_60: {
    width: wp("1.2077294685990339%"),
    minWidth: wp("1.2077294685990339%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072468%"),
    top: hp("0.546448087431699%")
  },
  Text_95_60: {
    color: "rgba(244, 244, 247, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_95_15: {
    width: wp("16.716696329162893%"),
    minWidth: wp("16.716696329162893%"),
    height: hp("9.454524973051145%"),
    minHeight: hp("9.454524973051145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.106280193236714%"),
    top: hp("9.289617486338798%")
  },
  ImageBackground_95_16: {
    width: wp("16.716696329162893%"),
    minWidth: wp("16.716696329162893%"),
    height: hp("9.454524973051145%"),
    minHeight: hp("9.454524973051145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_95_17: {
    width: wp("16.716696329162893%"),
    minWidth: wp("16.716696329162893%"),
    height: hp("9.454524973051145%"),
    minHeight: hp("9.454524973051145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_95_18: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-7.246376811594203%"),
    top: hp("-1.0928961748633839%"),
    resizeMode: "cover"
  },
  View_93_5: {
    width: wp("9.420289855072465%"),
    minWidth: wp("9.420289855072465%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.410628019323674%"),
    top: hp("8.333333333333332%")
  },
  Text_93_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_93_9: {
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
  ImageBackground_95_49: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.31884057971014%"),
    top: hp("60.10928961748634%")
  },
  View_93_10: {
    width: wp("31.642512077294686%"),
    minWidth: wp("31.642512077294686%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.29951690821256%"),
    top: hp("110.65573770491804%")
  },
  Text_93_10: {
    color: "rgba(246, 246, 249, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_93_11: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%")
  },
  View_95_2: {
    width: wp("35.990338164251206%"),
    minWidth: wp("35.990338164251206%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.125603864734295%"),
    top: hp("18.989071038251364%")
  },
  View_93_91: {
    width: wp("29.951690821256037%"),
    minWidth: wp("29.951690821256037%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("0.5464480874316955%")
  },
  Text_93_91: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_93_92: {
    width: wp("4.830917874396135%"),
    minWidth: wp("4.830917874396135%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_93_93: {
    width: wp("1.862198143189656%"),
    height: hp("0.2237146180835578%"),
    top: hp("0.1403641831028004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.783461418704718%")
  },
  ImageBackground_93_94: {
    width: wp("0.5966184219876349%"),
    height: hp("0.42377049154271196%"),
    top: hp("0.07465967063695444%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.115826445501213%")
  },
  ImageBackground_93_95: {
    width: wp("1.9289855219891683%"),
    height: hp("0.42377045897186777%"),
    top: hp("0.3877733574538951%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2462488441651587%")
  },
  ImageBackground_93_98: {
    width: wp("3.1600749435056232%"),
    height: hp("2.0181693665968266%"),
    top: hp("0.6756891969774621%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.080764549365945%")
  },
  ImageBackground_95_46: {
    width: wp("3.864734299516908%"),
    height: hp("1.912568306010929%"),
    top: hp("62.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.70048309178745%")
  },
  ImageBackground_95_48: {
    width: wp("10.869565217391305%"),
    minWidth: wp("10.869565217391305%"),
    height: hp("6.147540983606557%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.81159420289855%"),
    top: hp("60.10928961748634%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
