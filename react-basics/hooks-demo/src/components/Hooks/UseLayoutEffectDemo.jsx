import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const WithUseEffect = () => {
  const [show, setShow] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (popupRef.current == null || buttonRef.current == null) return
    const { bottom } = buttonRef.current.getBoundingClientRect();
    popupRef.current.style.top = (bottom + 25) + 'px';
  }, [show])

  return <>
    <button ref={buttonRef} onClick={() => setShow(!show)}>Show Popup</button>
    { show && <div ref={popupRef} style={{ position: 'absolute'}}>Popup</div> }
  </>
}

const WithUseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);
  useLayoutEffect(() => {
    if (popupRef.current == null || buttonRef.current == null) return
    const { bottom } = buttonRef.current.getBoundingClientRect();
    popupRef.current.style.top = `${bottom + 25}px`;
  }, [show])

  return <>
    <button ref={buttonRef} onClick={() => setShow(!show)}>Show Popup</button>
    { show && <div ref={popupRef} style={{ position: 'absolute' }}>Popup</div> }
  </>
}

const UseLayoutEffectDemo = () => {
  return <div style={{ display:'flex', justifyContent: 'space-around' }}>
    <div>
      <h2>With useEffect</h2>
      <WithUseEffect />
    </div>
    <div>
      <h2>With useLayoutEffect</h2>
      <WithUseLayoutEffect />
    </div>
  </div>;
};

export const UseLayoutEffectDemoString = `
/* 
  After setting the popup at the initial position (top: 0), 
  the position will be updated as per the following code. 
  The example only works on older systems with slow processing speeds.
*/
const WithUseEffect = () => {
  const [show, setShow] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);
  useEffect(() => {
    if (popupRef.current == null || buttonRef.current == null) return
    const { bottom } = buttonRef.current.getBoundingClientRect();
    popupRef.current.style.top = (bottom + 25) + 'px';
  }, [show])

  return <div style={{ position: 'relative' }}>
    <button ref={buttonRef} onClick={() => setShow(!show)}>Show Popup</button>
    { show && <div ref={popupRef} style={{ position: 'absolute' }}>Popup</div> }
  </div>
}

/* 
  The useLayoutEffect is called before the useEffect is called and 
  the screen is painted as a result. UseLayoutEffect will not cause flickering
*/
const WithUseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);
  useLayoutEffect(() => {
    if (popupRef.current == null || buttonRef.current == null) return
    const { bottom } = buttonRef.current.getBoundingClientRect();
    popupRef.current.style.top = (bottom + 25) + 'px';
  }, [show])

  return <div style={{ position: 'relative' }}>
    <button ref={buttonRef} onClick={() => setShow(!show)}>Show Popup</button>
    { show && <div ref={popupRef} style={{ position: 'absolute' }}>Popup</div> }
  </div>
}

const UseLayoutEffectDemo = () => {
  return <div style={{ display:'flex', justifyContent: 'space-around' }}>
    <div>
      <h2>With useEffect</h2>
      <WithUseEffect />
    </div>
    <div>
      <h2>With useLayoutEffect</h2>
      <WithUseLayoutEffect />
    </div>
  </div>;
};
`;

export default UseLayoutEffectDemo;
