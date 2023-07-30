export interface IBaseLayoutProps {
    children: ReactNode;
};

export interface IPostProps {
    post: IPost;
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

interface IPostImageProps {
    post: IPost;
}