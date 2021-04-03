import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container:{
    padding: '30px',
  width: '400px',
    margin:{
  left:'auto',
  top: '40px',
  right: 'auto', 
  bottom: '40px'
},
    backgroundColor: '#ece6f2 '
  }

})

const Container = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.container}>{children}</div>;
}

Container.propTypes = {
    children: PropTypes.node,
};

export default Container