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
          message: r.data.message,
          namespaces: r.data.namespaces,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not store this panel now' :
          '',
        })),
  update: async (id, name) =>
    api
        .put(`panels/${id}`, {
          name,
        })
        .then((r) => ({
          ok: true,
          message: r.data.message,
          namespaces: r.data.namespaces,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not store this panel now' :
          '',
        })),
  find: async (id) =>
    api
        .get(`panels/${id}`)
        .then((r) => ({
          ok: true,
          panel: r.data.panel,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not store retrieve this panel now' :
          '',
        })),
  delete: async (id) =>
    api
        .delete(`panels/${id}`)
        .then((r) => ({
          ok: true,
          message: r.data.message,
          namespaces: r.data.namespaces,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not store retrieve this panel now' :
          '',
        })),
};
