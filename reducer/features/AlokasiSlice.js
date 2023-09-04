import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    level: "Base",
    visi: [],
    misi: [],
    tujuan: [],
    fokus: [],
    komponen: [],
    sastra: [],
    program: [],
    kegiatan: [],
    indikator: [],
    unit_terkait: [],
    data: [],
};
export var AlokasiSlice = createSlice({
    name: "alokasi",
    initialState: initialState,
    reducers: {
        setAlokasi: function (state, action) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            var level = action.payload.level;
            var data = action.payload.data;
            var step = action.payload.step;
            switch (level) {
                case "Base":
                    (_a = state.visi).push.apply(_a, data);
                    state.level = "Visi";
                    break;
                case "Visi":
                    (_b = state.misi).push.apply(_b, data);
                    state.level = step === "in" ? "Misi" : "Base";
                    break;
                case "Misi":
                    (_c = state.tujuan).push.apply(_c, data);
                    state.level = step === "in" ? "Tujuan" : "Visi";
                    break;
                case "Tujuan":
                    (_d = state.fokus).push.apply(_d, data);
                    state.level = step === "in" ? "Fokus" : "Misi";
                    break;
                case "Fokus":
                    (_e = state.komponen).push.apply(_e, data);
                    state.level = step === "in" ? "Komponen" : "Tujuan";
                    break;
                case "Komponen":
                    (_f = state.sastra).push.apply(_f, data);
                    state.level = step === "in" ? "Sastra" : "Fokus";
                    break;
                case "Sastra":
                    (_g = state.program).push.apply(_g, data);
                    state.level = step === "in" ? "Program" : "Komponen";
                    break;
                case "Program":
                    (_h = state.kegiatan).push.apply(_h, data);
                    state.level = step === "in" ? "Kegiatan" : "Sastra";
                    break;
                case "Kegiatan":
                    (_j = state.indikator).push.apply(_j, data);
                    state.level = step === "in" ? "Indikator" : "Program";
                    break;
                case "Indikator":
                    (_k = state.unit_terkait).push.apply(_k, data);
                    state.level = step === "in" ? "Unit_terkait" : "Kegiatan";
                    break;
                case "Unit_terkait":
                    (_l = state.unit_terkait).push.apply(_l, data);
                    state.level = step === "in" ? "Base" : "Indikator";
                    break;
            }
            state.data.length = 0;
            (_m = state.data).push.apply(_m, data);
        },
    },
});
export default AlokasiSlice.reducer;
export var setAlokasi = AlokasiSlice.actions.setAlokasi;
//# sourceMappingURL=AlokasiSlice.js.map