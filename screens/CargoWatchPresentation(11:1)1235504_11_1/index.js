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
      <View style={styles.View_11_2}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1de9/a679/134c2c1be7c0e17d5dec41923133b310"
          }}
          style={styles.ImageBackground_11_3}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7d0/880a/04782f08974811a28eabdffb4a1f5f97"
          }}
          style={styles.ImageBackground_11_4}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cff/cdb9/7f9db1f8ffd285789bfee0a888787dc2"
          }}
          style={styles.ImageBackground_11_5}
        />
        <View style={styles.View_11_6} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce25/09de/9891b3ca72b658673b164cc2bb3c2fe4"
        }}
        style={styles.ImageBackground_11_7}
      />
      <View style={styles.View_11_8} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a6b/b475/fb36d30c760455a29fb7589ba49a5597"
        }}
        style={styles.ImageBackground_11_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85cb/f13d/314a1ce50df84ae27673a46cb60cabfa"
        }}
        style={styles.ImageBackground_11_10}
      />
      <View style={styles.View_11_11} />
      <View style={styles.View_11_12} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84b9/e00f/a05767bed8cdde4d4d24ce0c0c73644a"
        }}
        style={styles.ImageBackground_11_13}
      />
      <View style={styles.View_11_14}>
        <Text style={styles.Text_11_14}>Foodie App ui</Text>
      </View>
      <View style={styles.View_11_15}>
        <Text style={styles.Text_11_15}>
          Delicious food for you. Food for everyone
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("163.9344262295082%") },
  View_11_2: {
    width: wp("190.90914916992188%"),
    minWidth: wp("190.90914916992188%"),
    height: hp("396.35456689719945%"),
    minHeight: hp("396.35456689719945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-39.3519287109375%"),
    top: hp("-86.11343467170424%")
  },
  ImageBackground_11_3: {
    width: wp("113.73124694824219%"),
    minWidth: wp("113.73124694824219%"),
    height: hp("211.24999666474557%"),
    minHeight: hp("211.24999666474557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000016676272196036734%")
  },
  ImageBackground_11_4: {
    width: wp("89.2969741821289%"),
    minWidth: wp("89.2969741821289%"),
    height: hp("265.8587012786032%"),
    minHeight: hp("265.8587012786032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13109588623047%"),
    top: hp("57.5195812788166%")
  },
  ImageBackground_11_5: {
    width: wp("153.80331420898438%"),
    minWidth: wp("153.80331420898438%"),
    height: hp("273.94015619663594%"),
    minHeight: hp("273.94015619663594%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.10581970214844%"),
    top: hp("122.41441070056354%")
  },
  View_11_6: {
    width: wp("100.62500000000001%"),
    minWidth: wp("100.62500000000001%"),
    height: hp("169.80874316939892%"),
    minHeight: hp("169.80874316939892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.1644287109375%"),
    top: hp("80.23915108435793%"),
    backgroundColor: "rgba(236, 242, 246, 1)",
    opacity: 0.6899999976158142
  },
  ImageBackground_11_7: {
    width: wp("23.1875%"),
    minWidth: wp("23.1875%"),
    height: hp("114.34426229508196%"),
    minHeight: hp("114.34426229508196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.875%"),
    top: hp("64.61748633879782%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_11_8: {
    width: wp("23.25%"),
    minWidth: wp("23.25%"),
    height: hp("114.07103825136613%"),
    minHeight: hp("114.07103825136613%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.5%"),
    top: hp("64.20765027322405%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_11_9: {
    width: wp("23.125%"),
    minWidth: wp("23.125%"),
    height: hp("114.20765027322403%"),
    minHeight: hp("114.20765027322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.75%"),
    top: hp("75.13661202185791%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_11_10: {
    width: wp("24.875%"),
    minWidth: wp("24.875%"),
    height: hp("114.89071038251366%"),
    minHeight: hp("114.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.5625%"),
    top: hp("58.7431693989071%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_11_11: {
    width: wp("23.1875%"),
    minWidth: wp("23.1875%"),
    height: hp("114.20765027322403%"),
    minHeight: hp("114.20765027322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.5%"),
    top: hp("64.34426229508196%"),
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_11_12: {
    width: wp("23.25%"),
    minWidth: wp("23.25%"),
    height: hp("109.8360655737705%"),
    minHeight: hp("109.8360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.1875%"),
    top: hp("67.07650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_11_13: {
    width: wp("24.8125%"),
    minWidth: wp("24.8125%"),
    height: hp("114.89071038251366%"),
    minHeight: hp("114.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.9375%"),
    top: hp("49.45355191256831%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_11_14: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("25%")
  },
  Text_11_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 72,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_15: {
    width: wp("45.375%"),
    minWidth: wp("45.375%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.250000000000004%"),
    top: hp("35.24590163934426%")
  },
  Text_11_15: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 29,
    fontWeight: "400",
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
