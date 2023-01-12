import { useMediaQuery } from 'react-responsive';

export const useBreakpoints = () => {
    const isMobile = useMediaQuery({ query: '(min-width: 320px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    return {
        isMobile,
        isTablet,
        isLaptop,
    };
};