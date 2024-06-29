// import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useLocation } from 'react-router-dom'

const DashFooter = () => {
// MARK: - DashFooter
    const navagate = useNavigate()
    const { pathname } = useLocation()

    const onGoHomeClicked = () => { navagate('/dash') }

// eslint-disable-next-line
    let goHomeButton = null
    if(pathname !== '/dash'){
        goHomeButton = (
            <button 
                className="dash-footer__button icon-button"
                title="Home"
                onClick={onGoHomeClicked}
            >
                <FontAwesomeIcon icon={faHouse} />
            </button>
        )
    }
// MARK: - Page
  return (
    <>
        <footer className="dash-footer">
            {goHomeButton}
            <div className="text">
                <i>Current User : Luke</i> 
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <i>Status : OnLine</i>
            </div>
        </footer>
    </>
  )
}

export default DashFooter