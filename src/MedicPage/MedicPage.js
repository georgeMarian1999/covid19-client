import React from "react";
import AddNewsForm from "./Components/AddNewsForm";
import NewsList from "./Components/NewsList";
import {useEffect, useState} from "react";
import axios from "axios";
import ONLINE_URL from "../Common/ONLINE_URL";
const MedicPage = () => {

    const [news, setNews] = useState([]);

    // Get news
    const getNews = () => {
        axios.get(ONLINE_URL+'getNews')
            .then(res => {
                const news = res.data;
                setNews(news);
            });
    }

     // Add news
     const addNews = async (newsRow) => {
        try {
             await fetch(ONLINE_URL+"addNews", {
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



    return <>
            <AddNewsForm 
                onAddNews={addNews}
            />
            <NewsList 
                news={news}
            />
        </>
}


export default MedicPage;