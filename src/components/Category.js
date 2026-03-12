import { useNavigate, useParams } from 'react-router-dom';
import './Category.css';
import { MealList } from './MealList';
import { useEffect, useState } from 'react';
import { getFilteredCategory } from '../api';
import Preloader from './Preloader';

export function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    let goBack = () => navigate(-1);

    useEffect(() => {
        getFilteredCategory(name)
            .then(data => setMeals(data.meals));
    }, [name]);

    return (
        <div className='wrap'>
            {
                meals != null && meals.length === 0 ?
                    <Preloader /> :
                    <MealList meals={meals} />
            }
            <button className='btn' onClick={goBack} >Go back</button>
        </div>
    )
}