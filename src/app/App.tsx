import { classNames, useTheme } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userAction } from 'entities.entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { AppRouter } from './providers/router/ui/AppRouter';

const App = () => {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAction.initAuthData(USER_LOCALSTORAGE_KEY));
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])} id="app">
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export { App };
