import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersData, deleteUsersData } from "../redux/index";
import { NavLink } from "react-router-dom";
import Spinner from "../components/Spinner";

const ListUser = () => {
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersData());
    }, []);

    if(userData.loading){
        return <Spinner />
    }

    return (
        <div className="container">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">First</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Martial Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.data.length > 0 ? (
                        userData.data.map((u) => (
                            <tr key={u.id}>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                                <td>{u.gender}</td>
                                <td>{u.martialStatus}</td>
                                <td>
                                    <span style={{ marginLeft: "5px" }}>
                                        <NavLink
                                            type="button"
                                            className="btn btn-info"
                                            to={`/editUser/${u.id}`}
                                        >
                                            Edit
                                        </NavLink>
                                    </span>
                                    <span style={{ marginLeft: "5px" }}>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={(e) =>
                                                dispatch(deleteUsersData(u.id))
                                            }
                                        >
                                            Delete
                                        </button>
                                    </span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td scope="row" colSpan="4">
                                No Records Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default ListUser;
