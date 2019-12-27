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
import { ClSearchBar, ClSelect, ClFloatButton } from "mp-colorui";
import { AtTabs, AtTabsPane, AtCard } from "taro-ui";
import "./index.scss";
import ProjectCard from "./ProjectCard";

const tabList = [
  { title: "待我完成" },
  { title: "待我确认" },
  { title: "待我指派" },
  { title: "我完成的" },
  { title: "我确认的" },
  { title: "我指派的" }
  //   { title: "待我指派" },
];
const single = ["可见项目", "参与的项目", "关注的项目", "我负责的", "我管理的"];

function Index() {
  const [current, setcurrent] = useState(0);

  const createPoject = () => {
    console.log(1);
    Taro.navigateTo({
      url: "/pages/CreateProject/index"
    });
  };
  return (
    <View>
      <ClSearchBar
        shape='round'
        bgColor='grey'
        rightButtonColor='black'
        rightTextColor='white'
        placeholder='请输入项目名称'
        onSearch={value => {
          //   onSearch(value);
        }}
      />

      <ClSelect
        selector={{ range: single }}
        value='可见项目'
        mode='selector'
        title='项目类别'
        scroll
      />
      <ProjectCard></ProjectCard>
      <ClFloatButton
        size='large'
        bgColor='light-blud'
        closeWithShadow
        direction='vertical'
        open={false}
        onClick={createPoject}
      />
    </View>
  );
}
export default Index;
