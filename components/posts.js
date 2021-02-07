import formatDate from '../utils/format-date'

export default function Posts({ posts }) {
    return (
        <div className="last-posts">
            {posts.map(post => (
                <div key={post.url} className="post">
                    <div className="post-title">
                        <span className="post-date">
                            {formatDate(post.date)}
                        </span>
                        <a className="post-link" href={post.url}>
                            {post.title}
                        </a>
                    </div>
                </div>
            ))}
            <style jsx>{`
                .post {
                    display: flex;
                    margin-bottom: 5px;
                }
                .post-date {
                    background-color: #4caf50;
                    color: #eee;
                    padding: 2px 6px;
                    border-radius: 3px;
                    font-size: .9em;
                    font-family: monospace;
                    margin-right: 15px;
                }
                .post-title {
                    flex: 1;
                }
                .post-link {
                    color: var(--link-color);
                    padding: 2px 6px;
                    transition: linear .05s;
                    text-decoration: none;
                }
                .post-link:hover {
                    background-color: #eee;
                }
                .post-link:active {
                    background-color: #ddd;
                }
            `}</style>
        </div>
    )
}