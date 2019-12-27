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
import { ClText, ClIcon, ClFlex, ClTimeline } from "mp-colorui";
import "./index.scss";

const tabList = [
  { title: "基本信息" },
  { title: "讨论日志" },
  { title: "子任务" },
  { title: "协作任务" }
  //   { title: "待我指派" },
];
function Index() {
  const [current, setcurrent] = useState(0);
  const tabsClick = c => {
    setcurrent(c);
  };
  return (
    <View>
      <ClFlex className='details-flex' direction='row'>
        <ClIcon iconName='copy' size='small' color='gray' />
        <ClText
          className='details-cltext'
          textColor='gray'
          size='large'
          cut
          align='left'
        >
          重庆工地部署安装
        </ClText>
      </ClFlex>
      <ClText
        fontWeight='lighter'
        textColor='black'
        bgColor='white'
        size='xxlarge'
        cut
        align='left'
        style={{ paddingLeft: "10px" }}
      >
        现场勘测
      </ClText>
      <AtTabs scroll current={current} tabList={tabList} onClick={tabsClick}>
        <AtTabsPane current={current} index={0}>
          <View className='pane-item'>
            {" "}
            <AtForm>
              <AtInput
                name='fuze'
                title='负责人'
                type='text'
                value='程亮'
                // placeholder='单行文本'
                // value={this.state.value}
                // onChange={this.handleChange.bind(this)}
              />
              <AtInput
                name='queren'
                title='确认人'
                type='text'
                value='曾波'
                // placeholder='单行文本'
                // value={this.state.value}
                // onChange={this.handleChange.bind(this)}
              />
              <AtInput
                name='time'
                title='时间'
                type='text'
                value='2019/12/01 10:09-2019/12/03'
              />
              <AtInput
                name='performance'
                title='任务绩效'
                type='number'
                value='0'
              />
              <AtInput
                name='gongqi'
                title='计划工期'
                type='number'
                value='2.57'
              />
            </AtForm>
            <View className='fengong-button-group at-row'>
              <View className='at-col'>
                <AtButton
                  className='at-col'
                  full
                  type='primary'
                  formType='submit'
                >
                  提交
                </AtButton>
              </View>
              <View className='at-col'>
                <AtButton
                  className='at-col'
                  full
                  type='secondary'
                  formType='reset'
                >
                  重置
                </AtButton>
              </View>
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View className='pane-item'>
            <ClTimeline
              times={[
                {
                  title: "李宗铭 创建了任务",
                  time: "11/29 10:10",
                  content: ["现场侦测"]
                },
                {
                  title: "李宗铭 添加了前序任务",
                  time: "11/29 10:35",
                  content: ["11/30 准时到达现场"]
                },
                {
                  title: "程亮 设置了里程碑任务",
                  time: "12/08 15:31",
                  // content: ["11/30 准时到达现场"]，
                  bgColor: "light-blue"
                },
                {
                  title: "程亮 取消了里程碑任务",
                  time: "12/08 15:31",
                  // content: ["11/30 准时到达现场"]，
                  bgColor: "light-blue"
                }
              ].reverse()}
            ></ClTimeline>
          </View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View className='pane-item'>标签页三的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={3}>
          <View className='pane-item'>标签页四的内容</View>
        </AtTabsPane>
      </AtTabs>
    </View>
  );
}
Index.config = {
  navigationBarTitleText: "任务详情"
};
export default Index;
