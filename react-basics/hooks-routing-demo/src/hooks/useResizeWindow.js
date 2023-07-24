import { useEffect, useState } from "react";

const MINWIDTH = 150;
export const useResizeWindow = ({ deviderRef, leftPaneRef }) => {

    const [width, setWidth] = useState(null);
    const [position, setPosition] =useState({ x: null, y: null });

    const onMouseMove = (e) => {
        let tempwidth;
        if (position.x > e.pageX) {
            tempwidth = e.pageX;
        } else {
            tempwidth = width + e.pageX;
        }
        if (tempwidth < (window.innerWidth - MINWIDTH) && tempwidth > MINWIDTH) {
            setWidth(tempwidth);
        }
        setPosition({ x: e.pageX, y: e.pageY });
    }
    
    const onDragStart = (event) => {
        event.dataTransfer.setDragImage(event.target, window.outerWidth, window.outerHeight);
    }

    useEffect(() => {
        let currentElem = deviderRef.current;
        if (currentElem) {
            currentElem.addEventListener('drag', onMouseMove);
            currentElem.addEventListener("dragstart", onDragStart, false);
        }
        return () => {
            if (currentElem) {
                currentElem.removeEventListener('drag', onMouseMove);
                currentElem.addEventListener("dragstart", onDragStart, false);
            }
        }
    }, [])

    return { leftPaneWidth: width };
}