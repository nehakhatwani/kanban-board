export const mockApi = {
  fetchTasks: () =>
    Promise.resolve([
      { id: 1, title: "Sample Task" }
    ]),
};
