import OptionGroup from "./OptionGroup.jsx";
import SliderConfig from "./AngleSliderConfig.jsx";
import {useContext, useState} from "react";
import {ConfigStoreContext} from "../main.jsx";
import {observer} from "mobx-react-lite";
import {rad2deg} from "../util/math.js";
import CheckboxConfig from "./CheckboxConfig.jsx";

const ConfigMenu = () => {
    const config = useContext(ConfigStoreContext)

    const [isHidden, setHidden] = useState(false)

    return (
        <section className={`config-menu ${isHidden ? "hidden" : "active"}`}
                 onMouseEnter={() => setHidden(false)}
        >
            <div className="closer" onClick={() => setHidden(true)}>
                Hide menu
            </div>
            <OptionGroup name="Angles">
                <SliderConfig name="XZ" provider={rad2deg(config.angleXZ)} setter={val => config.setAngleXZ(val)}/>
                <SliderConfig name="XY" provider={rad2deg(config.angleXY)} setter={val => config.setAngleXY(val)}/>
                <SliderConfig name="YZ" provider={rad2deg(config.angleYZ)} setter={val => config.setAngleYZ(val)}/>
                <SliderConfig name="XW" provider={rad2deg(config.angleXW)} setter={val => config.setAngleXW(val)}/>
                <SliderConfig name="YW" provider={rad2deg(config.angleYW)} setter={val => config.setAngleYW(val)}/>
                <SliderConfig name="ZW" provider={rad2deg(config.angleZW)} setter={val => config.setAngleZW(val)}/>
            </OptionGroup>
            <OptionGroup name="Render options">
                <CheckboxConfig name="Hide edges" setter={val => config.setHideEdges(val)}/>
                <CheckboxConfig name="Hide faces" setter={val => config.setHideFaces(val)}/>
                <CheckboxConfig name="Polycube" setter={val => config.setUseTexture(val)}/>
            </OptionGroup>
        </section>
    );
};

export default observer(ConfigMenu);