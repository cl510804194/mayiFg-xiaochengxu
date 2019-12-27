import Taro, {
  useEffect,
  useLayoutEffect,
  useReducer,
  useState,
  useRef,
  useCallback,
  useMemo
} from "@tarojs/taro";
import { View, Picker } from "@tarojs/components";
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

function Index() {
  const [current, setcurrent] = useState(0);
  const tabsClick = c => {
    setcurrent(c);
  };
  return (
    <View>
      <AtForm>
        <AtInput
          name='fuze'
          title='名称'
          type='text'
          //   value='程亮'
          placeholder='请输入任务名称'
          // value={this.state.value}
          // onChange={this.handleChange.bind(this)}
        />
        <Picker
          name='queren'
          title='所属项目'
          //   type='text'
          //   value='曾波'
          // placeholder='单行文本'
          // value={this.state.value}
          // onChange={this.handleChange.bind(this)}
        />
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
          placeholder='请选择时间'
          //   value='2019/12/01 10:09-2019/12/03'
        />
        <AtInput name='performance' title='任务绩效' type='number' value='0' />
        <AtInput name='gongqi' title='计划工期' type='number' value='2.57' />
      </AtForm>
      <View className='fengong-button-group at-row'>
        <View className='at-col'>
          <AtButton className='at-col' full type='primary' formType='submit'>
            提交
          </AtButton>
        </View>
        <View className='at-col'>
          <AtButton className='at-col' full type='secondary' formType='reset'>
            重置
          </AtButton>
        </View>
      </View>
    </View>
  );
}
Index.config = {
  navigationBarTitleText: "创建任务"
};
export default Index;
