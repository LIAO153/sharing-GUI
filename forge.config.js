module.exports = {
  packagerConfig: {
    appVersion: "2.1.0",
    name: "Sharing GUI",
    appCopyright: "ljy(liaojyxiaoxin@outlook.com)",
    icon: "./assets/logo-bg-512x512",
    win32metadata: {
      ProductName: "Sharing GUI",
      CompanyName: "ljy",
      FileDescription: "Sharing GUI for windows",
    },
    asar: true,
    ignore: [
      "\/sharing\-pkg\/easy\-sharing\-linux",
      "\/sharing\-pkg\/easy\-sharing\-win\.exe",
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          icon: "/assets/logo-bg-512x512",
        },
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
