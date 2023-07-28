import { IPostContainerProps } from "./props";
import styles from "./styles.module.css";

export default function PostContainer({ imgUrl, likesCount, commentsCount }: IPostContainerProps) {
    return (
        <div className={styles.postContainer689GalleryItem} tabIndex={0}>
            <img src={imgUrl} className={`${styles.postContainer689ImgTag} ${styles.postContainer689GalleryImage}`} alt="" />
            <div className={styles.postContainer689GalleryItemInfo}>
                <ul>
                    <li className={styles.postContainer689GalleryItemLikes}>
                        <span className={styles.postContainer689VisuallyHidden}>
                            Likes:
                        </span>
                        <i className="fas fa-heart" aria-hidden="true"></i>
                        {likesCount}
                    </li>
                    <li className="gallery-item-comments">
                        <span className={styles.postContainer689VisuallyHidden}>
                            Comments:
                        </span>
                        <i className="fas fa-comment" aria-hidden="true"></i>
                        {commentsCount}
                    </li>
                </ul>
            </div>
        </div>
    )
};