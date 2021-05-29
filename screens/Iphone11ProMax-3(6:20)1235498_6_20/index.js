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
      <View style={styles.View_6_38}>
        <Text style={styles.Text_6_38}>Delicious food for you</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f13f/7779/62303a880d57a6f9512d518b2f385401"
        }}
        style={styles.ImageBackground_7_19}
      />
      <View style={styles.View_7_20} />
      <View style={styles.View_7_25}>
        <Text style={styles.Text_7_25}>Search</Text>
      </View>
      <View style={styles.View_7_40}>
        <Text style={styles.Text_7_40}>see more</Text>
      </View>
      <View style={styles.View_7_41}>
        <Text style={styles.Text_7_41}>Foods</Text>
      </View>
      <View style={styles.View_7_43}>
        <Text style={styles.Text_7_43}>Drinks</Text>
      </View>
      <View style={styles.View_7_44}>
        <Text style={styles.Text_7_44}>Snacks</Text>
      </View>
      <View style={styles.View_7_45}>
        <Text style={styles.Text_7_45}>Sauce</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf6d/d132/8fdb43e0d45f22c891c7d4ab1df72478"
        }}
        style={styles.ImageBackground_7_24}
      />
      <View style={styles.View_7_46}>
        <View style={styles.View_7_33} />
        <View style={styles.View_7_34}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d132/ff3e/887787218d1854408002705a5cfd87a5"
            }}
            style={styles.ImageBackground_7_35}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eaa9/0365/c5a48feed418c3bb4cb3751ce93dde3f"
            }}
            style={styles.ImageBackground_7_36}
          />
        </View>
        <View style={styles.View_7_37}>
          <Text style={styles.Text_7_37}>Veggie tomato mix</Text>
        </View>
        <View style={styles.View_7_38}>
          <Text style={styles.Text_7_38}>N1,900</Text>
        </View>
      </View>
      <View style={styles.View_7_47}>
        <View style={styles.View_7_26} />
        <View style={styles.View_7_30}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d132/ff3e/887787218d1854408002705a5cfd87a5"
            }}
            style={styles.ImageBackground_7_29}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b6f/c061/ea776ece752ad8ccaff000f0231032e7"
            }}
            style={styles.ImageBackground_7_28}
          />
        </View>
        <View style={styles.View_7_31}>
          <Text style={styles.Text_7_31}>Spicy fish sauce</Text>
        </View>
        <View style={styles.View_7_32}>
          <Text style={styles.Text_7_32}>N2,300.99</Text>
        </View>
      </View>
      <View style={styles.View_7_48} />
      <View style={styles.View_7_54}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1095/36fc/2f8da64073cd3016bb8eb9a79906b215"
          }}
          style={styles.ImageBackground_7_55}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca10/3954/31d8e7daa7baca85c5bee2ffeeb9eefd"
        }}
        style={styles.ImageBackground_7_59}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4579/5898/f1c047ac5283af6d35968ac64d3f0b28"
        }}
        style={styles.ImageBackground_7_61}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e06b/e368/23f594d43ae81d4157180e0feedc86dd"
        }}
        style={styles.ImageBackground_245_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a7f/1624/7fe1e1f31c7465db80f994f6fdd5309b"
        }}
        style={styles.ImageBackground_245_3}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("122.40437158469946%") },
  View_6_38: {
    width: wp("44.68599033816425%"),
    minWidth: wp("44.68599033816425%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("18.0327868852459%")
  },
  Text_6_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_19: {
    width: wp("5.314009661835748%"),
    minWidth: wp("5.314009661835748%"),
    height: hp("2.0036429003939604%"),
    minHeight: hp("2.0036429003939604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.188060815783514%"),
    top: hp("10.10928961748634%")
  },
  View_7_20: {
    width: wp("75.84541062801932%"),
    minWidth: wp("75.84541062801932%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("33.060109289617486%"),
    backgroundColor: "rgba(239, 238, 238, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_25: {
    width: wp("12.80193236714976%"),
    minWidth: wp("12.80193236714976%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.743961352657006%"),
    top: hp("35.79234972677596%")
  },
  Text_7_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_40: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.08695652173914%"),
    top: hp("58.19672131147541%")
  },
  Text_7_40: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_41: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.980676328502415%"),
    top: hp("47.540983606557376%")
  },
  Text_7_41: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_43: {
    width: wp("12.318840579710146%"),
    minWidth: wp("12.318840579710146%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.96135265700483%"),
    top: hp("47.540983606557376%")
  },
  Text_7_43: {
    color: "rgba(154, 154, 157, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_44: {
    width: wp("14.009661835748794%"),
    minWidth: wp("14.009661835748794%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.18357487922705%"),
    top: hp("47.540983606557376%")
  },
  Text_7_44: {
    color: "rgba(154, 154, 157, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_45: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.09661835748793%"),
    top: hp("47.540983606557376%")
  },
  Text_7_45: {
    color: "rgba(154, 154, 157, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_7_24: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.531400966183575%"),
    top: hp("35.92896174863388%")
  },
  View_7_46: {
    width: wp("53.14009661835749%"),
    minWidth: wp("53.14009661835749%"),
    height: hp("43.85245901639344%"),
    minHeight: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("60.79234972677595%")
  },
  View_7_33: {
    width: wp("53.14009661835749%"),
    minWidth: wp("53.14009661835749%"),
    height: hp("36.885245901639344%"),
    minHeight: hp("36.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754102%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_34: {
    width: wp("39.65313307904967%"),
    minWidth: wp("39.65313307904967%"),
    height: hp("22.42677198733137%"),
    minHeight: hp("22.42677198733137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.56387756642512%"),
    top: hp("0%")
  },
  ImageBackground_7_35: {
    width: wp("39.65313307904967%"),
    minWidth: wp("39.65313307904967%"),
    height: hp("22.42677198733137%"),
    minHeight: hp("22.42677198733137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_36: {
    width: wp("39.65313307904967%"),
    minWidth: wp("39.65313307904967%"),
    height: hp("22.42677198733137%"),
    minHeight: hp("22.42677198733137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_37: {
    width: wp("30.193236714975846%"),
    minWidth: wp("30.193236714975846%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.869565217391305%"),
    top: hp("26.77595628415301%")
  },
  Text_7_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_38: {
    width: wp("41.54589371980676%"),
    minWidth: wp("41.54589371980676%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.79710144927536%"),
    top: hp("35.92896174863388%")
  },
  Text_7_38: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_47: {
    width: wp("53.14009661835749%"),
    minWidth: wp("53.14009661835749%"),
    height: hp("43.85245901639344%"),
    minHeight: hp("43.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.42995169082126%"),
    top: hp("60.79234972677595%")
  },
  View_7_26: {
    width: wp("53.14009661835749%"),
    minWidth: wp("53.14009661835749%"),
    height: hp("36.885245901639344%"),
    minHeight: hp("36.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.967213114754102%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_7_30: {
    width: wp("39.65313307904967%"),
    minWidth: wp("39.65313307904967%"),
    height: hp("22.42677198733137%"),
    minHeight: hp("22.42677198733137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.56387756642512%"),
    top: hp("0%")
  },
  ImageBackground_7_29: {
    width: wp("39.65313307904967%"),
    minWidth: wp("39.65313307904967%"),
    height: hp("22.42677198733137%"),
    minHeight: hp("22.42677198733137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_7_28: {
    width: wp("39.65313307904967%"),
    minWidth: wp("39.65313307904967%"),
    height: hp("22.42677198733137%"),
    minHeight: hp("22.42677198733137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_7_31: {
    width: wp("32.850241545893724%"),
    minWidth: wp("32.850241545893724%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.79710144927536%"),
    top: hp("26.77595628415301%")
  },
  Text_7_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_32: {
    width: wp("41.54589371980676%"),
    minWidth: wp("41.54589371980676%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.79710144927536%"),
    top: hp("35.92896174863388%")
  },
  Text_7_32: {
    color: "rgba(250, 74, 12, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_7_48: {
    width: wp("21.014492753623188%"),
    minWidth: wp("21.014492753623188%"),
    height: hp("0.4098360655737705%"),
    minHeight: hp("0.4098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.115942028985508%"),
    top: hp("51.63934426229508%"),
    backgroundColor: "rgba(250, 74, 12, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_7_54: {
    width: wp("7.487922705314009%"),
    minWidth: wp("7.487922705314009%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.077294685990339%"),
    top: hp("111.74863387978142%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_7_55: {
    width: wp("5.981137556730261%"),
    height: hp("3.3879326992347596%"),
    top: hp("0.42354396132171246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7533861243206523%")
  },
  ImageBackground_7_59: {
    width: wp("7.004830917874397%"),
    height: hp("3.9617486338797816%"),
    top: hp("111.88524590163935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.43478260869566%")
  },
  ImageBackground_7_61: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("8.879781420765028%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.29951690821255%")
  },
  ImageBackground_245_0: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("112.29508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.212560386473434%")
  },
  ImageBackground_245_3: {
    width: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    top: hp("112.29508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.405797101449274%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
