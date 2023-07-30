import { IPostContainerProps } from "@/types/props";
import styles from "@/styles/PostContainer.module.css";

export default function PostContainer({ post }: IPostContainerProps) {
    return (
        <div className={styles.postContainer689GalleryItem} tabIndex={0}>
            <img src={post.postImage} className={`${styles.postContainer689ImgTag} ${styles.postContainer689GalleryImage}`} alt="" />
        </div>
    )
};