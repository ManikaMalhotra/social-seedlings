import styles from '@/styles/ThemeToggleButton.module.css';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeToggleButton() {
    return (
        <>
            <div className={styles.ttb645CheckboxContainer}>
                <input type="checkbox" className={styles.ttb645Checkbox} id="checkbox" />
                <label htmlFor="checkbox" className={styles.ttb645CheckboxLabel}>
                    <BsMoon className={styles.ttb645MoonIcon} />
                    <BsSun className={styles.ttb645SunIcon} />
                    <span className={styles.ttb645BallIcon}></span>
                </label>
            </div>
        </>
    );
};