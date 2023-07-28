import styles from './styles.module.css';

export default function ProfileInfoContainer() {
    return (
        <div className={styles.profileInfo592Container}>

            <div className={styles.profileInfo592Img}>

                <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" className={styles.userInfo251ImgTag} />

            </div>

            <div className={styles.profileInfo592UserSettings}>

                <h1 className={styles.profileInfo592Username}>janedoe_</h1>

                <button className={`${styles.userInfo251Button} ${styles.profileInfo592EditProfileBtn}`}>Edit Profile</button>

                <button className={`${styles.userInfo251Button} ${styles.profileInfo592SettingsIcon}`} aria-label="profile settings">
                    <i className="fas fa-cog" aria-hidden="true"></i>
                </button>

            </div>

            <div className={styles.profileInfo592Stats}>

                <ul>
                    <li>
                        <span className={styles.profileInfo592StatCount}>164 </span>
                         posts
                    </li>
                    <li>
                        <span className={styles.profileInfo592StatCount}>188 </span>
                         followers
                    </li>
                    <li>
                        <span className={styles.profileInfo592StatCount}>206 </span>
                        following
                    </li>
                </ul>
            </div>
            <div className={styles.profileInfo592Bio}>

                <div>
                    <div className={styles.profileInfo592FullName}>
                        Jane Doe
                    </div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
                </div>
            </div>
        </div>
    );
}