import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign
            name="arrowleft"
            size={24}
            style={{
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              marginStart: 12,
            }}
          >
            All Plant
          </Text>
        </View>
        <AntDesign
          name="search1"
          size={24}
          style={{
            alignSelf: "center",
          }}
        />
      </View>
      {/* content */}
      <View>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginTop: 8,
          }}
        >
          Plant {"\n"}is for room
        </Text>
        {/* horizontal sort */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View style={styles.chipSorted}>
            <Text
              style={{
                color: "#505050",
              }}
            >
              All
            </Text>
          </View>
          <View style={[styles.chipSorted, styles.chipSortedActive]}>
            <Text style={{ color: "#fff" }}>Cacti</Text>
          </View>
          <View style={styles.chipSorted}>
            <Text
              style={{
                color: "#505050",
              }}
            >
              In pots
            </Text>
          </View>
          <View style={styles.chipSorted}>
            <Text
              style={{
                color: "#505050",
              }}
            >
              Dried Flowers
            </Text>
          </View>
        </View>
        {/* end horizontal sort */}

        {/* popularity */}

        <View
          style={{
            marginTop: 12,
          }}
        >
          <Text
            style={{
              color: "#000",
              opacity: 0.5,
              fontWeight: "500",
            }}
          >
            Popularity
          </Text>
        </View>

        {/* end popularity */}

        {/* item */}

        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
          }}
        >
          {/* image thumb */}
          <View
            style={{
              backgroundColor: "#EBF4EE",
              height: 80,
              paddingStart: 12,
              paddingEnd: 12,
              borderRadius: 10,
            }}
          >
            <Image
              style={{
                height: 108,
                width: 113,
                top: -28,
              }}
              source={require("../../assets/echeveria.png")}
            />

            <View
              style={{
                height: 28,
                width: 28,
                backgroundColor: "#fff",
                justifyContent: "center",
                position: "absolute",
                end: 10,
                bottom: 10,
                borderRadius: 8,
              }}
            >
              <Icon
                name="heart"
                size={16}
                color="#BFC2C8"
                style={{
                  alignSelf: "center",
                }}
              />
            </View>
          </View>
          {/* end image thumb */}

          {/* details */}
          <View
            style={{
              marginStart: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Echeveria
              </Text>
              <Image
                style={{
                  marginStart: 12,
                }}
                source={require("../../assets/ic_star.png")}
              />
              <Text
                style={{
                  marginStart: 4,
                  color: "#FFBB56",
                  fontWeight: "600",
                }}
              >
                5.0
              </Text>
            </View>
            <Text
              style={{
                color: "#000",
                marginTop: 2,
                opacity: 0.5,
              }}
            >
              From 3 inch
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 5,
              }}
            >
              25 $
            </Text>
          </View>
        </View>
        {/* item # */}

        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
          }}
        >
          {/* image thumb */}
          <View
            style={{
              backgroundColor: "#FCF0F0",
              height: 80,
              paddingStart: 12,
              paddingEnd: 12,
              borderRadius: 10,
            }}
          >
            <Image
              style={{
                height: 108,
                width: 113,
                top: -28,
              }}
              source={require("../../assets/prickly_pear.png")}
            />

            <View
              style={{
                height: 28,
                width: 28,
                backgroundColor: "#fff",
                justifyContent: "center",
                position: "absolute",
                end: 10,
                bottom: 10,
                borderRadius: 8,
              }}
            >
              <Icon
                name="heart"
                size={16}
                color="#BFC2C8"
                style={{
                  alignSelf: "center",
                }}
              />
            </View>
          </View>
          {/* end image thumb */}

          {/* details */}
          <View
            style={{
              marginStart: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Prickly Pear
              </Text>
              <Image
                style={{
                  marginStart: 12,
                }}
                source={require("../../assets/ic_star.png")}
              />
              <Text
                style={{
                  marginStart: 4,
                  color: "#FFBB56",
                  fontWeight: "600",
                }}
              >
                4.8
              </Text>
            </View>
            <Text
              style={{
                color: "#000",
                marginTop: 2,
                opacity: 0.5,
              }}
            >
              From 5 inch
            </Text>
            <Text
              style={{
                fontSize: 16,
                marginTop: 5,
              }}
            >
              20 $
            </Text>
          </View>
        </View>
        {/* item# */}

        {/* shipping details */}
        <View
          style={{
            marginTop: 40,
            padding: 18,
            height: 92,
            backgroundColor: "#E2E9FF",
            borderRadius: 16,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              Free Shipping
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#808080",
                }}
              >
                When ordering
              </Text>
              <View
                style={{
                  marginStart: 5,
                  backgroundColor: "#FFBB56",
                  paddingStart: 6,
                  paddingEnd: 6,
                  paddingTop: 2,
                  paddingBottom: 2,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                  }}
                >
                  from 40$
                </Text>
              </View>
            </View>
          </View>
          <Image
            style={{
              position: "absolute",
              end: 20,
              bottom: 0,
            }}
            source={require("../../assets/saly.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const statusBarHeight = Platform.OS == "android" ? StatusBar.currentHeight : 0;

const styles = StyleSheet.create({
  chipSorted: {
    paddingStart: 14,
    paddingEnd: 14,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
  },
  chipSortedActive: {
    backgroundColor: "#D3B398",
  },
  container: {
    padding: 20,
    marginTop: statusBarHeight,
  },
  header: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
