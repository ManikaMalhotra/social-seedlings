import { useGlobalStore } from '@/store/global';
import styles from '@/styles/ThemeToggleButton.module.css';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeToggleButton() {
    const isDarkMode = useGlobalStore(state => state.darkMode);
    const toggleDarkMode = useGlobalStore(state => state.toggleDarkMode);

    return (
        <>
            <div className={styles.ttb645CheckboxContainer}>
                <input 
                    type="checkbox" 
                    className={styles.ttb645Checkbox} 
                    id="checkbox" 
                    defaultChecked={isDarkMode} 
                    onClick={() => toggleDarkMode()}
                />
                <label htmlFor="checkbox" className={styles.ttb645CheckboxLabel}>
                    <BsMoon className={styles.ttb645MoonIcon} />
                    <BsSun className={styles.ttb645SunIcon} />
                    <span className={styles.ttb645BallIcon}></span>
                </label>
            </div>
        </>
    );
};