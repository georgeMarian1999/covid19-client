import React from "react";
import AddNewsForm from "./Components/AddNewsForm";
import NewsList from "./Components/NewsList";
import {useEffect, useState} from "react";
import axios from "axios";

const MedicPage = () => {

    const [news, setNews] = useState([]);

    // Get all news
    const getNews = () => {
        axios.get("http://localhost:5000/getNews")
            .then(res => {
                const news = res.data;
                setNews(news);
            });
    }

     // Add user
     const addNews = async (newsRow) => {
        try {
             await fetch("http://localhost:5000/addNews", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newsRow),
            });
        } catch (err) {
            console.error(err.message);
        }
        setNews([...news, newsRow]);
    }

    useEffect(() => {
        getNews();
    }, []);

    return <div className="mainContainer">
        <div>
            <AddNewsForm onAddNews={addNews}/>
        </div>

        <div>
            <NewsList 
                news={news}
            />
        </div>

    </div>
}


export default MedicPage;