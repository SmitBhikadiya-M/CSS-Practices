import UseCallbackDemo, {
  UseCallbackDemoString,
} from "../components/Hooks/UseCallbackDemo";
import UseEffectDemo, {
  UseEffectDemoString,
} from "../components/Hooks/UseEffectDemo";
import UseLayoutEffectDemo, {
  UseLayoutEffectDemoString,
} from "../components/Hooks/UseLayoutEffectDemo";
import UseMemoDemo, {
  UseMemoDemoString,
} from "../components/Hooks/UseMemoDemo";
import UseReducerDemo, {
  UseReducerDemoString,
} from "../components/Hooks/UseReducerDemo";
import UseRefDemo, { UseRefDemoString } from "../components/Hooks/UseRefDemo";
import UseStateDemo, {
  UseStateDemoAsString,
} from "../components/Hooks/UseStateDemo";

export const STATES = {
  useState: {
    CMP: UseStateDemo,
    CMPString: UseStateDemoAsString,
  },
  useReducer: {
    CMP: UseReducerDemo,
    CMPString: UseReducerDemoString,
  },
  useEffect: {
    CMP: UseEffectDemo,
    CMPString: UseEffectDemoString,
  },
  useLayoutEffect: {
    CMP: UseLayoutEffectDemo,
    CMPString: UseLayoutEffectDemoString,
  },
  useMemo: {
    CMP: UseMemoDemo,
    CMPString: UseMemoDemoString,
  },
  useCallback: {
    CMP: UseCallbackDemo,
    CMPString: UseCallbackDemoString,
  },
  useRef: {
    CMP: UseRefDemo,
    CMPString: UseRefDemoString,
  },
};
