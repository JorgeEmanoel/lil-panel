import api from './api';

export default {
  store: async (name, namespaceId) =>
    api
        .post('panels', {
          name,
          namespaceId,
        })
        .then((r) => ({
          ok: true,
          namespaces: r.data.namespaces,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not store this panel now' :
          '',
        })),
};
