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
import {
  AtTabs,
  AtTabsPane,
  AtCard,
  AtForm,
  AtInput,
  AtButton,
  ClCalendar,
  AtTimeline
} from "taro-ui";
import { ClText, ClIcon, ClFlex, ClTimeline, ClSearchBar } from "mp-colorui";
import "./index.scss";
import WorkCard from "../WorkTab//WorkCard/";

const tabList = [{ title: "任务" }, { title: "文件" }, { title: "统计" }];
function Index() {
  const [current, setcurrent] = useState(0);
  const tabsClick = c => {
    setcurrent(c);
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
      <AtTabs scroll current={current} tabList={tabList} onClick={tabsClick}>
        <AtTabsPane current={current} index={0}>
          <View className='pane-item'>
            <WorkCard></WorkCard>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View className='pane-item'></View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View className='pane-item'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
}
Index.config = {
  navigationBarTitleText: "项目详情"
};
export default Index;
