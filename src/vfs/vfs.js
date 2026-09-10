export const root = {
  name: "/",
  type: "directory",
  path: "/",
  children: [
    {
      name: "home",
      type: "directory",
      path: "/home",
      children: [
        {
          name: "user",
          type: "directory",
          path: "/home/user",
          children: [
            {
              name: "Documents",
              type: "directory",
              path: "/home/user/Documents",
              children: [
                {
                  name: "hello",
                  type: "file",
                  extension: ".txt",
                  content: "Lust is must",
                },
                { name: "projects", type: "directory", path: "/home/user/Documents/projects", children: [] },
              ],
            },
            { name: "Pictures", type: "directory",path: "/home/user/Pictures", children: [] },
            { name: "Music", type: "directory", path: "/home/user/Music", children: [] },
          ],
        },
      ],
    },
    {
      name: "system",
      type: "directory",
      path: "/system",
      children: [],
    },
  ],
};
