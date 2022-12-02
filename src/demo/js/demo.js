import '../sass/demo.scss'
import { insertStyle, removeStyle } from '../../js/utils'
import { demoActions, generateActionTable, setCurrentFieldIdValues } from './actionButtons'

const localeSessionKey = 'formBuilder-locale'
const defaultLocale = 'en-US'

const dataTypes = document.querySelectorAll('.demo-dataType')
const dataType = window.sessionStorage.getItem('dataType') || 'json'
const changeDataType = ({ target }) => {
  window.sessionStorage.setItem('dataType', target.value)
  demoActions.resetDemo()
}
for (let i = 0; i < dataTypes.length; i++) {
  if (dataType === dataTypes[i].value) {
    dataTypes[i].checked = true
  }
  dataTypes[i].addEventListener('click', changeDataType, false)
}

const toggleBootStrap = ({ target }) => {
  if (!target.checked) {
    removeStyle('bootstrap')
  } else {
    insertStyle({
      src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
      id: 'bootstrap',
    })
  }
}

document.getElementById('toggleBootstrap').addEventListener('click', toggleBootStrap, false)

jQuery(function ($) {
  const fields = [
    {
      type: 'button',
      subtype: 'submit',
      label: 'submit',
      className: 'form-control create-form-submit',
      name: 'submit',
      customFiedType: 'basic'
    },
    {
      type: 'select',
      label: '自定义下拉框',
      className: 'custom',
      customFiedType: 'custom'
    },
    {
      type: 'checkbox-group',
      label: '自定义多选框',
      className: 'custom',
      customFiedType: 'custom'
    },
    {
      type: 'radio-group',
      label: '自定义单选框',
      className: 'custom',
      customFiedType: 'custom'
    },
    {
      type: 'textarea',
      label: '自定义多行文本',
      className: 'form-control custom',
      rows: 3,
      customFiedType: 'custom'
    },
    {
      type: 'textarea',
      label: 'Message',
      rows: 3,
      required: true,
      className: 'form-control',
      name: 'message',
      customFiedType: 'basic'
    },
    {
      type: 'paragraph',
      subtype: 'p',
      label: 'Description',
      className: 'form-control',
      name: 'paragraph',
      customFiedType: 'basic'
    },
    {
      type: 'text',
      label: '自定义单行文本',
      className: 'form-control custom',
      customFiedType: 'custom'
    },
    {
      type: 'text',
      label: 'Job',
      className: 'form-control',
      name: 'job',
      customFiedType: 'basic'
    },
    {
      type: 'text',
      label: 'Company',
      className: 'form-control',
      name: 'company',
      customFiedType: 'basic'
    },
    {
      type: 'text',
      label: 'Linkedin',
      className: 'form-control',
      name: 'linkedin',
      customFiedType: 'basic'
    },
    {
      type: 'text',
      label: 'Skype',
      className: 'form-control',
      name: 'skype',
      customFiedType: 'basic'
    },
    {
      type: 'text',
      label: 'WhatsApp',
      className: 'form-control',
      name: 'whatsapp',
      customFiedType: 'basic'
    },
    {
      type: 'text',
      label: 'Facebook',
      className: 'form-control',
      name: 'facebook',
      customFiedType: 'basic'
    },
    {
      type: 'text',
      label: 'Address',
      className: 'form-control',
      name: 'address',
      customFiedType: 'basic'
    },
    {
      type: 'text',
      label: 'Country',
      className: 'form-control',
      name: 'country',
      customFiedType: 'basic'
    },
    {
      type: 'text',
      label: 'Email',
      className: 'form-control',
      name: 'email',
      required: true,
      customFiedType: 'basic'
    },
    {
      type: 'text',
      label: 'Tel',
      className: 'form-control',
      name: 'tel',
      customFiedType: 'basic'
    },
    {
      type: 'text',
      label: 'Name',
      className: 'form-control',
      name: 'name',
      required: true,
      customFiedType: 'basic'
    },
    {
      type: 'header',
      subtype: 'h2',
      label: '联系我们',
      name: 'header',
      customFiedType: 'basic'
    },
    {
      label: 'Star Rating',
      attrs: {
        type: 'starRating',
      },
      icon: '🌟',
    },
  ]

  const replaceFields = [
    {
      type: 'textarea',
      subtype: 'tinymce',
      datatype: 'custom-tinymce',
      label: 'tinyMCE',
      required: true,
    },
  ]

  const actionButtons = [
    {
      id: 'smile',
      className: 'btn btn-success',
      label: '😁',
      type: 'button',
      events: {
        click: () => {
          // @todo toggle options editor instead
          alert('😁😁😁 !SMILE! 😁😁😁')
        },
      },
    },
    'save',
  ]

  const templates = {
    starRating: function (fieldData) {
      return {
        field: '<span id="' + fieldData.name + '">',
        onRender: () => {
          $(document.getElementById(fieldData.name)).rateYo({ rating: 3.6 })
        },
      }
    },
  }

  const inputSets = [
    {
      label: 'User Details',
      icon: '👨',
      name: 'user-details', // optional
      showHeader: true, // optional
      customFiedType: 'custom',
      fields: [
        {
          type: 'text',
          label: 'First Name',
          className: 'form-control',
        },
        {
          type: 'select',
          label: 'Profession',
          className: 'form-control',
          values: [
            {
              label: 'Street Sweeper',
              value: 'option-2',
              selected: false,
            },
            {
              label: 'Brain Surgeon',
              value: 'option-3',
              selected: false,
            },
          ],
        },
        {
          type: 'textarea',
          label: 'Short Bio:',
          className: 'form-control',
        },
      ],
    },
    {
      label: 'User Agreement',
      fields: [
        {
          type: 'header',
          subtype: 'h3',
          label: 'Terms & Conditions',
          className: 'header',
        },
        {
          type: 'paragraph',
          label:
            'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.',
        },
        {
          type: 'paragraph',
          label:
            'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.',
        },
        {
          type: 'checkbox',
          label: 'Do you agree to the terms and conditions?',
        },
      ],
    },
  ]

  const typeUserDisabledAttrs = {
    autocomplete: ['access'],
  }

  const typeUserAttrs = {
    text: {
      shape: {
        label: 'Class',
        multiple: true,
        options: {
          'red form-control': 'Red',
          'green form-control': 'Green',
          'blue form-control': 'Blue',
        },
        style: 'border: 1px solid red',
      },
      readonly: {
        label: 'readonly',
        value: false,
      },
    },
    number: {
      volume: {
        label: 'Volume Level',
        value: 1,
        max: 11,
      },
    },
    'checkbox-group': {
      'custom-group': {
        customInput: {
          label: 'Custom Text Field',
          value: 'This field is added only to checkbox with specific subtype',
          type: 'text',
        },
      },
    },
  }

  // test disabledAttrs
  const disabledAttrs = ['placeholder', 'name']

  const fbOptions = {
    defaultFields: [
      {
        className: 'form-control',
        label: 'Default Field',
        placeholder: 'Enter your default field value',
        name: 'default-field-1',
        type: 'text',
      },
    ],
    persistDefaultFields: true,
    disabledSubtypes: {
      text: ['password'],
    },
    // disableHTMLLabels: true,
    disabledAttrs,
    // allowStageSort: false,
    dataType,
    subtypes: {
      text: ['datetime-local'],
      'checkbox-group': ['custom-group'],
    },
    onSave: toggleEdit,
    onAddField: fieldId => {
      setCurrentFieldIdValues(fieldId)
    },
    onAddOption: (optionTemplate, { index }) => {
      optionTemplate.label = optionTemplate.label || `Option ${index + 1}`
      optionTemplate.value = optionTemplate.value || `option-${index + 1}`

      return optionTemplate
    },
    onClearAll: () => window.sessionStorage.removeItem('formData'),
    stickyControls: {
      enable: true,
    },
    sortableControls: true,
    fields: fields,
    templates: templates,
    inputSets: inputSets,
    typeUserDisabledAttrs: typeUserDisabledAttrs,
    typeUserAttrs: typeUserAttrs,
    disableInjectedStyle: false,
    actionButtons: actionButtons,
    disableFields: ['autocomplete', 'custom-tinymce'],
    replaceFields: replaceFields,
    disabledFieldButtons: {
      text: ['copy'],
    },
    controlPosition: 'right', // left|right,
    i18n: {
      override: {
        [defaultLocale]: {
          number: 'Big Numbers',
        },
      },
    },
    scrollToFieldOnAdd: false,
  }
  const formData = window.sessionStorage.getItem('formData')
  let editing = true

  if (formData) {
    fbOptions.formData = formData
  }

  /**
   * Toggles the edit mode for the demo
   * @return {Boolean} editMode
   */
  function toggleEdit() {
    document.body.classList.toggle('form-rendered', editing)
    if (!editing) {
      $('.build-wrap').formBuilder('setData', $('.render-wrap').formRender('userData'))
    } else {
      const formRenderData = $('.build-wrap').formBuilder('getData', dataType)
      $('.render-wrap').formRender({
        formData: formRenderData,
        templates: templates,
        dataType,
      })
      window.sessionStorage.setItem('formData', formRenderData)
    }
    return (editing = !editing)
  }

  const formBuilder = $('.build-wrap').formBuilder(fbOptions)

  const fbPromise = formBuilder.promise

  fbPromise.then(function (fb) {
    document.querySelectorAll('.editForm').forEach(element => element.addEventListener('click', toggleEdit), false)
    const langSelect = document.getElementById('setLanguage')
    const savedLocale = window.sessionStorage.getItem(localeSessionKey) || defaultLocale

    langSelect.value = savedLocale
    fb.actions.setLang(savedLocale)

    const columns = ['action', 'description', 'demo']
    const actions = {
      getFieldTypes: 'Get the registered field types for the form.',
      showData: 'Trigger a modal to appear that shows the current formData value',
      clearFields: 'Removes all the fields from the template editor',
      getData: 'Read the current formData',
      getXML: 'Get the current formData in XML format',
      getJSON: 'Get the current formData in JSON format',
      getJS: 'Get the current formData in JS object format',
      setData: 'set the current formData value for the editor',
      save: 'call save from the api',
      toggleAllEdit: 'toggle the edit mode for all fields',
      toggleEdit: 'toggle a specific field edit mode by index or id',
      addField: 'programmatically add a field to the template editor',
      removeField: 'remove a field by its index or id from the editor stage',
      resetDemo: 'reset the demo to default state',
    }
    const demoActions = {
      loadUserForm: 'Load user form',
      showUserData: 'Show user form',
      renderUserForm: 'Render user form',
      getHTML: 'Get HTML',
      clearUserForm: 'Clear user form',
      testSubmit: 'Test Submit',
      setData: 'Set template data',
      render: 'Render data that was set',
    }

    const actionApi = document.getElementById('action-api')
    actionApi.appendChild(generateActionTable(actions, columns))
    const demoApi = document.getElementById('demo-api')
    demoApi.appendChild(generateActionTable(demoActions, columns))

    if (formData && formData !== '[]') {
      const setFormDataInputValue = document.getElementById('setData-value')
      if (setFormDataInputValue) {
        setFormDataInputValue.value = window.JSON.stringify(JSON.parse(formData), null, '  ')
      }
    }

    langSelect.addEventListener(
      'change',
      ({ target: { value: lang } }) => {
        window.sessionStorage.setItem(localeSessionKey, lang)
        fb.actions.setLang(lang)
      },
      false,
    )
  })
})
