import React from 'react';
import Esquerda from './esquerda/Esquerda';
import Sidebar from './sidebar/Sidebar';

export default function Corpo() {
    return (
        <div class="corpo">
            <Esquerda />
            <Sidebar />
        </div>
    )
}