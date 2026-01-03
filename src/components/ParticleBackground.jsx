import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Three.js Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        camera.position.z = 5;

        // Create animated particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 800;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 20;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
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
            mouseX = (e.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Scroll-based animation
        let scrollY = 0;
        const handleScroll = () => {
            scrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        // Animation loop
        function animate() {
            animationRef.current = requestAnimationFrame(animate);

            // Rotate particles
            particlesMesh.rotation.y += 0.001;
            particlesMesh.rotation.x += 0.0005;

            // Smooth mouse interaction
            const targetX = mouseX * 0.5;
            const targetY = mouseY * 0.5;

            smoothedMouseX += (targetX - smoothedMouseX) * 0.05;
            smoothedMouseY += (targetY - smoothedMouseY) * 0.05;

            // Apply positions
            // X is controlled by mouse
            camera.position.x = smoothedMouseX;
            // Y is controlled by scroll + mouse
            camera.position.y = smoothedMouseY + (scrollY * 0.001);

            renderer.render(scene, camera);
        }

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
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
