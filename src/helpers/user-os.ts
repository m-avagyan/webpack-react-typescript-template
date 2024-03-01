export const getUserOS = () => {
    const userAgent = navigator.userAgent || navigator.vendor;

    if (/windows phone/i.test(userAgent)) {
        return 'windows-phone';
    }

    if (/win/i.test(userAgent)) {
        return 'windows';
    }

    if (/iPad|iPhone|iPod/.test(userAgent)) {
        return 'ios';
    }

    if (/Mac/i.test(navigator.platform) && !('ontouchend' in document)) {
        return 'macos';
    }

    if (/android/i.test(userAgent)) {
        return 'android';
    }

    if (/linux/i.test(userAgent)) {
        return 'linux';
    }

    return 'unknown';
};
