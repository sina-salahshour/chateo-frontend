'use client';

import { useRipple } from './use-ripple.hook';
import { cn } from '@/lib/utils/cn.util';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IconButtonProps {
    icon: ReactNode;
    className?: string;
}
export function IconButton({ icon, className }: IconButtonProps) {
    const { onMouseDown, ripples } = useRipple();
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                borderRadius: '40%',
            }}
            initial={{
                borderRadius: '50%',
            }}
            whileTap={{
                borderRadius: '50%',
                scale: 0.9,
            }}
            className={cn(
                'relative aspect-square overflow-hidden border-[1px] border-[#A8B0AF] border-opacity-50',
                className
            )}
            onMouseDown={onMouseDown}
        >
            {icon}
            {ripples}
        </motion.button>
    );
}
