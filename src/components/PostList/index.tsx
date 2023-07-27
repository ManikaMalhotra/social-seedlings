import Post from '@/components/Post';
import { IPost } from '@/types/misc';
import { IPostListProps } from '@/types/props';

export default function PostList({ posts }: IPostListProps) {

    const postElements = posts.map((post) => {
        return (
            <Post
                key={post.id}
                description={post.description}
                likesCount={post.likesCount}
                location={post.location}
                postImage={post.postImage}
                userImage={post.userImage}
                username={post.username}
            />
        );
    });
    return (
        <>
            {postElements}
        </>
    );
}