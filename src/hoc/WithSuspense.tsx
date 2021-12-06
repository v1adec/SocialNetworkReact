import React, {Suspense} from 'react';
import Preloader from "../components/common/Preloader/Preloader";


export default function WithSuspense<WPC>(WrappedComponent: React.ComponentType<WPC>):React.ComponentType<WPC> {
    return (props: WPC) => (
        <Suspense fallback={<Preloader/>}>
            <WrappedComponent {...props}/>
        </Suspense>
    )
};