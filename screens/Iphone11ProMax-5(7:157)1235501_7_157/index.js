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
      <View style={styles.View_7_161} />
      <View style={styles.View_7_158}>
        <Text style={styles.Text_7_158}>Found 6 results</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/257d/84e9/7eed38c4c8fcc3b6a4cb55f47c71c4b2"
        }}
        style={styles.ImageBackground_7_196}
      />
      <View style={styles.View_7_162}>
        <Text style={styles.Text_7_162}>Spicy chieckns</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8e7/255f/a5674dadca74d0a3561817162d7f737e"
        }}
        style={styles.ImageBackground_7_198}
      />
      <View style={styles.View_7_206}>
        <View style={styles.View_7_207} />
        <View style={styles.View_7_208}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a684/ab53/4c31e2f8f4913822a9b4bc99b9dab06e"
            }}
            style={styles.ImageBackground_7_209}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdcd/f9a6/ae8da4c3fe3e1a453ace45f086ba16c0"
            }}
            style={styles.ImageBackground_7_210}
          />
        </View>
        <View style={styles.View_7_211}>
          <Text style={styles.Text_7_211}>Veggie tomato mix</Text>
        </View>
        <View style={styles.View_7_212}>
          <Text style={styles.Text_7_212}>N1,900</Text>
        </View>
      </View>
      <View style={styles.View_7_241}>
        <View style={styles.View_7_242} />
        <View style={styles.View_7_243}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a684/ab53/4c31e2f8f4913822a9b4bc99b9dab06e"
            }}
            style={styles.ImageBackground_7_244}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e88c/5da5/b416eb8b45a5673d9129cba6470093c5"
            }}
            style={styles.ImageBackground_7_245}
          />
        </View>
        <View style={styles.View_7_246}>
          <Text style={styles.Text_7_246}>Egg and cucmber...</Text>
        </View>
        <View style={styles.View_7_247}>
          <Text style={styles.Text_7_247}>N1,900</Text>
        </View>
      </View>
      <View style={styles.View_7_273}>
        <View style={styles.View_7_274} />
        <View style={styles.View_7_275}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a684/ab53/4c31e2f8f4913822a9b4bc99b9dab06e"
            }}
            style={styles.ImageBackground_7_276}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e88c/5da5/b416eb8b45a5673d9129cba6470093c5"
            }}
            style={styles.ImageBackground_7_277}
          />
        </View>
        <View style={styles.View_7_278}>
          <Text style={styles.Text_7_278}>Egg and cucmber...</Text>
        </View>
        <View style={styles.View_7_279}>
          <Text style={styles.Text_7_279}>N1,900</Text>
        </View>
      </View>
      <View style={styles.View_7_248}>
        <View style={styles.View_7_249} />
        <View style={styles.View_7_250}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a684/ab53/4c31e2f8f4913822a9b4bc99b9dab06e"
            }}
            style={styles.ImageBackground_7_251}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c5b/09a2/46da11b11ae5329bbf981e749f91f7e1"
            }}
            style={styles.ImageBackground_7_252}
          />
        </View>
        <View style={styles.View_7_253}>
          <Text style={styles.Text_7_253}>Fried chicken m.</Text>
        </View>
        <View style={styles.View_7_254}>
          <Text style={styles.Text_7_254}>N1,900</Text>
        </View>
      </View>
      <View style={styles.View_7_255}>
        <View style={styles.View_7_256} />
        <View style={styles.View_7_257}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a684/ab53/4c31e2f8f4913822a9b4bc99b9dab06e"
            }}
            style={styles.ImageBackground_7_258}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa51/7542/0d9be5bb1e6c0c6866268a424fa7b497"
            }}
            style={styles.ImageBackground_7_259}
          />
        </View>
        <View style={styles.View_7_260}>
          <Text style={styles.Text_7_260}>Moi-moi and ekpa.</Text>
        </View>
        <View style={styles.View_7_261}>
          <Text style={styles.Text_7_261}>N1,900</Text>
        </View>
      </View>
      <View style={styles.View_7_266}>
        <View style={styles.View_7_267} />
        <View style={styles.View_7_268}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a684/ab53/4c31e2f8f4913822a9b4bc99b9dab06e"
            }}
            style={styles.ImageBackground_7_269}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdcd/f9a6/ae8da4c3fe3e1a453ace45f086ba16c0"
            }}
            style={styles.ImageBackground_7_270}
          />
        </View>
        <View style={styles.View_7_271}>
          <Text style={styles.Text_7_271}>Veggie tomato mix</Text>
        </View>
        <View style={styles.View_7_272}>
          <Text style={styles.Text_7_272}>N1,900</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_7_161: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.79234972677597%"),
    minHeight: hp("110.79234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.62295081967213%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_158: {
    width: wp("65.21739130434783%"),
    minWidth: wp("65.21739130434783%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.391304347826086%"),
    top: hp("22.404371584699454%")
  },
  Text_7_158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_196: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.144927536231885%")
  },
  View_7_162: {
    width: wp("27.294685990338163%"),
    minWidth: wp("27.294685990338163%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.396135265700483%"),
    top: hp("9.836065573770492%")
  },
  Text_7_162: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_198: {
    width: wp("2.7451600970925057e-7%"),
    minWidth: wp("2.7451600970925057e-7%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.41545893719807%"),
    top: hp("9.426229508196721%")
  },
  View_7_206: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("34.435489008335466%"),
    minHeight: hp("34.435489008335466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("33.060109289617486%")
  },
  View_7_207: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("29.017320226450437%"),
    minHeight: hp("29.017320226450437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.418170866419054%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_208: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.130712831653833%"),
    top: hp("0%")
  },
  ImageBackground_7_209: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_210: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_211: {
    width: wp("26.610987197949694%"),
    minWidth: wp("26.610987197949694%"),
    minHeight: hp("5.538575636233137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0448709386558335%"),
    top: hp("20.107431880763322%")
  },
  Text_7_211: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_212: {
    width: wp("32.64118876434179%"),
    minWidth: wp("32.64118876434179%"),
    minHeight: hp("2.0392967703563922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.742640324836767%"),
    top: hp("28.228159419825822%")
  },
  Text_7_212: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_241: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("34.435489008335466%"),
    minHeight: hp("34.435489008335466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.347826086956516%"),
    top: hp("40.43715846994536%")
  },
  View_7_242: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("29.017320226450437%"),
    minHeight: hp("29.017320226450437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.418170866419054%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_243: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.130712831653838%"),
    top: hp("0%")
  },
  ImageBackground_7_244: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_245: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_246: {
    width: wp("26.610987197949694%"),
    minWidth: wp("26.610987197949694%"),
    minHeight: hp("5.538575636233137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.044870938655848%"),
    top: hp("20.107431880763315%")
  },
  Text_7_246: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_247: {
    width: wp("32.64118876434179%"),
    minWidth: wp("32.64118876434179%"),
    minHeight: hp("2.0392967703563922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7426403248367777%"),
    top: hp("28.228159419825815%")
  },
  Text_7_247: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_273: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("34.435489008335466%"),
    minHeight: hp("34.435489008335466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.347826086956516%"),
    top: hp("116.80327868852459%")
  },
  View_7_274: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("29.017320226450437%"),
    minHeight: hp("29.017320226450437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.418170866419061%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_275: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.130712831653838%"),
    top: hp("0%")
  },
  ImageBackground_7_276: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_277: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_278: {
    width: wp("26.610987197949694%"),
    minWidth: wp("26.610987197949694%"),
    minHeight: hp("5.538575636233137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.044870938655848%"),
    top: hp("20.10743188076333%")
  },
  Text_7_278: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_279: {
    width: wp("32.64118876434179%"),
    minWidth: wp("32.64118876434179%"),
    minHeight: hp("2.0392967703563922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7426403248367777%"),
    top: hp("28.22815941982583%")
  },
  Text_7_279: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_248: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("34.435489008335466%"),
    minHeight: hp("34.435489008335466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("69.80874316939891%")
  },
  View_7_249: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("29.017320226450437%"),
    minHeight: hp("29.017320226450437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.418170866419047%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_250: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.130712831653833%"),
    top: hp("0%")
  },
  ImageBackground_7_251: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_252: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_253: {
    width: wp("26.610987197949694%"),
    minWidth: wp("26.610987197949694%"),
    minHeight: hp("5.538575636233137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0448709386558335%"),
    top: hp("20.107431880763315%")
  },
  Text_7_253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_254: {
    width: wp("32.64118876434179%"),
    minWidth: wp("32.64118876434179%"),
    minHeight: hp("2.0392967703563922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.742640324836767%"),
    top: hp("28.228159419825815%")
  },
  Text_7_254: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_255: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("34.435489008335466%"),
    minHeight: hp("34.435489008335466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.347826086956516%"),
    top: hp("78.14207650273224%")
  },
  View_7_256: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("29.017320226450437%"),
    minHeight: hp("29.017320226450437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.418170866419061%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_257: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.130712831653838%"),
    top: hp("0%")
  },
  ImageBackground_7_258: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_259: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_260: {
    width: wp("26.610987197949694%"),
    minWidth: wp("26.610987197949694%"),
    minHeight: hp("5.538575636233137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.044870938655848%"),
    top: hp("20.10743188076333%")
  },
  Text_7_260: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_261: {
    width: wp("32.64118876434179%"),
    minWidth: wp("32.64118876434179%"),
    minHeight: hp("2.0392967703563922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7426403248367777%"),
    top: hp("28.228159419825815%")
  },
  Text_7_261: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_266: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("34.435489008335466%"),
    minHeight: hp("34.435489008335466%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.212560386473431%"),
    top: hp("108.46994535519126%")
  },
  View_7_267: {
    width: wp("37.68115942028986%"),
    minWidth: wp("37.68115942028986%"),
    height: hp("29.017320226450437%"),
    minHeight: hp("29.017320226450437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.418170866419061%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_268: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.130712831653833%"),
    top: hp("0%")
  },
  ImageBackground_7_269: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_270: {
    width: wp("31.15411288496377%"),
    minWidth: wp("31.15411288496377%"),
    height: hp("17.61994909067623%"),
    minHeight: hp("17.61994909067623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_271: {
    width: wp("26.610987197949694%"),
    minWidth: wp("26.610987197949694%"),
    minHeight: hp("5.538575636233137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0448709386558335%"),
    top: hp("20.107431880763315%")
  },
  Text_7_271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_272: {
    width: wp("32.64118876434179%"),
    minWidth: wp("32.64118876434179%"),
    minHeight: hp("2.0392967703563922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.742640324836767%"),
    top: hp("28.228159419825815%")
  },
  Text_7_272: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 14,
    fontWeight: "700",
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
