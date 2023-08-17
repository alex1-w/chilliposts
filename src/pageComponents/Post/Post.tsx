import { FC } from "react"
import { IPost } from "../../types/IPosts";


export const Post: FC<{ post: IPost }> = ({ post }) => {

    console.log(post);

    return (
        <article>
        </article>
    )
}