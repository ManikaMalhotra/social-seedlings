import { AiOutlineHeart } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { PiShareFatBold } from 'react-icons/pi';
import { FaRegCommentAlt } from 'react-icons/fa';
import styles from '@/styles/ActionsBar.module.css';
import { IActionsBarProps } from '@/types/props';
import { useState } from 'react';

export default function ActionsBar() {
    const [isLiked, setIsLiked] = useState(false);

    function handleLike() {
        setIsLiked(!isLiked);
    }

    return (
        <div className={styles.actions734ActionBar}>
            <div className={styles.actions734ActionBarItem} onClick={handleLike}>
                {isLiked ? <FcLike className={styles.actions734ActionBarItemIcon} /> : <AiOutlineHeart className={styles.actions734ActionBarItemIcon} />}
                {/* <AiOutlineHeart className={styles.actions734ActionBarItemIcon} /> */}
                <p className={styles.actions734ActionBarItemText}>Like</p>
            </div>
            <div className={styles.actions734ActionBarItem}>
                <FaRegCommentAlt className={styles.actions734ActionBarItemIcon} />
                <p className={styles.actions734ActionBarItemText}>Comment</p>
            </div>
            <div className={styles.actions734ActionBarItem}>
                <PiShareFatBold className={styles.actions734ActionBarItemIcon} />
                <p className={styles.actions734ActionBarItemText}>Share</p>
            </div>
        </div>
    );
};