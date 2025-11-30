{
  lib,
  stdenv,
}:
stdenv.mkDerivation {
  pname = "mactahoe-kde";
  version = "latest";

  src = lib.sources.cleanSourceWith {
    src = lib.sources.cleanSource ../../.;
    filter = name: _type: let baseName = baseNameOf (toString name); in !(lib.strings.hasSuffix ".nix" baseName);
  };

  buildPhase = ''
    runHook preBuild

    # Make directories
    mkdir -p build/share/color-schemes
    mkdir -p build/share/plasma/desktoptheme
    mkdir -p build/share/plasma/layout-templates
    mkdir -p build/share/plasma/look-and-feel
    mkdir -p build/share/Kvantum
    mkdir -p build/share/wallpapers

    # Kvantum
    cp -r $src/Kvantum/MacTahoe build/share/Kvantum/

    # Colorschemes
    cp $src/color-schemes/MacTahoeLight.colors build/share/color-schemes/
    cp $src/color-schemes/MacTahoeDark.colors build/share/color-schemes/

    # Copy desktop themes (Light & Dark) and icons
    mkdir -p build/share/plasma/desktoptheme/MacTahoe-Light
    mkdir -p build/share/plasma/desktoptheme/MacTahoe-Dark
    cp -r $src/plasma/desktoptheme/MacTahoe-Light/* build/share/plasma/desktoptheme/MacTahoe-Light/
    cp -r $src/plasma/desktoptheme/MacTahoe-Dark/* build/share/plasma/desktoptheme/MacTahoe-Dark/
    mkdir -p build/share/plasma/desktoptheme/MacTahoe-Light/icons
    mkdir -p build/share/plasma/desktoptheme/MacTahoe-Dark/icons
    cp -r $src/plasma/desktoptheme/icons/* build/share/plasma/desktoptheme/MacTahoe-Light/icons/
    cp -r $src/plasma/desktoptheme/icons/* build/share/plasma/desktoptheme/MacTahoe-Dark/icons/

    # Copy plasma layout templates
    cp -r $src/plasma/layout-templates/org.github.desktop.MacOS* build/share/plasma/layout-templates/

    # Copy plasma look-and-feel packages
    cp -r $src/plasma/look-and-feel/com.github.vinceliuice.MacTahoe-Light build/share/plasma/look-and-feel/
    cp -r $src/plasma/look-and-feel/com.github.vinceliuice.MacTahoe-Dark build/share/plasma/look-and-feel/

    # Copy wallpapers (base and variants)
    cp -r $src/wallpapers/MacTahoe build/share/wallpapers/
    cp -r $src/wallpapers/MacTahoe-Light build/share/wallpapers/
    cp -r $src/wallpapers/MacTahoe-Dark build/share/wallpapers/

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    mkdir -p $out/share

    cp -r build/share/* $out/share/

    runHook postInstall
  '';

  # some variables to help with integration in other Nix setups
  passthru = {
    theme = {
      dark = "MacTahoe-Dark";
      light = "MacTahoe-Light";
    };
    lookAndFeel = {
      dark = "com.github.vinceliuice.MacTahoe-Dark";
      light = "com.github.vinceliuice.MacTahoe-Light";
    };
    kvantum = {
      dark = "MacTahoeDark";
      light = "MacTahoe";
    };
    colorScheme = {
      dark = "MacTahoeDark";
      light = "MacTahoeLight";
    };
    aurorae = {
      lib = "org.kde.kwin.aurorae";
      dark = "MacTahoe-Dark";
      light = "MacTahoe-Light";
      large = {
        dark = "MacTahoe-Dark-1.25x";
        light = "MacTahoe-Light-1.25x";
      };
      xlarge = {
        dark = "MacTahoe-Dark-1.5x";
        light = "MacTahoe-Light-1.5x";
      };
    };
  };

  meta = with lib; {
    description = "MacTahoe KDE Plasma theme";
    homepage = "https://github.com/vinceliuice/MacTahoe-kde";
    license = licenses.gpl3Only;
    platforms = platforms.linux;
    maintainers = [];
  };
}
