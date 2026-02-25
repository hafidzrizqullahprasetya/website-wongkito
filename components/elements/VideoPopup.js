'use client'
import { useState, useEffect, useCallback } from 'react'

export default function VideoPopup({ style, videoId = "OMqWRlxo1oQ" }) {
    const [isOpen, setOpen] = useState(false)

    const handleClose = useCallback(() => setOpen(false), [])

    // Tutup modal saat tekan ESC
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') handleClose() }
        if (isOpen) {
            document.addEventListener('keydown', handleKey)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [isOpen, handleClose])

    return (
        <>
            {style === 1 &&
                <a onClick={() => setOpen(true)} className="play-btn popup-video" style={{ cursor: 'pointer' }}>
                    <i className="fas fa-play" />
                </a>
            }
            {style === 2 &&
                <div className="video-icon">
                    <a className="popup-video" onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
                        <i className="fas fa-play" />
                    </a>
                </div>
            }

            {isOpen && (
                <div
                    onClick={handleClose}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 9999,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        animation: 'fadeIn 0.2s ease',
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            position: 'relative',
                            width: '90%',
                            maxWidth: '900px',
                            aspectRatio: '16 / 9',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
                        }}
                    >
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                            title="Video Player"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                        />
                        <button
                            onClick={handleClose}
                            aria-label="Close video"
                            style={{
                                position: 'absolute',
                                top: '12px',
                                right: '12px',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: 'rgba(255,255,255,0.15)',
                                backdropFilter: 'blur(6px)',
                                color: '#fff',
                                fontSize: '20px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                lineHeight: 1,
                                transition: 'background 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)'}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)'}
                        >
                            ×
                        </button>
                    </div>

                    <style>{`
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                    `}</style>
                </div>
            )}
        </>
    )
}