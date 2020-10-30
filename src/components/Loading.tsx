import * as React from 'react';
import "./Loading.css";
import { jsx } from "theme-ui";

export interface LoadingProps {
    
}
 
const Loading: React.SFC<LoadingProps> = () => {
    return <div sx={{position:"fixed", width:'100vw', height:'100vh', backgroundColor: 'rgba(0,0,0,0.4)'}}><div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>;
}
 
export default Loading;