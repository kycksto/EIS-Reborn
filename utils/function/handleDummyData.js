import dummyData from "../dummy/dummy.json";
export default function handleDummyData(level) {
    switch (level) {
        case "Visi":
            return dummyData.visi;
        case "Misi":
            return dummyData.misi;
        case "Tujuan":
            return dummyData.tujuan;
        case "Fokus":
            return dummyData.fokus;
        case "Komponen":
            return dummyData.komponen;
        case "Sastra":
            return dummyData.sastra;
        case "Program":
            return dummyData.program;
        case "Kegiatan":
            return dummyData.kegiatan;
        case "Indikator":
            return dummyData.indikator;
        case "Unit_terkait":
            return dummyData.unit_terkait;
    }
}
//# sourceMappingURL=handleDummyData.js.map