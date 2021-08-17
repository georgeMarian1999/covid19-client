import React from 'react';
import {useRef} from "react";
import style from './AddNewsForm.module.css';

const AddNewsForm = (props) => {
    const title = useRef('');
    const description = useRef('');
    const date = useRef('');
    const link = useRef('');
    const imageurl = useRef('');
    const source = useRef('');
    const content = useRef('');

    const submitForm = (e) => {
        e.preventDefault();

        const newsRow = {
            title: title.current.value,
            description: description.current.value,
            pubdate: date.current.value,
            link: link.current.value,
            imageurl: imageurl.current.value,
            source: source.current.value,
            content: content.current.value
        }
        props.onAddNews(newsRow);
        console.log('ana', date.current.value);

        title.current.value = '';
        description.current.value = '';
        date.current.value = '';
        link.current.value = '';
        imageurl.current.value = '';
        source.current.value = '';
        content.current.value = '';
    };

    return (
        <form className={style.formContent} onSubmit={submitForm}>
            <div className={style.firstLine}>
                <input 
                    className={style.title} 
                    placeholder="Title"
                    ref={title}
                    required
                />
                <input 
                    type="date"
                    className={style.date}
                    ref={date}
                    required 
                />
            </div>
            <div> 
                <input 
                    className={style.link} 
                    placeholder="Link"
                    ref={link}
                    required
                />
            </div>
            <div>
                <input 
                    className={style.image}
                    placeholder="Image url"
                    ref={imageurl}
                    required
                />
            </div>
            <div>
                <input 
                    className={style.description}
                    placeholder="Description"
                    ref={description}
                    required
                />
            </div>
            <div>
                <input 
                    className={style.source}
                    placeholder="Source"
                    ref={source}
                    required
                />
            </div>    
            <div>
                <input 
                    className={style.content}
                    placeholder="Content"
                    ref={content}
                    required
                />
            </div>
            <input type="submit" className={style.buttonAddNews} value="Add news"/>
        </form>   
        )
}

export default AddNewsForm;