import { useState, useEffect } from 'react';

export function useWindowSize(size = 1280) {
    const [isSize, setIsSize] = useState(window.innerWidth >= size);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const issize = window.innerWidth >= size;
            if (issize !== isSize) setIsSize(issize);
        }, false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSize]);

    return isSize;
}