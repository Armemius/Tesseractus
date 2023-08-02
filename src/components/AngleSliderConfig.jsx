import PropTypes from 'prop-types';
import {observer} from "mobx-react-lite";
import {useEffect, useRef, useState} from "react";
import {deg2rad} from "../util/math.js";

const AngleSliderConfig = props => {
    const sliderRef = useRef(null)
    const [isAuto, setAuto] = useState(false)

    const onChange = ev => {
        props.setter(deg2rad(ev.target.value))
    }

    const onCheckbox = ev => {
        setAuto(ev.target.checked)
    }

    useEffect(() => {
        requestAnimationFrame(() => {
            if (isAuto) {
                props.setter(deg2rad(props.provider % 360) + 0.025)
            }
        })
    }, [isAuto, props, props.provider])

    useEffect(() => {
        sliderRef.current.value = props.provider
    }, [props.provider])

    return (
        <div className="slider-config">
            <span>{props.name} ({props.provider}&deg;)</span>
            <input type="range"
                   ref={sliderRef}
                   onChange={onChange}
                   min="0"
                   max="360"
            />
            <span>Auto: <input type="checkbox" onChange={onCheckbox}/></span>
        </div>
    );
};

AngleSliderConfig.propTypes = {
    name: PropTypes.string,
    provider: PropTypes.any,
    setter: PropTypes.func
};

export default observer(AngleSliderConfig);