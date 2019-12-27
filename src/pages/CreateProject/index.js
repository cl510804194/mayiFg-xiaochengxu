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
  AtTimeline,
  AtTextarea
} from "taro-ui";
import { ClText, ClIcon, ClFlex, ClTimeline, ClSelect } from "mp-colorui";
import "./index.scss";
import BGF from "../ButtonGroupF/index";

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
          title='项目名称'
          type='text'
          placeholder='请输入项目名称'
        />

        <ClSelect mode='selector' name='queen' title='项目负责人' />
        <ClSelect mode='selector' name='quegrren' title='项目管理员' />
        <ClSelect mode='selector' name='quegren' title='项目成员' />
        <ClSelect mode='selector' name='queheren' title='可见范围' />
        <ClSelect mode='selector' name='queehren' title='操作权限' />
        <ClSelect mode='selector' name='querdsaen' title='绩效系数' />
        <ClSelect mode='selector' name='quegeren' title='任务设置' />
        {/* <View className="at-row"></View> */}
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
  navigationBarTitleText: "创建项目"
};
export default Index;
