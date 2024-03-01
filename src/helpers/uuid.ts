export const uuid = (length = 12): string => {
    return Math.random().toString(36).substring(3, length);
};
