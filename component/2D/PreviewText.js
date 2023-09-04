import React from "react";
var PreviewText = function (props) {
    var name = props.name;
    return (React.createElement("adtFullscreenUi", { name: "Preview Title" },
        React.createElement("rectangle", { key: "preview-text", name: "Preview Text", background: "black", height: "70px", alpha: 0.5, width: "90%", cornerRadius: 20, thickness: 1, linkOffsetY: 30, 
            // left={"35%"}
            top: "45%" },
            React.createElement("textBlock", { fontSize: 30, name: "title", text: name, color: "White" }))));
};
export default PreviewText;
//# sourceMappingURL=PreviewText.js.map