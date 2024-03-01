import { useEffect } from 'react';

function useScrollDisable(disable?: boolean) {
    useEffect(() => {
        if (disable) {
            document.body.style.overflowY = 'hidden';

            return () => {
                document.body.style.overflowY = 'auto';
            };
        }
    }, [disable]);
}

export default useScrollDisable;
