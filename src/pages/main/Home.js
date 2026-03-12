import './Home.css'
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../api';
import { CategoryList } from '../../components/categoryList/CategoryList';
import Preloader from '../../components/Preloader';

export function Home() {
    const [catalog, setCatalog] = useState([]);
    useEffect(() => {
        getAllCategories()
            .then((data) => {
                setCatalog(data.categories);
            });
    }, []);
    return (
        <div className='wrap'>
            {
                catalog != null && catalog.length === 0 ?
                    <Preloader /> :
                    <CategoryList catalog={catalog} />
            }
        </div>
    )
}