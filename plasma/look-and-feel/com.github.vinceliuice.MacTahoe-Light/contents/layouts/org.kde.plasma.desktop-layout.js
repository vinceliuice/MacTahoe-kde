var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "55",
                            "popupHeight": "836",
                            "popupWidth": "836"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "1110",
                            "DialogWidth": "1480"
                        },
                        "/General": {
                            "showSecondHand": "true"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.analogclock",
                    "title": "模拟时钟"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-3840x2160": "Applet-56:2848,96,736,608,0;",
                    "ItemGeometriesHorizontal": "Applet-56:2848,96,736,608,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "1490",
                    "DialogWidth": "2504"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "1381",
                    "ToolBoxButtonY": "58"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/usr/share/wallpapers/Next/",
                    "PreviewImage": "",
                    "SlidePaths": "$HOME/.local/share/wallpapers/,/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "1101",
                            "popupWidth": "1362"
                        },
                        "/General": {
                            "favorites": "preferred://browser,org.kde.dolphin.desktop,org.kde.elisa.desktop,org.kde.konsole.desktop,org.manjaro.pamac.manager.desktop,systemsettings.desktop",
                            "favoritesPortedToKAstats": "true"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "450",
                            "popupWidth": "396"
                        },
                        "/Appearance": {
                            "customSpacing": "7.861163227016885",
                            "fixedFont": "true",
                            "fontSize": "28",
                            "showSeparator": "false",
                            "use24hFormat": "2"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "1110",
                            "DialogWidth": "1480"
                        }
                    },
                    "plugin": "org.kde.plasma.betterinlineclock"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.milou"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "175",
                    "DialogWidth": "3840"
                }
            },
            "height": 1.45,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 96,
            "minimumLength": 96,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
