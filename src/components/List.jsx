import React from 'react';
import Error from './Error';
import './list.css';

function List({props}) {

    let { items } = props;
    items = [...items].slice(0,10);
    console.log(items);
    return (

        <div className='list'>
            <div className="list__category category">
                <div className="category__user user">User</div>
                <div className="category__repo repo">Project Name</div>
                <div className="category__lang lang">Technology</div>
            </div>
            {items.length > 0 ? items.map((item) => {
                return (
                    <div className='list__item' key={item.id}>
                        <div className="list__user-info">
                            <img src={item.owner.avatar_url} alt="avatar" />
                            <div className='list__login'>{item.owner.login}</div>
                        </div>
                        <a target='_blank' href={item.html_url} className='list__name'>{item.name}</a>
                        <div className='list__language'>{item.language}</div>
                    </div>
                )
            }) : <Error/>}
        </div>
    )
}

export default List