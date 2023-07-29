import { IPost, IUser, IUserProfile } from '@/types/misc';
import { create } from 'zustand';

type UserState = {
    details: IUser | null,
    posts: IPost[],
    getUserDetails: (username: string) => Promise<void>,
    getUserPosts: (username: string, page: number) => Promise<void>,
    setUserDetails: (user: IUserProfile) => void,
};

export const useUserStore = create<UserState>()(
    (set, get) => ({
        details: null,
        posts: [],
        getUserDetails: async (username) => {
            const porifleDetailsResponse = await fetch(`/api/user?username=${username}`);
            const profileDetails = await porifleDetailsResponse.json();

            set({
                details: profileDetails
            });
        },
        getUserPosts: async (username, page) => {
            const postsResponse = await fetch(`/api/userPhotos?username=${username}&page=${page}&limit=10`);
            const postsArray = await postsResponse.json();

            set({
                posts: [
                    ...get().posts,
                    ...postsArray
                ]
            });
        },
        setUserDetails: (user) => set({
            details: user.details,
            posts: user.posts
        })
    })
);