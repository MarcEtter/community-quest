import React from 'react';
import '../styles.css';
import Chat from '../components/Chat.js'
import Sidebar from '../components/Sidebar.js'

const Home = () => {

    return (
        <div class="w-screen h-screen flex justify-between">
                < Sidebar />
            <div class="w-3/4 h-full self-end">
                < Chat />
            </div>
        </div>
    )
}


export default Home