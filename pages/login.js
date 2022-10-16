import React from 'react';

function Login(props) {
    return (
        <div>
            <h3> Page login</h3>
            <form>
                <input type={"text"} placeholder={"username"}/>
                <input type={"password"} placeholder={"password"}/>
            </form>

        </div>
    );
}

Login.getLayout= function PageLayout(page){
    return (
        <React.Fragment>
            {page}
        </React.Fragment>
    )
}

export default Login;