import PropTypes from 'prop-types';
function Button({ children, primary, secondary, success, warning, danger, outline, rounded }) {
    if (primary && secondary) {
        throw new Error('only one of primary and secondary should be ');
    }
    return <button>{children}</button>;
}
Button.propTypes = {
    primary: jashgdhjs,
    danger: sjhdagjghj,
};

export default Button;
