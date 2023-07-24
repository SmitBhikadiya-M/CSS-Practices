import React, { useEffect, useRef, useState } from 'react'
import styles from './splitview.module.css';
import { useResizeWindow } from '../../hooks/useResizeWindow';



export default function SplitView({ left, right }) {

  const deviderRef = useRef();
  const leftDivRef = useRef();

  const {leftPaneWidth} = useResizeWindow({
    deviderRef: deviderRef,
    leftPaneRef: leftDivRef
  });

  return (
    <div className={styles.splitView}>
      <div className={styles.leftPane} ref={leftDivRef} style={{ width: leftPaneWidth+'px' }}>
        {left}
      </div>
      <div ref={deviderRef} className={styles.dividerHitbox}>
        <div className={styles.divider} />
      </div>
      <div className={styles.rightPane}>
        {right}
      </div>
    </div>
  )
}
