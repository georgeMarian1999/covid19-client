import React from 'react';
import style from './AddNewsForm.module.css';

const AddNewsForm = () => {
    return (
        <form className={style.formContent}>
            <div className={style.firstLine}>
                <input 
                    className={style.title} 
                    placeholder="Title"
                />
                <input 
                    type="date"
                    className={style.date} 
                />
            </div>
            <div> 
                <input 
                    className={style.link} 
                    placeholder="Link"
                />
            </div>
            <div>
                <input 
                    className={style.image}
                    placeholder="Image url"
                />
            </div>
            <div>
                <input 
                    className={style.description}
                    placeholder="Description"
                />
            </div>
            <div>
                <input 
                    className={style.content}
                    placeholder="Content"
                />
            </div>
            <input type="submit" className={style.buttonAddNews} value="Add news"/>
        </form>   
        )
}

export default AddNewsForm;