let timeout: NodeJS.Timeout | null = null;

export const debounce = <F extends (...args: any[]) => any>(func: F, delay = 250) => {
    return (...args: Parameters<F>) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            func(...args);
        }, delay);
    };
};
