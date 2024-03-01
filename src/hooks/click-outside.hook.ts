import { RefObject, useEffect } from 'react';

type TOptions = {
    ref: RefObject<HTMLElement>;
    callback: () => void;
};

function useClickOutside({ ref, callback }: TOptions) {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [callback, ref]);
}

export default useClickOutside;
