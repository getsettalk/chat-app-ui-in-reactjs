import React from 'react'

const MsgHead = () => {
    return (
        <>
            <div className="msg-head">
                <div className="row">
                    <div className="col-8">
                        <div className="d-flex align-items-center">
                            <span className="chat-icon"><img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/arroleftt.svg" alt="image title" /></span>
                            <div className="flex-shrink-0">
                                <img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" width="40px" alt="user img" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h3>Sujeet Sharma</h3>
                                <p>front end developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <ul className="moreoption">
                            <li className="navbar nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MsgHead