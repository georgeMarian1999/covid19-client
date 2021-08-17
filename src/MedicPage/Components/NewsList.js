import React from 'react';
import style from './NewsList.module.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const NewsList = ({ news}) => {
    return (
        <table className={style.newsTable}>
            <thead className={style.thead}>
                <tr>
                    <th></th>
                    <th>Id</th> 
                    <th>Title</th>
                    <th>Description</th>
                    <th>Link</th>
                    <th>Content</th>
                    <th>Publication Date</th>
                    <th>Source</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody className={style.tbody}>
                {news.map((newsRow, idx) =>
                    <tr key={idx} className={style.row} >
                        <td><img src={newsRow.imageurl} className={style.image} alt="news img"/></td>
                        <td className={style.td}>
                            <input
                                className={style.id}
                                type="text"
                                value={newsRow.id}
                                // onChange={onChangeEditTitle}
                            />
                        </td>
                        <td className={style.td}>
                            <textarea
                                className={style.title}
                                type="text"
                                value={newsRow.title}
                                // onChange={onChangeEditTitle}
                            />
                        </td>
                        <td className={style.td}>
                         <textarea
                            type="text"
                            value={newsRow.description}
                            // onChange={onChangeEditDescription}
                          />
                        </td>
                        <td className={style.td}>
                            <textarea
                                className={style.link}
                                type="text"
                                value={newsRow.link}
                                // onChange={onChangeEditLink}
                            />
                        </td>
                        <td className={style.td}>
                            <textarea
                                className={style.content}
                                type="text"
                                value={newsRow.content}
                                // onChange={onChangeEditContent}
                            />
                        </td>
                        <td className={style.td}>
                            <input
                                className={style.pubdate}
                                type="text"
                                value={newsRow.pubdate}
                                // onChange={onChangeEditDate}
                            />
                        </td>
                        <td className={style.td}>
                            <input
                                className={style.source}
                                type="text"
                                value={newsRow.source}
                                // onChange={onChangeEditSource}
                            />
                        </td>
                        <td><EditRoundedIcon className={style.icon} /**onClick={saveChanges}*/></EditRoundedIcon></td>
                        <td><DeleteForeverIcon /**onClick={onDelete(idx)} */ className={style.icon}>Delete</DeleteForeverIcon></td> 
                    </tr>
                )}
                </tbody>
        </table>
 );
};

export default NewsList;

