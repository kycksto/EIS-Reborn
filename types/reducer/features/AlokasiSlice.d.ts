import { PayloadAction } from "@reduxjs/toolkit";
import { IVisi, IMisi, ITujuan, IFokus, IKomponen, ISastra, IProgram, IKegiatan, IIndikator, IUnit_terkait, AlokasiType } from "..";
export interface IinitAlokasi {
    level: AlokasiType;
    visi: IVisi[];
    misi: IMisi[];
    tujuan: ITujuan[];
    fokus: IFokus[];
    komponen: IKomponen[];
    sastra: ISastra[];
    program: IProgram[];
    kegiatan: IKegiatan[];
    indikator: IIndikator[];
    unit_terkait: IUnit_terkait[];
    data: [];
}
export declare const AlokasiSlice: import("@reduxjs/toolkit").Slice<IinitAlokasi, {
    setAlokasi: (state: import("immer/dist/internal").WritableDraft<IinitAlokasi>, action: {
        payload: {
            level: AlokasiType;
            data: [];
            step: string;
        };
        type: string;
    }) => void;
}, "alokasi">;
declare const _default: import("redux").Reducer<IinitAlokasi, import("redux").AnyAction>;
export default _default;
export declare const setAlokasi: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    level: AlokasiType;
    data: [];
    step: string;
}, "alokasi/setAlokasi">;
