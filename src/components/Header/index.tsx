import useIntersection from '@/hooks/useIntersection'
import styles from '@/styles/Header.module.css'
import { useEffect } from 'react';
import ThemeToggleButton from '../ThemeToggleButton';

export default function Header() {
    return (
        <header className={styles.hdr852Header}>
            <div className={styles.hdr852Container}>
                <div className={styles.hdr852Logo}>
                    <span>Social Seedlings</span>
                </div>

                <div className={styles.hdr852Icons}>
                    <ThemeToggleButton />
                </div>
            </div>
        </header>
    )
}