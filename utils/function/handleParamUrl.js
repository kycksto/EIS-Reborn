import { BASE_REKAPITULASI, URL_BASE } from "../../config/api";
export default function handleParamUrl(level, param) {
    switch (level) {
        case "Visi":
            return (URL_BASE +
                BASE_REKAPITULASI.MISI +
                param.kode_tahun +
                "/" +
                param.kode_visi);
        case "Misi":
            return (URL_BASE +
                BASE_REKAPITULASI.TUJUAN +
                param.kode_tahun +
                "/" +
                param.kode_misi);
        case "Tujuan":
            return (URL_BASE +
                BASE_REKAPITULASI.FOKUS +
                param.kode_tahun +
                "/" +
                param.kode_tujuan);
        case "Fokus":
            return (URL_BASE +
                BASE_REKAPITULASI.KOMPONEN +
                param.kode_tahun +
                "/" +
                param.kode_tujuan +
                "/" +
                param.kode_fokus);
        case "Komponen":
            return (URL_BASE +
                BASE_REKAPITULASI.SASTRA +
                param.kode_tahun +
                "/" +
                param.kode_komponen_rpjp_sub);
        case "Sastra":
            return (URL_BASE +
                BASE_REKAPITULASI.PROGRAM +
                param.kode_tahun +
                "/" +
                param.kode_sastra_rpjp);
        case "Program":
            return (URL_BASE +
                BASE_REKAPITULASI.KEGIATAN +
                param.kode_tahun +
                "/" +
                param.kode_program_rsb);
        case "Kegiatan":
            return (URL_BASE +
                BASE_REKAPITULASI.INDIKATOR +
                param.kode_tahun +
                "/" +
                param.kode_kegiatan_rsb);
        case "Indikator":
            return (URL_BASE +
                BASE_REKAPITULASI.UNIT_TERKAIT +
                param.kode_tahun +
                "/" +
                param.kode_kegiatan_ut_detail);
        default:
            return URL_BASE + BASE_REKAPITULASI.VISI + param.kode_tahun;
    }
}
//# sourceMappingURL=handleParamUrl.js.map