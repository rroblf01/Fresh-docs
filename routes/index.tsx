export const handler = {
  async GET() {
    return new Response("", {
      status: 307,
      headers: { location: "/docs/introduction" },
    });
  },
};
