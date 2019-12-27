import Taro, { useState } from "@tarojs/taro";
// import { View, Text } from "@tarojs/components";
import { ClTabBar } from "mp-colorui";
import { View } from "@tarojs/components";

import "./index.scss";
import WorkTab from "../WorkTab";
import ProjectTab from "../ProjectTab";

const defaultTabs = [
  {
    badge: false,
    icon: "edit",
    title: "任务"
  },
  {
    badge: false,
    icon: "form",
    title: "项目"
  },
  {
    badge: false,
    icon: "more",
    title: "统计"
  }
];
export default function Index() {
  const [tabIndex, settabIndex] = useState(0);
  const tabClick = i => {
    settabIndex(i);
  };
  const renderTab = () => {
    let status = null;
    if (tabIndex == 0) {
      status = <WorkTab></WorkTab>;
    } else if (tabIndex == 1) {
      status = <ProjectTab></ProjectTab>;
    }
    return status;
  };
  return (
    <View>
      {renderTab()}

      {/* <WorkTab></WorkTab> */}
      <ClTabBar fix active={tabIndex} tabs={defaultTabs} onClick={tabClick} />
    </View>
  );
}

Index.config = {
  navigationBarTitleText: "分工系统"
};
