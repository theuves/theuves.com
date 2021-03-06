import Posts from '../components/posts'
import getPosts from '../utils/get-posts'

export default function Blog({ posts }) {
    return (
        <>
            <h1>Blog</h1>
            <Posts posts={posts} />
        </>
    )
}

export const getStaticProps = async () => {
    let data = []
    const posts = getPosts()

    for (let post of posts) {
        data.push({
            title: (await post).data.title,
            date: (await post).data.date,
            url: `/blog/${(await post).url}`,
        })
    }

    data = data.sort((a, b) => {
        const dateA = (new Date(a.date)).getTime()
        const dateB = (new Date(b.date)).getTime()

        if (dateA < dateB) return 1
        if (dateA > dateB) return -1
        return 0
    })

    return {
        props: {
            posts: data
        }
    }
}