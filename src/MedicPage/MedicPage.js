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

    useEffect(() => {
        getNews();
    }, []);

    return <div className="mainContainer">
        <div>
            <AddNewsForm/>
        </div>

        <div>
            <NewsList 
                news={news}
            />
        </div>

    </div>
}


export default MedicPage;