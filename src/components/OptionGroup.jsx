import PropTypes from 'prop-types';

const OptionGroup = props => {
    return (
        <div className="config-option-group">
            <div className="config-menu-header">{props.name}</div>
            {props.children}
        </div>
    );
};

OptionGroup.propTypes = {
    name: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.element)
};

export default OptionGroup;