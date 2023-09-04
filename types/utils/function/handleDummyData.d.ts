import { AlokasiType } from "../../reducer";
export default function handleDummyData(level: AlokasiType): {
    code: number;
    status: string;
    message: string;
    values: {
        kode_visi: number;
        isi_visi: string;
        total_alokasi: number;
        total_realisasi: number;
        persen_realisasi: number;
        sisa_alokasi: number;
    }[];
    meta: {
        total: string;
        page: string;
        limit: string;
    };
} | {
    code: number;
    status: string;
    message: string;
    values: {
        kode_visi: number;
        kode_misi: number;
        isi_misi: string;
        total_alokasi: number;
        total_realisasi: number;
        persen_realisasi: number;
        sisa_alokasi: number;
    }[];
    meta: {
        total: string;
        page: string;
        limit: string;
    };
} | {
    code: number;
    status: string;
    message: string;
    values: {
        kode_misi: number;
        kode_tujuan: number;
        isi_tujuan: string;
        total_alokasi: number;
        total_realisasi: number;
        persen_realisasi: number;
        sisa_alokasi: number;
    }[];
    meta: {
        total: string;
        page: string;
        limit: string;
    };
} | {
    code: number;
    status: string;
    message: string;
    values: {
        kode_tujuan: number;
        kode_fokus: number;
        isi_fokus: string;
        total_alokasi: number;
        total_realisasi: number;
        persen_realisasi: number;
        sisa_alokasi: number;
    }[];
    meta: {
        total: string;
        page: string;
        limit: string;
    };
} | {
    code: number;
    status: string;
    message: string;
    values: {
        kode_tujuan: number;
        kode_fokus: number;
        kode_komponen_rpjp: string;
        kode_komponen_rpjp_sub: string;
        nama_komponen: string;
        total_alokasi: number;
        total_realisasi: number;
        persen_realisasi: number;
        sisa_alokasi: number;
    }[];
    meta: {
        total: string;
        page: string;
        limit: string;
    };
} | {
    code: number;
    status: string;
    message: string;
    values: {
        kode_komponen_rpjp_sub: string;
        kode_sastra_rpjp: string;
        sastra: string;
        total_alokasi: number;
        total_realisasi: number;
        persen_realisasi: number;
        sisa_alokasi: number;
    }[];
    meta: {
        total: string;
        page: string;
        limit: string;
    };
} | {
    code: number;
    status: string;
    message: string;
    values: {
        kode_sastra_rpjp: string;
        kode_program_rsb: string;
        program_rsb: string;
        total_alokasi: number;
        total_realisasi: number;
        persen_realisasi: number;
        sisa_alokasi: number;
    }[];
    meta: {
        total: string;
        page: string;
        limit: string;
    };
} | {
    code: number;
    status: string;
    message: string;
    values: {
        kode_program_rsb: string;
        kode_kegiatan_rsb: string;
        kegiatan_rsb: string;
        total_alokasi: number;
        total_realisasi: number;
        persen_realisasi: number;
        sisa_alokasi: number;
    }[];
    meta: {
        total: string;
        page: string;
        limit: string;
    };
} | {
    code: number;
    status: string;
    message: string;
    values: {
        kode_kegiatan_rsb: string;
        kode_kegiatan_ut_detail: number;
        kode_indikator_sasaran_rsb: string;
        indikator_pencapaian: string;
        target_capaian: string;
        target_kuantitas: string;
        target_satuan: string;
        kuantitas: string;
        kualitas: string;
        satuan: string;
        total_alokasi: number;
        total_realisasi: number;
        persen_realisasi: number;
        sisa_alokasi: number;
    }[];
    meta: {
        total: string;
        page: string;
        limit: string;
    };
} | {
    code: number;
    status: string;
    message: string;
    values: {
        kode_kegiatan_ut_detail: number;
        id_unit: number;
        kode_unit_baru: string;
        kode_unit: string;
        kode_unit_lama: string;
        nama_unit_baru: string;
        nama_unit: string;
        nama_unit_lama: string;
        total_alokasi: number;
        total_realisasi: number;
        persen_realisasi: number;
        sisa_alokasi: number;
    }[];
    meta: {
        total: string;
        page: string;
        limit: string;
    };
} | undefined;
