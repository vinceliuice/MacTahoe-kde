var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "85",
                            "popupHeight": "400",
                            "popupWidth": "400"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
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
                    "title": "Analog Clock"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "Applet-113:1599.98,111.984,224,208,0;",
                    "ItemGeometries-2327x1309": "Applet-49:80,304,288,496,0;Applet-51:576,144,368,240,0;Applet-52:416,464,368,368,0;Applet-48:1088,144,384,384,0;Applet-50:1616,128,272,272,0;",
                    "ItemGeometriesHorizontal": "Applet-113:1599.98,111.984,224,208,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/General": {
                    "positions": "{\"1920x1080\":[],\"2327x1309\":[]}"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "$HOME/.local/share/wallpapers/MacTahoe/",
                    "SlidePaths": "$HOME/.local/share/wallpapers/\\,/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "highlightWindows": "true",
                            "iconSpacing": "0",
                            "launchers": "applications:systemsettings.desktop,applications:org.kde.dolphin.desktop,applications:org.mozilla.firefox.desktop,applications:org.kde.discover.desktop,applications:org.inkscape.Inkscape.desktop,applications:github-desktop.desktop,applications:code.desktop,applications:lx-music-desktop.desktop,applications:org.kde.plasma-systemmonitor.desktop,applications:org.gnome.Nautilus.desktop,applications:google-chrome.desktop"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 4.666666666666667,
            "hiding": "dodgewindows",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        },
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "516",
                            "popupWidth": "663"
                        },
                        "/General": {
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
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "450",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "dateDisplayFormat": "BesideTime",
                            "dateFormat": "isoDate",
                            "fontWeight": "400"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "65",
                            "popupHeight": "35",
                            "popupWidth": "630"
                        }
                    },
                    "plugin": "org.kde.milou"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 2.2222222222222223,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
