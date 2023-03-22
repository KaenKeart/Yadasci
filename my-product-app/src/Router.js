import { Route, Routes } from 'react-router-dom';
import Page01 from './Page01';
import Page02 from './Page02';
import Page03 from './Page03';
import Page04 from './Page04';
import Project from "./Project_01";

function Router () {
    return (
        <Routes>
        <Route path="/Project" element={<Project />} />
        <Route path="/page01" element={<Page01 />} />
        <Route path="/page02" element={<Page02 />} />
        <Route path="/page03" element={<Page03 />} />
        <Route path="/page04" element={<Page04 />} />

        </Routes>
    );
}
export default Router;