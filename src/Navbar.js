// const Navbar = () => {
//     return (
//         <nav className="navbar">
//             <h1>The Dojo Blog</h1>
//             <div className="links">
//                 <a href="/">Home</a>
//                 <a href="/create" style={{
//                     color: 'white',
//                     backgroundColor: '#f1356d',
//                     borderRadius: '8px'
//                 }}>New Blog</a>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;


// What we're doing is creating anchor tags right here and that's fine to do but if you want react to handle the routing only in the browser
// and to intercept those requests for new pages we need to replace these with link
// instead

import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;