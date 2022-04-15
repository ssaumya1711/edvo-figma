import React from "react";

function Navbar(props){
    return(
        <nav class="navbar navbar-expand-xl navbar-dark pmd-navbar pmd-z-depth .pmd-tabs" style={{backgroundColor: '#101010'}}>
            <a class="navbar-brand" href="">Edvora</a>
            <div class="ml-auto">
              <span class="mr-2" style={{color: 'white'}}>{props.user.name}</span>
              <img class="mr-2" src={props.user.url} style={{borderRadius: '50%'}} width="40" height="40" alt="avatar" />
            </div>
        </nav>
    )
}

export default Navbar