import React from "react";
import { styles } from "../util/style";
import { clients } from "../util/constants";
import ClientCard from "./ClientCard";

function Clients(props) {
  return (
    <div className={`${styles.flexCenter} my-4`} id="clients">
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client)=>(
          <ClientCard key={client.id} logo={client.logo}/>
        ))}
      </div>
    </div>
  );
}

export default Clients;
