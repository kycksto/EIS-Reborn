import { Color3, Vector3 } from "@babylonjs/core";
import { useEffect, useRef } from "react";
import { useClick, useHover, useScene } from "react-babylonjs";
import React from "react";
import { useAppDispatch } from "../../reducer/store";
import { previewTitle, setCurrentDetail, } from "../../reducer/features/CurrentCube";
import { hoverAnim, idleAnim } from "../../utils/helper/animationHelper";
import { setNextData, setOpen } from "../../reducer/features/DataSlice";
import handleLevelStep from "../../utils/function/handleLevelStep";
var SmallBox = function (props) {
    var scene = useScene();
    var dispatch = useAppDispatch();
    var level = props.id;
    var boxRef = useRef(null);
    var random = Math.random() * 2;
    function setPreview() {
        var name = props.name;
        dispatch(previewTitle(name));
    }
    function setCube(currentLevel) {
        var nextLevel = handleLevelStep(currentLevel, "in");
        var paramUrl = {
            nextLevel: nextLevel,
            param: {
                kode_tahun: props.detail.kode_tahun,
                kode_id1: props.detail.kode_id1,
                kode_id2: props.detail.kode_id2,
            },
        };
        dispatch(setNextData(paramUrl));
        dispatch(setCurrentDetail(props.detail));
        dispatch(setOpen());
    }
    useHover(function () {
        hoverAnim(scene, boxRef.current, "in");
        setPreview();
    }, function () {
        hoverAnim(scene, boxRef.current, "out");
    }, boxRef);
    useClick(function () { return setCube(level); }, boxRef);
    useEffect(function () {
        if (boxRef.current !== null && scene) {
            idleAnim(scene, boxRef.current, random);
            // const onBeforeRender = () => {
            //   const deltaTimeInMillis = scene.getEngine().getDeltaTime();
            //   boxRef.current!.rotation.x += random * (deltaTimeInMillis / 1000);
            //   boxRef.current!.rotation.y += random * (deltaTimeInMillis / 1000);
            //   boxRef.current!.rotation.z += random * (deltaTimeInMillis / 1000);
            // };
            // scene.registerBeforeRender(onBeforeRender);
            // return () => {
            //   scene.unregisterBeforeRender(onBeforeRender);
            // };
        }
    }, [boxRef.current]);
    return (React.createElement("box", { name: props.name, key: props.id, id: props.id, ref: boxRef, size: 0.5, position: props.position, scaling: new Vector3(1, 1, 1) },
        React.createElement("standardMaterial", { name: "".concat(props.name, "-mat"), emissiveColor: Color3.White() })));
};
export default SmallBox;
//# sourceMappingURL=SmallBox.js.map