import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { CurrentCubeSlice } from "./features/CurrentCube";
import { AlokasiSlice } from "./features/AlokasiSlice";
import { DataSlice } from "./features/DataSlice";
export var store = configureStore({
    reducer: {
        currCube: CurrentCubeSlice.reducer,
        Alokasi: AlokasiSlice.reducer,
        data: DataSlice.reducer,
    },
});
export var useAppDispatch = useDispatch;
export var useAppSelector = useSelector;
//# sourceMappingURL=store.js.map