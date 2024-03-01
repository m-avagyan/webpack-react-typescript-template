import { useRef, useEffect } from 'react';

function useIsMountedRef() {
    const isMountedRef = useRef(false);

    useEffect(() => {
        isMountedRef.current = true;

        return () => {
            isMountedRef.current = false;
        };
    }, []);

    return isMountedRef;
}

export default useIsMountedRef;
