function ArticleListByCategory({ articles, category }){
    return <>
        <h1>Showing news for category <i>{category}</i></h1>
        {
            articles && articles.map(article => (<div key={article.id}>
                <h2>
                    {article.id}. {article.title} | {article.category}
                </h2>
                <hr />
            </div>))
        }
    </>
}

export async function getServerSideProps({ req, res, params, query }){
    const articles = await fetch(`http://localhost:4000/news?category=${params.category}`).then(r => r.json())

    if(articles.length < 1){
        return {
            notFound: true
        }
    }

    return {
        props: {
            articles,
            category: params.category
        }
    }
}

export default ArticleListByCategory;