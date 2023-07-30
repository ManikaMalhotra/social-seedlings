import styles from '@/styles/Header.module.css';
import ThemeToggleButton from '../ThemeToggleButton';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={styles.hdr852Header}>
            <div className={styles.hdr852Container}>
                <Link href="/">
                    <div className={styles.hdr852Logo}>
                        <span>Social Seedlings</span>
                    </div>
                </Link>

                <div className={styles.hdr852Icons}>
                    <ThemeToggleButton />
                </div>
            </div>
        </header>
    )
}