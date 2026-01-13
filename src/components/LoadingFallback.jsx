export default function LoadingFallback() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 999,
            background: 'transparent',
            pointerEvents: 'none'
        }}>
            <div className="loader-spinner" style={{
                width: '40px',
                height: '40px',
                border: '3px solid rgba(198, 120, 255, 0.3)',
                borderTop: '3px solid #c678ff',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite'
            }}></div>
        </div>
    );
}
