import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContexts';
import ServiceCard from './ServiceCard';

const Rooms = () => {
    const { serviceDetails } = useContext(AuthContext);
    return (
      <div className="container mx-auto p-3">
            {
                serviceDetails.map(room => <ServiceCard key={room._id} room={room}></ServiceCard>)
        }
      </div>
    );
};

export default Rooms;