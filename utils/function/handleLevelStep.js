export default function handleLevelStep(level, step) {
    var allAlokasi = [
        "Base",
        "Visi",
        "Misi",
        "Tujuan",
        "Fokus",
        "Komponen",
        "Sastra",
        "Program",
        "Kegiatan",
        "Indikator",
        "Unit_terkait",
    ];
    var index = allAlokasi.findIndex(function (e) { return e === level; });
    if (step === "in") {
        return allAlokasi[index + 1];
    }
    else {
        if (index === 0)
            return allAlokasi[0];
        return allAlokasi[index - 1];
    }
}
//# sourceMappingURL=handleLevelStep.js.map