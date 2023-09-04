import React, { ReactNode } from "react";
import { Vector3 } from "@babylonjs/core";
import { ICurrentCubeProps } from "../..";
import { AlokasiType } from "../../reducer";
interface Props {
    level: AlokasiType;
    children: ReactNode;
    detail: ICurrentCubeProps;
    name: string;
    key: number;
    id: string;
    position: Vector3;
}
declare const BoundingBox: ({ children, ...props }: Props) => React.JSX.Element;
export default BoundingBox;
