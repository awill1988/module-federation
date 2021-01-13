export const stubSession = (
  username = "Charles Correll",
  id = "f6c94420-8542-4b4a-9f13-932f76af98c6",
  claims = {
    sites: {
      "00000000-0000-0000-0000-000000000001": ["user"],
    },
    roles: [],
  },
) => {
  window.localStorage.setItem(
    "session",
    JSON.stringify({
      user: {
        username: username,
        id: id,
      },
      auth: {
        expiration: Date.now() / 1000 + 3600,
        token: {
          id: "dummy-id-token-data",
          access: "dummy-access-token-data",
          refresh: "dummy-refresh-token-data",
        },
      },
      claims: claims,
    }),
  );
  window.localStorage.setItem(
    "clientSiteId",
    "00000000-0000-0000-0000-000000000001",
  );
};
