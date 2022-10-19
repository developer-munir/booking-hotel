import React from "react";

const ServiceCard = ({ room }) => {
  const { picture, name,company } = room;
  console.log(room);
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl my-3 font-serif rounded-md">
        <figure>
          <img src={picture} alt="Album" className="rounded-md" />
        </figure>
        <div className="card-body">
          <h2 className="card-title uppercase">{name}</h2>
          <h5>
            <strong>Company Name : {company}</strong>
          </h5>
          <div className="font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            laboriosam, fugiat exercitationem quia inventore amet quibusdam
            adipisci obcaecati mollitia quaerat aliquam voluptatum nulla
            voluptates tempore debitis molestias facilis aspernatur eligendi
            incidunt id iste. Temporibus harum neque, officiis minus libero
            consequatur dolorum hic dolorem praesentium atque architecto
            delectus facere suscipit quisquam iure reprehenderit voluptatibus
            ab, sequi voluptates alias at sit quidem pariatur? Perspiciatis
            necessitatibus, tempore ullam fugit, ipsum dolor...
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-warning">Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
