import React, { useState, useEffect } from "react";

const Main = () => {

    const [news, setNews] = useState([]);


    const loadNews = async() => {
        const response = await  fetch("https://newsapi.org/v2/everything?q=Apple&from=2021-07-19&sortBy=popularity&apiKey=4fc8ad23db54411c8dce19801bccff07");
        const data = await response.json();
        console.log(data.articles);
        setNews(data.articles);
        console.log(news);
    }

    useEffect(() => {

        loadNews();

    }, []);


    return(
        <>
            <h1>I am main.</h1>
            {news.map(data => {
                return (
                <p>{data.title}</p>
                )
            })}
        </>
    );

}

export default Main;