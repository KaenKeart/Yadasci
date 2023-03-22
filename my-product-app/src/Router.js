import { Route, Routes } from 'react-router-dom';
import Page01 from './Page01';
import Project from "./Project_01";

function Router () {
    return (
        <Routes>
        <Route path="/" element={<Project />} />
        <Route path="/test" element={<Page01 />} />
        </Routes>
    );
}
export default Router;