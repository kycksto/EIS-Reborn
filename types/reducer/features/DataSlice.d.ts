import { PayloadAction } from "@reduxjs/toolkit";
import { AlokasiType, IParamFokus, IParamIndikator, IParamKegiatan, IParamKomponen, IParamMisi, IParamProgram, IParamProps, IParamSastra, IParamTujuan, IParamUnitTerkait, IParamVisi } from "..";
export interface IDataSlice {
    open: boolean;
    currentData: IParamProps;
    data: {
        visi: IParamVisi;
        misi: IParamMisi;
        tujuan: IParamTujuan;
        fokus: IParamFokus;
        komponen: IParamKomponen;
        sastra: IParamSastra;
        program: IParamProgram;
        kegiatan: IParamKegiatan;
        indikator: IParamIndikator;
        unit_terkait: IParamUnitTerkait;
    };
}
export declare const DataSlice: import("@reduxjs/toolkit").Slice<IDataSlice, {
    setCurrentData: (state: import("immer/dist/internal").WritableDraft<IDataSlice>, action: PayloadAction<IParamProps>) => void;
    setNextData: (state: import("immer/dist/internal").WritableDraft<IDataSlice>, action: {
        payload: {
            nextLevel: AlokasiType;
            param: IParamProps;
        };
        type: string;
    }) => void;
    setOpen: (state: import("immer/dist/internal").WritableDraft<IDataSlice>) => void;
    setClose: (state: import("immer/dist/internal").WritableDraft<IDataSlice>) => void;
}, "data">;
declare const _default: import("redux").Reducer<IDataSlice, import("redux").AnyAction>;
export default _default;
export declare const setCurrentData: import("@reduxjs/toolkit").ActionCreatorWithPayload<IParamProps, "data/setCurrentData">, setNextData: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    nextLevel: AlokasiType;
    param: IParamProps;
}, "data/setNextData">, setOpen: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"data/setOpen">, setClose: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"data/setClose">;
