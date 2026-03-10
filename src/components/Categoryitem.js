import './Categoryitem.css';

export function Categoryitem(props) {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props;
    return (
        <div className='card'>
            <img src={strCategoryThumb} alt={strCategory} />
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription}</p>
            <div className='card-action'>
                <a href="#1">Watch category</a>
            </div>
        </div>
    )
}