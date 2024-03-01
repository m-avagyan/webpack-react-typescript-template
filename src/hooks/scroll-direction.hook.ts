import { useEffect, useState } from 'react';

type TDirections = 'up' | 'down';

type TScrollDirectionOptions = {
    initialDirection?: TDirections;
    threshold?: number;
};

function useScrollDirection(options: TScrollDirectionOptions): TDirections {
    const { initialDirection = 'down', threshold = 64 } = options || {};

    const [scrollDir, setScrollDir] = useState(initialDirection);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
            } else {
                setScrollDir(scrollY > lastScrollY ? 'down' : 'up');
                lastScrollY = scrollY > 0 ? scrollY : 0;
                ticking = false;
            }
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [initialDirection, threshold]);

    return scrollDir;
}

export default useScrollDirection;
