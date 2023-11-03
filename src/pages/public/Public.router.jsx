
import { Routes, Route, Navigate } from 'react-router-dom'

import { Home, About, Logement, E404 } from '@/pages/public/index'

import Layout from '@/Layouts/Layout'


const PublicRouter = () => {
    return (

        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<E404 />} />
            </Route>
        </Routes>

    );
};

export default PublicRouter;