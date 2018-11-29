import React from 'react';

const Comics = (props) => {
    const comics = props.comics.map((comic, i) => {
        return (
            <div key={comic.id}>
                <h3>Real Name:</h3> 
                <h4>{comic.real_name}</h4>
                <h3>Known Aliases: </h3>
                <h4>{comic.aliases}</h4>
                {/* <h3>First Appeared In Issue:</h3>
                <h4><td dangerouslySetInnerHTML={{__html: comic.first_appeared_in_issue.name}} /><td dangerouslySetInnerHTML={{__html: comic.first_appeared_in_issue.issue_number}} /></h4>
                <h4><td dangerouslySetInnerHTML={{__html: comic.first_appeared_in_issue.issue_number}} /></h4>
                <h4><td dangerouslySetInnerHTML={{__html: comic.first_appeared_in_issue.id}} /></h4> */}
                <h3>Character Description:</h3> 
                <h4><td dangerouslySetInnerHTML={{__html: comic.description}} /></h4>
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