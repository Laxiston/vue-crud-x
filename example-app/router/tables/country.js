module.exports = {
  db: 'mongo',
  name: 'country',
  create: true,
  update: true,
  delete: true,
  import: true,
  export: true,
  multiSelect: true,
  cols: {
    _id: {
      label: 'ID',
      auto: 'pk',
      hide: true,
      add: 'hide',
      edit: 'readonly'
    },
    code: {
      label: 'Code',
      type: 'string',
      // OLD
      input: '',
      // NEW
      ui: {
        tag: 'input'
      }
    },
    name: {
      label: 'Name',
      type: 'string',
      // OLD
      input: '',
      // NEW
      ui: {
        tag: 'input'
      }
    }
  },
  pk: '',
  multiKey: [],
  required: [],
  auto: [],
  nonAuto: []
}