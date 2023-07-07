import React, {ReactNode} from "react";

const Layout = ({children}: {children: ReactNode}) => {
return <div>
    <h2>Layout About</h2>
    {children}</div>;
};

export default Layout;