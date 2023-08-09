import React, { useState } from 'react'

const NewsArticleList = ({ articles }) => {

    let [counter, setCounter] = useState(0);

    return (<>
        <div>List of news articles <button onClick={()=>setCounter(prev=>prev+1)}>{counter}</button></div>
        {
            articles && articles.map(article => (<div key={article.id}>
                <h2>
                    {article.id}. {article.title} | {article.category}
                </h2>
                <hr />
            </div>))
        }
    </>
    )
}
// let cached = {};
export async function getServerSideProps({ req, res }) {
    const news = await fetch(`http://localhost:4000/news`).then(r => r.json());

    // if(!cached.news){
    //     cached.news = news;
    // }else{
    //     if(JSON.stringify(cached.news) === JSON.stringify(news)){
    //         res.statusCode = 304;
    //         return { props: {} }
    //     }else{
    //         cached.news = news;
    //     }
    // }

    return {
        props: {
            articles: news
        },
    }
}

export default NewsArticleList