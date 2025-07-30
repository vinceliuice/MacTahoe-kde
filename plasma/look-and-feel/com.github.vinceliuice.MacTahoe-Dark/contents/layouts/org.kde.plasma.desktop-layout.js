var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.barchart",
                            "title": "单个核心使用率"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/SensorColors": {
                            "cpu/cpu.*/usage": "49,91,239",
                            "cpu/cpu0/usage": "49,91,239",
                            "cpu/cpu1/usage": "102,49,239",
                            "cpu/cpu10/usage": "49,239,197",
                            "cpu/cpu11/usage": "49,186,239",
                            "cpu/cpu2/usage": "197,49,239",
                            "cpu/cpu3/usage": "239,49,186",
                            "cpu/cpu4/usage": "239,49,91",
                            "cpu/cpu5/usage": "239,102,49",
                            "cpu/cpu6/usage": "239,197,49",
                            "cpu/cpu7/usage": "186,239,49",
                            "cpu/cpu8/usage": "91,239,49",
                            "cpu/cpu9/usage": "49,239,102"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"cpu/cpu.*/usage\"]",
                            "totalSensors": "[\"cpu/all/usage\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor.cpucore",
                    "title": "单个核心使用率"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "60",
                            "popupHeight": "400",
                            "popupWidth": "560"
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
                },
                {
                    "config": {
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.mediacontroller",
                    "title": "Media Player"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1920x1080": "Applet-52:96,48,368,368,0;Applet-49:96,464,288,480,0;Applet-50:1632,64,240,224,0;",
                    "ItemGeometries-2327x1309": "Applet-49:80,304,288,496,0;Applet-51:576,144,368,240,0;Applet-52:416,464,368,368,0;Applet-48:1088,144,384,384,0;Applet-50:1616,128,272,272,0;",
                    "ItemGeometriesHorizontal": "Applet-52:96,48,368,368,0;Applet-49:96,464,288,480,0;Applet-50:1632,64,240,224,0;",
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
                    "Image": "/home/vince/Documents/GitHub/MacTahoe-gtk-theme/wallpaper/MacTahoe-night.jpeg",
                    "SlidePaths": "/home/vince/.local/share/wallpapers/,/usr/share/wallpapers/"
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
                            "launchers": "applications:systemsettings.desktop,applications:org.kde.discover.desktop,applications:github-desktop.desktop,applications:Clash Verge.desktop,applications:figma-linux.desktop,applications:lx-music-desktop.desktop,applications:org.gnome.Nautilus.desktop,applications:org.inkscape.Inkscape.desktop,applications:nemo.desktop,applications:org.gnome.Geary.desktop,applications:code.desktop,applications:nl.hjdskes.gcolor3.desktop,applications:gnome-system-monitor-kde.desktop"
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
                            "popupHeight": "517",
                            "popupWidth": "673"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
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
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "450",
                            "popupWidth": "560"
                        },
                        "/Appearance": {
                            "dateDisplayFormat": "BesideTime"
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
                            "PreloadWeight": "60",
                            "popupHeight": "35",
                            "popupWidth": "630"
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
