import Taro, {
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
  useRef,
  useCallback,
  useMemo
} from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { ClSearchBar, ClSelect, ClFloatButton } from "mp-colorui";
import { AtTabs, AtTabsPane, AtCard, AtFab, AtIcon } from "taro-ui";
import "./index.scss";
import WorkCard from "./WorkCard/";

const tabList = [
  { title: "待我完成" },
  { title: "待我确认" },
  { title: "待我指派" },
  { title: "我完成的" },
  { title: "我确认的" },
  { title: "我指派的" }
  //   { title: "待我指派" },
];
const single = ["今日任务", "最近7天", "最近30天"];

function Index() {
  const [current, setcurrent] = useState(0);
  const tabsClick = c => {
    setcurrent(c);
  };
  const createWork = () => {
    console.log(1);
    Taro.navigateTo({
      url: "/pages/CreateWork/index"
    });
  };
  return (
    <View>
      <ClSearchBar
        shape='round'
        bgColor='grey'
        rightButtonColor='black'
        rightTextColor='white'
        placeholder='请输入你想输入的内容'
        onSearch={value => {
          //   onSearch(value);
        }}
      />

      <ClSelect
        selector={{ range: single }}
        value='今日任务'
        mode='selector'
        title='任务类别'
        scroll
      />
      <ClFloatButton
        size='large'
        bgColor='light-blud'
        closeWithShadow
        direction='vertical'
        open={false}
        onClick={createWork}
      />
      <AtTabs scroll current={current} tabList={tabList} onClick={tabsClick}>
        <AtTabsPane current={current} index={0}>
          <View className='pane-item'>
            <WorkCard></WorkCard>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View className='pane-item'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View className='pane-item'>标签页三的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={3}>
          <View className='pane-item'>标签页四的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={4}>
          <View className='pane-item'>标签页五的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={5}>
          <View className='pane-item'>标签页六的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
}
export default Index;
