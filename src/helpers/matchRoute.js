import { useResolvedPath, useMatch } from 'react-router-dom';

// 
const MatchRoute = (to) =>{
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return match;
}

export default MatchRoute;