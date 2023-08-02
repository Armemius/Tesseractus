import PropTypes from 'prop-types';

const CheckboxConfig = props => {
    const onCheckbox = ev => {
        props.setter(ev.target.checked)
    }

    return (
        <div className="checkbox-menu">
            <span>{props.name}</span>
            <input type="checkbox" onChange={onCheckbox}/>
        </div>
    );
};

CheckboxConfig.propTypes = {
    name: PropTypes.string,
    setter: PropTypes.func
};

export default CheckboxConfig;