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
      <View style={styles.View_308_22}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995e/df24/7e6572068dbb9b9a1aa09c2be4399264"
          }}
          style={styles.ImageBackground_308_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7d0/880a/04782f08974811a28eabdffb4a1f5f97"
          }}
          style={styles.ImageBackground_308_24}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cff/cdb9/7f9db1f8ffd285789bfee0a888787dc2"
          }}
          style={styles.ImageBackground_308_25}
        />
        <View style={styles.View_308_26} />
      </View>
      <View style={styles.View_298_79}>
        <Text style={styles.Text_298_79}>Userflow</Text>
      </View>
      <View style={styles.View_308_17}>
        <View style={styles.View_298_84}>
          <Text style={styles.Text_298_84}>Onboarding</Text>
        </View>
        <View style={styles.View_307_9}>
          <Text style={styles.Text_307_9}>Home</Text>
        </View>
        <View style={styles.View_308_11}>
          <Text style={styles.Text_308_11}>Reset password</Text>
        </View>
        <View style={styles.View_307_3}>
          <Text style={styles.Text_307_3}>Signup</Text>
        </View>
        <View style={styles.View_307_11}>
          <Text style={styles.Text_307_11}>Food details</Text>
        </View>
        <View style={styles.View_308_2}>
          <Text style={styles.Text_308_2}>Checkout</Text>
        </View>
        <View style={styles.View_308_9}>
          <Text style={styles.Text_308_9}>Edit bank details</Text>
        </View>
        <View style={styles.View_307_22}>
          <Text style={styles.Text_307_22}>Food details</Text>
        </View>
        <View style={styles.View_307_61}>
          <Text style={styles.Text_307_61}>Add to cart</Text>
        </View>
        <View style={styles.View_307_4}>
          <Text style={styles.Text_307_4}>Signup</Text>
        </View>
        <View style={styles.View_307_5}>
          <Text style={styles.Text_307_5}>Login</Text>
        </View>
        <View style={styles.View_307_13}>
          <Text style={styles.Text_307_13}>Search</Text>
        </View>
        <View style={styles.View_308_3}>
          <Text style={styles.Text_308_3}>Delivery edit</Text>
        </View>
        <View style={styles.View_307_25}>
          <Text style={styles.Text_307_25}>Favorites</Text>
        </View>
        <View style={styles.View_307_27}>
          <Text style={styles.Text_307_27}>Profile</Text>
        </View>
        <View style={styles.View_306_2} />
        <View style={styles.View_307_10} />
        <View style={styles.View_308_12} />
        <View style={styles.View_307_2} />
        <View style={styles.View_307_14} />
        <View style={styles.View_308_4} />
        <View style={styles.View_308_10} />
        <View style={styles.View_307_23} />
        <View style={styles.View_307_62} />
        <View style={styles.View_307_6} />
        <View style={styles.View_307_15} />
        <View style={styles.View_308_5} />
        <View style={styles.View_307_26} />
        <View style={styles.View_307_28} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d5f/1dd2/d2c76d0f623c0d9fe2b37195b5c0c0de"
          }}
          style={styles.ImageBackground_307_0}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22d8/827f/3b560b4098ff3c405fb6d56d4113cbfe"
          }}
          style={styles.ImageBackground_307_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3827/7a18/12d3300d038283d53c30aceab5cce807"
          }}
          style={styles.ImageBackground_307_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3827/7a18/12d3300d038283d53c30aceab5cce807"
          }}
          style={styles.ImageBackground_308_13}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d4f/1a88/01dd52a07561eb22559ac54aee523402"
          }}
          style={styles.ImageBackground_308_15}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31fd/7bb2/6788e84d4832a8b1186bbbf906de7668"
          }}
          style={styles.ImageBackground_308_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31fd/7bb2/6788e84d4832a8b1186bbbf906de7668"
          }}
          style={styles.ImageBackground_308_16}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74de/13cf/fd63df0d73500bfbc503215b799af631"
          }}
          style={styles.ImageBackground_307_21}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74de/13cf/fd63df0d73500bfbc503215b799af631"
          }}
          style={styles.ImageBackground_308_7}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74de/13cf/fd63df0d73500bfbc503215b799af631"
          }}
          style={styles.ImageBackground_307_24}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbe7/bdb4/5e8bc23d1203e0fab8a8a57b965117e4"
          }}
          style={styles.ImageBackground_307_63}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6b3/76b6/47e94ba916a8521184565cf06e5a8b23"
          }}
          style={styles.ImageBackground_307_64}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c615/1729/acd4272ea79a2cf281edd891de0cbd46"
          }}
          style={styles.ImageBackground_307_1}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f6a/7cb0/3c7ba63cb25f656819bdf5cfd2813465"
          }}
          style={styles.ImageBackground_307_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40af/710f/b56b41aaab42afe146adde2892c831e3"
          }}
          style={styles.ImageBackground_308_6}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40af/710f/b56b41aaab42afe146adde2892c831e3"
          }}
          style={styles.ImageBackground_308_8}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8538/b379/a34dab5cdc0c721c4d7b2e86e5faf581"
          }}
          style={styles.ImageBackground_307_19}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.95081967213115%") },
  View_308_22: {
    width: wp("218.181884765625%"),
    minWidth: wp("218.181884765625%"),
    height: hp("396.35456689719945%"),
    minHeight: hp("396.35456689719945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-57.64285714285714%"),
    top: hp("-83.19672131147541%")
  },
  ImageBackground_308_23: {
    width: wp("129.97856794084822%"),
    minWidth: wp("129.97856794084822%"),
    height: hp("211.24999666474557%"),
    minHeight: hp("211.24999666474557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_308_24: {
    width: wp("102.0536847795759%"),
    minWidth: wp("102.0536847795759%"),
    height: hp("265.8587012786032%"),
    minHeight: hp("265.8587012786032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93.86411830357142%"),
    top: hp("57.519597955088805%")
  },
  ImageBackground_308_25: {
    width: wp("175.7752162388393%"),
    minWidth: wp("175.7752162388393%"),
    height: hp("273.94015619663594%"),
    minHeight: hp("273.94015619663594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.40665108816964%"),
    top: hp("122.41441070056354%")
  },
  View_308_26: {
    width: wp("114.99999999999999%"),
    minWidth: wp("114.99999999999999%"),
    height: hp("169.80874316939892%"),
    minHeight: hp("169.80874316939892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.61648995535714%"),
    top: hp("74.774670210041%"),
    backgroundColor: "rgba(246, 211, 230, 1)",
    opacity: 0.699999988079071
  },
  View_298_79: {
    width: wp("10.714285714285714%"),
    minWidth: wp("10.714285714285714%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.285714285714286%"),
    top: hp("19.262295081967213%")
  },
  Text_298_79: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_308_17: {
    width: wp("81.42857142857143%"),
    minWidth: wp("81.42857142857143%"),
    height: hp("62.158469945355186%"),
    minHeight: hp("62.158469945355186%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.285714285714286%"),
    top: hp("33.060109289617486%")
  },
  View_298_84: {
    width: wp("7.357142857142857%"),
    minWidth: wp("7.357142857142857%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.571428571428571%"),
    top: hp("13.797814207650276%")
  },
  Text_298_84: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_9: {
    width: wp("3.642857142857143%"),
    minWidth: wp("3.642857142857143%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.964285714285715%"),
    top: hp("31.76229508196721%")
  },
  Text_307_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_308_11: {
    width: wp("9.642857142857144%"),
    minWidth: wp("9.642857142857144%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.071428571428571%"),
    top: hp("56.69398907103826%")
  },
  Text_308_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_3: {
    width: wp("4.214285714285714%"),
    minWidth: wp("4.214285714285714%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.571428571428571%"),
    top: hp("32.103825136612016%")
  },
  Text_307_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_11: {
    width: wp("7.357142857142857%"),
    minWidth: wp("7.357142857142857%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.35714285714286%"),
    top: hp("31.830601092896174%")
  },
  Text_307_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_308_2: {
    width: wp("5.857142857142858%"),
    minWidth: wp("5.857142857142858%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.14285714285714%"),
    top: hp("31.830601092896174%")
  },
  Text_308_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_308_9: {
    width: wp("9.857142857142858%"),
    minWidth: wp("9.857142857142858%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.64285714285714%"),
    top: hp("47.40437158469945%")
  },
  Text_308_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_22: {
    width: wp("7.357142857142857%"),
    minWidth: wp("7.357142857142857%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.92857142857142%"),
    top: hp("15.983606557377051%")
  },
  Text_307_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_61: {
    width: wp("6.785714285714286%"),
    minWidth: wp("6.785714285714286%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.64285714285714%"),
    top: hp("31.830601092896174%")
  },
  Text_307_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_4: {
    width: wp("4.214285714285714%"),
    minWidth: wp("4.214285714285714%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.571428571428571%"),
    top: hp("32.103825136612016%")
  },
  Text_307_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_5: {
    width: wp("3.214285714285714%"),
    minWidth: wp("3.214285714285714%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6428571428571423%"),
    top: hp("32.103825136612016%")
  },
  Text_307_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_13: {
    width: wp("5.285714285714286%"),
    minWidth: wp("5.285714285714286%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.42857142857143%"),
    top: hp("16.256830601092894%")
  },
  Text_307_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_308_3: {
    width: wp("8.071428571428571%"),
    minWidth: wp("8.071428571428571%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.57142857142857%"),
    top: hp("16.256830601092894%")
  },
  Text_308_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_25: {
    width: wp("5.5%"),
    minWidth: wp("5.5%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.357142857142854%"),
    top: hp("2.185792349726775%")
  },
  Text_307_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_307_27: {
    width: wp("3.7142857142857144%"),
    minWidth: wp("3.7142857142857144%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.214285714285715%"),
    top: hp("47.540983606557376%")
  },
  Text_307_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_306_2: {
    width: wp("10.5%"),
    minWidth: wp("10.5%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("11.612021857923494%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_307_10: {
    width: wp("10.5%"),
    minWidth: wp("10.5%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.535714285714285%"),
    top: hp("29.576502732240435%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_308_12: {
    width: wp("12.357142857142858%"),
    minWidth: wp("12.357142857142858%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.7142857142857135%"),
    top: hp("54.50819672131148%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_307_2: {
    width: wp("6.785714285714286%"),
    minWidth: wp("6.785714285714286%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.14285714285714%"),
    top: hp("29.6448087431694%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_307_14: {
    width: wp("12.428571428571429%"),
    minWidth: wp("12.428571428571429%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.785714285714285%"),
    top: hp("29.6448087431694%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_308_4: {
    width: wp("12.428571428571429%"),
    minWidth: wp("12.428571428571429%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.99999999999999%"),
    top: hp("29.6448087431694%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_308_10: {
    width: wp("12.428571428571429%"),
    minWidth: wp("12.428571428571429%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.99999999999999%"),
    top: hp("45.21857923497268%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_307_23: {
    width: wp("12.428571428571429%"),
    minWidth: wp("12.428571428571429%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.357142857142854%"),
    top: hp("13.797814207650276%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_307_62: {
    width: wp("12.428571428571429%"),
    minWidth: wp("12.428571428571429%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.07142857142857%"),
    top: hp("29.6448087431694%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_307_6: {
    width: wp("6.785714285714286%"),
    minWidth: wp("6.785714285714286%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.6448087431694%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_307_15: {
    width: wp("8.5%"),
    minWidth: wp("8.5%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.785714285714285%"),
    top: hp("14.071038251366126%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_308_5: {
    width: wp("12.5%"),
    minWidth: wp("12.5%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.92857142857142%"),
    top: hp("14.071038251366126%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_307_26: {
    width: wp("8.5%"),
    minWidth: wp("8.5%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.785714285714285%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_307_28: {
    width: wp("8.5%"),
    minWidth: wp("8.5%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.785714285714285%"),
    top: hp("45.355191256830594%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_307_0: {
    width: wp("4.821428571428572%"),
    minWidth: wp("4.821428571428572%"),
    height: hp("10.450819672131148%"),
    minHeight: hp("10.450819672131148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8928571428571423%"),
    top: hp("19.330601092896174%")
  },
  ImageBackground_307_16: {
    width: wp("5.714286804199219%"),
    minWidth: wp("5.714286804199219%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.071428571428577%"),
    top: hp("33.46994535519126%")
  },
  ImageBackground_307_7: {
    width: wp("4.821428571428572%"),
    minWidth: wp("4.821428571428572%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.85714285714286%"),
    top: hp("33.46994535519126%")
  },
  ImageBackground_308_13: {
    width: wp("4.821428571428572%"),
    minWidth: wp("4.821428571428572%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.928571428571427%"),
    top: hp("58.40163934426229%")
  },
  ImageBackground_308_15: {
    width: wp("6.142857142857143%"),
    minWidth: wp("6.142857142857143%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.071428571428577%"),
    top: hp("58.46994535519126%")
  },
  ImageBackground_308_14: {
    width: wp("4.808252599884457e-7%"),
    minWidth: wp("4.808252599884457e-7%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("37.29508196721311%")
  },
  ImageBackground_308_16: {
    width: wp("5.73284263997006e-7%"),
    minWidth: wp("5.73284263997006e-7%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.071428571428577%"),
    top: hp("37.29508196721311%")
  },
  ImageBackground_307_21: {
    width: wp("2.928571428571429%"),
    minWidth: wp("2.928571428571429%"),
    height: hp("4.89663125832929e-7%"),
    minHeight: hp("4.89663125832929e-7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.714285714285715%"),
    top: hp("33.46994535519126%")
  },
  ImageBackground_308_7: {
    width: wp("2.928571428571429%"),
    minWidth: wp("2.928571428571429%"),
    height: hp("4.89663125832929e-7%"),
    minHeight: hp("4.89663125832929e-7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.35714285714285%"),
    top: hp("33.46994535519126%")
  },
  ImageBackground_307_24: {
    width: wp("2.928571428571429%"),
    minWidth: wp("2.928571428571429%"),
    height: hp("4.89663063708974e-7%"),
    minHeight: hp("4.89663063708974e-7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.285714285714285%"),
    top: hp("17.622950819672127%")
  },
  ImageBackground_307_63: {
    width: wp("2.857142857142857%"),
    minWidth: wp("2.857142857142857%"),
    height: hp("4.777200439724755e-7%"),
    minHeight: hp("4.777200439724755e-7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.214285714285715%"),
    top: hp("33.46994535519126%")
  },
  ImageBackground_307_64: {
    width: wp("1.9045676578701075e-7%"),
    minWidth: wp("1.9045676578701075e-7%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.07142857142858%"),
    top: hp("21.31147540983607%")
  },
  ImageBackground_307_1: {
    width: wp("4.821428571428572%"),
    minWidth: wp("4.821428571428572%"),
    height: hp("10.450819672131148%"),
    minHeight: hp("10.450819672131148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.678571428571429%"),
    top: hp("19.330601092896174%")
  },
  ImageBackground_307_17: {
    width: wp("5.5%"),
    minWidth: wp("5.5%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.071428571428577%"),
    top: hp("17.896174863387976%")
  },
  ImageBackground_308_6: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("17.896174863387976%")
  },
  ImageBackground_308_8: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("33.46994535519126%")
  },
  ImageBackground_307_19: {
    width: wp("3.0332197461809427%"),
    minWidth: wp("3.0332197461809427%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.60963657924107%"),
    top: hp("3.8251366120218577%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
