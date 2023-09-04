var _a;
import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    open: false,
    currentData: {
        kode_tahun: 0,
        kode_id1: 0,
        kode_id2: 0,
    },
    data: {
        visi: { kode_tahun: 0 },
        misi: { kode_tahun: 0, kode_visi: 0 },
        tujuan: { kode_tahun: 0, kode_misi: 0 },
        fokus: { kode_tahun: 0, kode_tujuan: 0 },
        komponen: { kode_tahun: 0, kode_fokus: 0, kode_tujuan: 0 },
        sastra: { kode_tahun: 0, kode_komponen_rpjp_sub: "0" },
        program: { kode_tahun: 0, kode_sastra_rpjp: "0" },
        kegiatan: { kode_tahun: 0, kode_program_rsb: "0" },
        indikator: { kode_tahun: 0, kode_kegiatan_rsb: "0" },
        unit_terkait: { kode_tahun: 0, kode_kegiatan_ut_detail: 0 },
    },
};
export var DataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        setCurrentData: function (state, action) {
            var param = action.payload;
            state.currentData.kode_tahun = param.kode_tahun;
            state.currentData.kode_id1 = param.kode_id1;
            state.currentData.kode_id2 = param.kode_id2;
        },
        setNextData: function (state, action) {
            var nextLevel = action.payload.nextLevel;
            var param = action.payload.param;
            switch (nextLevel) {
                case "Visi":
                    state.data.visi.kode_tahun = param.kode_tahun;
                    break;
                case "Misi":
                    state.data.misi.kode_tahun = param.kode_tahun;
                    state.data.misi.kode_visi = param.kode_id1;
                    break;
                case "Tujuan":
                    state.data.tujuan.kode_tahun = param.kode_tahun;
                    state.data.tujuan.kode_misi = param.kode_id1;
                    break;
                case "Fokus":
                    state.data.fokus.kode_tahun = param.kode_tahun;
                    state.data.fokus.kode_tujuan = param.kode_id1;
                    break;
                case "Komponen":
                    state.data.komponen.kode_tahun = param.kode_tahun;
                    state.data.komponen.kode_tujuan = param.kode_id1;
                    state.data.komponen.kode_fokus = param.kode_id2;
                    break;
                case "Sastra":
                    state.data.sastra.kode_tahun = param.kode_tahun;
                    state.data.sastra.kode_komponen_rpjp_sub = param.kode_id1;
                    break;
                case "Program":
                    state.data.program.kode_tahun = param.kode_tahun;
                    state.data.program.kode_sastra_rpjp = param.kode_id1;
                    break;
                case "Kegiatan":
                    state.data.kegiatan.kode_tahun = param.kode_tahun;
                    state.data.kegiatan.kode_program_rsb = param.kode_id1;
                    break;
                case "Indikator":
                    state.data.indikator.kode_tahun = param.kode_tahun;
                    state.data.indikator.kode_kegiatan_rsb = param.kode_id1;
                    break;
                case "Unit_terkait":
                    state.data.unit_terkait.kode_tahun = param.kode_tahun;
                    state.data.unit_terkait.kode_kegiatan_ut_detail =
                        param.kode_id1;
                    break;
            }
        },
        setOpen: function (state) {
            state.open = true;
        },
        setClose: function (state) {
            state.open = false;
        },
    },
});
export default DataSlice.reducer;
export var setCurrentData = (_a = DataSlice.actions, _a.setCurrentData), setNextData = _a.setNextData, setOpen = _a.setOpen, setClose = _a.setClose;
//# sourceMappingURL=DataSlice.js.map