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
      <View style={styles.View_126_234}>
        <View style={styles.View_126_235}>
          <View style={styles.View_126_236}>
            <View style={styles.View_126_395}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/24d1/2aa7/f2c4637f1eb197b8cd8c74c8b502c75f"
                }}
                style={styles.ImageBackground_126_396}
              />
            </View>
          </View>
          <View style={styles.View_126_240}>
            <View style={styles.View_126_241}>
              <View style={styles.View_126_242}>
                <View style={styles.View_126_243}>
                  <Text style={styles.Text_126_243}>Home</Text>
                </View>
              </View>
              <View style={styles.View_126_244}>
                <View style={styles.View_126_245}>
                  <Text style={styles.Text_126_245}>Product</Text>
                </View>
              </View>
              <View style={styles.View_126_246}>
                <View style={styles.View_126_247}>
                  <Text style={styles.Text_126_247}>Faq</Text>
                </View>
              </View>
              <View style={styles.View_126_248}>
                <View style={styles.View_126_249}>
                  <Text style={styles.Text_126_249}>Contact</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_126_257}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b935/9772/67fc8626a26063f7c4c2e3120c9eb61e"
            }}
            style={styles.ImageBackground_272_0}
          />
          <View style={styles.View_126_258}>
            <View style={styles.View_126_259}>
              <Text style={styles.Text_126_259}>Food app</Text>
            </View>
            <View style={styles.View_126_260}>
              <View style={styles.View_126_261}>
                <Text style={styles.Text_126_261}>
                  Why stay hungry when you can order form Bella Onojie
                </Text>
              </View>
            </View>
            <View style={styles.View_126_262}>
              <View style={styles.View_126_263}>
                <Text style={styles.Text_126_263}>
                  Download the bella onoje’s food app now on
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_126_264}>
            <View style={styles.View_126_265}>
              <View style={styles.View_126_266}>
                <View style={styles.View_126_267}>
                  <Text style={styles.Text_126_267}>App store</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_126_400}>
            <View style={styles.View_126_401}>
              <View style={styles.View_126_402}>
                <View style={styles.View_126_403}>
                  <Text style={styles.Text_126_403}>Playstore</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_264_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/387e/7896/b8f849629958c09735b791c411dc7f4a"
          }}
          style={styles.ImageBackground_126_399}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5b9/2cea/e79135c9205a38a7a97abdfaf6a3c49d"
          }}
          style={styles.ImageBackground_126_398}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49f7/f826/cd67c4ca9bd118f619bf0bef5ae2f48e"
        }}
        style={styles.ImageBackground_126_295}
      />
      <View style={styles.View_126_296}>
        <View style={styles.View_126_297}>
          <View style={styles.View_126_306}>
            <View style={styles.View_126_307}>
              <View style={styles.View_126_308}>
                <View style={styles.View_126_309}>
                  <Text style={styles.Text_126_309}>Create an account</Text>
                </View>
              </View>
              <View style={styles.View_126_310}>
                <View style={styles.View_126_311}>
                  <Text style={styles.Text_126_311}>
                    Create/login to an existing account to get started
                  </Text>
                </View>
              </View>
              <View style={styles.View_126_312}>
                <View style={styles.View_126_313}>
                  <Text style={styles.Text_126_313}>
                    An account is created with your email and a desired password
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dcd/f27c/9264e5826bd3852e86c06a8c13608e3e"
          }}
          style={styles.ImageBackground_127_1}
        />
      </View>
      <View style={styles.View_127_16}>
        <View style={styles.View_127_17}>
          <View style={styles.View_127_18}>
            <View style={styles.View_127_19}>
              <View style={styles.View_127_20}>
                <View style={styles.View_127_21}>
                  <Text style={styles.Text_127_21}>Checkout</Text>
                </View>
              </View>
              <View style={styles.View_127_22}>
                <View style={styles.View_127_23}>
                  <Text style={styles.Text_127_23}>
                    When you done check out and get it delivered.
                  </Text>
                </View>
              </View>
              <View style={styles.View_127_24}>
                <View style={styles.View_127_25}>
                  <Text style={styles.Text_127_25}>
                    When you done check out and get it delivered with ease.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f5f/a0d8/11c1c13f85d51673aa2d305cb441c1e8"
          }}
          style={styles.ImageBackground_127_26}
        />
      </View>
      <View style={styles.View_127_3}>
        <View style={styles.View_127_4}>
          <View style={styles.View_127_5}>
            <View style={styles.View_127_6}>
              <View style={styles.View_127_7}>
                <View style={styles.View_127_8}>
                  <Text style={styles.Text_127_8}>Explore varieties</Text>
                </View>
              </View>
              <View style={styles.View_127_9}>
                <View style={styles.View_127_10}>
                  <Text style={styles.Text_127_10}>
                    Shop for your favorites meal as e dey hot.
                  </Text>
                </View>
              </View>
              <View style={styles.View_127_11}>
                <View style={styles.View_127_12}>
                  <Text style={styles.Text_127_12}>
                    Shop for your favorite meals or drinks and enjoy while doing
                    it.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1139/f6d8/6d62b43019c1f245f26e64c73fcf4a1d"
          }}
          style={styles.ImageBackground_127_13}
        />
      </View>
      <View style={styles.View_126_368}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36b8/16f2/4a22332f0e3154075e9e9c039c7c34ba"
          }}
          style={styles.ImageBackground_127_43}
        />
        <View style={styles.View_126_369}>
          <View style={styles.View_126_370}>
            <View style={styles.View_126_371}>
              <Text style={styles.Text_126_371}>Download the app now.</Text>
            </View>
          </View>
          <View style={styles.View_126_372}>
            <View style={styles.View_126_373}>
              <Text style={styles.Text_126_373}>
                Available on your favorite store. Start your premium experience
                now
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_126_374}>
          <View style={styles.View_126_375}>
            <View style={styles.View_126_376}>
              <View style={styles.View_126_377}>
                <View style={styles.View_126_378}>
                  <Text style={styles.Text_126_378}>Playstore</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_126_379}>
              <View style={styles.View_126_380}>
                <View style={styles.View_126_381}>
                  <Text style={styles.Text_126_381}>App store</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_126_382}>
        <View style={styles.View_126_383}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca17/ab22/e6b6702fdc46bcc4346bf0275d44448f"
            }}
            style={styles.ImageBackground_127_42}
          />
        </View>
        <View style={styles.View_126_386}>
          <View style={styles.View_126_387}>
            <Text style={styles.Text_126_387}>
              Copywright 2020 Bella Onojie.com
            </Text>
          </View>
        </View>
        <View style={styles.View_126_388}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5a0/8e03/768cb61a662b46e33422fd591d90a8d4"
            }}
            style={styles.ImageBackground_126_389}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fa3/4788/b03759d71eaacdbc75eece48d024f9da"
            }}
            style={styles.ImageBackground_126_391}
          />
          <View style={styles.View_126_393} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0afc/cabb/f05e0963a8cdf65af774d028adc4eb88"
          }}
          style={styles.ImageBackground_127_44}
        />
      </View>
      <View style={styles.View_127_0}>
        <Text style={styles.Text_127_0}>How the app works</Text>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("604.2349726775957%") },
  View_126_234: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("113.3879781420765%"),
    minHeight: hp("113.3879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579235%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_126_235: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.311475409836063%"),
    minHeight: hp("21.311475409836063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_236: {
    width: wp("17.083333333333332%"),
    minWidth: wp("17.083333333333332%"),
    height: hp("13.901384280679006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.861111111111112%"),
    top: hp("3.56842207778347%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_395: {
    width: wp("14.305555555555555%"),
    minWidth: wp("14.305555555555555%"),
    height: hp("13.901384280679006%"),
    minHeight: hp("13.901384280679006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888884%"),
    top: hp("0%")
  },
  ImageBackground_126_396: {
    width: wp("14.305555555555555%"),
    height: hp("13.901384280679006%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_126_240: {
    width: wp("40.27777777777778%"),
    minWidth: wp("40.27777777777778%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.94444444444444%"),
    top: hp("7.240437158469945%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_241: {
    width: wp("40.27777777777778%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_242: {
    width: wp("4.930555555555555%"),
    minWidth: wp("4.930555555555555%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_243: {
    width: wp("3.5416666666666665%"),
    top: hp("1.366120218579236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%")
  },
  Text_126_243: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_126_244: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.458333333333343%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_245: {
    width: wp("4.722222222222222%"),
    top: hp("1.366120218579236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444287%")
  },
  Text_126_245: {
    color: "rgba(37, 43, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_126_246: {
    width: wp("3.6111111111111107%"),
    minWidth: wp("3.6111111111111107%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.09722222222223%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_247: {
    width: wp("2.2222222222222223%"),
    top: hp("1.366120218579236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%")
  },
  Text_126_247: {
    color: "rgba(37, 43, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_126_248: {
    width: wp("6.041666666666667%"),
    minWidth: wp("6.041666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.236111111111114%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_249: {
    width: wp("4.652777777777778%"),
    top: hp("1.366120218579236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%")
  },
  Text_126_249: {
    color: "rgba(37, 43, 66, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_126_257: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("92.07650273224044%"),
    minHeight: hp("92.07650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21.311475409836063%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_272_0: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("84.56284153005464%"),
    minHeight: hp("84.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.13661202185792476%")
  },
  View_126_258: {
    width: wp("69.79166666666666%"),
    minWidth: wp("69.79166666666666%"),
    height: hp("44.53551912568306%"),
    minHeight: hp("44.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.104166666666666%"),
    top: hp("9.836065573770494%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_259: {
    width: wp("8.26388888888889%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.763888888888893%")
  },
  Text_126_259: {
    color: "rgba(246, 246, 246, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_126_260: {
    width: wp("69.79166666666666%"),
    minWidth: wp("69.79166666666666%"),
    height: hp("24.59016393442623%"),
    minHeight: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.874316939890711%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_261: {
    width: wp("65.06944444444444%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3611111111111125%")
  },
  Text_126_261: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 46,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_126_262: {
    width: wp("50.55555555555556%"),
    minWidth: wp("50.55555555555556%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.618055555555555%"),
    top: hp("31.420765027322403%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_263: {
    width: wp("38.263888888888886%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.180555555555557%")
  },
  Text_126_263: {
    color: "rgba(246, 246, 246, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_126_264: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93055555555556%"),
    top: hp("55.19125683060109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_265: {
    width: wp("16.38888888888889%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_266: {
    width: wp("8.26388888888889%"),
    minWidth: wp("8.26388888888889%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.062499999999993%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_267: {
    width: wp("8.541666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_126_267: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_126_400: {
    width: wp("16.38888888888889%"),
    minWidth: wp("16.38888888888889%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.18055555555556%"),
    top: hp("55.19125683060109%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_401: {
    width: wp("16.38888888888889%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 74, 12, 1)",
    overflow: "hidden"
  },
  View_126_402: {
    width: wp("8.26388888888889%"),
    minWidth: wp("8.26388888888889%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0625%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_403: {
    width: wp("8.26388888888889%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_126_403: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_264_2: {
    width: wp("38.05555555555556%"),
    minWidth: wp("38.05555555555556%"),
    height: hp("87.43169398907104%"),
    minHeight: hp("87.43169398907104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.97222222222222%"),
    top: hp("83.33333333333334%")
  },
  ImageBackground_126_399: {
    width: wp("19.791666666666664%"),
    minWidth: wp("19.791666666666664%"),
    height: hp("72.54098360655738%"),
    minHeight: hp("72.54098360655738%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.263888888888893%"),
    top: hp("14.89071038251366%")
  },
  ImageBackground_126_398: {
    width: wp("20.76388888888889%"),
    minWidth: wp("20.76388888888889%"),
    height: hp("80.05464480874316%"),
    minHeight: hp("80.05464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_126_295: {
    width: wp("61.38888888888889%"),
    minWidth: wp("61.38888888888889%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.305555555555557%"),
    top: hp("188.3758044633709%")
  },
  View_126_296: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.24495109182891%"),
    minHeight: hp("110.24495109182891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("211.2021857923497%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_126_297: {
    width: wp("113.92952813042534%"),
    height: hp("69.26134453445184%"),
    minHeight: hp("69.26134453445184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.62395562065972%"),
    top: hp("20.491803278688536%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_306: {
    width: wp("39.44444444444444%"),
    minWidth: wp("39.44444444444444%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.48506673177084%"),
    top: hp("11.33879781420768%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_307: {
    width: wp("39.44444444444444%"),
    minWidth: wp("39.44444444444444%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_308: {
    width: wp("16.11111111111111%"),
    minWidth: wp("16.11111111111111%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_309: {
    width: wp("16.11111111111111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_126_309: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_126_310: {
    width: wp("38.958333333333336%"),
    minWidth: wp("38.958333333333336%"),
    height: hp("18.30601092896175%"),
    minHeight: hp("18.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.87431693989069%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_311: {
    width: wp("38.958333333333336%"),
    top: hp("1.3661202185792547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_126_311: {
    color: "rgba(37, 43, 66, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_126_312: {
    width: wp("32.43055555555556%"),
    minWidth: wp("32.43055555555556%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.1366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_313: {
    width: wp("32.43055555555556%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_126_313: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_127_1: {
    width: wp("20.97222222222222%"),
    minWidth: wp("20.97222222222222%"),
    height: hp("71.72131147540983%"),
    minHeight: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.01388888888889%"),
    top: hp("10.655737704918039%")
  },
  View_127_16: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.24495109182891%"),
    minHeight: hp("110.24495109182891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("400.9562841530054%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_127_17: {
    width: wp("113.92952813042534%"),
    height: hp("69.26134453445184%"),
    minHeight: hp("69.26134453445184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.62395562065972%"),
    top: hp("20.491803278688565%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_127_18: {
    width: wp("39.44444444444444%"),
    minWidth: wp("39.44444444444444%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.48506673177084%"),
    top: hp("11.33879781420768%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_127_19: {
    width: wp("39.44444444444444%"),
    minWidth: wp("39.44444444444444%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_127_20: {
    width: wp("8.541666666666666%"),
    minWidth: wp("8.541666666666666%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_127_21: {
    width: wp("8.541666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_127_21: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_127_22: {
    width: wp("38.81944444444444%"),
    minWidth: wp("38.81944444444444%"),
    height: hp("18.30601092896175%"),
    minHeight: hp("18.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.8743169398907185%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_127_23: {
    width: wp("38.81944444444444%"),
    top: hp("1.3661202185791694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_127_23: {
    color: "rgba(37, 43, 66, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_127_24: {
    width: wp("31.944444444444443%"),
    minWidth: wp("31.944444444444443%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.1366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_127_25: {
    width: wp("31.944444444444443%"),
    top: hp("1.3661202185792831%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_127_25: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_127_26: {
    width: wp("19.305555555555557%"),
    minWidth: wp("19.305555555555557%"),
    height: hp("69.80874316939891%"),
    minHeight: hp("69.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.01388888888889%"),
    top: hp("11.065573770491824%")
  },
  View_127_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.24495109182891%"),
    minHeight: hp("110.24495109182891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("300.8196721311475%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_127_4: {
    width: wp("113.92952813042534%"),
    height: hp("69.26134453445184%"),
    minHeight: hp("69.26134453445184%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-19.62395562065972%"),
    top: hp("20.491803278688565%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_127_5: {
    width: wp("39.44444444444444%"),
    minWidth: wp("39.44444444444444%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.262844509548614%"),
    top: hp("12.021857923497294%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_127_6: {
    width: wp("39.44444444444444%"),
    minWidth: wp("39.44444444444444%"),
    height: hp("38.25136612021858%"),
    minHeight: hp("38.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_127_7: {
    width: wp("14.652777777777779%"),
    minWidth: wp("14.652777777777779%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_127_8: {
    width: wp("14.652777777777779%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_127_8: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_127_9: {
    width: wp("33.33333333333333%"),
    minWidth: wp("33.33333333333333%"),
    height: hp("18.30601092896175%"),
    minHeight: hp("18.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.874316939890662%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_127_10: {
    width: wp("33.33333333333333%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_127_10: {
    color: "rgba(37, 43, 66, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_127_11: {
    width: wp("32.083333333333336%"),
    minWidth: wp("32.083333333333336%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.1366120218579%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_127_12: {
    width: wp("32.083333333333336%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_127_12: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_127_13: {
    width: wp("18.680555555555557%"),
    minWidth: wp("18.680555555555557%"),
    height: hp("71.72131147540983%"),
    minHeight: hp("71.72131147540983%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.20833333333333%"),
    top: hp("10.655737704918067%")
  },
  View_126_368: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("69.53551912568307%"),
    minHeight: hp("69.53551912568307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("504.0842858820014%"),
    backgroundColor: "rgba(37, 43, 66, 1)",
    overflow: "hidden"
  },
  ImageBackground_127_43: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("70.49180327868852%"),
    minHeight: hp("70.49180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.8055973574112727%")
  },
  View_126_369: {
    width: wp("59.72222222222222%"),
    minWidth: wp("59.72222222222222%"),
    height: hp("18.442622950819672%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.13888888888889%"),
    top: hp("17.759562841530055%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_370: {
    width: wp("36.31944444444444%"),
    minWidth: wp("36.31944444444444%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.701388888888886%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_371: {
    width: wp("34.93055555555556%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444464%")
  },
  Text_126_371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_126_372: {
    width: wp("59.72222222222222%"),
    minWidth: wp("59.72222222222222%"),
    height: hp("7.923497267759563%"),
    minHeight: hp("7.923497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_373: {
    width: wp("58.333333333333336%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444464%")
  },
  Text_126_373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_126_374: {
    width: wp("22.98611111111111%"),
    minWidth: wp("22.98611111111111%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.50694444444444%"),
    top: hp("43.032786885245855%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_375: {
    width: wp("22.98611111111111%"),
    minWidth: wp("22.98611111111111%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_376: {
    width: wp("9.86111111111111%"),
    minWidth: wp("9.86111111111111%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 74, 12, 1)",
    overflow: "hidden"
  },
  View_126_377: {
    width: wp("5.555555555555555%"),
    minWidth: wp("5.555555555555555%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1527777777777786%"),
    top: hp("2.4590163934426528%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_378: {
    width: wp("5.555555555555555%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_126_378: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_126_379: {
    width: wp("12.01388888888889%"),
    minWidth: wp("12.01388888888889%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.972222222222229%"),
    top: hp("0.27322404371591347%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_380: {
    width: wp("5.763888888888889%"),
    minWidth: wp("5.763888888888889%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.124999999999993%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_381: {
    width: wp("5.763888888888889%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_126_381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_126_382: {
    width: wp("84.02777777777779%"),
    minWidth: wp("84.02777777777779%"),
    height: hp("18.169398907103826%"),
    minHeight: hp("18.169398907103826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.986111111111111%"),
    top: hp("578.8110618382855%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_126_383: {
    width: wp("14.305555555555555%"),
    minWidth: wp("14.305555555555555%"),
    height: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.354166666666666%"),
    top: hp("3.8251366120219927%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_127_42: {
    width: wp("17.083333333333332%"),
    minWidth: wp("17.083333333333332%"),
    height: hp("13.934426229508196%"),
    minHeight: hp("13.934426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.423611111111109%"),
    top: hp("-1.6252694885588426%"),
    resizeMode: "cover"
  },
  View_126_386: {
    width: wp("14.583333333333334%"),
    minWidth: wp("14.583333333333334%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.01388888888889%"),
    top: hp("8.743169398907071%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_387: {
    width: wp("13.194444444444445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6944444444444429%")
  },
  Text_126_387: {
    color: "rgba(92, 92, 92, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_126_388: {
    width: wp("11.872206793891058%"),
    height: hp("5.5992616330339615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.111111111111114%"),
    top: hp("6.284153005464532%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_126_389: {
    width: wp("2.8462913301255965%"),
    height: hp("5.5992616330339615%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_126_391: {
    width: wp("2.8462913301255965%"),
    height: hp("5.5992616330339615%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.512973361545143%")
  },
  View_126_393: {
    width: wp("2.8462913301255965%"),
    minWidth: wp("2.8462913301255965%"),
    height: hp("5.5992616330339615%"),
    minHeight: hp("5.5992616330339615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.025912814670143%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_127_44: {
    width: wp("2.7083333333333335%"),
    height: hp("5.327868852459016%"),
    top: hp("6.434839801058843%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.138888888888886%")
  },
  View_127_0: {
    width: wp("29.51388888888889%"),
    minWidth: wp("29.51388888888889%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.375%"),
    top: hp("198.224043715847%")
  },
  Text_127_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 35,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
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
