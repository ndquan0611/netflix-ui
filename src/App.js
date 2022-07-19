import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from '~/constants/routes';
import { Home, Browse, SignUp, SignIn } from './pages';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path={ROUTES.BROWSE} element={<Browse />}></Route>
                <Route path={ROUTES.SIGN_IN} element={<SignIn />}></Route>
                <Route path={ROUTES.SIGN_UP} element={<SignUp />}></Route>
                <Route path={ROUTES.HOME} element={<Home />}></Route>
            </Routes>
        </Router>
    );
}
