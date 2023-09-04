export default function handleTransformData(level, data) {
    var tahun = new Date().getFullYear();
    switch (level) {
        case "Misi":
            return data.map(function (e) {
                return {
                    name: e.isi_misi,
                    alokasi: e.total_alokasi,
                    realisasi: e.total_realisasi,
                    persen: e.persen_realisasi,
                    sisa: e.sisa_alokasi,
                    kode_tahun: tahun,
                    kode_id1: e.kode_misi,
                    kode_id2: e.kode_misi,
                };
            });
        case "Tujuan":
            return data.map(function (e) {
                return {
                    name: e.isi_tujuan,
                    alokasi: e.total_alokasi,
                    realisasi: e.total_realisasi,
                    persen: e.persen_realisasi,
                    sisa: e.sisa_alokasi,
                    kode_tahun: tahun,
                    kode_id1: e.kode_tujuan,
                    kode_id2: e.kode_tujuan,
                };
            });
        case "Fokus":
            return data.map(function (e) {
                return {
                    name: e.isi_fokus,
                    alokasi: e.total_alokasi,
                    realisasi: e.total_realisasi,
                    persen: e.persen_realisasi,
                    sisa: e.sisa_alokasi,
                    kode_tahun: tahun,
                    kode_id1: e.kode_tujuan,
                    kode_id2: e.kode_fokus,
                };
            });
        case "Komponen":
            return data.map(function (e) {
                return {
                    name: e.nama_komponen,
                    alokasi: e.total_alokasi,
                    realisasi: e.total_realisasi,
                    persen: e.persen_realisasi,
                    sisa: e.sisa_alokasi,
                    kode_tahun: tahun,
                    kode_id1: e.kode_komponen_rpjp_sub,
                    kode_id2: e.kode_komponen_rpjp_sub,
                };
            });
        case "Sastra":
            return data.map(function (e) {
                return {
                    name: e.sastra,
                    alokasi: e.total_alokasi,
                    realisasi: e.total_realisasi,
                    persen: e.persen_realisasi,
                    sisa: e.sisa_alokasi,
                    kode_tahun: tahun,
                    kode_id1: e.kode_sastra_rpjp,
                    kode_id2: e.kode_sastra_rpjp,
                };
            });
        case "Program":
            return data.map(function (e) {
                return {
                    name: e.program_rsb,
                    alokasi: e.total_alokasi,
                    realisasi: e.total_realisasi,
                    persen: e.persen_realisasi,
                    sisa: e.sisa_alokasi,
                    kode_tahun: tahun,
                    kode_id1: e.kode_program_rsb,
                    kode_id2: e.kode_program_rsb,
                };
            });
        case "Kegiatan":
            return data.map(function (e) {
                return {
                    name: e.kegiatan_rsb,
                    alokasi: e.total_alokasi,
                    realisasi: e.total_realisasi,
                    persen: e.persen_realisasi,
                    sisa: e.sisa_alokasi,
                    kode_tahun: tahun,
                    kode_id1: e.kode_kegiatan_rsb,
                    kode_id2: e.kode_kegiatan_rsb,
                };
            });
        case "Indikator":
            return data.map(function (e) {
                return {
                    name: e.indikator_pencapaian,
                    alokasi: e.total_alokasi,
                    realisasi: e.total_realisasi,
                    persen: e.persen_realisasi,
                    sisa: e.sisa_alokasi,
                    kode_tahun: tahun,
                    kode_id1: e.kode_kegiatan_ut_detail,
                    kode_id2: e.kode_kegiatan_ut_detail,
                };
            });
        case "Unit_terkait":
            return data.map(function (e) {
                return {
                    name: e.kode_unit,
                    alokasi: e.total_alokasi,
                    realisasi: e.total_realisasi,
                    persen: e.persen_realisasi,
                    sisa: e.sisa_alokasi,
                    kode_tahun: tahun,
                    kode_id1: 0,
                    kode_id2: 0,
                };
            });
        default:
            return data.map(function (e) {
                return {
                    name: e.isi_visi,
                    alokasi: e.total_alokasi,
                    realisasi: e.total_realisasi,
                    persen: e.persen_realisasi,
                    sisa: e.sisa_alokasi,
                    kode_tahun: tahun,
                    kode_id1: e.kode_visi,
                    kode_id2: e.kode_visi,
                };
            });
    }
}
//# sourceMappingURL=handleTranformData.js.map