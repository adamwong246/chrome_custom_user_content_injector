// SAMPLE
this.manifest = {
    "name": "git_styler",
    "icon": "icon.png",
    "settings": [

        {
            "tab": i18n.get("git-settings"),
            "name": "repo",
            "type": "text",
            "label": i18n.get("repo"),
            "text": i18n.get("x-characters")
        },

        {
            "tab": "Cache",
            "group": "Sound",
            "name": "noti_volume",
            "type": "slider",
            "label": "Notification volume:",
            "max": 1,
            "min": 0,
            "step": 0.01,
            "display": true,
            "displayModifier": function (value) {
                return (value * 100).floor() + "%";
            }
        },
        
        {
            "tab": "Details",
            "group": "Sound",
            "name": "sound_volume",
            "type": "slider",
            "label": "Sound volume:",
            "max": 100,
            "min": 0,
            "step": 1,
            "display": true,
            "displayModifier": function (value) {
                return value + "%";
            }
        },
        
        {
            "tab": "Details",
            "group": "Food",
            "name": "myPopupButton",
            "type": "popupButton",
            "label": "Soup 1 should be:",
            "options": {
                "groups": [
                    "Hot", "Cold",
                ],
                "values": [
                    {
                        "value": "hot",
                        "text": "Very hot",
                        "group": "Hot",
                    },
                    {
                        "value": "Medium",
                        "group": 1,
                    },
                    {
                        "value": "Cold",
                        "group": 2,
                    },
                    ["Non-existing"]
                ],
            },
        },
        {
            "tab": "Details",
            "group": "Food",
            "name": "myListBox",
            "type": "listBox",
            "label": "Soup 2 should be:",
            "options": [
                ["hot", "Hot and yummy"],
                ["cold"]
            ]
        },
        {
            "tab": "Details",
            "group": "Food",
            "name": "myRadioButtons",
            "type": "radioButtons",
            "label": "Soup 3 should be:",
            "options": [
                ["hot", "Hot and yummy"],
                ["cold"]
            ]
        }
    ],
    "alignment": [
        [
            "repo"
        ],
        [
            "noti_volume",
            "sound_volume"
        ]
    ]
};