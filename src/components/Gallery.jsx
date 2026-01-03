import { useEffect, useRef } from 'react';
const galleryImages = [
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80',
    'https://images.unsplash.com/photo-1517059224940-d4af9eec41b4?w=500&q=80',
    'https://images.unsplash.com/photo-1504384308090-c54be3852f92?w=500&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80',
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80'
];

export default function Gallery() {
    const track1Ref = useRef(null);
    const track2Ref = useRef(null);
    const track3Ref = useRef(null);

    useEffect(() => {
        const populateTrack = (trackRef) => {
            if (!trackRef.current) return;

            // Clear existing images
            trackRef.current.innerHTML = '';

            // Duplicate images to ensure seamless loop
            const loopImages = [...galleryImages, ...galleryImages, ...galleryImages, ...galleryImages];
            loopImages.forEach((url, index) => {
                const img = document.createElement('img');
                img.src = url;
                img.className = 'gallery-img';
                img.loading = 'lazy';
                img.alt = `INCEPTA Gallery Image ${index + 1}`;
                img.addEventListener('click', () => {
                    window.open(url, '_blank', 'noopener,noreferrer');
                });
                trackRef.current.appendChild(img);
            });
        };

        populateTrack(track1Ref);
        populateTrack(track2Ref);
        populateTrack(track3Ref);

        // Touch/drag handling for gallery rows
        const rows = document.querySelectorAll('.gallery-row');
        rows.forEach(row => {
            let startX;
            let scrollLeft;
            let isDown = false;

            const handleMouseDown = (e) => {
                isDown = true;
                startX = e.pageX - row.offsetLeft;
                scrollLeft = row.scrollLeft;
            };

            const handleMouseLeave = () => { isDown = false; };
            const handleMouseUp = () => { isDown = false; };

            const handleMouseMove = (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - row.offsetLeft;
                const walk = (x - startX) * 2;
                row.scrollLeft = scrollLeft - walk;
            };

            const handleTouchStart = (e) => {
                startX = e.touches[0].pageX - row.offsetLeft;
                scrollLeft = row.scrollLeft;
            };

            const handleTouchMove = (e) => {
                const x = e.touches[0].pageX - row.offsetLeft;
                const walk = (x - startX) * 2;
                row.scrollLeft = scrollLeft - walk;
            };

            row.addEventListener('mousedown', handleMouseDown);
            row.addEventListener('mouseleave', handleMouseLeave);
            row.addEventListener('mouseup', handleMouseUp);
            row.addEventListener('mousemove', handleMouseMove);
            row.addEventListener('touchstart', handleTouchStart, { passive: true });
            row.addEventListener('touchmove', handleTouchMove, { passive: true });
        });
    }, []);

    return (
        <section id="gallery" className="gallery-section" aria-labelledby="gallery-title">
            <h2 className="section-title" id="gallery-title">Gallery</h2>
            <p className="section-subtitle">Glimpses from previous editions of INCEPTA</p>
            <div className="gallery-wrapper">
                <div className="gallery-container">
                    <div className="gallery-row row-1" aria-label="Gallery row 1">
                        <div className="gallery-track" ref={track1Ref}></div>
                    </div>
                    <div className="gallery-row row-2" aria-label="Gallery row 2">
                        <div className="gallery-track" ref={track2Ref}></div>
                    </div>
                    <div className="gallery-row row-3" aria-label="Gallery row 3">
                        <div className="gallery-track" ref={track3Ref}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
