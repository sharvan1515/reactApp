import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, [location]); // Triggers every time the location changes (route changes)

    return null;
};

export default ScrollToTop;
