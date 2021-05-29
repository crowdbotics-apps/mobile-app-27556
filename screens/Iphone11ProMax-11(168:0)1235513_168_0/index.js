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
      <View style={styles.View_168_1}>
        <View style={styles.View_168_2}>
          <View style={styles.View_168_3}>
            <View style={styles.View_168_4}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5025/74c2/d19ff7873c28922b0cf08ac04395434e"
                }}
                style={styles.ImageBackground_170_10}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5080/42e4/547e6690244350975d8c328048945b61"
              }}
              style={styles.ImageBackground_168_7}
            />
          </View>
        </View>
        <View style={styles.View_168_9}>
          <View style={styles.View_168_10}>
            <View style={styles.View_168_11}>
              <Text style={styles.Text_168_11}>Food app</Text>
            </View>
            <View style={styles.View_168_12}>
              <View style={styles.View_168_13}>
                <Text style={styles.Text_168_13}>
                  Why stay hungry when you can order form Bella Onojie
                </Text>
              </View>
            </View>
            <View style={styles.View_168_14}>
              <View style={styles.View_168_15}>
                <Text style={styles.Text_168_15}>
                  Download the bella onoje’s food app now on{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_16}>
            <View style={styles.View_168_17}>
              <View style={styles.View_168_18}>
                <View style={styles.View_168_19}>
                  <Text style={styles.Text_168_19}>Playstore</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_170_0}>
            <View style={styles.View_170_1}>
              <View style={styles.View_170_2}>
                <View style={styles.View_170_3}>
                  <Text style={styles.Text_170_3}>App store</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_170_4}>
        <Text style={styles.Text_170_4}>How the app works</Text>
      </View>
      <View style={styles.View_168_142}>
        <View style={styles.View_168_146}>
          <View style={styles.View_168_147}>
            <Text style={styles.Text_168_147}>
              Just type what&#39;s on your mind and we&#39;ll{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_168_148}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5a0/8e03/768cb61a662b46e33422fd591d90a8d4"
            }}
            style={styles.ImageBackground_168_149}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8fa3/4788/b03759d71eaacdbc75eece48d024f9da"
            }}
            style={styles.ImageBackground_168_151}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2af/e75c/cda12bc4e0b0381724ca00890cf799c2"
            }}
            style={styles.ImageBackground_168_153}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc9b/7005/b2c8507fc6b69c2d834e6167053f1a0b"
        }}
        style={styles.ImageBackground_168_46}
      />
      <View style={styles.View_168_48}>
        <View style={styles.View_168_49}>
          <View style={styles.View_168_50}>
            <Text style={styles.Text_168_50}>Create an account</Text>
          </View>
        </View>
        <View style={styles.View_168_51}>
          <View style={styles.View_168_52}>
            <Text style={styles.Text_168_52}>
              Create/login to an existing account to get started
            </Text>
          </View>
        </View>
        <View style={styles.View_168_53}>
          <View style={styles.View_168_54}>
            <Text style={styles.Text_168_54}>
              An account is created with your email and a desired password
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_168_62}>
        <View style={styles.View_168_63}>
          <View style={styles.View_168_64}>
            <View style={styles.View_168_65}>
              <Text style={styles.Text_168_65}>Explore while shopping</Text>
            </View>
          </View>
          <View style={styles.View_168_66}>
            <View style={styles.View_168_67}>
              <Text style={styles.Text_168_67}>
                Shop for your favorites meal as e dey hot.
              </Text>
            </View>
          </View>
          <View style={styles.View_168_68}>
            <View style={styles.View_168_69}>
              <Text style={styles.Text_168_69}>
                Shop for your favorite meals or drinks and enjoy while doing it.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_168_77}>
        <View style={styles.View_168_78}>
          <View style={styles.View_168_79}>
            <View style={styles.View_168_80}>
              <Text style={styles.Text_168_80}>Checkout</Text>
            </View>
          </View>
          <View style={styles.View_168_81}>
            <View style={styles.View_168_82}>
              <Text style={styles.Text_168_82}>
                When you done check out and get it delivered.
              </Text>
            </View>
          </View>
          <View style={styles.View_168_83}>
            <View style={styles.View_168_84}>
              <Text style={styles.Text_168_84}>
                When you done check out and get it delivered with ease.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_168_127}>
        <View style={styles.View_168_128}>
          <View style={styles.View_168_129}>
            <View style={styles.View_168_130}>
              <Text style={styles.Text_168_130}>Download the app now.</Text>
            </View>
          </View>
          <View style={styles.View_168_131}>
            <View style={styles.View_168_132}>
              <Text style={styles.Text_168_132}>
                Most calendars are designed for teams.{" "}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_168_133}>
          <View style={styles.View_168_134}>
            <View style={styles.View_168_135}>
              <View style={styles.View_168_136}>
                <View style={styles.View_168_137}>
                  <View style={styles.View_168_138}>
                    <Text style={styles.Text_168_138}>Buy now</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_168_139}>
                <View style={styles.View_168_140}>
                  <View style={styles.View_168_141}>
                    <Text style={styles.Text_168_141}>Try for free</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97b9/8613/49d46eac18b4f194ae1f06745ecce4d0"
        }}
        style={styles.ImageBackground_170_5}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/36e6/9eb4/392093b1a32b6c8d51850fac6910c984"
        }}
        style={styles.ImageBackground_170_6}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/13fd/5580/8b59cf9538cb8db1fde8fcb07a513ab6"
        }}
        style={styles.ImageBackground_170_7}
      />
      <View style={styles.View_264_4}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95d4/3bba/1e8c15d41439b50fd008f393ac8694d2"
          }}
          style={styles.ImageBackground_264_0}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c898/61bc/7f84976e533568aca6d6e1bfe013aa72"
          }}
          style={styles.ImageBackground_264_1}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("739.0710382513661%") },
  View_168_1: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("121.5846994535519%"),
    minHeight: hp("121.5846994535519%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_168_2: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_3: {
    width: wp("92.27053140096618%"),
    minWidth: wp("92.27053140096618%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.864734299516908%"),
    top: hp("2.3224043715846996%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_4: {
    width: wp("25.120772946859905%"),
    minWidth: wp("25.120772946859905%"),
    height: hp("7.018174760328616%"),
    minHeight: hp("7.018174760328616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478261%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_170_10: {
    width: wp("25.120772946859905%"),
    height: hp("7.018174760328616%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_168_7: {
    width: wp("9.66183574879227%"),
    height: hp("4.371584699453552%"),
    top: hp("3.14207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.6086956521739%")
  },
  View_168_9: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("106.28415300546447%"),
    minHeight: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.300546448087433%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    overflow: "hidden"
  },
  View_168_10: {
    width: wp("99.27536231884058%"),
    minWidth: wp("99.27536231884058%"),
    height: hp("38.52459016393443%"),
    minHeight: hp("38.52459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.36231884057971014%"),
    top: hp("6.830601092896172%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_11: {
    width: wp("19.32367149758454%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.97584541062802%")
  },
  Text_168_11: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_168_12: {
    width: wp("99.27536231884058%"),
    minWidth: wp("99.27536231884058%"),
    height: hp("20.21857923497268%"),
    minHeight: hp("20.21857923497268%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.234972677595632%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_13: {
    width: wp("94.44444444444444%"),
    top: hp("1.3661202185792298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%")
  },
  Text_168_13: {
    color: "rgba(37, 43, 66, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_168_14: {
    width: wp("87.43961352657004%"),
    minWidth: wp("87.43961352657004%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.917874396135266%"),
    top: hp("25.40983606557377%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_15: {
    width: wp("82.6086956521739%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.415458937198067%")
  },
  Text_168_15: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_168_16: {
    width: wp("57.00483091787439%"),
    minWidth: wp("57.00483091787439%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.497584541062803%"),
    top: hp("50.81967213114754%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_168_17: {
    width: wp("57.00483091787439%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(250, 74, 12, 1)",
    overflow: "hidden"
  },
  View_168_18: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.130434782608692%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_168_19: {
    width: wp("28.743961352657006%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_168_19: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_170_0: {
    width: wp("57.00483091787439%"),
    minWidth: wp("57.00483091787439%"),
    height: hp("9.289617486338798%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.497584541062803%"),
    top: hp("62.431693989071036%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_170_1: {
    width: wp("57.00483091787439%"),
    height: hp("9.289617486338798%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_170_2: {
    width: wp("29.71014492753623%"),
    minWidth: wp("29.71014492753623%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.64734299516908%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_170_3: {
    width: wp("29.71014492753623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_170_3: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_170_4: {
    width: wp("58.454106280193244%"),
    minWidth: wp("58.454106280193244%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.77294685990338%"),
    top: hp("173.0874316939891%")
  },
  Text_170_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_168_142: {
    width: wp("104.58937198067633%"),
    minWidth: wp("104.58937198067633%"),
    height: hp("30.737704918032787%"),
    minHeight: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4154589371980677%"),
    top: hp("708.3333333333333%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_168_146: {
    width: wp("56.52173913043478%"),
    minWidth: wp("56.52173913043478%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.946859903381643%"),
    top: hp("22.131147540983648%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_147: {
    width: wp("51.690821256038646%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%")
  },
  Text_168_147: {
    color: "rgba(92, 92, 92, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_168_148: {
    width: wp("41.2946323265776%"),
    height: hp("5.5992616330339615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.884057971014492%"),
    top: hp("15.437158469945416%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_168_149: {
    width: wp("9.900143756958597%"),
    height: hp("5.5992616330339615%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_168_151: {
    width: wp("9.900143756958597%"),
    height: hp("5.5992616330339615%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.697298648852659%")
  },
  ImageBackground_168_153: {
    width: wp("9.900143756958597%"),
    height: hp("5.5992616330339615%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.394479355374393%")
  },
  ImageBackground_168_46: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.24154589371980675%"),
    top: hp("184.69945355191257%")
  },
  View_168_48: {
    width: wp("86.23188405797102%"),
    minWidth: wp("86.23188405797102%"),
    height: hp("70.49180327868852%"),
    minHeight: hp("70.49180327868852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.642512077294686%"),
    top: hp("193.5792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_49: {
    width: wp("56.038647342995176%"),
    minWidth: wp("56.038647342995176%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.096618357487923%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_50: {
    width: wp("56.038647342995176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_168_50: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_168_51: {
    width: wp("86.23188405797102%"),
    minWidth: wp("86.23188405797102%"),
    height: hp("33.87978142076503%"),
    minHeight: hp("33.87978142076503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622956%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_52: {
    width: wp("81.40096618357488%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%")
  },
  Text_168_52: {
    color: "rgba(37, 43, 66, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_168_53: {
    width: wp("66.90821256038647%"),
    minWidth: wp("66.90821256038647%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.66183574879227%"),
    top: hp("46.99453551912566%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_54: {
    width: wp("62.07729468599034%"),
    top: hp("1.3661202185792547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%")
  },
  Text_168_54: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_168_62: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("127.22639073439635%"),
    minHeight: hp("127.22639073439635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.24154589371980675%"),
    top: hp("336.77304794228144%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_168_63: {
    width: wp("83.81642512077295%"),
    minWidth: wp("83.81642512077295%"),
    height: hp("62.704918032786885%"),
    minHeight: hp("62.704918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.091787439613526%"),
    top: hp("13.66120218579232%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_64: {
    width: wp("72.22222222222221%"),
    minWidth: wp("72.22222222222221%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275361%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_65: {
    width: wp("72.22222222222221%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_168_65: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_168_66: {
    width: wp("83.81642512077295%"),
    minWidth: wp("83.81642512077295%"),
    height: hp("26.09289617486339%"),
    minHeight: hp("26.09289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622984%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_67: {
    width: wp("78.98550724637681%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%")
  },
  Text_168_67: {
    color: "rgba(37, 43, 66, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_168_68: {
    width: wp("66.90821256038647%"),
    minWidth: wp("66.90821256038647%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("39.20765027322409%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_69: {
    width: wp("62.07729468599034%"),
    top: hp("1.3661202185791694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%")
  },
  Text_168_69: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_168_77: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("97.1311475409836%"),
    minHeight: hp("97.1311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.24154589371980675%"),
    top: hp("480.3928729614925%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_168_78: {
    width: wp("81.15942028985508%"),
    minWidth: wp("81.15942028985508%"),
    height: hp("69.80874316939891%"),
    minHeight: hp("69.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.420289855072463%"),
    top: hp("13.661202185792376%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_79: {
    width: wp("29.71014492753623%"),
    minWidth: wp("29.71014492753623%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.724637681159415%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_80: {
    width: wp("29.71014492753623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_168_80: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.10000000149011612,
    textTransform: "none"
  },
  View_168_81: {
    width: wp("81.15942028985508%"),
    minWidth: wp("81.15942028985508%"),
    height: hp("33.19672131147541%"),
    minHeight: hp("33.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622928%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_82: {
    width: wp("76.32850241545893%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%")
  },
  Text_168_82: {
    color: "rgba(37, 43, 66, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_168_83: {
    width: wp("66.90821256038647%"),
    minWidth: wp("66.90821256038647%"),
    height: hp("23.497267759562842%"),
    minHeight: hp("23.497267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.1256038647343%"),
    top: hp("46.31147540983608%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_84: {
    width: wp("62.07729468599034%"),
    top: hp("1.3661202185791126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980677%")
  },
  Text_168_84: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_168_127: {
    width: wp("100.96618357487924%"),
    minWidth: wp("100.96618357487924%"),
    height: hp("77.04918032786885%"),
    minHeight: hp("77.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.24154589371980675%"),
    top: hp("638.5245901639344%"),
    backgroundColor: "rgba(37, 43, 66, 1)",
    overflow: "hidden"
  },
  View_168_128: {
    width: wp("79.71014492753623%"),
    minWidth: wp("79.71014492753623%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671497%"),
    top: hp("15.027322404371716%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_129: {
    width: wp("79.71014492753623%"),
    minWidth: wp("79.71014492753623%"),
    height: hp("18.30601092896175%"),
    minHeight: hp("18.30601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_130: {
    width: wp("74.8792270531401%"),
    top: hp("1.3661202185792263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4154589371980695%")
  },
  Text_168_130: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_168_131: {
    width: wp("64.00966183574879%"),
    minWidth: wp("64.00966183574879%"),
    height: hp("13.114754098360656%"),
    minHeight: hp("13.114754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.850241545893722%"),
    top: hp("18.306010928961655%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_132: {
    width: wp("59.17874396135265%"),
    top: hp("1.36612021857934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.415458937198064%")
  },
  Text_168_132: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_168_133: {
    width: wp("81.88405797101449%"),
    minWidth: wp("81.88405797101449%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.541062801932366%"),
    top: hp("53.27868852459028%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_168_134: {
    width: wp("81.88405797101449%"),
    minWidth: wp("81.88405797101449%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_168_135: {
    width: wp("81.88405797101449%"),
    minWidth: wp("81.88405797101449%"),
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
  View_168_136: {
    width: wp("33.091787439613526%"),
    minWidth: wp("33.091787439613526%"),
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
  View_168_137: {
    width: wp("18.115942028985508%"),
    minWidth: wp("18.115942028985508%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.487922705314009%"),
    top: hp("2.459016393442539%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_168_138: {
    width: wp("18.115942028985508%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_168_138: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_168_139: {
    width: wp("44.927536231884055%"),
    minWidth: wp("44.927536231884055%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95652173913044%"),
    top: hp("0.2732240437157998%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_168_140: {
    width: wp("23.18840579710145%"),
    minWidth: wp("23.18840579710145%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.869565217391298%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_168_141: {
    width: wp("23.18840579710145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_168_141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  ImageBackground_170_5: {
    width: wp("157.00483091787441%"),
    minWidth: wp("157.00483091787441%"),
    height: hp("79.37158469945356%"),
    minHeight: hp("79.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-28.502415458937197%"),
    top: hp("265.0273224043716%"),
    resizeMode: "cover"
  },
  ImageBackground_170_6: {
    width: wp("157.00483091787441%"),
    minWidth: wp("157.00483091787441%"),
    height: hp("79.37158469945356%"),
    minHeight: hp("79.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-28.26086956521739%"),
    top: hp("410.38251366120215%"),
    resizeMode: "cover"
  },
  ImageBackground_170_7: {
    width: wp("157.00483091787441%"),
    minWidth: wp("157.00483091787441%"),
    height: hp("79.37158469945356%"),
    minHeight: hp("79.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-28.26086956521739%"),
    top: hp("555.6010928961749%"),
    resizeMode: "cover"
  },
  View_264_4: {
    width: wp("101.93236714975846%"),
    minWidth: wp("101.93236714975846%"),
    height: hp("67.21311475409836%"),
    minHeight: hp("67.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.864734299516908%"),
    top: hp("90.02732240437157%")
  },
  ImageBackground_264_0: {
    width: wp("52.89855072463768%"),
    minWidth: wp("52.89855072463768%"),
    height: hp("55.73770491803278%"),
    minHeight: hp("55.73770491803278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.033816425120776%"),
    top: hp("11.47540983606558%")
  },
  ImageBackground_264_1: {
    width: wp("55.55555555555556%"),
    minWidth: wp("55.55555555555556%"),
    height: hp("61.612021857923494%"),
    minHeight: hp("61.612021857923494%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
