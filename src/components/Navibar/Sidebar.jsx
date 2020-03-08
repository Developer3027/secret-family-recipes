import React from 'react';
import { ProfileSide, SettingSide, FamilySide, BakerySide, FoodSide, AddSide } from '../AppComponents/AllBtn';
import './navi.css';

const Sidebar = () => {
    return(
        <aside className="aside">
            <ProfileSide />
            <SettingSide />
            <FamilySide />
            <BakerySide />
            <FoodSide />
            <AddSide />
        </aside>
    );
}

export default Sidebar;