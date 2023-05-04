import { useHistory, useLocation } from 'react-router-dom';

export const useQueryParameter = (key: string) => {
    const location = useLocation();
    return new URLSearchParams(location.search).get(key);
};

interface ReplaceQueryParametersProps {
    key: string;
    value?: string;
}

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();
    return ({ key, value }: ReplaceQueryParametersProps) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        const newSearch = searchParams.toString();
        history.push(`${location.pathname}?${newSearch}`);
    };
};
