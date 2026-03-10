import './Home.css'
import { useState, useEffect } from 'react';
import { getAllCategories } from '../../api';
import { CategoryList } from '../../components/CategoryList';
//import Preloader

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
            <CategoryList catalog={catalog} />
        </div>
    )
}