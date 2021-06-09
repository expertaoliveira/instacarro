import instacarro from '../assets/logo.png';
import phone from '../assets/phone.svg';
import caret from '../assets/caret.svg';
import user from '../assets/user.svg';
import './menu.css';

export default function Menu() {
  return (
    <header>
      <div className="container">
        <div className="info">
          <div className="logo">
            <img src={instacarro} alt="Logo Instacarro" />
          </div>
          <div className="phone">
            <img src={phone} alt="Instacarro phone" />
            <span>(11) 3569-3465</span>
          </div>
        </div>
        <div className="menu">
          <nav>
            <div className="user">
              <img src={user} alt="Logo Instacarro" />
              <span>User Test</span>
            </div>
            <div className="caret">
              <img src={caret} alt="Logo Instacarro" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
