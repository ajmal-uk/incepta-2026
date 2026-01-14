import { useEffect, useState, useMemo } from 'react';
import { X } from 'lucide-react';

const rawGalleryImages = [
    '/gallery/1.png',
    '/gallery/2.png',
    '/gallery/3.png',
    '/gallery/4.png',
    '/gallery/5.png',
    '/gallery/6.png',
    '/gallery/7.png',
    '/gallery/8.png',
    '/gallery/9.png',
    '/gallery/10.png',
    '/gallery/11.png',
    '/gallery/12.png',
    '/gallery/13.png',
    '/gallery/14.png',
    '/gallery/15.png',
    '/gallery/16.png',
    '/gallery/17.png',
    '/gallery/18.png',
    '/gallery/19.png',
    '/gallery/20.png',
    '/gallery/21.png',
    '/gallery/22.png',
    '/gallery/23.png',
    '/gallery/24.png',
    '/gallery/1.png',
    '/gallery/2.png',
    '/gallery/3.png',
    '/gallery/4.png',
    '/gallery/5.png',
    '/gallery/6.png',
    '/gallery/7.png',
    '/gallery/8.png',
    '/gallery/9.png',
    '/gallery/10.png',
    '/gallery/11.png',
    '/gallery/12.png',
    '/gallery/13.png',
    '/gallery/14.png',
    '/gallery/15.png',
    '/gallery/16.png',
    '/gallery/17.png',
    '/gallery/18.png',
    '/gallery/19.png',
    '/gallery/20.png',
    '/gallery/21.png',
    '/gallery/22.png',
    '/gallery/23.png',
    '/gallery/24.png',
];

const galleryImages = rawGalleryImages.map(src => {
    const baseUrl = import.meta.env.BASE_URL;
    const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
    return `${baseUrl}${cleanSrc}`;
});

const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const rows = useMemo(() => {
        return [
            [...shuffleArray(galleryImages), ...shuffleArray(galleryImages)], // Row 1
            [...shuffleArray(galleryImages), ...shuffleArray(galleryImages)], // Row 2
            [...shuffleArray(galleryImages), ...shuffleArray(galleryImages)]  // Row 3
        ];
    }, []);

    const handleImageClick = (img) => {
        setSelectedImage(img);
        document.body.style.overflow = 'hidden';
    };

    const closeOverlay = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="gallery" className="gallery-section" aria-labelledby="gallery-title">
            <h2 className="section-title" id="gallery-title">Gallery</h2>
            <p className="section-subtitle">Glimpses of Department Events and ASCA Initiatives</p>

            <div className={`gallery-wrapper ${selectedImage ? 'paused' : ''}`}>
                <div className="gallery-container">
                    {rows.map((rowImages, rowIndex) => (
                        <div key={rowIndex} className={`gallery-row row-${rowIndex + 1}`} aria-label={`Gallery row ${rowIndex + 1}`}>
                            <div className="gallery-track">
                                {rowImages.map((src, index) => (
                                    <img
                                        key={`${rowIndex}-${index}`}
                                        src={src}
                                        className="gallery-img"
                                        loading="lazy"
                                        alt={`INCEPTA Gallery ${rowIndex + 1}-${index + 1}`}
                                        onClick={() => handleImageClick(src)}
                                    />
                                ))}
                                {/* Duplicate for seamless loop if needed, but CSS animation handles loop usually. 
                                    Depending on CSS implementation, we might need more duplication. 
                                    Let's stick to the double length we created in useMemo for now. 
                                */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Overlay/Modal */}
            {selectedImage && (
                <div className="gallery-modal" onClick={closeOverlay}>
                    <button className="gallery-modal-close" onClick={closeOverlay}>
                        <X size={32} />
                    </button>
                    <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
                        <img src={selectedImage} alt="Gallery Fullscreen" />
                    </div>
                </div>
            )}
        </section>
    );
}
