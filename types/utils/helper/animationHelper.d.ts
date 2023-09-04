import { AbstractMesh, Scene, Vector3 } from "@babylonjs/core";
export declare function dirAnimation(from: number, to: number, firstframe?: number, lastframe?: number): {
    frame: number;
    value: number;
}[];
export declare function dirAnimationEasing(from: number, to: number, firstframe?: number, lastframe?: number): {
    frame: number;
    value: number;
}[];
export declare function dirAnimationLoop(from: number, to: number, firstframe?: number, lastframe?: number): {
    frame: number;
    value: number;
}[];
export declare function idleAnim(scene: Scene, mesh: AbstractMesh, random: number): void;
export declare function backToDefaultPosition(scene: Scene, defaultPosition: Vector3, currentPosition: Vector3, mesh: AbstractMesh): void;
export declare function hoverAnim(scene: Scene, mesh: AbstractMesh, tipe: string): void;
export declare function entryAnim(scene: Scene, mesh: AbstractMesh, id: number, start: () => void): void;
