import { IProfileInfoContainerProps } from '@/types/props';
import styles from './styles.module.css';

export default function ProfileInfoContainer({ user }: IProfileInfoContainerProps) {
    return (
        <div className={styles.profileInfo592Container}>
            <div className={styles.profileInfo592UserSettings}>
            <div className={styles.profileInfo592Img}>
                <img src={user.profile_image.large} alt="" className={styles.profileInfo592Img} />
            </div>
                <h1 className={styles.profileInfo592Username}>{user.username}</h1>
                <button className={`${styles.profileInfo592Button} ${styles.profileInfo592EditProfileBtn}`}>Edit Profile</button>
                <button className={`${styles.profileInfo592Button} ${styles.profileInfo592SettingsIcon}`} aria-label="profile settings">
                    <i className="fas fa-cog" aria-hidden="true"></i>
                </button>
            </div>

            <div className={styles.profileInfo592Stats}>
                <ul>
                    <li>
                        <span className={styles.profileInfo592StatCount}>{user.total_photos} </span>
                        posts
                    </li>
                    <li>
                        <span className={styles.profileInfo592StatCount}>{user.followers_count} </span>
                        followers
                    </li>
                    <li>
                        <span className={styles.profileInfo592StatCount}>{user.following_count} </span>
                        following
                    </li>
                </ul>
            </div>
            <div className={styles.profileInfo592Bio}>
                <div>
                    <div className={styles.profileInfo592FullName}>
                        {user.name}
                    </div>
                    {user.bio}
                </div>
            </div>
        </div>
    );
}