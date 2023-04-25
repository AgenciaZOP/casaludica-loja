import React from 'react';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { SearchField } from '../../components/SearchField';
import { Categories } from './Categories';
import { Collections } from './Collections';
import { Popular } from './Popular';
import { Promotions } from './Promotions';
import './style.scss';

export const Home = () => {
    
    return (
        <div className='Home-Page' >
            <Background />
            <Header />

            <SearchField />
            <Collections />
            <Promotions />
            <Categories />
            <Popular />
        </div>
    )
}