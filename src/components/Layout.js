import { Outlet } from 'react-router-dom'

// MARK: - 渲染插座的子项--公共部分
const Layout = () => {
    // 只要写了<Outlet />， 就会渲染当前路由所对应的页面
    return <Outlet />
}
export default Layout