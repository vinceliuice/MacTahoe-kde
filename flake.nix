{
  description = "MacTahoe KDE Edition - A Theme for KDE inspired by MacOS Tahoe UI";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-25.05";
    snowfall-lib = {
      url = "github:snowfallorg/lib";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
  outputs = {snowfall-lib, ...} @ inputs: let
    lib = snowfall-lib.mkLib {
      inherit inputs;
      src = ./.;
      snowfall = {
        meta = {
          name = "MacTahoe-KDE";
          title = "MacTahoe KDE Edition";
        };
        namespace = "mactahoe-kde";
      };
    };
  in
    lib.mkFlake {};
}
