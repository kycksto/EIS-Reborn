import { Vector3 } from "@babylonjs/core";
import React, { useRef } from "react";
import getRubiks from "../utils/component/getRubiks";
import { Provider } from "react-redux";
import { store, useAppSelector } from "../reducer/store";
import handleTransformData from "../utils/function/handleTranformData";
function WithAnimation() {
    var level = useAppSelector(function (state) { return state.Alokasi.level; });
    var currCube = useAppSelector(function (state) { return state.Alokasi; });
    var data = currCube.data;
    var groupRef = useRef(null);
    var position = Vector3.Zero();
    // console.time("Timing");
    var onCreated = function () {
        // console.timeLog("Timing", "onCreated");
    };
    var dataDetail = handleTransformData(level, data);
    var kubus = getRubiks(dataDetail, level);
    return (React.createElement("transformNode", { name: "group", ref: groupRef, position: position, onCreated: onCreated }, kubus));
}
export var Rubik = function () {
    return (React.createElement(Provider, { store: store },
        React.createElement(WithAnimation, null)));
};
export default Rubik;
//# sourceMappingURL=Rubik.js.map