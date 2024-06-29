import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'

function App() {
  return (
    // FIXME: 路由入口
    // TODO:  路由入口
    // MARK: - 路由入口
    <Routes>
      {/* 使用Layout作为布局组件，渲染路由为 '/'的组件 ，只有public */}
      <Route path="/" element={<Layout />}>
        {/* // 表示在默认路由下显示 */}
        <Route index element={<Public />} />
        {/* 带有path的表示在指定路由下显示 */}
        <Route path="login" element={<Login />} />
        <Route path="dash" element={<DashLayout />}>

          <Route index element={<Welcome />} />

          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>

          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>

        </Route>{/* End Dash */}

      </Route>
    </Routes>
  );
}

export default App;
