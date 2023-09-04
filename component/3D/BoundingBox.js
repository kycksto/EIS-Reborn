var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useRef, useState } from "react";
import { Color3, Color4 } from "@babylonjs/core";
import { useScene } from "react-babylonjs";
import { backToDefaultPosition } from "../../utils/helper/animationHelper";
var BoundingBox = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var scene = useScene();
    var boundingRef = useRef(null);
    var _b = useState(), defaultPosition = _b[0], setDefaultPosition = _b[1];
    return (React.createElement("box", { onCreated: function (box) { return box.enableEdgesRendering(); }, name: props.name, key: props.id, id: props.id, ref: boundingRef, position: props.position, size: 0.9, isPickable: false, 
        // isVisible={false}
        edgesWidth: 2, edgesColor: new Color4(0.2, 0.4, 1.5, 0.5) },
        React.createElement("standardMaterial", { name: "BoundingBox-".concat(props.id), alpha: 0.2, emissiveColor: new Color3(0.2, 0.4, 1.5), specularColor: Color3.Black() }),
        React.createElement("pointerDragBehavior", { useObjectOrientationForDragging: true, onDragStartObservable: function () { return setDefaultPosition(props.position); }, onDragEndObservable: function (e) {
                backToDefaultPosition(scene, defaultPosition, e.dragPlanePoint, boundingRef.current);
            } }),
        children));
};
export default BoundingBox;
//# sourceMappingURL=BoundingBox.js.map