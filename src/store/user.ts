import { IPost, IUser, IUserProfile } from '@/types/misc';
import { create } from 'zustand';

type UserState = {
    details: IUser | null,
    posts: IPost[],
    page: number,
    getUserDetails: (username: string) => Promise<void>,
    getUserPosts: (username?: string) => Promise<void>,
    setUserDetails: (user: IUserProfile) => void,
};

export const useUserStore = create<UserState>()(
    (set, get) => ({
        details: null,
        posts: [],
        page: 1,
        getUserDetails: async (username) => {
            const porifleDetailsResponse = await fetch(`/api/user?username=${username}`);
            const profileDetails = await porifleDetailsResponse.json();

            set({
                details: profileDetails
            });
        },
        getUserPosts: async (username) => {
            if(!username) return;

            if(username !== get().details?.username) {
                set({
                    posts: [],
                    page: 1
                });
            } 

            const page = get().page;
            const prevPosts = get().posts;
            const postsResponse = await fetch(`/api/userPhotos?username=${username}&page=${page}&limit=12`);
            const postsArray = await postsResponse.json();

            set({
                posts: [...prevPosts, ...postsArray],
                page: page + 1
            });
        },
        setUserDetails: (user) => set({
            details: user.details,
            posts: user.posts
        })
    })
);