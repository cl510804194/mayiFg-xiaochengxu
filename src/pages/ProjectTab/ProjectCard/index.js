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
import { AtCard, AtProgress } from "taro-ui";
import { ClCard, ClText, ClFlex, ClIcon, ClProgress } from "mp-colorui";

function Index() {
  const cardClick = () => {
    Taro.navigateTo({
      url: `/pages/ProjectDetails/index`
    });
  };
  return (
    <View onClick={cardClick}>
      <ClCard>
        <ClFlex>
          <ClIcon
            className='flex-sub'
            iconName='formfill'
            size='xxlarge'
            color='grey'
          />

          <ClText size='xlarge' className='flex-treble' textColor='grey'>
            重庆工地部署安装
          </ClText>
        </ClFlex>
        <ClFlex justify='between'>
          <ClFlex justify='center'>
            <ClText
              style={{ padding: "0 10px" }}
              size='small'
              align='center'
              textColor='black'
            >
              25.00%
            </ClText>
            <ClText
              style={{ padding: "0 10px" }}
              size='small'
              align='center'
              textColor='black'
            >
              (1/4)
            </ClText>
            <ClText
              style={{ padding: "0 10px" }}
              size='small'
              align='center'
              textColor='black'
            >
              逾期：0
            </ClText>
          </ClFlex>
          <View>
            <ClText size='small' align='rgiht' textColor='black'>
              曾波
            </ClText>
          </View>
        </ClFlex>
        <ClProgress
          style={{ marginTop: "10px" }}
          size='xsmall'
          shape='round'
          stripe
          percent={40}
          animation
        />
      </ClCard>
    </View>
  );
}
export default Index;
