import styles from '@/styles/ThemeToggleButton.module.css';
import { use, useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

export default function ThemeToggleButton() {
    const [checked, setChecked] = useState(false);

    const handleChecked = () => {
        setChecked(!checked);
        if (checked) {
            // document.documentElement.setAttribute('data-theme', 'light');
        } else {
            // document.documentElement.setAttribute('data-theme', 'dark');
        }
    };

    useEffect(() => {
        if (checked) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [checked]);

    return (
        <>
            <div className={styles.ttb645CheckboxContainer}>
                <input type="checkbox" className={styles.ttb645Checkbox} id="checkbox" defaultChecked={checked} onChange={handleChecked}/>
                <label htmlFor="checkbox" className={styles.ttb645CheckboxLabel}>
                    <BsMoon className={styles.ttb645MoonIcon} />
                    <BsSun className={styles.ttb645SunIcon} />
                    <span className={styles.ttb645BallIcon}></span>
                </label>
            </div>
        </>
    );
};