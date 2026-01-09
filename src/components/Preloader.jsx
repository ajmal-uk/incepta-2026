import { useState, useEffect } from 'react';

export default function Preloader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
            document.body.classList.add('loaded');
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    if (loaded) return null;

    return (
        <div id="loader">
            <div className="loader-content">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="INCEPTA LOADER" className="loader-logo" />
                <div className="loader-spinner"></div>
            </div>
        </div>
    );
}
