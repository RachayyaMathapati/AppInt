import React, { Component } from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './Dashboard.css'

export class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

            user: [{
                "id": 1,
                "name": "test1",
                "age": "11",
                "gender": "male",
                "email": "test1@gmail.com",
                "phoneNo": "9415346313"
            },
            {
                "id": 2,
                "name": "test2",
                "age": "12",
                "gender": "male",
                "email": "test2@gmail.com",
                "phoneNo": "9415346314"
            },
            {
                "id": 3,
                "name": "test3",
                "age": "13",
                "gender": "male",
                "email": "test3@gmail.com",
                "phoneNo": "9415346315"
            },
            {
                "id": 4,
                "name": "test4",
                "age": "14",
                "gender": "male",
                "email": "test4@gmail.com",
                "phoneNo": "9415346316"
            },
            {
                "id": 5,
                "name": "test5",
                "age": "15",
                "gender": "male",
                "email": "test5@gmail.com",
                "phoneNo": "9415346317"
            },
            {
                "id": 6,
                "name": "test6",
                "age": "16",
                "gender": "male",
                "email": "test6@gmail.com",
                "phoneNo": "9415346318"



            }]
        }
    }

    render() {
        // const classes = useStyles();
        return (
            <React.Fragment>
                <div className="MainDashborad">
                <header>
          <h1>Dashboard</h1>
        </header>
                <TableContainer>
                        <table arial-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Id</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Age</TableCell>
                                    <TableCell align="right">Gender</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">PhoneNo</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.user.map((userdeatils) => (
                                        <TableRow key={userdeatils.id}>
                                            <TableCell align="right">
                                                {userdeatils.id}
                                            </TableCell>
                                            <TableCell align="right">
                                                {userdeatils.name}
                                            </TableCell>
                                            <TableCell align="right">
                                                {userdeatils.age}
                                            </TableCell>
                                            <TableCell align="right">
                                                {userdeatils.gender}
                                            </TableCell>
                                            <TableCell align="right">
                                                {userdeatils.email}
                                            </TableCell>
                                            <TableCell align="right">
                                                {userdeatils.phoneNo}
                                            </TableCell>
                                        </TableRow>

                                    ))

                                }
                            </TableBody>

                        </table>

                    </TableContainer>
                    </div>
            </React.Fragment>
        )
    }
}

export default Dashboard
