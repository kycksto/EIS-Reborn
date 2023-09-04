import { Animation } from "@babylonjs/core";
export function dirAnimation(from, to, firstframe, lastframe) {
    if (firstframe === void 0) { firstframe = 0; }
    if (lastframe === void 0) { lastframe = 30; }
    var keyFrames = [];
    keyFrames.push({
        frame: firstframe,
        value: from,
    });
    keyFrames.push({
        frame: lastframe,
        value: to,
    });
    return keyFrames;
}
export function dirAnimationEasing(from, to, firstframe, lastframe) {
    if (firstframe === void 0) { firstframe = 0; }
    if (lastframe === void 0) { lastframe = 30; }
    var keyFrames = [];
    var frameEase = lastframe / 4;
    var valueEase = to / 5;
    keyFrames.push({
        frame: firstframe,
        value: from,
    });
    keyFrames.push({
        frame: lastframe - frameEase,
        value: from + valueEase,
    });
    keyFrames.push({
        frame: lastframe,
        value: to,
    });
    return keyFrames;
}
export function dirAnimationLoop(from, to, firstframe, lastframe) {
    if (firstframe === void 0) { firstframe = 0; }
    if (lastframe === void 0) { lastframe = 30; }
    var keyFrames = [];
    keyFrames.push({
        frame: firstframe,
        value: from,
    });
    keyFrames.push({
        frame: lastframe / 2,
        value: to,
    });
    keyFrames.push({
        frame: lastframe,
        value: from,
    });
    return keyFrames;
}
export function idleAnim(scene, mesh, random) {
    var xrotation = new Animation("xrotate", "rotation.x", 10, 0);
    var yrotation = new Animation("yrotate", "rotation.y", 10, 0);
    var zrotation = new Animation("zrotate", "rotation.z", 10, 0);
    var rotationframes = dirAnimationLoop(0, random, 0, 120);
    xrotation.setKeys(rotationframes);
    yrotation.setKeys(rotationframes);
    zrotation.setKeys(rotationframes);
    var idle = [xrotation, yrotation, zrotation];
    scene.beginDirectAnimation(mesh, idle, 0, 120, true);
}
export function backToDefaultPosition(scene, defaultPosition, currentPosition, mesh) {
    var xSlide = new Animation("xSlide", "position.x", 30, 0);
    var ySlide = new Animation("ySlide", "position.y", 30, 0);
    var zSlide = new Animation("zSlide", "position.z", 30, 0);
    var xKeyframes = dirAnimation(currentPosition.x, defaultPosition.x);
    var yKeyframes = dirAnimation(currentPosition.y, defaultPosition.y);
    var zKeyframes = dirAnimation(currentPosition.z, defaultPosition.z);
    xSlide.setKeys(xKeyframes);
    ySlide.setKeys(yKeyframes);
    zSlide.setKeys(zKeyframes);
    var slide = [xSlide, ySlide, zSlide];
    scene.beginDirectAnimation(mesh, slide, 0, 30);
}
export function hoverAnim(scene, mesh, tipe) {
    var xscaling = new Animation("xscale", "scaling.x", 30, 0);
    var yscaling = new Animation("yscale", "scaling.y", 30, 0);
    var zscaling = new Animation("zscale", "scaling.z", 30, 0);
    var isFrom = tipe === "in" ? 1 : 1.5;
    var isTo = tipe === "in" ? 1.5 : 1;
    var scalingframes = dirAnimation(isFrom, isTo, 0, 3);
    xscaling.setKeys(scalingframes);
    yscaling.setKeys(scalingframes);
    zscaling.setKeys(scalingframes);
    var hover = [xscaling, yscaling, zscaling];
    scene.beginDirectAnimation(mesh, hover, 0, 30);
}
export function entryAnim(scene, mesh, id, start) {
    var delay = id * 30;
    var totalLastFrame = delay + 240;
    var ytranslate = new Animation("ytranslate", "position.y", totalLastFrame, 0);
    var scalingframes = dirAnimationEasing(0, 6, delay, totalLastFrame * 0.5);
    ytranslate.setKeys(scalingframes);
    var entry = [ytranslate];
    scene.beginDirectAnimation(mesh, entry, 0, totalLastFrame * 0.5, false, 1, start);
}
//# sourceMappingURL=animationHelper.js.map