export interface IBaseLayoutProps {
    children: ReactNode;
};

export interface IPostProps {
    userImage: string;
    postImage: string;
    username: string;
    likesCount: number;
    description: string | null;
    location: string | null;
    blurHash: string;
    height: number;
    width: number;
};

export interface IPostListProps {
    posts: IPost[];
    getPage: () => Promise<void>;
    username?: string;
    checkHydration?: () => boolean;
    rehydrate?: () => Promise<void> | void;
};

export interface IUserInformationProps {
    user: IUser;
    posts: IPost[];
    getUserPosts: (usename?: string) => Promise<void>;
};

export interface IProfileInfoContainerProps {
    user: IUser;
};

export interface IPostGridProps {
    posts: IPost[];
    getUserPosts: (usename?: string) => Promise<void>;
};

export interface IPostContainerProps {
    post: IPost;
};

export interface IViewButtonProps {
    view: boolean;
    setView: Dispatch<SetStateAction<boolean>>;
};