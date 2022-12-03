import { Link } from 'react-router-dom';
import './linkbutton.styles.css';

const LinkButton = ({ color, path, text }) => {
  return (
    <Link
      to={path}
      className="link-button"
      style={{ border: `1px solid ${color}`, color: color }}
    >
      {text}
    </Link>
  );
};

export default LinkButton;
