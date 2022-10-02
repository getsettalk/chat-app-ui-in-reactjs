import React from 'react'
import Box from './Box'
import UserList from './UserList'
import io from 'socket.io-client';

// const socket = io.connect('http://localhost:3000');
const Dash = () => {
    var uname ='';
        uname = prompt("Enter Your Name");
     if(uname =='' ){
        uname = prompt("Enter Your Name");
     } else if( uname === null){
          uname = prompt("Enter Your Name");
     }
    console.log(uname)
    
//    console.log(Alluser)
    return (

        <section className="message-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="chat-area delicate">
                            {/* <!-- chatlist --> */}
                            <div className="chatlist">
                                <div className="modal-dialog-scrollable">
                                    <div className="modal-content delicate">
                                        <div className="chat-header">
                                            <div className="msg-search">
                                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search" aria-label="search" />
                                                {/* <a className="add" href="#"><img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/add.svg" alt="add" /></a> */}
                                            </div>

                                            <ul className="nav nav-tabs delicate" id="myTab" role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <button className="nav-link active delicate" id="Open-tab" data-bs-toggle="tab" data-bs-target="#Open" type="button" role="tab" aria-controls="Open" aria-selected="true">Online</button>
                                                </li>
                                                {/* <!-- <li className="nav-item" role="presentation">
                                                        <button className="nav-link" id="Closed-tab" data-bs-toggle="tab" data-bs-target="#Closed" type="button" role="tab" aria-controls="Closed" aria-selected="false">Closed</button>
                                                    </li> --> */}
                                            </ul>
                                        </div>

                                        <div className="modal-body moonLit">
                                            {/* <!-- chat-list --> */}
                                            <UserList />
                                            {/* <!-- chat-list --> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- chatlist --> */}

                            {/* <!-- chatbox --> */}
                           <Box />
                        </div>
                        {/* <!-- chatbox --> */}

                    </div>
                </div>
            </div>
       
        </section >
  
  )
}

export default Dash