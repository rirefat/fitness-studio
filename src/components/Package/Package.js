import { useEffect, useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';
import './Package.css';

const Package = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('services.json')
            .then(res=>res.json())
            .then(data=>setServices(data))
    },[]);

    return (
        <div className='packages text-center mb-5 pb-5'>
            <h1 className='mb-5'>Pricing for Everybody</h1>
            <p className='my-5 pb-5'>Below are some of the services & features found at Fitness Studio. For more discount visit our office.</p>
           <div className="packages-info">
           {
               services.map(service=><SinglePackage key={service.id} service={service} ></SinglePackage>)
           }
           </div>
        </div>
    );
};

export default Package;