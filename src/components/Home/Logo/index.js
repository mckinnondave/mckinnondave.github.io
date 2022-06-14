import './index.scss';
import LogoD from '../../../assets/images/logo-d.png'


const Logo = () => {
  return (
    <div className='logo-container'>
      <img className='solid-logo' src={LogoD} alt="logo"/>
    </div>
  )
}

export default Logo