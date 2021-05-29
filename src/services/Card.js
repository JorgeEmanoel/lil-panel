import api from './api';

export default {
  store: async (
      {name, textColor, backgroundColor, backgroundUrl, url},
      panelId,
  ) =>
    api
        .post('cards', {
          name,
          backgroundColor,
          backgroundUrl,
          textColor,
          url,
          panelId,
        })
        .then((r) => ({
          ok: true,
          namespaces: r.data.namespaces,
          message: r.data.message,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not store this card now' :
          '',
        })),
  update: async (
      id,
      card,
  ) =>
    api
        .put(`cards/${id}`, card)
        .then((r) => ({
          ok: true,
          message: r.data.message,
          namespaces: r.data.namespaces,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not update this card now' :
          '',
        })),
  delete: async (id) =>
    api
        .delete(`cards/${id}`)
        .then((r) => ({
          ok: true,
          message: r.data.message,
          namespaces: r.data.namespaces,
        }))
        .catch((e) => ({
          ok: false,
          message: e.response ?
          e.response.data.message || 'Can not delete this card now' :
          '',
        })),
};
