import React from 'react';

const Comics = (props) => {
    const comics = props.comics.map((comic, i) => {
        return (
            <div key={comic.id}>
            <h3>Real Name: {comic.real_name}</h3>
            <h3>Known Aliases: {comic.aliases}</h3>
            <h4>Character Description: <td dangerouslySetInnerHTML={{__html: comic.description}} /></h4>
            </div>
        )
    })
    return (
        <div>
            <h1>Comics</h1>
            {comics}
        </div>
    )
}

export default Comics;