import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss';
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import TodoPage from "./components/TodoPage/TodoPage";


const App = () => {
    return (
        <div className='app'>
            <header className='headerWrapper'>
                <Link to={'/'} className="mainLink">Главная</Link>
            </header>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<ProjectsPage/>}/>
                    <Route path=":id" element={<TodoPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
