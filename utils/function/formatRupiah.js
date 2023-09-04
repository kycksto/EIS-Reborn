export var formatRupiah = function (money) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(money);
};
//# sourceMappingURL=formatRupiah.js.map