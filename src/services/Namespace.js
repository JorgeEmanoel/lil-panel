import api from './api';

export default {
  store: async (name, visibility) =>
    api
        .post('namespaces', {
          name,
          visibility,
        })
        .then((r) => ({
          ok: true,
          namespaces: r.data.namespaces,
          message: r.data.message,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not store a namespace now' :
          '',
        })),
  update: async (id, name, visibility) =>
    api
        .put(`namespaces/${id}`, {
          name,
          visibility,
        })
        .then((r) => ({
          ok: true,
          namespaces: r.data.namespaces,
          message: r.data.message,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not update this namespace now' :
          '',
        })),
  delete: async (id) =>
    api
        .delete(`namespaces/${id}`)
        .then((r) => ({
          ok: true,
          namespaces: r.data.namespaces,
          message: r.data.message,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not delete this namespace now' :
          '',
        })),
  bySlug: async (slug) =>
    api
        .get(`namespaces/${slug}`)
        .then((r) => ({
          ok: true,
          namespace: r.data.namespace,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not retrieve this namespace now' :
          '',
        })),
};
