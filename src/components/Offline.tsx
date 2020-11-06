import * as React from 'react';
import offline from "../assets/offline.png"

export interface OfflineProps {
    
}
 
const Offline: React.SFC<OfflineProps> = () => {
    return ( <><h1>You're offline</h1>
    <img src={offline}/></> );
}
 
export default Offline;