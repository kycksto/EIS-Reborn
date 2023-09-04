import React from "react";
import { Vector3 } from "@babylonjs/core";
import SmallBox from "../../component/3D/SmallBox";
import BoundingBox from "../../component/3D/BoundingBox";
function getRubiks(fokus, level) {
    var results = [];
    var val = fokus.length;
    var isMore = val - 27 < 1 ? 9 : val - 18;
    var count = Math.ceil(isMore / 9);
    var num = 0;
    for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= count; j++) {
            for (var k = -1; k <= 1; k++) {
                var detail = fokus[num];
                if (fokus[num]) {
                    results.push(React.createElement(BoundingBox, { level: level, detail: detail, name: detail.name, key: num, id: level, position: new Vector3(i, j, k) },
                        React.createElement(SmallBox, { detail: detail, name: detail.name, key: num, id: level })));
                }
                num++;
            }
        }
    }
    return results;
}
export default getRubiks;
//# sourceMappingURL=getRubiks.js.map