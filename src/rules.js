const rules = {
  user: {
    static: [],
  },

  admin: {
    static: [
      'dashboard:view',
      'contacts-page:deleteContact',
      'empresas-page:deleteEmpresa',
    ],
  },
}

export default rules
