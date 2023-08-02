import {makeAutoObservable} from "mobx"

class ConfigStore {
    _rotateXY = false
    _rotateXZ = false
    _rotateXW = false
    _rotateYZ = false
    _rotateYW = false
    _rotateZW = false

    _angleXY = 0
    _angleXZ = 0
    _angleXW = 0
    _angleYZ = 0
    _angleYW = 0
    _angleZW = 0

    _isPerspective = true
    _hideAxis = false

    constructor() {
        makeAutoObservable(this)
    }

    get rotateXY() {
        return this._rotateXY;
    }

    setRotateXY(value) {
        this._rotateXY = value;
    }

    get rotateXZ() {
        return this._rotateXZ;
    }

    setRotateXZ(value) {
        this._rotateXZ = value;
    }

    get rotateXW() {
        return this._rotateXW;
    }

    setRotateXW(value) {
        this._rotateXW = value;
    }

    get rotateYZ() {
        return this._rotateYZ;
    }

    setRotateYZ(value) {
        this._rotateYZ = value;
    }

    get rotateYW() {
        return this._rotateYW;
    }

    setRotateYW(value) {
        this._rotateYW = value;
    }

    get rotateZW() {
        return this._rotateZW;
    }

    setRotateZW(value) {
        this._rotateZW = value;
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

    get hideAxis() {
        return this._hideAxis;
    }

    setHideAxis(value) {
        this._hideAxis = value;
    }
}

export default new ConfigStore()