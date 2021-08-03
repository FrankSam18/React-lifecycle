import React, { Component } from 'react';

class UsersClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users :[],
        };
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json()).catch()
        .then((users) => {
            this.setState({
                users:users,
            });

        })
        .catch((err) => {
            console.log(err);

        });
    }

    render() {
        console.log(this.state);
        return (

            <div>
                <h2>My Users</h2>
                {this.state.users.map((user,idx) => (
                    <div key={idx}>
                        <h5>{user.name}</h5>
                        <h5>{user.email}</h5>
                        <h5>{user.username}</h5>
                        <hr />
                        </div>
                ))}
            </div>
        );
    }
}

export default UsersClass;
