var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from "react";
import Drawer from "@mui/material/Drawer";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { useAppDispatch, useAppSelector } from "../../reducer/store";
import { formatRupiah } from "../../utils/function/formatRupiah";
import { setClose } from "../../reducer/features/DataSlice";
import handleParamUrl from "../../utils/function/handleParamUrl";
import fetchAlokasi from "../../reducer/fetch/alokasi";
import { setAlokasi } from "../../reducer/features/AlokasiSlice";
var DrawerNavigate = function () {
    var dispatch = useAppDispatch();
    var alokasi = useAppSelector(function (state) { return state.Alokasi; });
    var data = useAppSelector(function (state) { return state.data; });
    var isOpen = data.open;
    var detail = useAppSelector(function (state) { return state.currCube.detail; });
    var level = alokasi.level;
    var param = data.data;
    function onClose() {
        dispatch(setClose());
    }
    function GetParamFromSlice(level) {
        switch (level) {
            case "Visi":
                return param.misi;
            case "Misi":
                return param.tujuan;
            case "Tujuan":
                return param.fokus;
            case "Fokus":
                return param.komponen;
            case "Komponen":
                return param.sastra;
            case "Sastra":
                return param.program;
            case "Program":
                return param.kegiatan;
            case "Kegiatan":
                return param.indikator;
            case "Indikator":
                return param.unit_terkait;
        }
    }
    function setNextCube() {
        return __awaiter(this, void 0, void 0, function () {
            var paramUrl, url, rawData, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        paramUrl = GetParamFromSlice(level);
                        url = handleParamUrl(level, paramUrl);
                        return [4 /*yield*/, fetchAlokasi(url)];
                    case 1:
                        rawData = _a.sent();
                        payload = { level: level, data: rawData, step: "in" };
                        dispatch(setAlokasi(payload));
                        dispatch(setClose());
                        return [2 /*return*/];
                }
            });
        });
    }
    return (React.createElement(Grid, { container: true, 
        // justifyContent="flex-start"
        alignItems: "center", sx: { pointerEvents: "all" } },
        React.createElement(Drawer, { PaperProps: {
                style: {
                    marginInline: "25vw",
                    borderStartEndRadius: 30,
                    borderStartStartRadius: 30,
                    padding: 24,
                    minHeight: "80vh",
                    position: "absolute",
                },
                // style: { width: "30vw" },
            }, anchor: "bottom", 
            // role="presentation"
            open: isOpen, onClose: onClose },
            React.createElement(Typography, { variant: "h2", sx: {
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    fontStyle: "italic",
                    textAlign: "center",
                    marginBottom: 4,
                } }, detail.name),
            React.createElement(List, { style: { padding: 12, marginBlock: 4 } },
                React.createElement(Grid, { container: true, spacing: 2 },
                    React.createElement(Grid, { item: true, xs: 3 },
                        React.createElement(ListItemText, { primary: "Total Alokasi" })),
                    React.createElement(Grid, { item: true, xs: 1 },
                        React.createElement(ListItemText, { primary: ":" })),
                    React.createElement(Grid, { item: true, xs: 7 },
                        React.createElement(ListItemText, { primary: formatRupiah(detail.alokasi) })),
                    React.createElement(Grid, { item: true, xs: 3 },
                        React.createElement(ListItemText, { primary: "Total Realisasi" })),
                    React.createElement(Grid, { item: true, xs: 1 },
                        React.createElement(ListItemText, { primary: ":" })),
                    React.createElement(Grid, { item: true, xs: 7 },
                        React.createElement(ListItemText, { primary: formatRupiah(detail.realisasi) })),
                    React.createElement(Grid, { item: true, xs: 3 },
                        React.createElement(ListItemText, { primary: "Persentasi" })),
                    React.createElement(Grid, { item: true, xs: 1 },
                        React.createElement(ListItemText, { primary: ":" })),
                    React.createElement(Grid, { item: true, xs: 7 },
                        React.createElement(ListItemText, { primary: detail.persen.toFixed(2) + "%" })),
                    React.createElement(Grid, { item: true, xs: 3 },
                        React.createElement(ListItemText, { primary: "Sisa Alokasi" })),
                    React.createElement(Grid, { item: true, xs: 1 },
                        React.createElement(ListItemText, { primary: ":" })),
                    React.createElement(Grid, { item: true, xs: 7 },
                        React.createElement(ListItemText, { primary: formatRupiah(detail.sisa) })))),
            React.createElement(Button, { variant: "contained", sx: {
                    display: level === "Unit_terkait" ? "none" : "flex",
                    position: "absolute",
                    width: "100%",
                    height: 100,
                    pointerEvents: "all",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#0e131c",
                    opacity: 0.5,
                }, onClick: setNextCube }, "Open Detail"))));
};
export default DrawerNavigate;
//# sourceMappingURL=Drawer.js.map