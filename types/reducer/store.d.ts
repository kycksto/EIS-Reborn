import { TypedUseSelectorHook } from "react-redux";
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<{
    currCube: import("./features/CurrentCube").ICurrentCube;
    Alokasi: import("./features/AlokasiSlice").IinitAlokasi;
    data: import("./features/DataSlice").IDataSlice;
}, import("redux").AnyAction, [import("@reduxjs/toolkit").ThunkMiddleware<{
    currCube: import("./features/CurrentCube").ICurrentCube;
    Alokasi: import("./features/AlokasiSlice").IinitAlokasi;
    data: import("./features/DataSlice").IDataSlice;
}, import("redux").AnyAction, undefined>]>;
export type RootState = ReturnType<typeof store.getState>;
export declare const useAppDispatch: () => typeof store.dispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
