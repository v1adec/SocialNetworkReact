import React, {Suspense} from 'react';
import Preloader from "../components/common/Preloader/Preloader";

const SuspenseComponent: React.FC = (props) => (
    <Suspense fallback={<Preloader />}>
        {props.children}
    </Suspense>
);

export default SuspenseComponent;