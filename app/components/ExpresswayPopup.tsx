"use client";
import React, { useState, useEffect } from "react";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExpresswayPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // This effect runs only once when the layout mounting occurs (first visit or reload).
        // Because this component is in layout.tsx, it stays mounted during internal navigation.
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures it only runs on mount

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
                    onClick={handleClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                    >
                        {/* Close Button - Clean White Circle */}
                        <button
                            onClick={handleClose}
                            className="absolute -top-3 -right-3 z-50 p-2 bg-white text-black rounded-full shadow-xl hover:bg-neutral-100 transition-colors border border-neutral-100 cursor-pointer"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Raw Image Container */}
                        <div className="relative overflow-hidden rounded-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)]">
                            <img
                                src="/expresswayy.png"
                                alt="Ahmedabad-Dholera Expressway"
                                className="max-w-full max-h-[55vh] md:max-h-[65vh] object-contain block rounded-xl"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
