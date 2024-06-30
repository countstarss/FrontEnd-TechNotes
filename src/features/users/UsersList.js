/*
TODO: 05:UsersList
TODO: UsersList是页面的主体文件
MARK: - 05:UsersList
*/

// TODO: 导入Hook

import { useGetUsersQuery } from "./usersApiSlice"
// MARK: - 导入User.jsx
import User from './User'


const UsersList = () => {

/*
FIXME: 03:在组件中使用 RTK Query Hook
*/
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery()

    let content

    if (isLoading) content = <p>Loading...</p>

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = users
        /*
        TODO: Table
        MARK: - Table
        */
        const tableContent = ids?.length
            /*
            TODO: 获取数据，导入User模板
            MARK: - 导入User模板
            */
            ? ids.map(userId => <User key={userId} userId={userId} />)
            : null

        content = (
            <table className="table table--users">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th user__username">Username</th>
                        <th scope="col" className="table__th user__roles">Roles</th>
                        <th scope="col" className="table__th user__edit">Edit</th>
                    </tr>
                </thead>
                {/*
                // MARK: - Table主体 
                */}
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}
export default UsersList