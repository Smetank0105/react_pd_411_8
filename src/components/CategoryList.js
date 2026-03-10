import './CategoryList.css';
import {Categoryitem} from './Categoryitem';

export function CategoryList({catalog = []})
{
    return(
        <div className='list'>
            {
                catalog.map(el => (
                    <Categoryitem key={el.idCategory} {...el} />
                ))
            }
        </div>
    )
}