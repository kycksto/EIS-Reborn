import { PayloadAction } from "@reduxjs/toolkit";
import { ICurrentCubeProps } from "../..";
export interface ICurrentCube {
    title: string;
    detail: ICurrentCubeProps;
}
export declare const CurrentCubeSlice: import("@reduxjs/toolkit").Slice<ICurrentCube, {
    previewTitle: (state: import("immer/dist/internal").WritableDraft<ICurrentCube>, action: PayloadAction<string>) => void;
    setCurrentDetail: (state: import("immer/dist/internal").WritableDraft<ICurrentCube>, action: PayloadAction<ICurrentCubeProps>) => void;
}, "currentCube">;
declare const _default: import("redux").Reducer<ICurrentCube, import("redux").AnyAction>;
export default _default;
export declare const previewTitle: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "currentCube/previewTitle">, setCurrentDetail: import("@reduxjs/toolkit").ActionCreatorWithPayload<ICurrentCubeProps, "currentCube/setCurrentDetail">;
