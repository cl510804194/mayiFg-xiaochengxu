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

function Index(params) {
  return (
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
  );
}
export default Index;
