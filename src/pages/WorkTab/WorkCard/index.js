import Taro, {
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
  useRef,
  useCallback,
  useMemo
} from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtCard } from "taro-ui";
import { ClCard, ClText, ClFlex, ClIcon, ClProgress } from "mp-colorui";

function Index() {
  const cardClick = () => {
    Taro.navigateTo({
      url: `/pages/workDetails/index`
    });
  };
  return (
    <View onClick={cardClick}>
      <ClCard>
        <ClText
          style={{ paddingLeft: "4px" }}
          size='normal'
          className='flex-treble'
          textColor='black'
        >
          负责人： 程亮
        </ClText>
        <ClFlex style={{ margin: "5px 0" }}>
          <ClIcon iconName='form' size='normal' color='black' />
          <ClText
            style={{ lineHeight: "30px" }}
            size='large'
            className='flex-treble'
            textColor='black'
          >
            现场勘测
          </ClText>
        </ClFlex>
        <ClFlex>
          <ClIcon iconName='formfill' size='normal' color='grey' />
          <ClText
            style={{ lineHeight: "30px" }}
            size='normal'
            className='flex-treble'
            textColor='grey'
          >
            重庆工地部署安装
          </ClText>
        </ClFlex>
      </ClCard>
    </View>
  );
}
export default Index;
