import React from "react";

function Futr(props){
    return(
    <div class="card pmd-card mx-auto Cardbody">
        {
          props.rides.map((ride) => {
            if(new Date(new Date(ride.date).toDateString()) > new Date(new Date(2022,2,15).toDateString()))
            {
                return(
              <div class="card-body d-flex flex-row Cardstyle">
                <img class="ml-3" src={ride.map_url}  width="180" height="112"/>
                <div class="media-body" style={{paddingLeft:'2rem'}}>
                  <div class="card-subtitle">
                    <div class="d-flex flex-row">
                      <p className='Cardtext'>Ride Id :</p>
                      <p className='Cardtext-value'>{ride.id}</p>
                    </div>
                    <div class="d-flex flex-row">
                      <p className='Cardtext'>Origin Station :</p>
                      <p className='Cardtext-value'>{ride.origin_station_code}</p>
                    </div>
                    <div class="d-flex flex-row">
                      <p className='Cardtext'>station_path :</p>
                      <p className='Cardtext-value'>[{ride.station_path.join(', ')}]</p>
                    </div>
                    <div class="d-flex flex-row">
                      <p className='Cardtext'>Date :</p>
                      <p className='Cardtext-value'>{ride.date}</p>
                    </div>
                    <div class="d-flex flex-row">
                      <p className='Cardtext'>Distance :</p>
                      <p className='Cardtext-value'>{ride.dist}</p>
                    </div>
                  </div>		
                </div>
              </div>
             )
            }
        }) 
        }    
      </div>
    ) 
}

export default Futr