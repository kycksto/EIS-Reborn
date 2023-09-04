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
import React, { useRef } from "react";
import "../index.css";
import { useAppDispatch, useAppSelector } from "../reducer/store";
import { Grid, Box, Typography, Button } from "@mui/material";
import Slide from "@mui/material/Slide";
import TemporaryDrawer from "../component/2D/Drawer";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { setClose, setOpen } from "../reducer/features/DataSlice";
import handleLevelStep from "../utils/function/handleLevelStep";
import handleParamUrl from "../utils/function/handleParamUrl";
import fetchAlokasi from "../reducer/fetch/alokasi";
import { setAlokasi } from "../reducer/features/AlokasiSlice";
var UID = function () {
    var dispatch = useAppDispatch();
    var previewBox = useRef(null);
    var currCube = useAppSelector(function (state) { return state.currCube; });
    var data = useAppSelector(function (state) { return state.data; });
    var alokasi = useAppSelector(function (state) { return state.Alokasi; });
    var preview = currCube.title;
    var level = alokasi.level;
    var isReady = alokasi.visi.length !== 0 ? true : false;
    var contentBg = "#0c1017";
    var param = data.data;
    function showDetail() {
        if (currCube.detail.name === "-")
            return;
        dispatch(setOpen());
    }
    function GetParamFromSlice(level) {
        switch (level) {
            case "Visi":
                return param.visi;
            case "Misi":
                return param.misi;
            case "Tujuan":
                return param.tujuan;
            case "Fokus":
                return param.fokus;
            case "Komponen":
                return param.komponen;
            case "Sastra":
                return param.sastra;
            case "Program":
                return param.program;
            case "Kegiatan":
                return param.kegiatan;
            case "Indikator":
                return param.indikator;
            case "Unit_terkait":
                return param.unit_terkait;
        }
    }
    function getPreviousLevel() {
        return __awaiter(this, void 0, void 0, function () {
            var prevLevel, prevLevelUrl, paramUrl, url, rawData, payload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prevLevel = handleLevelStep(level, "out");
                        prevLevelUrl = handleLevelStep(prevLevel, "out");
                        paramUrl = GetParamFromSlice(prevLevel);
                        url = handleParamUrl(prevLevelUrl, paramUrl);
                        return [4 /*yield*/, fetchAlokasi(url)];
                    case 1:
                        rawData = _a.sent();
                        payload = { level: level, data: rawData, step: "out" };
                        dispatch(setAlokasi(payload));
                        dispatch(setClose());
                        return [2 /*return*/];
                }
            });
        });
    }
    function SuperMenu() {
        return (React.createElement("div", { style: {
                backgroundColor: "#06070f",
                borderBlock: "8px solid",
                borderInline: "2px solid",
                width: "50vw",
                display: "flex",
                height: 100,
                borderRadius: 18,
                position: "inherit",
                alignContent: "center",
                justifySelf: "center",
                bottom: 0,
                opacity: 0.9,
                marginBottom: 40,
                pointerEvents: "all",
            } },
            React.createElement(Button, { ref: previewBox, variant: "contained", sx: {
                    width: "100%",
                    height: "100%",
                    backgroundColor: contentBg,
                    padding: 6,
                    borderRadius: 3,
                    marginInline: 1,
                    fontSize: "1rem",
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    transition: "text-indent .4s ease, border-color .4s ease",
                }, onClick: showDetail },
                React.createElement("div", { id: "longtext", style: { width: "auto" } }, preview)),
            React.createElement(Button, { variant: "contained", sx: {
                    width: "25%",
                    height: "100%",
                    backgroundColor: contentBg,
                    padding: 6,
                    borderRadius: 3,
                    display: level === "Visi" ? "none" : "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    fontSize: "1rem",
                    fontWeight: "700",
                }, onClick: getPreviousLevel }, "Kembali")));
    }
    return (React.createElement("div", { id: "UI" },
        React.createElement(Grid, { container: true, spacing: 0, sx: { opacity: "100%" } },
            React.createElement(Grid, { key: 1, item: true },
                React.createElement(Grid, { key: 1.1, item: true },
                    React.createElement(Slide, { direction: "down", in: isReady, mountOnEnter: true, unmountOnExit: true },
                        React.createElement(Box, { width: "100vw", height: "15vh", display: "flex", justifyContent: "center" },
                            React.createElement("div", { style: {
                                    width: "100%",
                                    paddingBlock: 40,
                                    paddingInline: 50,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    pointerEvents: "all",
                                } },
                                React.createElement(Button, { variant: "outlined", sx: {
                                        paddingInline: 6,
                                        borderRadius: "2.2rem",
                                        border: 2,
                                        fontWeight: 600,
                                        color: "#FFF",
                                    }, onClick: function () {
                                        return (window.location.href = "https://sippp.ut.ac.id");
                                    } }, "SIPPP"),
                                React.createElement(Typography, { variant: "h1", sx: {
                                        fontSize: "1.6rem",
                                        fontWeight: 700,
                                        color: "#dde0eb",
                                        letterSpacing: "0.25rem",
                                        fontStyle: "italic",
                                    } }, level.toLocaleUpperCase()),
                                React.createElement(Button, { variant: "outlined", sx: {
                                        paddingInline: 6,
                                        borderRadius: "2.2rem",
                                        border: 2,
                                        fontWeight: 600,
                                        pointerEvents: "all",
                                        color: "#FFF",
                                    }, startIcon: React.createElement(AccountCircleOutlinedIcon, null) }, "Profile"))))),
                React.createElement(Grid, { key: 1.2, item: true },
                    React.createElement(Slide, { direction: "up", in: isReady, mountOnEnter: true, unmountOnExit: true },
                        React.createElement(Box, { width: "100vw", height: "15vh", position: "absolute", bottom: 0, display: "flex", justifyContent: "center" },
                            React.createElement(SuperMenu, null)))))),
        React.createElement(TemporaryDrawer, null)));
};
export default UID;
//# sourceMappingURL=UID.js.map