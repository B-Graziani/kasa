import React from "react";
import { LogementCard } from "../components/LogementCard";
import "../assets/scss/Components/list_card.scss"
import { Link } from 'react-router-dom';

export const ListLogements = () => {
    return (
        <div className="list-container">
            <Link to="/logement/:id"><LogementCard /></Link>
            <Link to="/logement/:id"><LogementCard /></Link>
            <Link to="/logement/:id"><LogementCard /></Link>
            <Link to="/logement/:id"><LogementCard /></Link>
            <Link to="/logement/:id"><LogementCard /></Link>
            <Link to="/logement/:id"><LogementCard /></Link>
        </div>
    )
}