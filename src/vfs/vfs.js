export const root = {
  name: "/",
  type: "directory",
  children: [
    {
      name: "home",
      type: "directory",
      children: [
        {
          name: "user",
          type: "directory",
          children: [
            {
              name: "Documents",
              type: "directory",
              children: [
                {
                  name: "hello",
                  type: "file",
                  extension: ".txt",
                  content: "Lust is must",
                },
                { name: "projects", type: "directory", children: [] },
              ],
            },
            { name: "Pictures", type: "directory", children: [] },
            { name: "Music", type: "directory", children: [] },
          ],
        },
      ],
    },
    {
      name: "system",
      type: "directory",
      children: [],
    },
  ],
};
