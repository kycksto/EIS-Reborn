import { useEffect } from "react";
import { Vector3 } from "@babylonjs/core";
import { useAssetManager } from "react-babylonjs";
import "@babylonjs/loaders/glTF";
export var ImportModel = function (props) {
    var assetManagerResult = useAssetManager(props.model);
    useEffect(function () {
        var EdgeBox = assetManagerResult.taskNameMap["edgeBox"];
        EdgeBox.loadedMeshes[0].position = props.position;
        EdgeBox.loadedMeshes[1].scaling = new Vector3(0.5, 0.5, 0.5);
    });
    return null;
};
//# sourceMappingURL=ImportModel.js.map