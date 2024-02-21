import { useSelector } from 'react-redux';
import { getUserAuthData } from '../../model/selectors/getUserAuthData/getUserAuthData';

export const useAuth = () => useSelector(getUserAuthData);
