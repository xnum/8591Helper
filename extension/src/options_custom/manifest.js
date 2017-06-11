// SAMPLE
this.manifest = {
    "name": "8591小幫手 選項設定",
    "icon": "icon.png",
    "settings": [
        {
            "tab": "顯示",
            "group": "賣場列表",
            "name": "hideTransTime",
            "type": "checkbox",
            "label": "隱藏交貨時間"
        },
        {
            "tab": "顯示",
            "group": "賣場列表",
            "name": "hideCategories",
            "type": "checkbox",
            "label": "隱藏賣場分類"
        },
        {
            "tab": "顯示",
            "group": "賣場列表",
            "name": "completeHide",
            "type": "checkbox",
            "label": "完全隱藏黑名單賣場"
        },
        {
            "tab": "顯示",
            "group": "賣場列表",
            "name": "opacityVal",
            "label": "黑名單賣場透明度 (不勾選完全隱藏才有效果)",
            "type": "slider",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function (value) {
                return value;
            }
        },
        {
            "tab": "黑名單",
            "group": "黑名單",
            "name": "blackKeyword",
            "label": "關鍵字 (每行一個)",
            "type": "textarea",
        },
        {
            "tab": "黑名單",
            "group": "黑名單",
            "name": "blackUser",
            "label": "賣家編號 (每行一個)",
            "type": "textarea",
        }
    ],
};
