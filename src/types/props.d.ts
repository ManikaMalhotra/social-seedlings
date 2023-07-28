import { IPost } from "./misc";

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
};

export interface IPostListProps {
    posts: IPost[];
};

export interface IUserInformationProps {
    username: string;
};