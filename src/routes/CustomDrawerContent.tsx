import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  UIManager,
  View,
  ViewStyle,
} from "react-native";
import { IconsPath, ImagesPath } from "../common/AssetsPath";
import CustomButton from "../components/CustomButton";
import ModalsWrapper from "../components/ModalsWrapper";
import { COLORS, FONTS } from "../config/Theme";
import { BlurView } from "@react-native-community/blur";

const smileyData = [
  {
    id: 0,
    icon: IconsPath.ic_smiley_sad,
  },
  {
    id: 1,
    icon: IconsPath.ic_smiley_neutral,
  },
  {
    id: 2,
    icon: IconsPath.ic_smiley_happy,
  },
  {
    id: 3,
    icon: IconsPath.ic_smiley_good,
  },
];

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const faqData = [
  {
    question: "Lorem Ipsum is not simply:",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Lorem Ipsum is simply dummy?",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    question: "Lorem Ipsum is simply dummy?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Lorem Ipsum is not simply:",
    answer:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const FAQItem = ({ item, index, expanded, onPress }) => {
  return (
    <View>
      <CustomButton
        activeOpacity={1}
        style={s.questionContainer}
        onPress={() => onPress(index)}
      >
        <Text style={s.questionText}>{item.question}</Text>
        <Text style={s.icon}>{expanded ? "▲" : "▼"}</Text>
      </CustomButton>
      {expanded && (
        <View style={s.answerContainer}>
          <Text style={s.answerText}>{item.answer}</Text>
        </View>
      )}
    </View>
  );
};

const LinkView = ({
  onPress,
  iconName,
  title,
}: {
  onPress: () => void;
  iconName: number;
  title: string;
}) => {
  return (
    <CustomButton onPress={onPress} style={s.linkFlex}>
      <Image source={iconName} style={s.linkIcon} />
      <Text style={s.linkText}>{title}</Text>
    </CustomButton>
  );
};

const ModalButtons = ({
  title,
  style,
}: {
  title: string;
  style?: ViewStyle;
}) => {
  return (
    <CustomButton style={[s.buttonContainer, style && style]}>
      <Text style={s.buttonText}>{title}</Text>
    </CustomButton>
  );
};

export const CustomDrawerContent = () => {
  const [modalsState, setModalsState] = useState({
    FnQ: false,
    feedBack: false,
    rateUs: false,
  });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const onClose = () => {
    setModalsState({
      FnQ: false,
      feedBack: false,
      rateUs: false,
    });
  };

  const handlePress = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <DrawerContentScrollView style={s.container}>
      <View style={s.topTitleView}>
        <View style={s.topFlexView}>
          <Image source={IconsPath.ic_setting} style={s.settingIcon} />
          <Text style={s.titleText}>Setting</Text>
        </View>
      </View>

      <View style={s.linkContainer}>
        <LinkView
          onPress={() => {
            setModalsState(() => ({ ...modalsState, FnQ: true }));
          }}
          iconName={IconsPath.ic_qAndA}
          title="Q&A"
        />
        <LinkView
          onPress={() => {
            setModalsState(() => ({ ...modalsState, feedBack: true }));
          }}
          iconName={IconsPath.ic_feedback}
          title="Feedback"
        />
        <LinkView
          onPress={() => {
            setModalsState(() => ({ ...modalsState, FnQ: true }));
          }}
          iconName={IconsPath.ic_star}
          title="Rate us"
        />
        <LinkView
          onPress={() => {
            setModalsState(() => ({ ...modalsState, FnQ: true }));
          }}
          iconName={IconsPath.ic_share}
          title="Share"
        />
        <LinkView
          onPress={() => {
            setModalsState(() => ({ ...modalsState, FnQ: true }));
          }}
          iconName={IconsPath.ic_privacy}
          title="Privacy policy"
        />
      </View>

      <ModalsWrapper
        onClose={onClose}
        isBlurView={false}
        isVisible={modalsState.FnQ}
      >
        <View style={s.fAndQContainer}>
          <Text style={s.fAndQTitle}>Frequently Asked Question:</Text>

          <FlatList
            data={faqData}
            style={s.flatListStyle}
            contentContainerStyle={s.fAndQFlatListContentContainer}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <FAQItem
                item={item}
                index={index}
                expanded={index === expandedIndex}
                onPress={handlePress}
              />
            )}
          />

          <ModalButtons title={"Submit Your Question"} />
        </View>
      </ModalsWrapper>

      <ModalsWrapper
        onClose={onClose}
        isBlurView={true}
        isVisible={modalsState.feedBack}
      >
        <View style={s.feedBackContainer}>
          <View style={s.feedbackFlexView}>
            <CustomButton onPress={onClose}>
              <Image source={IconsPath.ic_close} style={s.closeIcon} />
            </CustomButton>
            <Text style={s.feedbackTitle}>Feedback</Text>
            <View />
          </View>

          <View style={s.feedbackInputContainer}>
            <Image source={ImagesPath.feedback} style={s.feedbackImage} />
            <View style={s.feedBackContentView}>
              <BlurView
                blurType="light"
                overlayColor="transparent"
                style={{ flex: 1 }}
              >
                <View style={{ paddingHorizontal: 10, paddingVertical: 25 }}>
                  <Text style={s.feedBackBoxTitle}>
                    We appreciate your {"\n"}
                    <Text style={{ fontWeight: "bold" }}>feedback</Text>
                  </Text>
                  <View style={s.smileyFlexView}>
                    {smileyData.map((res, index) => {
                      return (
                        <CustomButton key={index}>
                          <Image
                            source={res.icon}
                            style={s.feedbackSmileyIcon}
                          />
                        </CustomButton>
                      );
                    })}
                  </View>
                  <View>
                    <KeyboardAvoidingView>
                      <TextInput style={s.feedbackTextInput} />
                    </KeyboardAvoidingView>
                  </View>
                  <CustomButton style={[s.sendFeedbackButton]}>
                    <Text style={s.buttonText}>{"Submit My Feedback"}</Text>
                  </CustomButton>
                </View>
              </BlurView>
            </View>
          </View>
        </View>
      </ModalsWrapper>
    </DrawerContentScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: "rgba(11, 10, 10, 0.8)",
  },
  topTitleView: {
    width: "100%",
    height: 60,
    top: -5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(119, 125, 254, 1)",
  },
  topFlexView: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  settingIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    right: 10,
    tintColor: COLORS.White,
  },
  titleText: {
    color: COLORS.White,
    fontFamily: FONTS.Bold,
    fontSize: 21,
    fontWeight: "bold",
  },
  linkFlex: {
    flexDirection: "row",
    width: "90%",
    paddingVertical: 13,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    marginVertical: 5,
    borderTopLeftRadius: 9,
    borderBottomRightRadius: 10,
  },
  linkIcon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
    marginHorizontal: 10,
  },
  linkText: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.White,
  },
  linkContainer: {
    marginTop: 5,
  },

  //* F&Q
  fAndQContainer: {
    flex: 1,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.87)",
  },
  fAndQTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.White,
    marginTop: StatusBar.currentHeight,
  },
  questionContainer: {
    padding: 15,
    backgroundColor: "#333",
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionText: {
    color: COLORS.White,
    fontSize: 17,
    fontWeight: "semibold",
  },
  icon: {
    color: COLORS.White,
    fontSize: 20,
  },
  answerContainer: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  answerText: {
    color: COLORS.White,
    fontSize: 15,
    fontWeight: "semibold",
  },
  flatListStyle: {
    marginVertical: 20,
    maxHeight: 400,
  },
  fAndQFlatListContentContainer: {
    gap: 10,
  },
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: "50%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "rgba(119, 125, 254, 1)",
  },
  buttonText: {
    color: COLORS.White,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  //* Feedback
  feedBackContainer: {
    flex: 1,
    padding: 15,
    marginTop: StatusBar.currentHeight,
  },
  feedbackFlexView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  feedbackTitle: {
    color: COLORS.White,
    fontSize: 18,
    right: 15,
    fontWeight: "semibold",
  },
  feedbackInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    bottom: 15,
  },
  feedbackImage: {
    width: 250,
    height: 250,
  },
  feedBackContentView: {
    width: 350,
    height: 370,
    borderRadius: 20,
    overflow: "hidden",
  },
  feedBackBoxTitle: {
    textAlign: "center",
    color: COLORS.White,
    fontSize: 22,
    lineHeight: 30,
  },
  smileyFlexView: {
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    gap: 15,
    marginVertical: 15,
  },
  feedbackSmileyIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  feedbackTextInput: {
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 18,
    marginVertical: 10,
    height: 120,
    borderRadius: 15,
    backgroundColor: "rgba(234, 234, 234, 1)",
  },
  sendFeedbackButton: {
    width: 220,
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "rgba(119, 125, 254, 1)",
  },
});
