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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98b9/ba5d/e6c32ad1f858068bb5070083790fcabc"
        }}
        style={styles.ImageBackground_118_52}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d75/21d2/dfca8fe27a6154c898eac50881507609"
        }}
        style={styles.ImageBackground_118_51}
      />
      <View style={styles.View_118_0}>
        <Text style={styles.Text_118_0}>Profile</Text>
      </View>
      <View style={styles.View_118_1}>
        <Text style={styles.Text_118_1}>Security</Text>
      </View>
      <View style={styles.View_118_2}>
        <Text style={styles.Text_118_2}>orders</Text>
      </View>
      <View style={styles.View_118_5}>
        <Text style={styles.Text_118_5}>Privacy policy</Text>
      </View>
      <View style={styles.View_118_3}>
        <Text style={styles.Text_118_3}>offer and promo</Text>
      </View>
      <View style={styles.View_118_4}>
        <Text style={styles.Text_118_4}>Sign-out</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7672/cf8b/f330fd9f337b4decb8d3a556c15b6dda"
        }}
        style={styles.ImageBackground_121_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c27/ba6f/90add2de5b69cc5e607d22c4b8450be0"
        }}
        style={styles.ImageBackground_121_2}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c27/ba6f/90add2de5b69cc5e607d22c4b8450be0"
        }}
        style={styles.ImageBackground_121_3}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c27/ba6f/90add2de5b69cc5e607d22c4b8450be0"
        }}
        style={styles.ImageBackground_121_4}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c27/ba6f/90add2de5b69cc5e607d22c4b8450be0"
        }}
        style={styles.ImageBackground_121_5}
      />
      <View style={styles.View_121_6}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bdd/bc30/16ba91965d50235a03302ebff71560d6"
          }}
          style={styles.ImageBackground_121_7}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e3/5bf3/fdd0a217adc446dbd20c9bb0c92b2845"
        }}
        style={styles.ImageBackground_121_10}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3230/fe29/9e8a496994f8afc84e39bb32580a7165"
        }}
        style={styles.ImageBackground_121_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd4f/da4f/0a296c4a55b73f1ffaca67a595efc019"
        }}
        style={styles.ImageBackground_121_15}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0822/6306/489ebbd9ec0d78e21b382a86024154ab"
        }}
        style={styles.ImageBackground_121_17}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  ImageBackground_118_52: {
    width: wp("59.443517122867604%"),
    minWidth: wp("59.443517122867604%"),
    height: hp("72.55426625736425%"),
    minHeight: hp("72.55426625736425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.28685697841183%"),
    top: hp("28.305870848275273%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  ImageBackground_118_51: {
    width: wp("62.940190264568244%"),
    minWidth: wp("62.940190264568244%"),
    height: hp("76.8803247337133%"),
    minHeight: hp("76.8803247337133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.2930961277174%"),
    top: hp("21.374945301827186%"),
    resizeMode: "cover",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_118_0: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("21.994535519125684%")
  },
  Text_118_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_118_1: {
    width: wp("17.14975845410628%"),
    minWidth: wp("17.14975845410628%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("64.61748633879782%")
  },
  Text_118_1: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_118_2: {
    width: wp("13.768115942028986%"),
    minWidth: wp("13.768115942028986%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("32.650273224043715%")
  },
  Text_118_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_118_5: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("53.96174863387978%")
  },
  Text_118_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_118_3: {
    width: wp("34.05797101449276%"),
    minWidth: wp("34.05797101449276%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("43.30601092896175%")
  },
  Text_118_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_118_4: {
    width: wp("18.357487922705314%"),
    minWidth: wp("18.357487922705314%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.903381642512077%"),
    top: hp("106.9672131147541%")
  },
  Text_118_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_121_0: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("0.0000016959063176245713%"),
    minHeight: hp("0.0000016959063176245713%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.15942028985507%"),
    top: hp("108.87978142076503%")
  },
  ImageBackground_121_2: {
    width: wp("31.88405797101449%"),
    minWidth: wp("31.88405797101449%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("29.098360655737704%")
  },
  ImageBackground_121_3: {
    width: wp("31.88405797101449%"),
    minWidth: wp("31.88405797101449%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("39.75409836065574%")
  },
  ImageBackground_121_4: {
    width: wp("31.88405797101449%"),
    minWidth: wp("31.88405797101449%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("50.409836065573764%")
  },
  ImageBackground_121_5: {
    width: wp("31.88405797101449%"),
    minWidth: wp("31.88405797101449%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.874396135265698%"),
    top: hp("61.065573770491795%")
  },
  View_121_6: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%"),
    top: hp("22.131147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_121_7: {
    width: wp("5.314009661835748%"),
    height: hp("3.0054644808743167%"),
    top: hp("0.13661202185792476%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980784%")
  },
  ImageBackground_121_10: {
    width: wp("6.280193236714976%"),
    height: hp("3.551912568306011%"),
    top: hp("32.650273224043715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%")
  },
  ImageBackground_121_12: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("43.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%")
  },
  ImageBackground_121_15: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("54.23497267759563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%")
  },
  ImageBackground_121_17: {
    width: wp("4.830917874396135%"),
    height: hp("2.6229509238988324%"),
    top: hp("65.02732240437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352657%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
