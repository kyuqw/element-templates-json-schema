export const template = {
  'name': 'REST Connector',
  'id': 'io.camunda.connectors.RestConnector-s1',
  'description': 'A generic REST service.',
  'appliesTo': [
    'bpmn:ServiceTask'
  ],
  'properties': [
    {
      'type': 'Hidden',
      'value': 'http',
      'binding': {
        'type': 'zeebe:taskDefinition:type'
      }
    },
    {
      'label': 'REST Endpoint URL',
      'description': 'Specify the url of the REST API to talk to.',
      'type': 'String',
      'binding': {
        'type': 'zeebe:taskHeader',
        'key': 'url'
      },
      'constraints': {
        'notEmpty': true,
        'pattern': {
          'value': '^https?://.*',
          'message': 'Must be http(s) URL.'
        }
      }
    },
    {
      'label': 'REST Method',
      'description': 'Specify the HTTP method to use.',
      'type': 'Dropdown',
      'value': 'get',
      'choices': [
        { 'name': 'GET', 'value': 'get' },
        { 'name': 'POST', 'value': 'post' },
        { 'name': 'PATCH', 'value': 'patch' },
        { 'name': 'DELETE', 'value': 'delete' }
      ],
      'binding': {
        'type': 'zeebe:taskHeader',
        'key': 'method'
      }
    },
    {
      'label': 'Request Body',
      'description': 'Data to send to the endpoint.',
      'value': '',
      'type': 'String',
      'optional': true,
      'binding': {
        'type': 'zeebe:input',
        'name': 'body'
      }
    },
    {
      'label': 'Result Variable',
      'description': 'Name of variable to store the response data in.',
      'value': 'response',
      'type': 'String',
      'optional': true,
      'binding': {
        'type': 'zeebe:output',
        'source': '= body'
      }
    }
  ]
};

export const errors = null;