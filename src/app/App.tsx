import { classNames, useTheme } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMounted, userAction } from 'entities.entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { AppRouter } from './providers/router/ui/AppRouter';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    const mounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userAction.initAuthData(USER_LOCALSTORAGE_KEY));
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])} id="app">
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {mounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export { App };
