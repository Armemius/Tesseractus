import {makeAutoObservable} from "mobx"

class ConfigStore {
    _angleXY = 0
    _angleXZ = 5.86431
    _angleXW = 0
    _angleYZ = 0.15708
    _angleYW = 0
    _angleZW = 0

    _isPerspective = true
    _hideEdges = false
    _hideFaces = false
    _useTexture = false

    constructor() {
        makeAutoObservable(this)
    }

    get angleXY() {
        return this._angleXY;
    }

    setAngleXY(value) {
        this._angleXY = value;
    }

    get angleXZ() {
        return this._angleXZ;
    }

    setAngleXZ(value) {
        this._angleXZ = value;
    }

    get angleXW() {
        return this._angleXW;
    }

    setAngleXW(value) {
        this._angleXW = value;
    }

    get angleYZ() {
        return this._angleYZ;
    }

    setAngleYZ(value) {
        this._angleYZ = value;
    }

    get angleYW() {
        return this._angleYW;
    }

    setAngleYW(value) {
        this._angleYW = value;
    }

    get angleZW() {
        return this._angleZW;
    }

    setAngleZW(value) {
        this._angleZW = value;
    }

    get isPerspective() {
        return this._isPerspective;
    }

    setIsPerspective(value) {
        this._isPerspective = value;
    }

    get hideEdges() {
        return this._hideEdges;
    }

    setHideEdges(value) {
        this._hideEdges = value;
    }

    get hideFaces() {
        return this._hideFaces;
    }

    setHideFaces(value) {
        this._hideFaces = value;
    }

    get useTexture() {
        return this._useTexture;
    }

    setUseTexture(value) {
        this._useTexture = value;
    }
}

export default new ConfigStore()