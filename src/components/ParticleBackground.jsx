import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Optimization: Check device capabilities
        const isMobile = window.innerWidth < 768;
        // Cap pixel ratio to 2 to prevent overheating on high-res phones
        const pixelRatio = Math.min(window.devicePixelRatio, 2);

        // Three.js Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // Disable antialias on mobile for performance
        const renderer = new THREE.WebGLRenderer({
            antialias: !isMobile,
            alpha: true,
            powerPreference: "high-performance"
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(pixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        camera.position.z = 5;

        // Create animated particles
        const particlesGeometry = new THREE.BufferGeometry();
        // Reduce particle count significantly for better performance
        const particlesCount = isMobile ? 100 : 200;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 20;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: isMobile ? 0.05 : 0.03, // Slightly larger on mobile to compensate for lower count
            color: 0xAF84CB,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xAF84CB, 2);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const pointLight2 = new THREE.PointLight(0x885DA4, 1.5);
        pointLight2.position.set(-5, -5, 5);
        scene.add(pointLight2);

        // Mouse interaction
        let mouseX = 0;
        let mouseY = 0;

        // Tracking smoothed mouse position separately from camera position
        let smoothedMouseX = 0;
        let smoothedMouseY = 0;

        const handleMouseMove = (e) => {
            // Disable mouse interaction on mobile for perf
            if (isMobile) return;
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Scroll-based animation
        let scrollY = 0;
        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        // Use passive listener for better scroll performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Animation loop with frame limiting for performance
        const clock = new THREE.Clock();
        let lastFrameTime = 0;
        const targetFPS = 30;
        const frameInterval = 1000 / targetFPS;

        function animate(currentTime) {
            animationRef.current = requestAnimationFrame(animate);

            // Frame limiting - skip frames to maintain target FPS
            if (currentTime - lastFrameTime < frameInterval) return;
            lastFrameTime = currentTime;

            const elapsedTime = clock.getElapsedTime();

            // Rotate particles - smoother and more consistent
            particlesMesh.rotation.y = elapsedTime * 0.05;
            particlesMesh.rotation.x = elapsedTime * 0.02;

            // Gentle "breathing" or vertical flow
            particlesMesh.position.y = Math.sin(elapsedTime * 0.3) * 0.2;

            // Smooth mouse interaction
            const targetX = mouseX * 0.5;
            const targetY = mouseY * 0.5;

            smoothedMouseX += (targetX - smoothedMouseX) * 0.05;
            smoothedMouseY += (targetY - smoothedMouseY) * 0.05;

            // Apply positions
            camera.position.x = smoothedMouseX;
            camera.position.y = smoothedMouseY + (scrollY * 0.001);

            renderer.render(scene, camera);
        }

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            const newPixelRatio = Math.min(window.devicePixelRatio, 2);
            renderer.setPixelRatio(newPixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            document.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);

            // Dispose Three.js resources
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();

            // Remove canvas from DOM
            if (containerRef.current && renderer.domElement) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            id="canvas-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                background: 'linear-gradient(135deg, #0a0514 0%, #140A1B 50%, #1a0f24 100%)'
            }}
        />
    );
}
