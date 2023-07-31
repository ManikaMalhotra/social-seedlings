import { AiFillHeart } from 'react-icons/ai';
import { BiComment, BiHeart, BiShare } from 'react-icons/bi';
import styles from '@/styles/ActionsBar.module.css';
import { useState } from 'react';

export default function ActionsBar() {
    const [isLiked, setIsLiked] = useState(false);

    function handleLike() {
        setIsLiked(!isLiked);
    }

    return (
        <div className={styles.actions734ActionBar}>
            <div className={styles.actions734ActionBarItem} onClick={handleLike}>
                {isLiked ? <AiFillHeart className={styles.actions734ActionBarItemIcon} /> : <BiHeart className={styles.actions734ActionBarItemIcon} />}
            </div>
            <div className={styles.actions734ActionBarItem}>
                <BiComment className={styles.actions734ActionBarItemIcon} />
            </div>
            <div className={styles.actions734ActionBarItem}>
                <BiShare className={styles.actions734ActionBarItemIcon} />
            </div>
        </div>
    );
};