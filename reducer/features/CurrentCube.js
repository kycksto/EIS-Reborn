var _a;
import { createSlice } from "@reduxjs/toolkit";
var initialState = {
    title: "-",
    detail: {
        name: "-",
        alokasi: 0,
        realisasi: 0,
        persen: 100,
        sisa: 0,
        kode_tahun: 0,
        kode_id1: 0,
        kode_id2: 0,
    },
};
export var CurrentCubeSlice = createSlice({
    name: "currentCube",
    initialState: initialState,
    reducers: {
        previewTitle: function (state, action) {
            state.title = action.payload;
        },
        setCurrentDetail: function (state, action) {
            var data = action.payload;
            state.detail.name = data.name;
            state.detail.alokasi = data.alokasi;
            state.detail.realisasi = data.realisasi;
            state.detail.persen = data.persen;
            state.detail.sisa = data.sisa;
        },
    },
});
export default CurrentCubeSlice.reducer;
export var previewTitle = (_a = CurrentCubeSlice.actions, _a.previewTitle), setCurrentDetail = _a.setCurrentDetail;
//# sourceMappingURL=CurrentCube.js.map