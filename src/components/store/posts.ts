import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { IPost } from '@/types/misc'

type PostsState = {
    posts: IPost[],
    page: number,
    setPosts: (posts: IPost[]) => void,
    getPosts: () => IPost[],
    getPage: () => Promise<void>
}

export const usePostsStore = create<PostsState>()(
    persist(
        (set, get) => ({
            posts: [],
            page: 1,
            setPosts: (posts) => set({ posts }),
            getPosts: () => get().posts,
            getPage:  async () => {
                const page = get().page;
                const prevPosts = get().posts;
                const response = await fetch(`/api/posts?page=${page}&limit=10`)
                const data = await response.json()
                set({ 
                    posts: [...prevPosts, ...data],
                    page: page + 1
                })
            }
        }),
        {
            name: 'posts-storage',
            storage: createJSONStorage(() => localStorage),
            skipHydration: true
        }
    )
)